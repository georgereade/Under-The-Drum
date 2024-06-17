import React, { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "./CustomForm";

const postUrl = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

export default function MailchimpForm() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="mc__form-container">
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
