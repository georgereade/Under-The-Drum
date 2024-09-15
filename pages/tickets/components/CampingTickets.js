"use client";

import { useContext, useState } from "react";
import { TicketContext } from "../index";

export default function CampingTickets() {
  const { campingVisible, toggleCampingTickets } = useContext(TicketContext);
  const [quantity, setQuantity] = useState(1); // Quantity is independent of the ticket type
  const [selectedTicketType, setSelectedTicketType] = useState(null); // Track if it's tent or van

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value)); // Set the quantity directly
  };

  const handleSubmit = (event) => {
    if (!selectedTicketType) {
      event.preventDefault(); // Prevent form submission if no ticket type is selected
      alert("Please select Tent or Camper Van.");
    }
  };

  return (
    <section>
      <div className={campingVisible ? "hidden-section" : "visible-section"}>
        {!campingVisible && (
          <section className="checkout-button-section mx-8 py-8 sm:p-0 sm:ml-0 ease-in-out transition-opacity duration-500">
            <button
              type="button"
              onClick={toggleCampingTickets}
              role="button"
              className="text-2xl checkout-button rounded-md transition ease-in-out delay-10 hover:scale-110 hover:opacity-100 uppercase border-2 bg-utd-red border-utd-red hover:text-black hover:bg-utd-green hover:border-utd-green"
            >
              Camping Tickets
            </button>
          </section>
        )}
      </div>

      <div className={campingVisible ? "visible-section" : "hidden-section"}>
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

        {campingVisible && (
          <div className="flex flex-col py-0">
            {/* Tent Form */}
            <form
              action="/api/checkout_sessions_camping"
              method="POST"
              onSubmit={handleSubmit}
            >
              <section className="checkout-button-section mx-8 pt-2 pb-2 sm:p-0 sm:pb-2 sm:ml-0">
                <button
                  type="submit"
                  role="link"
                  className="text-2xl checkout-button rounded-md transition ease-in-out delay-10 hover:scale-110 hover:opacity-100 uppercase border-2 bg-utd-red border-utd-red hover:text-black hover:bg-utd-green hover:border-utd-green"
                >
                  Buy Tent Ticket
                </button>
              </section>
              <input type="hidden" name="quantity" value={quantity} />
            </form>

            {/* Camper Van Form */}
            <form
              action="/api/checkout_sessions_camping-van"
              method="POST"
              onSubmit={handleSubmit}
            >
              <section className="checkout-button-section mx-8 py-2 sm:p-0 sm:ml-0">
                <button
                  type="submit"
                  role="link"
                  className="text-2xl checkout-button rounded-md transition ease-in-out delay-10 hover:scale-110 hover:opacity-100 uppercase border-2 bg-utd-red border-utd-red hover:text-black hover:bg-utd-green hover:border-utd-green"
                >
                  Buy Camper Van Ticket
                </button>
              </section>
              <input type="hidden" name="quantity" value={quantity} />
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
