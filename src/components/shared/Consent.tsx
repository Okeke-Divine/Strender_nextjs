"use client"
import React from "react";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";

const CookieConsentBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept All"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="StrenderAppCookieConsent"
      style={{ background: "#2B373B", color: "#FFF" }}
      buttonStyle={{ backgroundColor: "#4CAF50", color: "#FFF", fontSize: "14px" }}
      declineButtonStyle={{ backgroundColor: "#f44336", color: "#FFF", fontSize: "14px" }}
      expires={365}  // Number of days before the cookie expires
      onAccept={() => {
        // Add functionality when user accepts cookies
      }}
      onDecline={() => {
        // Add functionality when user declines cookies
      }}
    >
      This website uses cookies to enhance your experience. By using our website, you consent to the use of cookies. 
      You can read more in our <b><Link href="/privacy-policy">privacy policy</Link></b>.
    </CookieConsent>
  );
};

export default CookieConsentBanner;