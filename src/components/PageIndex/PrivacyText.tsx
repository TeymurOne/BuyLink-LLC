import { useTranslation } from "react-i18next";

  const PrivacyText = () => {
    const { t } = useTranslation();
    
    
    

    return (
      <>
        <div>
        <p>{t('privacy.0')}</p>
         
        
        </div>
      </>
    );
  };

  export default PrivacyText;
