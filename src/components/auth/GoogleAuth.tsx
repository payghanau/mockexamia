
import React from "react";

type GoogleAuthProps = {
  type: "login" | "register";
};

// This component is kept for backward compatibility
// but is not used anymore as we've removed Google authentication
const GoogleAuth = ({ type }: GoogleAuthProps) => {
  return null;
};

export default GoogleAuth;
