export const ClientDetails = ({ client }) => {
  const {
    name: nameClient,
    lastname,
    address: { country, city, street, number },
  } = client;

  return (
    <>
      <h3>Client Data</h3>
      <ul className="list-group">
        <li className="list-group-item active">{nameClient}</li>
        <li className="list-group-item">{lastname}</li>
        <li className="list-group-item">
          {country} / {city} {street} {number}
        </li>
      </ul>
    </>
  );
};
