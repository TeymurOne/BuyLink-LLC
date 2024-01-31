import Header from './Header';
import Footer from './Footer';
import PrivacyText from './PrivacyText';

const PrivacyPolicy = () => {
  return (
    <>
      <div className="w-full h-auto px-4 max-w-[1480px] mx-auto    cursor-pointer">
        <Header />
        <PrivacyText/>
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
