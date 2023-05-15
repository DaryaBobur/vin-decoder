
const VinCodeList = ({ codes }) => {
  console.log(codes);
  return (
    <div>
        <h2>List codes</h2>
    <ul>
      {codes.slice(0, 5).map(({ code, id }) => (
        <li key={id}>
          <p>VIN code : {code}</p>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default VinCodeList;