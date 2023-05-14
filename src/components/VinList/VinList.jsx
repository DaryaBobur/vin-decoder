import PropTypes from 'prop-types';

const VinList = ({ items }) => {
  const item = items.data.Results;

  return (
    <ul>
      {item.map(
        ({ Value, Variable, VariableId }) =>
          Value !== null &&
          Value !== '' &&
          Value !== '0' && (
            <li key={VariableId}>
              <p>
                {Value} : {Variable}
              </p>
            </li>
          )
      )}
    </ul>
  );
};

VinList.propTypes = {
  items: PropTypes.object.isRequired,
};

export default VinList;
