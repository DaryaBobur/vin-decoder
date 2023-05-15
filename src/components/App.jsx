import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { ToastContainer } from 'react-toastify';

const GeneralPage = lazy(() => import('../pages/General/General'));
const VariablesPage = lazy(() => import('../pages/Variables/Variables'));
const VariableDescription = lazy(() =>
  import('../pages/VariableDescription/VariableDescription')
);
const SharedLayout = lazy(() =>
  import('../components/SharedLayout/SharedLayout')
);

const App = () => {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={SharedLayout} />
          <Route index element={<GeneralPage />} />
          <Route path="/variables" element={<VariablesPage />} />
          <Route
            path="/variables/:variableId"
            element={<VariableDescription />}
          />
          <Route path="*" element={<GeneralPage />} />
        </Routes>
      </Suspense>

      <ToastContainer autoClose={3000} theme={'colored'} />
    </>
  );
};

export default App;
