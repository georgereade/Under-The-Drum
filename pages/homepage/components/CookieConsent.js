import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import cookie from "js-cookie";
import { motion, AnimatePresence } from "framer-motion";

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
  };

  const handleReject = () => {
    setShowBanner(false);
    cookie.set("cookieConsent", "rejected", { expires: 365 });
    console.log("Cookies rejected.");
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="floating-div w-fit rounded-xl p-6 ease-in-out transition-opacity text-center md:left-0"
        >
          <p>
            This website uses essential cookies to improve your browsing
            experience.
          </p>
          <p className="pt-4 pb-2">
            Please click Accept if you are happy to do so.
          </p>
          <div className="flex flex-row">
            <Button
              onClick={handleAccept}
              className="hover:underline text-black bg-white border-2 rounded-xl mx-4"
            >
              Accept
            </Button>
            <Button
              onClick={handleReject}
              className="hover:underline text-black bg-white border-2 rounded-xl mx-4"
            >
              Reject
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsentBanner;
