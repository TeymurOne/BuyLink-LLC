import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import detector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";

const resources = {
  az: {
    translation: {
  
        "member": {
          "0": "Üzvlər",
          "1": "Üzv yarat",
          "2": "Şəkil",
          "3": "Üzv tipləri",
          "4": "Ad",
          "5": "Vəzifə ",
          "6": "Hərəkətlər ",
          "7": "Dəyiş ",
          "8": "Ləğv et ",
          "9": "Saxla ",
          "10": "Dəyiş",
          "11":"Üzv Tipləri"
        },
        "branch": {
          "0": "Filial",
          "1": "Yarat Filial",
          "2": "Ad",
          "3": "Lat",
          "4": "Lng",
          "5": "Ünvan ",
          "6": "Hərəkətlər ",
          "7": "Dəyiş ",
          "8": "Ləğv et ",
          "9": "Saxla ",
          "10": "Dəyiş",
          "11":"Haqqında",
          "12":"Xəritə",
        },
        "product": {
          "0": "Məhsul ",
          "1": "Yarat Məhsul",
          "2": "Şəkil",
          "3": "Başlıq",
          "4": "Məzmun",
          "5": "Qiymət ",
          "6": "Endirilmiş Price ",
          "7": "Kateqoriya ",
          "8": "Hərəkətlət ",
          "9": "Ləgv et ",
          "10": "Saxla",
          "11": "Dəyış",
          "12":"Haqqında"
        },
        "operator": {
          "0": "İşçi ",
          "1": "Yarat İşçi",
          "2": "Filiali",
          "3": "Ad",
          "4": "Email",
      
          "5": "Hərəkətlər ",
          "6": "Ləğv et ",
          "7": "Saxla",
          "8": "Dəyiş",
          "9": "Şifrə",
          "10":"Seçin"
        },
        "partnerinfo": {
          "0": "Parner Məlumat ",
          "1": "Logo",
          "3": "Cover Şəkil",
          "4": "Ad",
      
          "5": "Haqqında ",
          "6": "Ünvan ",
          "7": "Məzmun",
          "8": "Email",
          "9": "Telefon ",
          "10": "Facebook ",
          "11": "Whatsapp",
          "12": "Twitter",
          "13": "Linkedln ",
          "14": "YouTube ",
          "15": "Instagram",
          "16": "Ləgv et",
          "17": "Saxla"
        }
      }
      
      
      
    },

  en: {
    translation: {
    
        "member": {
          "0": "Members",
          "1": "Create Member",
          "2": "Image",
          "3": "Membertype",
          "4": "Full Name",
          "5": "Position ",
          "6": "Actions ",
          "7": "Change ",
          "8": "Cancal ",
          "9": "Save ",
          "10": "Update",
          "11":"MemberType"
        },
        "branch": {
          "0": "Branch ",
          "1": "Create Branch",
          "2": "Name",
          "3": "Lat",
          "4": "Lng",
          "5": "ADDRESS ",
          "6": "Actions ",
          "7": "Change ",
          "8": "Cancal ",
          "9": "Save ",
          "10": "Update",
          "11":"Details",
          "12":"Map",
        },
        "product": {
          "0": "Products ",
          "1": "Create Products",
          "2": "Image",
          "3": "Title",
          "4": "Description",
          "5": "Price ",
          "6": "Discount Price ",
          "7": "Category ",
          "8": "Actions ",
          "9": "Cancel ",
          "10": "Save",
          "11": "Update",
          "12":"Details"

        },
        "operator": {
          "0": "Operator ",
          "1": "Create Operator",
          "2": "Branch",
          "3": "Name",
          "4": "Email",
      
          "5": "Actions ",
          "6": "Cancel ",
          "7": "Save",
          "8": "Update",
          "9":"Password",
          "10":"Select"
        },
        "partnerinfo": {
          "0": "Parner Info ",
          "1": "Logo",
          "3": "Cover Photo",
          "4": "Title",
      
          "5": "About ",
          "6": "Address ",
          "7": "Description",
          "8": "Email",
          "9": "Phone ",
          "10": "Facebook ",
          "11": "Whatsapp",
          "12": "Twitter",
          "13": "Linkedln ",
          "14": "YouTube ",
          "15": "Instagram",
          "16": "Cancel",
          "17": "Save"
      
        }
      
      }
      
      
    }
   
  }
 


i18n
  .use(initReactI18next) 
  .use(detector)
  .use(backend)
  .use(initReactI18next) 
  .init({
    resources,

    lng:localStorage.getItem("lng") || "en" 
  
  });

  export default i18n;