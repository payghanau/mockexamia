
import React from "react";
import { ShieldCheck } from "lucide-react";

const PaymentMethod = () => {
  return (
    <>
      <div>
        <h3 className="font-medium text-lg text-gray-800 mb-2">Payment Method</h3>
        <div className="border rounded-lg p-4 bg-white">
          <div className="flex items-center space-x-3">
            <img 
              src="https://cdn.razorpay.com/static/assets/logo/payment/razorpay.svg" 
              alt="Razorpay" 
              className="h-8" 
            />
            <div>
              <h4 className="font-medium">Razorpay Secure Checkout</h4>
              <p className="text-sm text-gray-500">Credit/Debit Card, UPI, Netbanking & more</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center text-sm text-gray-600 space-x-2">
        <ShieldCheck className="h-4 w-4 text-green-600" />
        <span>Your payment information is processed securely.</span>
      </div>
    </>
  );
};

export default PaymentMethod;
