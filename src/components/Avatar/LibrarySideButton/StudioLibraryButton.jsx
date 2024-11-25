import React from "react";
import { SelectItem, Select, Checkbox } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Filter } from "lucide-react";

const SideLibraryButton = () => {
  const genders = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];
  const languages = [
    { label: "Arabic", value: "Arabic" },
    { label: "Bangala", value: "Bangala" },
    { label: "Bulgarian", value: "Bulgarian" },
  ];
  const ages = [
    { label: "Age", value: "Age" },
    { label: "Child", value: "Child" },
    { label: "Youth", value: "Youth" },
  ];
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="md:hidden flex mt-[-40px]">
        <Button onPress={onOpen} startContent={<Filter size={15} />}>
          Filter
        </Button>

        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <div className="flex justify-between mr-10">
                  <ModalHeader className="flex flex-col gap-1">
                    Filters
                  </ModalHeader>
                  <Checkbox >Select All</Checkbox>
                </div>

                <ModalBody className="mt-[-20px]">
                  <div className="flex flex-col py-5">
                    <div>Gender</div>
                    <div className="flex gap-5">
                      {genders.map((gender) => (
                        <div key={gender.value}>
                          <Checkbox >{gender.label}</Checkbox>
                        </div>
                      ))}
                    </div>
                    <div className="pt-3">Age</div>
                    <div className="flex gap-3">
                      {ages.map((age) => (
                        <div key={age.value}>
                          <Checkbox >{age.label}</Checkbox>
                        </div>
                      ))}
                    </div>
                    <div className="pt-3">Language</div>
                    <div className="flex gap-5">
                      {languages.map((language) => (
                        <div key={language.value}>
                          <Checkbox >{language.label}</Checkbox>
                        </div>
                      ))}
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Action
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
      <div className="md:flex md:flex-row md:gap-x-3 hidden">
        <div>
          <Select
            size="small"
            labelPlacement="top"
            placeholder="Language"
            className="sm:w-[130px] w-[100px]"
          >
            {languages.map((language) => (
              <SelectItem key={language.value} value={language.value}>
                {language.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div>
          <Select
            size="small"
            labelPlacement="top"
            placeholder="Age"
            className="sm:w-[130px] w-[80px]"
          >
            {ages.map((language) => (
              <SelectItem key={language.value} value={language.value}>
                {language.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div>
          <Select
            size="small"
            labelPlacement="top"
            placeholder="Gender"
            className="sm:w-[130px] w-[100px]"
          >
            {genders.map((gender) => (
              <SelectItem key={gender.value} value={gender.value}>
                {gender.label}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>
    </>
  );
};

export default SideLibraryButton;
