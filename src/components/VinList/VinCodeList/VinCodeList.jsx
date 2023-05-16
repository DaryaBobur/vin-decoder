import { NavLink, useLocation } from 'react-router-dom';
import './VinCodeList.css';

const VinCodeList = ({ codes }) => {
  const location = useLocation();

  return (
    <>
      <h2 className="subtitle">History codes</h2>
      <ul className="codes-list">
        {codes.slice(0, 5).map(({ code, id }) => (
          <li key={id} className="codes-list__item">
            <NavLink
              className="codes-list__link"
              state={{ from: location }}
              to={`?vin=${code}`}
            >
              <p>
                <b>VIN code:</b> {code}
              </p>
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default VinCodeList;