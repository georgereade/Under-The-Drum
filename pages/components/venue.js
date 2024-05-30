import Link from "next/link";
const mapsAPIKey = process.env.GOOGLE_MAPS_KEY;

export default function Venue() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-extrabold leading-loose text-center py-6 text-4xl">
        Venue:
      </h1>

      <div className="iframe_container">
        {" "}
        <iframe
          className="r_iframe"
          width="100%"
          height="100%"
          frameborder="0"
          // style="border:0"
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCyYmtY6bu65QsngesmEAwAnlB9nsG5KTI&q=Breckenhill&zoom=9"
          allowfullscreen
        ></iframe>
      </div>
      <section className="checkout-button-section flex flex-col items-center">
        <Link href="https://breckenhill.co.uk/contact/">
          {" "}
          <button className="text-yellow-600 font-bold border-2 border-yellow-600 rounded mt-8 breckenhill-button">
            Breckenhill
          </button>
        </Link>
      </section>
    </div>
  );
}
