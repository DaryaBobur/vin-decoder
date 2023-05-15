import { MagnifyingGlass } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <MagnifyingGlass visible={true} height="100" width="100" color="black" />
    </div>
  );
};

export default Loader;
