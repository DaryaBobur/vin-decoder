import { useState, useEffect } from 'react';
import AppBar from 'components/AppBar/AppBar';
import Loader from 'components/Loader/Loader';
import VariablesList from 'components/VariablesList/VariablesList';
import { getSearchVariablesList } from 'services/getSearchVin';

const VariablesPage = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVariablesList = async () => {
      setIsLoading(true);
      try {
        const data = await getSearchVariablesList();
        setItems(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchVariablesList();
  }, []);

  return (
    <>
      <AppBar />
      {items.length !== 0 && <VariablesList items={items} />}
      {isLoading && <Loader />}
      {error && <p>Please try again later!</p>}
    </>
  );
};

export default VariablesPage;
