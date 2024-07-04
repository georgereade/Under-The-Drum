import Link from "next/link";

const mapsAPIKey = process.env.GOOGLE_MAPS_KEY;

export default function Venue() {
  return (
    <div
      className="flex flex-col items-center w-screen bg-utd-navy bg-[url('/Drawings.png')] bg-cover bg-center bg-repeat-y bg-local"
      id="venue"
    >
      <h3 className="font-extrabold leading-loose text-center pt-6 text-2xl uppercase">
        Location
      </h3>
      <p className="pb-6 text-center">
        Breckenhill <br />
        45 Breckenhill Road <br />
        BT39 0TB
      </p>
      <div className="iframe_container py-8">
        {" "}
        <iframe
          className="r_iframe"
          title="google maps frame"
          width="100%"
          height="100%"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCyYmtY6bu65QsngesmEAwAnlB9nsG5KTI&q=Breckenhill&zoom=9"
          allowFullScreen
        ></iframe>
      </div>
      <section className="checkout-button-section flex flex-col items-center">
        <Link href="https://breckenhill.co.uk/contact/">
          {" "}
          <button className="text-utd-red font-bold border-2 border-utd-red rounded mt-8 breckenhill-button hidden">
            Breckenhill
          </button>
        </Link>
      </section>
    </div>
  );
}
