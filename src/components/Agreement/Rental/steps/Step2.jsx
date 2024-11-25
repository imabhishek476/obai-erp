// import { createRentalAgreement } from "@/Apis/legalAgreement";
import { createRentalAgreement } from "../../../../Apis/legalAgreement";
import { Button } from "@nextui-org/react";
import Cookies from "js-cookie";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, FieldArray } from "formik";

import InputAccordian from "./InputAccordian";

const Step2 = ({
  agreementResponse,
  setAgreementResponse,
  handleNext,
  setCompleted,
  setPreviewData,
  handleBack,
}) => {
  const validation = Yup.object().shape({
    owners: Yup.array()
      .of(
        Yup.object().shape({
          fullname: Yup.string().required("Fullname is required"), // these constraints take precedence
          phone: Yup.string()
            .min(10, "Phone Number Must be of 10 digits")
            .max(10, "Phone Number Must be of 10 digits")
            .required("Phone number is required")
            .matches(
              /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/,
              "Enter Valid Phone Number"
            )
            .test(
              "same phone number test",
              "Phone number of Owner and Tenant can't be same",
              function (value) {
                let check = false;
                if (agreementResponse?.tenantDetails) {
                  check = agreementResponse?.tenantDetails?.some((tenant) => {
                    return tenant?.phone === value;
                  });
                } else {
                  check = true;
                }
                return check;
              }
            ), // these constraints take precedence
          email: Yup.string().email("Enter correct email"),
          address: Yup.string().required("Address is required"), // these constraints take precedence
          aadhar: Yup.string()
            .matches(/^\d+$/, "Aadhar number can only contain numbers")
            .min(12, "Aadhar Number Must be of 12 digits")
            .max(12, "Aadhar Number Must be of 12 digits")
            .required("Aadhar number is required"), // these constraints take precedence
          // salary: Yup.string().min(3, 'cmon').required('Required'), // these constraints take precedence
        })
      )
      // .required('Must have friends') // these constraints are shown if and only if inner constraints are satisfied
      .min(1, "Minimum of 1 owner"),
  });
  const [isLoading, setIsLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({
    owners: agreementResponse?.ownerDetails
      ? agreementResponse?.ownerDetails
      : [
          {
            fullname:
              agreementResponse?.user?.userType === "Landlord"
                ? agreementResponse?.user?.fullname
                : null,
            phone:
              agreementResponse?.user?.userType === "Landlord"
                ? agreementResponse?.user?.phone
                : null,
            address: null,
            aadhar: null,
            isSigned: "0",
            email:
              agreementResponse?.user?.userType === "Landlord"
                ? agreementResponse?.user?.email
                : null,
          },
        ],
  });
  const onSubmitHandler = async (values, actions) => {
    setIsLoading(true);
    const accessToken = Cookies.get("accessToken");
    console.log(accessToken);
    console.log(agreementResponse);

    if (!accessToken) {
      return;
    }
    const data = {
      rentalId: agreementResponse._id,
      // ownerDetails: {
      //   fullname: values.fullName,
      //   phone: values.phoneNumber,
      //   address: values.address,
      // },
      ownerDetails: values.owners,
    };
    const res = await createRentalAgreement(accessToken, data, "2");
    if (res) {
      setAgreementResponse(res);
      console.log(res);
      setIsLoading(false);
      setCompleted((prev) => {
        let temp = prev;
        temp[1] = true;
        console.log(temp);
        return temp;
      });
      handleNext();
    }
  };

  return (
    <div className="w-full md:border rounded-md md:shadow-md border-gray-200 p-0 md:py-7 md:pl-6 md:pr-6 max-w-xl">
      <p className="text-lg md:text-xl text-gray-700 font-medium mb-2">
        Who owns the property?
      </p>
      <p className="text-sm text-gray-500 mb-2">
        Fill in details of the owner/lessor/landlord.
      </p>
      {/* {list.map((owner, idx) => (
          <RenderAccordian
            name={"Owner"}
            owner={owner}
            count={list.length}
            agreementResponse={agreementResponse}
            key={idx}
            index={idx}
            setIsAccordianOpen={setIsAccordianOpen}
            handleRemove={handleRemoveCoOwner}
            setList={setList}
          />
        ))}
        <div className="flex justify-end w-full">
        {((list.length === noOfLandLords) && !isAccordianOpen )&& (
          <Button
            size="md"
            radius="sm"
            // variant="flat"
            className="bg-[#EABF4E] hover:text-[white] hover:bg-[black]"
            onClick={handleAddCoOwner}
          >
            Add Co-owner
          </Button>
        )}
        </div> */}
      <div className="w-full">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmitHandler}
          validationSchema={validation}
          // enableReinitialize
        >
          {(formikProps) => (
            <Form
              noValidate
              // autoComplete="off"
              onSubmit={(e) => {
                e.preventDefault();
                formikProps.handleSubmit(e);
              }}
            >
              <FieldArray
                name="owners"
                render={(arrayHelpers) => {
                  return (
                    <div>
                      {formikProps.values.owners.map((owner, index) => (
                        <InputAccordian
                          user={owner}
                          name={"owner"}
                          key={index}
                          index={index}
                          arrayHelpers={arrayHelpers}
                          formikProps={formikProps}
                        />
                      ))}
                      <div className="flex justify-end pt-4 pb-2">
                        <Button
                          type="button"
                          size="md"
                          radius="sm"
                          className="bg-[#EABF4E] hover:text-[white] hover:bg-[black]"
                          onClick={() =>
                            arrayHelpers.push({
                              fullname: null,
                              phone: null,
                              email: null,
                              address: null,
                              aadhar: null,
                              isSigned: "0",
                            })
                          }
                          isLoading={isLoading}
                        >
                          Add Co-Owner
                        </Button>
                      </div>
                    </div>
                  );
                }}
              />
              <div className="flex justify-start md:justify-end pt-10 pb-3 gap-3">
                <div className="flex gap-3">
                  <Button
                    type="button"
                    size="md"
                    radius="sm"
                    className="bg-black text-[white] hover:bg-logo-golden hover:text-black"
                    onClick={handleBack}
                    disabled={isLoading}
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    size="md"
                    radius="sm"
                    className="bg-[#EABF4E] hover:text-[white] hover:bg-[black]"
                    // onClick={()=>{console.log(formikProps.touched);console.log(formikProps.values)}}
                    isLoading={isLoading}
                  >
                    Save & Continue
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Step2;