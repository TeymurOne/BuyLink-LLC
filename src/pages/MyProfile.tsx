import React, { useState } from 'react';
import axiosInstance from '../core/lib/axios.config';

type State = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const SignModal: React.FC<State> = () => {
  const [current_password, setoldPwd] = useState('');
  const [new_password, setnewPwd] = useState('');

  function handlePwdNew(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setnewPwd(e.target.value);
  }

  function handlePwdold(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setoldPwd(e.target.value);
  }

  const pwdChangeSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/auth/change-password', {
        current_password,
        new_password,
      });

      if (response.status === 200) {
        alert(response.data.message);
        setnewPwd("")
        setoldPwd("")
      } else {
        console.error('Password change failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error while changing password:', error);
    }
  };

  return (
    <div>
      <div className="justify-center w-full  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative   py-20  w-full mx-4  grid place-items-center bg-[#F3F4F6]   px-4  my-6  ">
          <div>
            <h3 className="text-[36px] w-full pb-8 text-[#0C1421]  font-roboto">
              Change Password
            </h3>
            <form onSubmit={pwdChangeSubmit}>
              <div className="mb-2">
                <label className="mb-.5 block font-medium text-black dark:text-white">
                  Old Password
                </label>
                <div className="relative">
                  <input
                    value={current_password}
                    onChange={handlePwdold}
                    type="password"
                    placeholder="6+ Characters, 1 Capital letter"
                    className="border-2 border-opacity-65 p-4 border-[#D4D7E3] w-full  bg-white h-[48px] rounded-md"
                  />
                </div>
              </div>
              <div className="mb-2">
                <label className="mb-.5 block font-medium text-black dark:text-white">
                  New Password
                </label>
                <div className="relative">
                  <input
                    value={new_password}
                    onChange={handlePwdNew}
                    type="password"
                    placeholder="6+ Characters, 1 Capital letter"
                    className="border-2 border-opacity-65 p-4 border-[#D4D7E3] w-full bg-white h-[48px] rounded-md"
                  />
                </div>
              </div>

              <input
                type="submit"
                value="Change Password"
                data-bs-dismiss="modal"
                className="w-full cursor-pointer rounded-lg border h-[52px] border-primary bg-primary  text-white transition hover:bg-opacity-90"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignModal;
