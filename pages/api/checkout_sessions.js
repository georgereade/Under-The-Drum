const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: "price_1PYwPIP2rqQbA2GkJgTdY05b",
            quantity: 1,
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
              maximum: 4,
            },
          },
        ],
        custom_fields: [
          {
            key: "guest2",
            label: {
              type: "custom",
              custom: "Full name of Guest 2",
            },
            type: "text",
            optional: true,
          },
          {
            key: "guest3",
            label: {
              type: "custom",
              custom: "Full name of Guest 3",
            },
            type: "text",
            optional: true,
          },
          {
            key: "guest4",
            label: {
              type: "custom",
              custom: "Full name of Guest 4",
            },
            type: "text",
            optional: true,
          },
        ],
        mode: "payment",
        // success_url: `${req.headers.origin}/?success=true`,
        success_url: `${req.headers.origin}/tickets/success`,
        cancel_url: `${req.headers.origin}/tickets/cancel`,
        automatic_tax: { enabled: true },
        consent_collection: {
          terms_of_service: "required",
        },
        custom_text: {
          terms_of_service_acceptance: {
            message:
              "I agree to Under The Drum's [Terms and Conditions.](https://www.underthedrum.co.uk/ts&cs)",
          },
        },
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
