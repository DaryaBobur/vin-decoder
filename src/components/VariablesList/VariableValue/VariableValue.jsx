import PropTypes from 'prop-types';
import './VariableValue.css';

const VariablesValue = ({ items }) => {
  const item = items.data.Results;

  if (item.length === 0) {
    return <p className="text">No details!</p>;
  }

  return (
    <>
      <h2 className="title">All values:</h2>
      <ul className="value-list">
        {item.map(({ ElementName, Name }) => (
          <li className="value-list__item" key={Name}>
            <p>
              {ElementName} - {Name}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

VariablesValue.propTypes = {
  items: PropTypes.object.isRequired,
};

export default VariablesValue;
