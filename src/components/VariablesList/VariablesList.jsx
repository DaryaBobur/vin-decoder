import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const VariablesList = ({ items }) => {
  const item = items.data.Results;
  const location = useLocation();

  return (
    <ul>
      {item.map(({ Name, Description, ID }) => (
        <li key={ID}>
          <NavLink state={{ from: location }} to={`/variables/${ID}`}>
            <h3>{Name}</h3>
          </NavLink>
          <p> {Description} </p>
        </li>
      ))}
    </ul>
  );
};

VariablesList.propTypes = {
  items: PropTypes.object.isRequired,
};

export default VariablesList;
