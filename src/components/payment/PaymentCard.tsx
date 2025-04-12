
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard } from "lucide-react";
import PaymentSummary from "./PaymentSummary";
import PaymentMethod from "./PaymentMethod";
import PaymentDetails from "./PaymentDetails";

type PlanInfo = {
  planName: string;
  amount: number;
  duration: string;
};

interface PaymentCardProps {
  planInfo: PlanInfo;
}

const PaymentCard = ({ planInfo }: PaymentCardProps) => {
  return (
    <Card className="overflow-hidden border-gray-200 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl">Complete Your Purchase</CardTitle>
            <CardDescription className="text-blue-100 mt-1">
              Secure payment powered by Razorpay
            </CardDescription>
          </div>
          <div className="bg-white/20 p-3 rounded-full">
            <CreditCard className="h-6 w-6 text-white" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <PaymentSummary planInfo={planInfo} />
          <PaymentMethod />
        </div>
      </CardContent>
      <CardFooter className="p-0">
        <PaymentDetails planInfo={planInfo} />
      </CardFooter>
    </Card>
  );
};

export default PaymentCard;
