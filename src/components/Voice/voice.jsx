import React, { useEffect, useState } from "react";
import { voices } from "../../lib/voice";
import { Play, Heart, PauseCircle } from "lucide-react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  Tab,
  Tabs,
  useDisclosure,
} from "@nextui-org/react";
import VoiceCard from "./VoiceCard";

const Voice = () => {
  // const [audio,setAudio] = useState();
  const [filterVoice, setFilterVoice] = useState(voices);
  const [change , setChange] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [show , setShow] = useState(false);
  const [currentPlaying, setCurrentPlaying] = useState(null);
  let audio, isPlaying = false,currentAudio = "";
  const playAudio = () => {
    audio?.play();
  };
  const pauseAudio = () => {
    audio?.pause();
  };

  const toggalPlay = (id,src) => {
    // console.log("toggle play" , id)
    if(currentAudio !== null && currentAudio !== id){ // for clicking on new card
      pauseAudio();
      audio = new Audio(src);
      audio.play()
      isPlaying = true;
      currentAudio = id;
      return;
    }
    isPlaying? pauseAudio() : playAudio();
    isPlaying = !isPlaying;
    return;
  }

  const audioSourseChange = (src) =>{

    audio = new Audio(src);
    // audio.src = src;
    // setAudio(new Audio(src));
  }

  const tablist = [
    "All use cases",
    "Natural",
    "Explainer",
    "Ads",
    "Audiobooks",
    "E-learning",
    "Narration",
    "Games",
  ];
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

  return (
    <div className="ml-[10px]">
      <div className="sticky flex justify-between mr-10 mt-5">
        <div className="ml-5 lg:ml-[90px] flex">
          <div className="text-[#232833] font-bold text-[18px] md:text-[18px]">
            My voice
          </div>
        </div>
      </div>
      <div className="sm:flex sm:flex-row flex flex-col items-center sm:ml-[20px] lg:ml-[90px] mt-5 border to-gray-100 md:mr-10  mr-[10px] shadow-lg">
        <div className="sm:mt-5">
          <img
            className="md:w-[200px] md:h-[200px] w-[110px] h-[100px] sm:w-[130px] sm:h-[100px]"
            src="https://static.heygen.ai/movio_static/images/voice-clone-banner.png"
            alt=""
          />
        </div>
        <div className="flex flex-col pb-2 sm:py-3 sm:ml-10 ml-5 md:gap-y-4 sm:gap-y-2 pr-1">
          <div className="md:text-2xl text-[17px] font-normal ">
            Let Your Unique Voice Shine Brilliantly
          </div>
          <div className="text-gray-500 sm:text-[15px] text-6px">
            Amplify your voice - unleash your unique sound, captivate audiences,
            and make a lasting impact.
          </div>
          <div className=" p-2 max-w-[100px]">
            <Button
              onClick={onOpen}
              size="sm"
              className="bg-transparent border-2 rounded-md"
            >
              Learn More
            </Button>
          </div>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Modal Title
                  </ModalHeader>
                  <ModalBody>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
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
      </div>
      <div className="lg:ml-[90px] ml-5 font-bold sm:flex sm:flex-row flex flex-col justify-between mr-10 mt-5 overflow-hidden">
        <div className="text-[#232833] font-bold text-[18px] md:text-[18px]">
          Public Voice
        </div>
        <div className="flex flex-row gap-x-3">
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
      </div>
      <div className="ml-2 lg:ml-[80px]">
        <div className="overflow-x-auto">
          <Tabs variant="underlined" aria-label="Tabs variants">
            {tablist.map((tab) => (
              <Tab key={tab} title={tab} />
            ))}
          </Tabs>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:ml-[85px] ml-3 my-5">
        {filterVoice.map((voice) => (
          <VoiceCard key={voice.id} voice={voice} toggalPlay={toggalPlay} audioSourseChange={audioSourseChange} currentAudio={currentAudio} change={change}/>
        ))}
      </div>
    </div>
  );
};

export default Voice;
