import React, { useState } from "react";
import { PiCaretRightLight } from "react-icons/pi";
import Modal from "./Modal";
import CompleteKYC from "./CompleteKYC";
import ActivatePOS from "./ActivatePOS";
import ReqPOSTerminal from "./ReqPOSTerminal";

const Steps = () => {
  // State to manage which modal to show
  const [activeStep, setActiveStep] = useState(null);

  const STEP_DETAILS = [
    {
      step: "Complete Your KYC",
      description:
        "Per government rules & compliance purposes, we require you to complete some basic KYC requirements to enable you use our platform effectively.",
    },
    {
      step: "Request for your POS Terminal(s)",
      description:
        "You might require one of our customized NFC enabled POS Terminals to enable you receive payments from customers at your store.",
    },
    {
      step: "Activate your POS Terminals",
      description:
        "Once you have collected your POS terminal, you are required to activate it to start receiving payments.",
    },
  ];

  const handleStepClick = (step) => {
    setActiveStep(step); // Set the clicked step
  };

  const closeModal = () => {
    setActiveStep(null); // Close the modal
  };

  return (
    <div className="flex flex-col gap-3">
      {STEP_DETAILS.map((item, index) => (
        <div
          key={index}
          onClick={() => handleStepClick(item.step)} // Handle click
          className="transform hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out bg-[#E7E7F5] py-3 px-5 rounded-lg flex gap-4 lg:w-[730px] md:w-[530px]"
        >
          <div className="w-5 h-5 rounded-full bg-[#CFCEEB] flex-shrink-0 mt-1"></div>
          <div className="flex justify-between items-center gap-20">
            <div>
              <div className="flex mb-3">
                <p className="text-[#0a086e] font-semibold">{item.step}</p>
                <p className="p-1 text-xs font-bold bg-[#D0D5DD] ml-3 rounded text-[#0a086e]">
                  Not Started
                </p>
              </div>
              <p className="leading-snug text-[#0a086e]">{item.description}</p>
            </div>
            <PiCaretRightLight className="text-[#0a086e] font-semibold w-5 h-5 mt-2 flex-shrink-0" />
          </div>
        </div>
      ))}

      {/* Render the Modal conditionally based on the step */}
      {activeStep === "Complete Your KYC" && (
        <Modal show={true} onClose={closeModal} title="Complete Your KYC">
          <CompleteKYC />
        </Modal>
      )}
      {activeStep === "Request for your POS Terminal(s)" && (
        <Modal
          show={true}
          onClose={closeModal}
          title="Request for your POS Terminal(s)"
        >
          <ReqPOSTerminal show={true} onClose={closeModal} />
        </Modal>
      )}

      {activeStep === "Activate your POS Terminals" && (
        <Modal
          show={true}
          onClose={closeModal}
          title="Activate your POS Terminals"
        >
          <ActivatePOS />
        </Modal>
      )}
    </div>
  );
};

export default Steps;
