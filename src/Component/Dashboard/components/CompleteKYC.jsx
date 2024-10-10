import { useState } from "react";
import upload from "../../../assets/images/form-icons.png";

// Example Form Components for each step
const CompleteKYC = () => {
  const [file, setFile] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile.name);
    }
  };

  return (
    <>
      <div className="border-b border-[#D0D5DD] py-6">
        <div className="text-center">
          <h1 className="mb-3 text-[#04032F] text-2xl font-bold">
            Complete Your KYC
          </h1>
          <p className="text-[#667085] text-sm font-medium">
            Please complete your KYC to enable seamless transactions here
          </p>
        </div>
      </div>
      <div className="p-[30px]">
        <form action="">
          {/* Business Name */}
          <div className="grid grid-cols-2 gap-4">
            <input
              className="col-span-2 placeholder-[#757575] border-2 border-[757575] p-[10px] rounded-xl text-sm"
              placeholder="Business Name"
              type="text"
            />
            {/* Business Type */}
            <select
              className="placeholder-[#757575] border-2 border-[757575] p-[10px] rounded-xl text-sm text-[#757575] focus:outline-none"
              name="businessType"
            >
              <option className="text-[#757575]" value="" disabled>
                Select Business Type
              </option>
              <option className="text-red-500" value="soleProprietorship">
                Sole Proprietorship
              </option>
              <option value="partnership">Partnership</option>
              <option value="limitedLiabilityCompany">
                Limited Liability Company (LLC)
              </option>
              <option value="publicCompany">Public Company</option>
              <option value="nonProfit">Non-Profit Organization</option>
            </select>

            {/* Business Number */}
            <input
              className="placeholder:overflow-visible placeholder-[#757575] border-2 border-[757575] p-[10px] rounded-xl text-sm"
              placeholder="Business Registration Number"
              type="number"
            />

            {/* Business Address */}
            <textarea
              className="col-span-2 placeholder-[#757575] border-2 border-[757575] p-[10px] rounded-xl text-sm min-h-[100px]"
              placeholder="Business Name"
            />
          </div>

          <div className="flex gap-4">
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
          </div>
          <button className="mt-10 w-[294px] rounded-full py-2 bg-[#0A086E] text-white">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CompleteKYC;
