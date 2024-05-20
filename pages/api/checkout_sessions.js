const stripe = require("stripe")(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: "price_1PG1lNP2rqQbA2GkyPSUPq48",
            quantity: 1,
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
              maximum: 10,
            },
          },
        ],
        mode: "payment",
        // success_url: `${req.headers.origin}/?success=true`,
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/cancel`,
        automatic_tax: { enabled: true },
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
