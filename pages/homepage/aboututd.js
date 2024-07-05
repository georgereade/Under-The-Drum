export default function AboutUTD() {
  return (
    <div
      className="flex flex-col items-center w-screen bg-utd-green"
      id="venue"
    >
      <div className="bg-white text-black m-8 sm:m-16 rounded-xl">
        {" "}
        <h2 className="text-center uppercase font-extrabold px-4 py-8 text-2xl md:text-2xl lg:mx-80">
          2024 - the inaugural year for Under the Drum Festival{" "}
        </h2>
        <p className="text-center px-4 pt-8 text-md md:text-lg lg:mx-24 text-black">
          {" "}
          Welcoming 300 people to our barn, fields and woods in Country Antrim,
          for what we hope will become an annual event.
        </p>
        <p className="text-center px-4 pt-8 text-md md:text-lg lg:mx-24 text-black">
          Gathering musical talent from across Ireland and the UK, covering
          folk, rock, indie and trad genres. Besides music, there will also be
          food, art, poetry, yoga and more to explore.
        </p>
        <p className="text-center px-4 py-8 text-md md:text-lg lg:mx-24 text-black">
          Breckenhill is a family home and events venue, just 30 minutes from
          Belfast and on the edge of the Antrim Hills, under Drumadarragh Hill
          which inspired the name of the festival.
        </p>
      </div>
    </div>
  );
}
