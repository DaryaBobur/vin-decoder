import { MagnifyingGlass } from 'react-loader-spinner';
import '../Loader/Loader.css';

const Loader = () => {
  return (
    <div className="loader">
      <MagnifyingGlass visible={true} height="100" width="100" color="black" />
    </div>
  );
};

export default Loader;
