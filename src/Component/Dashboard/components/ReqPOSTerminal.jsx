import React, { useState } from "react";
import Input from "./Input";
import { FaCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { IoCloudUpload } from "react-icons/io5";
import upload from "../../../assets/images/form-icons.png";

const ReqPOSTerminal = ({ show, onClose }) => {
  const [acctNumber, setAcctNumber] = useState(null);
  const [activeTab, setActiveTab] = useState("merchantContact");
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState({
    merchantContact: false,
    merchantAccount: false,
    legalTerms: false,
  });

  const inputDetails = [
    { type: "text", placeholder: "Primary Contact Name" },
    { type: "text", placeholder: "Primary Contact Designation" },
    { type: "text", placeholder: "Primary Contact Office Telephone No" },
    { type: "text", placeholder: "Primary Contact Mobile Telephone No" },
    { type: "text", placeholder: "Secondary Contact Name" },
    { type: "text", placeholder: "Secondary Contact Designation" },
    { type: "text", placeholder: "Secondary Contact Office Telephone No" },
    { type: "text", placeholder: "Secondary Contact Mobile Telephone No" },
  ];

  if (!show) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleNextTab = () => {
    // Mark the current tab as complete
    setProgress((prevProgress) => ({
      ...prevProgress,
      [activeTab]: true,
    }));

    if (activeTab === "merchantContact") {
      setActiveTab("merchantAccount");
    } else if (activeTab === "merchantAccount") {
      setActiveTab("legalTerms");
    }
  };

  const handlePreviousTab = () => {
    if (activeTab === "legalTerms") {
      setActiveTab("merchantAccount");
    } else if (activeTab === "merchantAccount") {
      setActiveTab("merchantContact");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile.name);
    }
  };

  const handleClearFile = () => {
    setFile(null);
  };

  return (
    <>
      <div className="text-center p-6">
        <h1 className="mb-3 text-[#04032F] text-2xl font-bold">
          Request for Terminals
        </h1>
        <p className="text-[#667085] text-sm font-medium">
          You can request for terminals here and we will get back to you within
          7 working days. Thanks for your patience.
        </p>
      </div>
      {/* Tabs Header */}
      <div className="border-y bg-[#E7E7F5] border-gray-200 mb-6">
        <nav className="flex border border-[#d3d3f3] space-x-6 justify-center">
          <button
            onClick={() => setActiveTab("merchantContact")}
            className={`py-2 ${
              activeTab === "merchantContact"
                ? "w-full text-[#0A086E] bg-[#CFCEEB] border-b-2 border-[#6E6DC4]"
                : "text-gray-600 w-full "
            } font-medium text-sm flex items-center justify-center gap-2`}
          >
            {progress.merchantContact ? (
              <FaCheckCircle className="text-green-600" />
            ) : (
              <FaCircle className="text-indigo-600" />
            )}
            Merchant Contact
          </button>
          <button
            onClick={() => setActiveTab("merchantAccount")}
            className={`py-2 ${
              activeTab === "merchantAccount"
                ? "w-full text-[#0A086E] bg-[#CFCEEB] border-b-2 border-[#6E6DC4]"
                : "text-gray-600 w-full "
            } font-medium text-sm flex items-center justify-center gap-2`}
          >
            {progress.merchantAccount ? (
              <FaCheckCircle className="text-green-600" />
            ) : (
              <FaCircle className="text-indigo-600" />
            )}
            Merchant Account
          </button>
          <button
            onClick={() => setActiveTab("legalTerms")}
            className={`py-2 ${
              activeTab === "legalTerms"
                ? "w-full text-[#0A086E] bg-[#CFCEEB] border-b-2 border-[#6E6DC4]"
                : "text-gray-600 w-full "
            } font-medium text-sm flex items-center justify-center gap-2`}
          >
            {progress.legalTerms ? (
              <FaCheckCircle className="text-green-600" />
            ) : (
              <FaCircle className="text-indigo-600" />
            )}
            Legal Terms
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <form action="">
        <div className="p-[20px]">
          {activeTab === "merchantContact" && (
            <div>
              <input
                type="text"
                value="Mobile POS"
                className="w-full mb-4 bg-[#F2F4F7] text-sm border border-gray-300 rounded-md p-2"
                readOnly
              />
              <fieldset className="grid grid-cols-2 gap-4">
                {inputDetails.map((item, index) => (
                  <Input
                    key={index}
                    type={item.type}
                    placeholder={item.placeholder}
                  />
                ))}
              </fieldset>

              <div className="py-4">
                <button
                  onClick={handleNextTab}
                  className="bg-[#0A086E] text-white px-6 py-2 w-[292.5px] rounded-full hover:bg-indigo-500 transition duration-200"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {activeTab === "merchantAccount" && (
            <div>
              <h2 className="font-semibold text-lg mb-4">Merchant Account</h2>

              <fieldset className="grid grid-cols-2 gap-4">
                {/* Account Type Dropdown */}
                <div className="col-span-2">
                  <select
                    id="accountType"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                  >
                    <option value="" disabled>
                      Select Account Type
                    </option>
                    <option value="savings">Savings</option>
                    <option value="current">Current</option>
                  </select>
                </div>

                {/* Bank Dropdown */}
                <div className="">
                  <select
                    id="bank"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                  >
                    <option value="" disabled>
                      Select Bank
                    </option>
                    <option value="firstbank">Selct Bank</option>
                    <option value="firstbank">First Bank</option>
                    <option value="gtbank">GTBank</option>
                    <option value="zenithbank">Zenith Bank</option>
                    <option value="accessbank">Access Bank</option>
                  </select>
                </div>

                {/* Account Number Input */}
                <div className="">
                  <input
                    type="text"
                    id="accountNumber"
                    value={acctNumber}
                    onChange={(e) => {
                      setAcctNumber(e.target.value);
                    }}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                    placeholder="Enter account number"
                    maxLength={10}
                  />
                </div>

                {/* Account Name Input */}
                <div className="col-span-2">
                  <input
                    type="text"
                    id="accountName"
                    className="w-full bg-[#E4E7EC] px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                    placeholder="Enter account name"
                  />
                </div>
              </fieldset>

              <div className="py-4 flex gap-10 items-center justify-center">
                <button
                  onClick={handleNextTab}
                  className="block bg-[#0A086E] text-white px-6 py-2 w-[292.5px] rounded-full hover:bg-indigo-500 transition duration-200"
                >
                  Continue
                </button>

                <button
                  onClick={handlePreviousTab}
                  className="block bg-white text-[#2623A7] border-2 border-[#2623A7] px-6 py-2 w-[292.5px] rounded-full hover:bg-indigo-500 transition duration-200"
                >
                  Go Back
                </button>
              </div>
            </div>
          )}

          {activeTab === "legalTerms" && (
            <div>
              <fieldset className="space-y-4">
                <label
                  htmlFor="dragdrop-file"
                  className="flex border-dashed rounded-lg flex-col items-center justify-center w-[605px] min-h-[89px] h-auto mx-auto border-2 border-gray-400 cursor-pointer bg-gray-50"
                >
                  <div className="flex flex-col items-center justify-center py-3">
                    <img src={upload} alt="" />
                    <p className="mb-2 dark:text-gray-400">
                      Upload a Copy of your signature here
                    </p>
                    {file}
                    <p className="text-xs text-gray-500">Only JPG allowed</p>
                  </div>
                  {/* The input will be hidden so to make the div as drag and drop input */}
                  <input
                    id="dragdrop-file"
                    className="hidden"
                    type="file"
                    onChange={handleDragOver}
                  />
                </label>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                    I agree with the terms and conditions for using this service
                  </label>
                </div>
              </fieldset>
              <div className="py-4 flex gap-10 items-center justify-center">
                <button
                  type="submit"
                  onClick={onClose}
                  className="block bg-[#0A086E] text-white px-6 py-2 w-[292.5px] rounded-full hover:bg-indigo-500 transition duration-200"
                >
                  Submit
                </button>

                <button
                  onClick={handlePreviousTab}
                  className="block bg-white text-[#2623A7] border-2 border-[#2623A7] px-6 py-2 w-[292.5px] rounded-full hover:bg-indigo-500 transition duration-200"
                >
                  Go Back
                </button>
              </div>
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default ReqPOSTerminal;
