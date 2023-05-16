import PropTypes from 'prop-types';
import '../VinList/VinList.css'
const VinList = ({ items }) => {
  const item = items.data.Results;

  return (
    <>
      <h2 className='title'>Decode VIN</h2>
      <ul className='decode-list'>
        {item.map(
          ({ Value, Variable, VariableId }) =>
            Value !== null &&
            Value !== '' &&
            Value !== '0' && (
              <li key={VariableId} className='decode-list__item'>
                <p>
                 <b>Variable:</b> {Variable}. <b>Value:</b> {Value}
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
