import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { nanoid } from 'nanoid';

import AppBar from 'components/AppBar/AppBar';
import FormSearchVin from 'components/FormSearchVin/FormSearchVin';
import VinList from 'components/VinList/VinList';
import Loader from 'components/Loader/Loader';
import VinCodeList from 'components/VinList/VinCodeList/VinCodeList';

import { getSearchVin } from 'services/getSearchVin';

const GeneralPage = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [codes, setCodes] = useState(
    JSON.parse(localStorage.getItem('codes')) ?? []
  );

  useEffect(() => {
    window.localStorage.setItem('codes', JSON.stringify(codes));
  }, [codes]);

  const addCode = data => {
    const code = {
      id: nanoid(),
      code: data.code,
    };
    setCodes(prevState => [code, ...prevState]);
  };

  const vin = searchParams.get('vin');

  const onChangeQuery = vin => {
    setSearchParams({ vin: vin });
    setItems([]);
  };

  useEffect(() => {
    const getSearchQuery = async () => {
      if (!vin) {
        return;
      }
      setIsLoading(true);

      try {
        const data = await getSearchVin({ vin });
        setItems(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getSearchQuery();
  }, [vin]);

  return (
    <>
      <AppBar />
      <FormSearchVin onSubmit={onChangeQuery} addCodes={addCode} />
      {codes.length !== 0 && <VinCodeList codes={codes} />}
      {isLoading && <Loader />}
      {items.length !== 0 && <VinList items={items} />}
      {error && <p>Please try again later!</p>}
    </>
  );
};

export default GeneralPage;