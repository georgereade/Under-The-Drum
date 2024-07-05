export default function TicketPrices() {
  return (
    <table className="md:w-1/4 w-screen text-center my-12 bg-utd-navy">
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
          <td className="font-extrabold text-xl uppercase pt-6 text-white">
            Earlybirds
          </td>
          <td className="font-extrabold text-3xl uppercase pt-6">
            <span className="text-utd-green border-b">£45</span>
          </td>
          <td className="font-extrabold text-3xl uppercase pt-6">
            <span className="text-utd-green border-b">£60</span>
          </td>
        </tr>
        <tr>
          <td className="font-extrabold text-xl uppercase pt-6 text-white">
            Standard
          </td>
          <td className="font-extrabold text-3xl uppercase pt-6">
            <span className="text-utd-green border-b">£50</span>
          </td>
          <td className="font-extrabold text-3xl uppercase pt-6">
            <span className="text-utd-green border-b">£65</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
