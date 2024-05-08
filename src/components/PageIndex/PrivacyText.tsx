import { useTranslation } from "react-i18next";
import  Aztext from '../home/privacy/Aztext';
import  Entext from '../home/privacy/Entext';

export default function PrivacyText() {
  const { t } = useTranslation();
  const local = t('default.0');
  console.log(local, 'local');

  
  return (
    <div className="max-w-[1200px] mx-auto">
{local ==='az' && <Aztext/>}
{local ==='en' && <Entext/>}
      
    </div>
  )
}
