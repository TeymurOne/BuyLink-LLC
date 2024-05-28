import  { useState } from 'react';
import axiosInstance from '../../core/lib/axios.config';
import CancelSaveButton from '../../data/helpers/Button';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa6';

const SignModal = () => {

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if (!oldPassword || !newPassword) {
      alert('Password is required');
      return;
    }

    try {
      const response = await axiosInstance.post('/auth/change-password', {
        current_password: oldPassword,
        new_password: newPassword,
      });

      if (response.status === 200) {
        alert(response.data.message);
        setOldPassword('');
        setNewPassword('');
      } else {
        console.error('Password change failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error while changing password:', error);
    }
  };

  const toggleShowPassword = (type:string)=> {
    if (type === 'old') {
      setShowOldPassword((prevState) => !prevState);
    } else {
      setShowNewPassword((prevState) => !prevState);
    }
  };

  return (
    <form>
      <h2 className="lg:text-5xl md:text-4xl text-2xl font-inter font-medium">
        Setting
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1  gap-10 mt-20">
        <div className="w-full">
          <label htmlFor="partner-name" className="text-tdColor font-works text-base">Partner Name</label>
          <input type="text" id="partner-name" title="Partner Name" className="w-full mt-2 shadow-md rounded-lg py-1" />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" title="e-mail" className="w-full shadow-md  mt-2 rounded-lg py-1"  />
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 mt-4 gap-10">
        <div className="w-full relative">
          <label htmlFor="old-password" className="text-tdColor font-works text-base">Old Password</label>
          <input type={showOldPassword ? 'text' : 'password'} id="old-password" title="Old Password" className="w-full mt-2 shadow-md rounded-lg py-3 px-4" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
          <button type="button" onClick={() => toggleShowPassword('old')} className="absolute top-9 pl-2 end-0 p-3.5 rounded-e-md">
            {showOldPassword ? <FaEye /> : <FaRegEyeSlash />}
          </button>
        </div>
        <div className='relative'>
          <label htmlFor="new-password">New Password</label>
          <input type={showNewPassword ? 'text' : 'password'} id="new-password" title="New Password" className="w-full shadow-md pl-3 mt-2 rounded-lg py-2" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
          <button type="button" onClick={() => toggleShowPassword('new')} className="absolute top-8  end-0 p-3.5 rounded-e-md">
            {showNewPassword ? <FaEye /> : <FaRegEyeSlash />}
          </button>
        </div>
      </div>
      <div className="mt-20">
        <CancelSaveButton onCancel={() => window.history.back()} onSave={handleSubmit} btnDisabled={!oldPassword || !newPassword} loading={false} />
      </div>
    </form>
  );
};

export default SignModal;
