import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const VinList = ({ items }) => {
  const item = items.data.Results;
//   const location = useLocation();

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
