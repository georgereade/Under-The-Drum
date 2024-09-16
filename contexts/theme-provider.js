import React, { createContext, useState } from "react";

export const TicketContext = createContext();

// Create the context provider component
export const TicketContextProvider = ({ children }) => {
  const [dayVisible, setDayVisible] = useState(false);
  const [campingVisible, setCampingVisible] = useState(false);

  const toggleDayTickets = () => {
    setDayVisible(true);
    setCampingVisible(false);
  };

  const toggleCampingTickets = () => {
    setCampingVisible(true);
    setDayVisible(false);
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
