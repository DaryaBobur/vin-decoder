import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import FormSearchVin from 'components/FormSearchVin/FormSearchVin';
import VinList from 'components/VinList/VinList';
import Loader from 'components/Loader/Loader';
import { getSearchVin } from 'services/getSearchVin';


const GeneralPage = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

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
      <FormSearchVin onSubmit={onChangeQuery} />
      {items.length !== 0 && (
      <div><VinList items={items} /></div>
      )}
      {isLoading && <Loader />}
      {error && <p>Please try again later!</p>}
    </>
  );
};

export default GeneralPage;
