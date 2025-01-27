import React, { useState, useEffect } from "react";
import { Button, Input } from "@nextui-org/react";

export default function CustomForm({
  status,
  message,
  onValidated,
  modalOpen,
}) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && firstName && lastName && email.indexOf("@") > -1) {
      onValidated({
        EMAIL: email,
        MERGE1: firstName,
        MERGE2: lastName,
      });
    }
  };

  useEffect(() => {
    if (status === "success" || status === "error") clearFields();
  }, [status, modalOpen]);

  const clearFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  const getStatusMessage = () => {
    console.log(status);
    if (status === "success") {
      return "Success! You have been subscribed.";
    } else if (status === "error") {
      if (message.includes("already subscribed")) {
        return "You are already subscribed.";
      } else {
        return message;
      }
    } else if (status === "sending") {
      return "Sending...";
    }
    return (
      <p className="text-xl font-bold text-white bg-transparent px-4">
        Sign up for updates on Under The Drum 2025
      </p>
    );
  };

  return (
    <form
      className="mc__form bg-transparent sm:bg-transparent py-8"
      onSubmit={handleSubmit}
    >
      <h3 className="mc__title">{getStatusMessage()}</h3>

      {status !== "success" ? (
        <div className="mc__field-container bg-transparent px-4">
          <Input
            label=""
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            value={firstName}
            className="py-1 caret-utd-red"
            placeholder="First name"
            required
          />

          <Input
            label=""
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            value={lastName}
            className="py-1 caret-utd-blue "
            placeholder="Last name"
            required
          />

          <Input
            label=""
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            className="py-1 caret-utd-green"
            placeholder="your@email.com"
            required
          />
        </div>
      ) : null}

      {status === "success" ? (
        ""
      ) : (
        <Button
          type="submit"
          size="lg"
          className="transition text-2xl ease-in-out delay-10 hover:scale-110 py-3 text-utd-purple font-bold bg-utd-grey rounded-md uppercase hover:bg-utd-blue hover:text-white"
        >
          Subscribe
        </Button>
      )}
    </form>
  );
}
