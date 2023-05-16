import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation, useNavigate } from 'react-router-dom';

import AppBar from 'components/AppBar/AppBar';
import Loader from 'components/Loader/Loader';
import VariableValue from 'components/VariablesList/VariableValue/VariableValue';
import { getVariableDescription } from 'services/getSearchVin';
import { FcPrevious } from 'react-icons/fc';
import '../VariableDescription/VariableDescription.css';

const VariableDescription = () => {
  const [variable, setVariable] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { variableId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from ?? '/variables';

  useEffect(() => {
    const fetchVariableDescription = async () => {
      if (!variableId) {
        return;
      }

      setIsLoading(true);

      try {
        const data = await getVariableDescription({ variableId });
        setVariable(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVariableDescription();
  }, [variableId]);

  const goBack = () => navigate(from);

  return (
    <>
      <AppBar />
      {variable && (
        <button className="btn-back" type="button" onClick={goBack}>
          <FcPrevious fontSize={16} /> go back
        </button>
      )}
      {variable && <VariableValue items={variable} />}
      {isLoading && <Loader />}
      {error && <p>Please try again later!</p>}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default VariableDescription;
