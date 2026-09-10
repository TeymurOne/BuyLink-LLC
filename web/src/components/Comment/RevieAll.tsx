import Review from '../Review';
import './index.css';

export default function RevieAll() {
  return (
    <div className="custom-scroll flex flex-col space-y-0 overflow-auto  pr-10  md:space-y-4">
      <Review />
      <Review />
      <Review />
    </div>
  );
}
