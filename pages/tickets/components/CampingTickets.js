import React, { useState } from "react";

export default function CampingTickets() {
  const [campingVisible, setCampingVisible] = useState(false);
  const [quantity, setQuantity] = useState(1); // Quantity is independent of the ticket type
  const [selectedTicketType, setSelectedTicketType] = useState(null); // Track if it's tent or van

  const handleCampingClick = () => {
    setCampingVisible(true);
    setSelectedTicketType("tent");
  };

  const handleVanClick = () => {
    setCampingVisible(true);
    setSelectedTicketType("van");
  };

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
              onClick={handleCampingClick}
              role="button"
              className="text-2xl checkout-button rounded-md transition ease-in-out delay-10 hover:scale-110 hover:opacity-100 uppercase border-2 bg-utd-red border-utd-red hover:text-black hover:bg-utd-green hover:border-utd-green"
            >
              Camping Tickets
            </button>
          </section>
        )}
      </div>

      <div className={campingVisible ? "visible-section" : "hidden-section"}>
        {campingVisible && (
          <div className="flex flex-col py-0">
            {/* Tent Form */}
            <form
              action="/api/checkout_sessions_camping"
              method="POST"
              onSubmit={handleSubmit}
            >
              <section className="checkout-button-section mx-8 pt-8 pb-2 sm:p-0 sm:pb-2 sm:ml-0">
                <button
                  type="submit"
                  role="link"
                  onClick={handleCampingClick}
                  className="text-2xl checkout-button rounded-md transition ease-in-out delay-10 hover:scale-110 hover:opacity-100 uppercase border-2 bg-utd-red border-utd-red hover:text-black hover:bg-utd-green hover:border-utd-green"
                >
                  Tent
                </button>
              </section>
              {/* Hidden input directly tied to quantity */}
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
                  onClick={handleVanClick}
                  className="text-2xl checkout-button rounded-md transition ease-in-out delay-10 hover:scale-110 hover:opacity-100 uppercase border-2 bg-utd-red border-utd-red hover:text-black hover:bg-utd-green hover:border-utd-green"
                >
                  Camper Van
                </button>
                Each person staying at the venue overnight must have a camping
                ticket. Please let us know if you are planning to camp in a tent
                or camper van. This doesn&apos;t affect the price but helps us a
                lot with planning, thank you!
              </section>

              {/* Hidden input directly tied to quantity */}
              <input type="hidden" name="quantity" value={quantity} />
            </form>
            {/* Quantity Selector */}
            <div className="quantity-selector mx-8 py-2">
              <label htmlFor="quantity" className="text-white">
                Select Quantity:{" "}
              </label>
              <select
                id="quantity"
                name="quantity"
                value={quantity} // Directly bind quantity here
                onChange={handleQuantityChange}
                className="p-2 border-2 border-gray-300 rounded"
              >
                <option value="1">1 Ticket</option>
                <option value="2">2 Tickets</option>
                <option value="3">3 Tickets</option>
                <option value="4">4 Tickets</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
