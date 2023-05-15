import PropTypes from 'prop-types';

const VinList = ({ items }) => {
  const item = items.data.Results;

  return (
    <>
      <h2>Decode VIN code</h2>
      <ul>
        {item.map(
          ({ Value, Variable, VariableId }) =>
            Value !== null &&
            Value !== '' &&
            Value !== '0' && (
              <li key={VariableId}>
                <p>
                 <b>Variable</b> : {Variable} - <b>Value</b> : {Value}
                </p>
              </li>
            )
        )}
      </ul>
    </>
  );
};

VinList.propTypes = {
  items: PropTypes.object.isRequired,
};

export default VinList;
