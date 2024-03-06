  import modalqr from '../../../images/pageLand/ModalQr.svg';
  import qr from '../../../images/pageLand/Qr.svg';
  import '../Privacy.css';
  interface ModalProps{
    showModal:boolean,
    setShowModal:any

  }


  const ModalQr: React.FC<ModalProps>= ({ showModal, setShowModal }) => {
  
    return (
      <>
  
            
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              
                  <div className="   relative  w-[1400px] ml-20   flex flex-col   outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 ">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                  
                    <section className="modalqr ml-30  relative ">
                    <button
                        className=" absolute top-0 right-0 z-99999   font-bold uppercase px-6 py-2 text-sm "
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                      x
                      </button>
                      <div className="qr-left">
                        <h2 className="font-inter font-[700] text-[36px] text-[#4C5DF5]">
                          Download BuyLink
                        </h2>
                        <img src={modalqr} alt="Modal Qr" />
                      </div>
                      <div className="qr-right">
                        <div className="qr-container">
                          <img src={qr} alt=" Qr" />
                        </div>
                        <button className="bg-[#4C5DF5] my-6 text-[28px] font-[400] text-white w-[331px] h-[62px] rounded-[12px]">
                          For download Scan QR{' '}
                        </button>
                      </div>
                    </section>
                    
                    </div>
                  </div>
            
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>
      
    );
  };

  export default ModalQr;
