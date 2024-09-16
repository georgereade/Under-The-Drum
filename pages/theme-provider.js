import React, { createContext, useState } from "react";

export const TicketContext = createContext();

// Create the context provider component
export const TicketContextProvider = ({ children }) => {
  const [dayVisible, setDayVisible] = useState(false);
  const [campingVisible, setCampingVisible] = useState(false);

  const toggleDayTickets = () => {
    setDayVisible(!dayVisible);
  };

  const toggleCampingTickets = () => {
    setCampingVisible(!campingVisible);
  };

  return (
    <TicketContext.Provider
      value={{
        dayVisible,
        campingVisible,
        toggleDayTickets,
        toggleCampingTickets,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};
