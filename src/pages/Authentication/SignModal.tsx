import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setCredentials, setToken } from '../../features/auth/authSlice';
import axiosInstance from '../../core/lib/axios.config';

import { IoCloseOutline } from 'react-icons/io5';
import Loader from '../../common/Loader';
import { setCokkie } from '../../data/helpers/cookie';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa6';

type State = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const SignModal: React.FC<State> = ({ showModal, setShowModal }) => {
  const [load, setLoad] = useState<boolean>(false);
  const [email, setEmail] = useState<any>('');
  const [password, setPwd] = useState<any>('');
  const [show, setShow] = useState<boolean>(false);

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

      const token = userData?.data.token;
      if (token) {
        setCokkie(token);
      }

      dispatch(setCredentials({ ...userData.data?.user }));
      dispatch(setToken(token));

      if (userData.status === 200) {
        setEmail('');
        setPwd('');
        navigate('/admin');
      }
    } catch (err) {
      setError('Invalid email or password.');
    } finally {
      setLoad(false);
    }
  };

  const toggleShowPassword = () => {
    setShow(!show);
  };
  return (
    <div>
      {showModal ? (
        <>
          <div className="fixed  inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative mx-4 my-6 grid  min-h-[300px] w-full min-w-47.5 max-w-[600px] place-items-center rounded-lg bg-white   px-4  py-20  ">
              {load ? (
                <div className="h-full">
                  <Loader />
                </div>
              ) : (
                <>
                  <button className="absolute right-4 top-4">
                    <IoCloseOutline
                      onClick={() => setShowModal(false)}
                      style={{ fontSize: '30px', color: 'black' }}
                    />
                  </button>

                  <div>
                    <h3 className="w-full pb-8 font-roboto text-4xl   font-normal">
                      Log in as Partner
                    </h3>
                    <form onSubmit={handleSubmit}>
                      <div>
                        <label className="normal mb-2.5  block font-roboto text-xs font-normal  dark:text-white">
                          Email
                        </label>
                        <div className=" relative h-12 lg:w-96">
                          <input
                            value={email}
                            onChange={handleUser}
                            ref={useref}
                            type="email"
                            placeholder="Enter your email"
                            className=" h-[48px] w-full rounded-md border-2 border-[#D4D7E3] border-opacity-65 bg-white p-4"
                          />
                        </div>
                      </div>

                      <div className="mb-2">
                        <label className="mb-2.5 mt-2 block font-roboto text-xs font-medium text-black dark:text-white">
                          Password
                        </label>
                        <div className="relative">
                          <input
                            value={password}
                            onChange={handlePwd}
                            type={`${show ? 'text' : 'password'}`}
                            placeholder="Password"
                            className="h-12 w-full rounded-md border-2 border-[#D4D7E3] border-opacity-65 bg-white p-4"
                          />
                          <button
                            type="button"
                            onClick={toggleShowPassword}
                            className="absolute end-0 top-0  rounded-e-md p-3.5 pl-2"
                          >
                            {show ? <FaEye /> : <FaRegEyeSlash />}
                          </button>
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
                          className="mt-4 h-13 w-full cursor-pointer rounded-lg border border-primary bg-primary  text-white transition hover:bg-opacity-90"
                        />
                      </div>
                    </form>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-40"></div>
        </>
      ) : null}
    </div>
  );
};

export default SignModal;
