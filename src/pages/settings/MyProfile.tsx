import  { useState } from 'react';
import axiosInstance from '../../core/lib/axios.config';
import CancelSaveButton from '../../data/helpers/Button';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { setNewPwd, setoldPwd } from '../../features/auth/settingsSlice';
import { Title } from '../../components/ui/Title';

const SignModal = () => {

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const dispatch=useDispatch()
  const {oldPwd, newPwd}=useSelector((state:any)=>state.settings)


  const { t } = useTranslation();
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if (!oldPwd || !newPwd) {
      alert('Password is required');
      return;
    }

    try {
      const response = await axiosInstance.post('/auth/change-password', {
        current_password: oldPwd,
        new_password: newPwd,
      });

      if (response.status === 200) {
        alert(response.data.message);
        dispatch(setoldPwd(""));
        dispatch(setoldPwd(""));
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
      <Title>
      {t("settingDashboard.1")}
      </Title>
      {/* <div className="grid md:grid-cols-2 grid-cols-1  gap-10 mt-20">
        <div className="w-full">
          <label htmlFor="partner-name"  className="text-tdColor font-works text-base">  {t("settingDashboard.2")}as</label>
          <input type="text" id="partner-name" title="Partner Name" className="w-full mt-2 shadow-md rounded-lg py-1" />
        </div>
        <div>
          <label htmlFor="email">  {t("settingDashboard.4")}</label>
          <input type="email" id="email" title="e-mail" className="w-full shadow-md  mt-2 rounded-lg py-1"  />
        </div>
      </div> */}
      <div className="grid md:grid-cols-2 grid-cols-1 mt-4 gap-10">
        <div className="w-full relative">
          <label htmlFor="old-password" className="text-tdColor font-works text-base">  {t("settingDashboard.3")}</label>
          <input type={showOldPassword ? 'text' : 'password'} id="old-password" title="Old Password" className="w-full mt-2 shadow-md rounded-lg py-2 px-4" value={oldPwd} onChange={(e) => dispatch(setoldPwd(e.target.value))} />
          <button type="button" onClick={() => toggleShowPassword('old')} className="absolute top-8 pl-2 end-0 p-3.5 rounded-e-md">
            {showOldPassword ? <FaEye /> : <FaRegEyeSlash />}
          </button>
        </div>
        <div className='relative w-full'>
          <label htmlFor="new-password">  {t("settingDashboard.5")}</label>
          <input type={showNewPassword ? 'text' : 'password'} id="new-password" title="New Password" className="w-full shadow-md pl-3 mt-2 rounded-lg px-4 py-2" value={newPwd} onChange={(e) => dispatch(setNewPwd(e.target.value))} />
          <button type="button" onClick={() => toggleShowPassword('new')} className="absolute top-8 pl-2  end-0 p-3.5 rounded-e-md">
            {showNewPassword ? <FaEye /> : <FaRegEyeSlash />}
          </button>
        </div>
      </div>
      <div className="mt-20">
        <CancelSaveButton onCancel={() => window.history.back()} onSave={handleSubmit} btnDisabled={!oldPwd || !newPwd} loading={false} />
      </div>
    </form>
  );
};

export default SignModal;
