import { useState } from 'react';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormSearchVin = ({ onSubmit, add }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [code, setCode] = useState('');

  const handleSearchQuery = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase().trim());
    setCode(e.target.value)


  };

  const handleSubmit = e => {
    e.preventDefault();

    const validationQuery = searchQuery.trim();
    if (validationQuery === '') {
      toast.error('Please enter a VIN code!');
      return;
    } else if (validationQuery.length < 17) {
      toast.error('Please enter 17 character code');
      return;
    }

    onSubmit(searchQuery);
    add({code});
    
    resetForm();
  };

  const resetForm = () => {
    setSearchQuery('');
    setCode('')
  };
  console.log(searchQuery);
  return (
      <>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Enter VIN"
            onChange={handleSearchQuery}
            name="searchQuery"
            value={searchQuery}
            // pattern= "/[^a-zA-Z0-9]/"
          />
          <button type="submit">Send</button>
        </form>
      </>
  );
};

FormSearchVin.propTypes = {
  onSubmit: PropTypes.func,
};

export default FormSearchVin;
