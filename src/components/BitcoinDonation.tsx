
import React from "react";

const BitcoinDonation = () => {
  const bitcoinAddress = "11a1esowhJJ4BAY2sEdRA5KZ8pZAPYTpH";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bitcoinAddress);
    alert("Bitcoin address copied!");
  };

  return (
    <div className="bg-gray-100 p-6 rounded-2xl shadow-md text-center max-w-xl mx-auto my-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Donate with Bitcoin</h2>
      <p className="text-gray-600 mb-4">
        Your support helps provide food, medicine, and hope to vulnerable children in Africa.
      </p>
      <div className="bg-white p-4 rounded-xl border border-gray-300 shadow-sm">
        <code className="block text-lg text-gray-700 mb-2 break-all">{bitcoinAddress}</code>
        <button
          onClick={copyToClipboard}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full transition duration-300"
        >
          Copy Address
        </button>
      </div>
    </div>
  );
};

export default BitcoinDonation;
