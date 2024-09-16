"use client";

import { createContext, useState } from "react";

export const TicketContext = createContext();

export default function TicketThemeProvider({ children }) {
  const [dayVisible, setDayVisible] = useState(false);
  const [campingVisible, setCampingVisible] = useState(false);

  // Function to toggle between day and camping tickets
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
}
