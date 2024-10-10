import React from "react";

const ActivatePOS = () => (
  <form>
    <p className="text-gray-700 mb-2">Activate your POS Terminal:</p>
    <input
      type="text"
      placeholder="POS Serial Number"
      className="w-full mb-3 p-2 border rounded"
    />
    <button
      type="submit"
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
    >
      Activate POS
    </button>
  </form>
);

export default ActivatePOS;
