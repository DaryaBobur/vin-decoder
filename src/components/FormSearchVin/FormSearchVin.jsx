import { useState } from 'react';
import PropTypes from 'prop-types';
import '../FormSearchVin/Form.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormSearchVin = ({ onSubmit, add }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [code, setCode] = useState('');

  const handleSearchQuery = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase().trim());
    setCode(e.target.value.toLowerCase().trim());
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
    add({ code });

    resetForm();
  };

  const resetForm = () => {
    setSearchQuery('');
    setCode('');
  };
  
  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <input className='input'
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter VIN"
          onChange={handleSearchQuery}
          name="searchQuery"
          value={searchQuery}
          // pattern= "/[^a-zA-Z0-9]/"
        />
        <button className='btn-search' type="submit">Search</button>
      </form>
    </>
  );
};

FormSearchVin.propTypes = {
  onSubmit: PropTypes.func,
};

export default FormSearchVin;
