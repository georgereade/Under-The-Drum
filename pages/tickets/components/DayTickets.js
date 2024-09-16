"use client";

import { useState, useContext } from "react";
import { TicketContext } from "../theme-provider";

export default function DayTickets() {
  // const context = useContext(TicketContext);
  const { dayVisible, toggleDayTickets } = useContext(TicketContext);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  return (
    <section>
      <div className={dayVisible ? "hidden-section" : "visible-section"}>
        {!dayVisible && (
          <section className="checkout-button-section mx-8 py-8 sm:p-0 sm:ml-0 ease-in-out transition-opacity duration-500">
            <button
              type="button"
              onClick={toggleDayTickets}
              role="button"
              className="text-2xl checkout-button rounded-md transition ease-in-out delay-10 hover:scale-110 hover:opacity-100 uppercase border-2 bg-utd-red border-utd-red hover:text-black hover:bg-utd-green hover:border-utd-green"
            >
              Day Tickets
            </button>
          </section>
        )}
      </div>

      <div className={dayVisible ? "visible-section" : "hidden-section"}>
        {/* Quantity Selector */}
        <div className="quantity-selector mx-8 py-2">
          <label htmlFor="quantity" className="text-white">
            Select Quantity:{" "}
          </label>
          <select
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            className="p-2 border-2 border-gray-300 rounded"
          >
            <option value="1">1 Ticket</option>
            <option value="2">2 Tickets</option>
            <option value="3">3 Tickets</option>
            <option value="4">4 Tickets</option>
          </select>
        </div>

        {dayVisible && (
          <form action="/api/checkout_sessions" method="POST">
            <section className="checkout-button-section mx-8 pt-2 pb-4 sm:p-0 sm:ml-0">
              <button
                type="submit"
                role="link"
                className="text-2xl checkout-button rounded-md transition ease-in-out delay-10 hover:scale-110 hover:opacity-100 uppercase border-2 bg-utd-red border-utd-red hover:text-black hover:bg-utd-green hover:border-utd-green"
              >
                Buy Day Tickets
              </button>
            </section>

            <input type="hidden" name="quantity" value={quantity} />
          </form>
        )}
      </div>
    </section>
  );
}
