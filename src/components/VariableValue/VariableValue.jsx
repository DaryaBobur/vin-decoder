import PropTypes from 'prop-types';

const VariablesValue = ({ items }) => {
  const item = items.data.Results;

  if (item.length === 0) {
    return <p>No details</p>;
  }

  return (
    <>
      <h2>All the accepted values:</h2>
      <ul>
        {item.map(({ElementName, Name }) => (
          <li key={Name}>
            <p>{ElementName} - {Name} </p>
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
