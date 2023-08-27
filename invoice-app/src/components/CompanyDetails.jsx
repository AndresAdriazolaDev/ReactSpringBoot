export const CompanyDetails = ({ client }) => {
  const { name: nameCompany, fiscalNumber } = client.company;
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item active">{nameCompany}</li>
        <li className="list-group-item">{fiscalNumber}</li>
      </ul>
    </>
  );
};
