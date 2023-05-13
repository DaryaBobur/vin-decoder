import GeneralPage from 'pages/General';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
      <GeneralPage />

      <ToastContainer autoClose={3000} theme={'colored'} />
    </div>
  );
};

export default App;
