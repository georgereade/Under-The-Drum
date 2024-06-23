import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import cookie from "js-cookie";

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consentCookie = cookie.get("cookieConsent");

    if (!consentCookie) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setShowBanner(false);
    cookie.set("cookieConsent", "accepted", { expires: 365 });
    console.log("Cookies accepted.");
  };

  const handleReject = () => {
    setShowBanner(false);
    cookie.set("cookieConsent", "rejected", { expires: 365 });
    console.log("Cookies rejected.");
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="floating-div w-fit rounded-xl p-6 ease-in-out transition-opacity text-center">
      <p>
        This website uses only essential cookies to improve your browsing
        experience.
      </p>
      <p>Please click Accept if you are happy to.</p>
      <div className="flex flex-row">
        <Button onClick={handleAccept}>Accept</Button>
        <Button onClick={handleReject}>Reject</Button>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
