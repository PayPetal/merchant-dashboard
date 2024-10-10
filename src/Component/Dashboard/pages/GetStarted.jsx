import React from "react";
import Steps from "../components/Steps";

const GetStarted = () => {
  return (
    <div className="mx-auto mt-32">
      <div className="flex flex-col gap-[39px]">
        <div>
          <h5 className="mb-[10px] text-3xl text-[#010110] font-bold">{`Welcome John, Let's Get You Started`}</h5>
          <p className="text-sm font-bold">0 of 3 Steps Completed</p>
        </div>
        <Steps />
      </div>
    </div>
  );
};

export default GetStarted;
