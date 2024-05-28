import Review from '../Review';
import './index.css'

export default function RevieAll() {
  return (
    <div className="flex flex-col md:space-y-4 space-y-0 pr-10  overflow-auto  custom-scroll">
      <Review />
      <Review />
      <Review />
    </div>
  );
}
