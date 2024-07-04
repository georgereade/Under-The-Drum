import React, { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "./CustomForm";

export default function MailchimpForm() {
  const [modalOpen, setModalOpen] = useState(false);

  const postUrl = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

  return (
    <div className="flex flex-col mc__form-container w-screen md:w-1/2 items-center place-content-center text-center">
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => {
              subscribe(formData);
            }}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          />
        )}
      />
    </div>
  );
}
