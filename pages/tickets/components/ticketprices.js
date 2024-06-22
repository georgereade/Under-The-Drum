export default function TicketPrices() {
  return (
    <table className="md:w-1/4 w-screen text-center my-12">
      <thead>
        <tr>
          <th className="font-extrabold text-xl uppercase pt-3"></th>
          <th className="font-extrabold text-xl uppercase pt-3 text-white">
            Day Ticket
          </th>
          <th className="font-extrabold text-xl uppercase pt-3 text-white">
            Camping
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="font-extrabold text-xl uppercase pt-3 text-white">
            Earlybirds
          </td>
          <td className="font-extrabold text-xl uppercase pt-3">
            <span className="text-utd-blue">£40</span>
          </td>
          <td className="font-extrabold text-xl uppercase pt-3">
            <span className="text-utd-blue">£50</span>
          </td>
        </tr>
        <tr>
          <td className="font-extrabold text-xl uppercase pt-3 text-white">
            Standard
          </td>
          <td className="font-extrabold text-xl uppercase pt-3">
            <span className="text-utd-blue">£50</span>
          </td>
          <td className="font-extrabold text-xl uppercase pt-3">
            <span className="text-utd-blue">£60</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
