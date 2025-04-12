
import React from "react";

type PlanInfo = {
  planName: string;
  amount: number;
  duration: string;
};

interface PaymentSummaryProps {
  planInfo: PlanInfo;
}

const PaymentSummary = ({ planInfo }: PaymentSummaryProps) => {
  return (
    <div className="bg-blue-50 p-4 rounded-lg">
      <h3 className="font-medium text-lg text-gray-800 mb-2">Order Summary</h3>
      <div className="flex justify-between py-2 border-b border-blue-100">
        <span className="text-gray-600">Plan</span>
        <span className="font-medium text-gray-800">{planInfo.planName}</span>
      </div>
      <div className="flex justify-between py-2 border-b border-blue-100">
        <span className="text-gray-600">Duration</span>
        <span className="font-medium text-gray-800">{planInfo.duration}</span>
      </div>
      <div className="flex justify-between py-2 text-lg">
        <span className="font-medium text-gray-800">Total Amount</span>
        <span className="font-bold text-blue-700">₹{planInfo.amount}</span>
      </div>
    </div>
  );
};

export default PaymentSummary;
