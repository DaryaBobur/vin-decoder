import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const VinCodeList = ({ codes }) => {
  const location = useLocation();

  return (
    <div>
      <h2>History codes</h2>
      <ul>
        {codes.slice(0, 5).map(({ code, id }) => (
          <li key={id}>
            <NavLink state={{ from: location }} to={`?vin=${code}`}>
              <p><b>VIN code:</b> {code}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VinCodeList;
