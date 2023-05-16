import { useState } from 'react';
import PropTypes from 'prop-types';

import '../FormSearchVin/Form.css';

import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormSearchVin = ({ onSubmit, addCodes }) => {
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
    } else if (validationQuery.length > 17) {
      toast.error('Please enter 17 character code');
      return;
    }

    onSubmit(searchQuery);
    addCodes({ code });

    resetForm();
  };

  const resetForm = () => {
    setSearchQuery('');
    setCode('');
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter VIN"
          onChange={handleSearchQuery}
          name="searchQuery"
          value={searchQuery}
          pattern="^(?=\d*[a-zA-Z])(?=\D*\d)[a-zA-Z0-9]+$"
        />
        <button className="btn-search" type="submit">
          <FcSearch fontSize={22} />
        </button>
      </form>
    </>
  );
};

FormSearchVin.propTypes = {
  onSubmit: PropTypes.func,
  addCodes: PropTypes.func,
};

export default FormSearchVin;