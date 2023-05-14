import PropTypes from 'prop-types';

const VariablesValue = ({ items }) => {
  const item = items.data.Results;

  if (item.length === 0) {
    return <p>No details</p>;
  }

  return (
    <ul>
      {item.map(({ Name }) => (
        <li key={Name}>
          <p> {Name} </p>{' '}
        </li>
      ))}
    </ul>
  );
};

VariablesValue.propTypes = {
  items: PropTypes.object.isRequired,
};

export default VariablesValue;
