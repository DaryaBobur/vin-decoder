import PropTypes from 'prop-types';
import { useLocation, NavLink } from 'react-router-dom';
import '../VariablesList/VariablesList.css';

const VariablesList = ({ items }) => {
  const item = items.data.Results;
  const location = useLocation();

  return (
    <ul className="variables-list">
      {item.map(({ Name, Description, ID }) => (
        <li key={ID} className="variables-list__item">
          <NavLink
            className="variables-list__link"
            state={{ from: location }}
            to={`/variables/${ID}`}
          >
            <h3 className="name-var">{Name}</h3>
          </NavLink>
          <div className="description-var"dangerouslySetInnerHTML={{__html: Description}} ></div>
        </li>
      ))}
    </ul>
  );
};

VariablesList.propTypes = {
  items: PropTypes.object.isRequired,
};

export default VariablesList;
