import { useEffect } from 'react';
import modalqr from '../../../images/Pages-index/modal/modalqr.svg';
import qr from '../../../images/Pages-index/modal/qr.svg';
import '../Privacy.css';
interface ModalProps {
  showModal: boolean;
  setShowModal: any;
}

const ModalQr: React.FC<ModalProps> = ({ showModal, setShowModal }) => {

  useEffect(()=>{
    const handleClickOutside = (event: MouseEvent) => {
      if (showModal) {
        setShowModal(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };

  }, [showModal])
  return (
    <>
      {showModal ? (
        <>
              <div id='center' className="justify-center big    items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              
                <div className="   relative w-full  max-w-[900px]  mx-auto    flex flex-col   outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 ">
                  <button
                    className="p-1  bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                  
                  </button>
                </div>
              
                <section className="modalqr mx-auto   relative ">
                <button
                    className=" absolute top-0 right-0 z-99999   font-bold uppercase px-6 py-2 text-sm "
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                  x
                  </button>
                  <div className="qr-left">
                    <h2 className="font-inter font-[700] text-[30px] text-[#4C5DF5]">
                      Download BuyLink
                    </h2>
                    <img src={modalqr} alt="Modal Qr" />
                  </div>
                  <div className="qr-right">
                    <div className="qr-container">
                      <img className='max-w-[166px] w-full' src={qr} alt=" Qr" />
                    </div>
                    <h2 className="text-[#4C5DF5] my-6 text-[28px] font-[600]  w-[351px] h-[62px] rounded-[12px]">
                      For download Scan QR{' '}
                    </h2>
                  </div>
                </section>
                
                </div>
              </div> 
              
            <div id='center' className="justify-center small hidden  items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              
              <div className="   relative w-full  max-w-[420px]  mx-auto    flex flex-col   outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 ">
                <button
                  className="p-1  bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                
                </button>
              </div>
            
              <section className="modalqr mx-auto   relative ">
              <button
                  className=" absolute top-0 right-0 z-99999   font-bold uppercase px-6 py-2 text-sm "
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                x
                </button>
                <div  className='px-4'>
                  <h2 className="font-inter font-[700] text-[12px] text-[#4C5DF5]">
                    Download BuyLink
                  </h2>
                  <img className='w-[111px] h-[111px]' src={modalqr} alt="Modal Qr" />
                </div>
                 <div className="gradient flex w-[200px] items-center justify-center flex-col h-[219px]">
                  <div className="rounded-xl border-2 border-[#4C5DF5]  bg-white grid place-items-center w-[100px] h-[93px]">
                    <img className='w-[66px] h-[66px]' src={qr} alt=" Qr" />
                  </div>
                  <h2 className="text-[#4C5DF5]  text-[12px] font-[600]   rounded-[12px]">
                    For download Scan QR{' '}
                  </h2>
                </div> 
              </section>
              
              </div>
            </div>
        

          <div className="opacity-25    place-items-center fixed inset-0 z-40 bg-black"></div>



        

          
        </>
      ) : null}
    </>
  );
};

export default ModalQr;

