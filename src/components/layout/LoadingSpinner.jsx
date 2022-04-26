import { CircleLoader } from 'react-spinners';

const LoadingSpinner = () => {
  const color = '#95C9C1';
  return (
    <div className='w-100 mt-20'>
      <CircleLoader color={color} size={150} />
    </div>
  );
};

export default LoadingSpinner;
