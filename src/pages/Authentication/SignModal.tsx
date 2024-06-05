import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { setCredentials, setToken } from '../../features/auth/authSlice';
import axiosInstance from '../../core/lib/axios.config';

import { IoCloseOutline } from 'react-icons/io5';
import Loader from '../../common/Loader';
import { setCokkie } from '../../core/helpers/cookie';

type State = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const SignModal: React.FC<State> = ({ showModal, setShowModal }) => {
  const [load, setLoad] = useState<boolean>(false);
  const [email, setEmail] = useState<any>('');
  const [password, setPwd] = useState<any>('');
  const [show, setShow] = useState<boolean>(true);

  const useref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (useref.current) {
      useref.current.focus();
    }
  }, []);

  function handleUser(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  function handlePwd(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setPwd(e.target.value);
  }

  const [error, setError] = useState<string>('');
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoad(true);
      const userData = await axiosInstance.post('/auth/login', {
        email,
        password,
      });

      setCokkie(userData?.data.token);

      dispatch(setCredentials({ ...userData.data?.user }));
      dispatch(setToken(userData.data?.token));
      if (userData.status == 200) {
        setEmail('');
        setPwd('');
        setLoad(false);
        navigate('/admin');
      }
    } catch (err) {
      setError('Invalid  email or password.');
    } finally {
      setLoad(false);
    }
  };

  return (
    <div>
      {showModal ? (
        <>
          <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative min-w-47.5 min-h-[300px] py-20  w-full mx-4 max-w-[600px] grid place-items-center rounded-lg bg-white   px-4  my-6  ">
              {load ? (
                <div className="h-full">
                  <Loader />
                </div>
              ) : (
                <>
                  <button className="absolute top-4 right-4">
                    <IoCloseOutline
                      onClick={() => setShowModal(false)}
                      style={{ fontSize: '30px', color: 'black' }}
                    />
                  </button>

                  <div>
                    <h3 className="text-4xl w-full font-normal pb-8   font-roboto">
                      Log in as Partner
                    </h3>
                    <form onSubmit={handleSubmit}>
                      <div>
                        <label className="mb-2.5 block  font-roboto text-[16px] normal font-normal  dark:text-white">
                          Email
                        </label>
                        <div className=" relative h-[48px] lg:w-[388px]">
                          <input
                            value={email}
                            onChange={handleUser}
                            ref={useref}
                            type="email"
                            placeholder="Enter your email"
                            className=" border-2 border-opacity-65 p-4 border-[#D4D7E3] w-full bg-white h-[48px] rounded-md"
                          />
                        </div>
                      </div>

                      <div className="mb-2">
                        <label className="mb-2.5 mt-2 block font-medium text-black dark:text-white">
                          Password
                        </label>
                        <div className="relative">
                          <input
                            value={password}
                            onChange={handlePwd}
                            type="password"
                            placeholder=""
                            className="border-2 border-opacity-65 p-4 border-[#D4D7E3] w-full bg-white h-[48px] rounded-md"
                          />
                        </div>
                        {error && (
                          <p className="font-normal  text-danger">{error}</p>
                        )}
                      </div>

                      <div>
                        <input
                          type="submit"
                          value="Sign In"
                          
                          data-bs-dismiss="modal"
                          className="w-full cursor-pointer mt-4 rounded-lg border h-13 border-primary bg-primary  text-white transition hover:bg-opacity-90"
                        />
                      </div>
                    </form>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default SignModal;
