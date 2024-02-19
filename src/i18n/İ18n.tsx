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
          "2": "Filial Adı",
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
          "13":"Adına görə axtarış"
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
          "0": "Operator ",
          "1": "Yarat Operator",
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
          "0": "Partnyor Məlumat ",
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
        },
        "index-header": {
          "0": "Haqqımızda",
          "1": "Üstünlüklərimiz",
          "2": "Necə işləyir?",
          "3": "FAQ",
          "4": "Bizimlə əlaqə",
          "5": "Giriş",
          "6": "Partnyor ol"
        },
        "index-main": {
          "0": "BuyLink  ",
          "1": "dünyanın ilk rəqəmsal referal platformasıdır.",
          "2": "Bizim missiyamız insanları və biznesləri bir referal sosial şəbəkəsi altında birləşdirərək onların müəyyən qazanc və üstünlüklərdən faydalanmasını təmin etməkdir.",
          "3": "İzahedici video",
          "4": "Bu video ən sadə şəkildə bizim   biznesin necə işlədiyini göstərir.",
          "5": "Elə indi yoxla"
        },
        "index-wallet": {
          "0": "BuyLink Pul kisəsi   ",
          "1": " bonus və mükafatlar.",
          "2": "qazanaraq xərclərinə qanaət et.",
          "3": "Bizim pul kisəsi sayəsində ödənişlər etməklə bir sıra üstünlüklərdən yararlanacaqsan:",
          "4": "Nağdlaşdırma",
          "5": "Mükafatlara qənaət",
          "6": "Partnyorumuzda pul kisəsi vasitəsilə ödəniş",
          "7": "Yeni funksiya çox yaxında!"
        },
        "index-partnyor": {
          "0": "Yeni",
          "1": "istifadəçi və partnyorları",
          "2": "kəşf et",
          "3": "Şəbəkəni genişləndir və tövsiyə edəcəyin bizneslərdən gəlir əldə etməyin  ən asan yoluna bizimlə başla.",
          "4": "Partnyorlarımızla tanış ol",
          "5": "Ana səhifədəki partynor siyahımızı kəşf et",
          "6": "Şəbəkəni genişləndir",
          "7": "Axtarış bölməsindən dostlarını və ya yeni istifadəçiləri axtar. Onları öz dost siyahına əlavə edərək istinad prosesinə başla.",
          "8": "Müxtəlif kateqoriyaları kəşf et",
          "9": "Maraqlandığın biznesləri burada kəşf edərək onların endirim və qazanc dərəcələri ilə tanış ola bilərsən. "
        },
        "index-partnyor2":{
          "0":"3 addımla",
          "1":"qazanc əldə et",
          "2":"Öz şəbəkənə istədiyin biznesi tövsiyə et və qazan.",
          "3":  "Partnyor səhifəsinə daxil ol",
          "4":"Tərəfdaşın kataloqunu araşdırın:məhsul və ya xidmətlərin siyahısı, qiymətlər, endirimlər və referal keşbekləri.",
          "5":"İstinad linkini öz şəbəkən ilə bölüş",
          "6":"Partnyor səhifəsində sən bu biznesi söhbət vasitəsilə şəbəkənə tövsiyə edə və ya poçtla paylaşa bilərsən.",
          "7":"Pul kisəsinə keçid et və balansını yoxla",
          "8":"Şəbəkən istinad linkindən istifadə etdikdən sonra səm  mükafatlar qazanırsan. Sonda pul kisəsi səhifəsində balansını yoxlaya bilərsən."
        },
        "index-partnyor3":{
          "0":"Endirim",
          "1":"necə əldə etmək olar?",
          "2":"İstinad linklərindən istifadə edərək endirimlər qazan.",
          "3":"İstinad səhifəsində dostlarının tövsiyələrini nəzərdən keç",
          "4":"Şəbəkənin paylaşdığı bütün yazılara bax və səni  maraqlandıran birini seç.",
          "5":"QR səbətinə istinad linklərini əlavə et",
          "6":"Burada tərəfdaşlar üçün müxtəlif istifadəçilərin bütün istinad bağlantılarını görə bilərsən.",
          "7":"QR kodu gör və endirim əldə et",
          "8":"Qr kodu alış-veriş zamanı partnyora göstər və endirim əldə et."
        },
        "partner":{
          "0":"Partnyor ol",
          "1":"Partnyor şəbəkəmizə qoşularaq satışlarını, həmçinin müştəri bazanı artıra bilərsən.",
          "2":"Elə indi qoşul"
        },
        "letters":{
          "0":"Jurnalımıza",
          "1":"qoşul",
          "2":"BuyLink-lə bağlı ən son yenilik və fürsətləri e-poçtuna göndərəcəyik.",
          "3":"İndi qoşul"
        },
        "accordion":{
          "0":"Ən çox soruşulanlar",
          "1":"BuyLink nədir?",
          "2":"Bizim missiyamız insanları və biznesləri bir referal sosial şəbəkəsi altında birləşdirərək onların müəyyən qazanc və üstünlüklərdən faydalanmasını təmin etməkdir.",
          "3":"BuyLink-in üstünlükləri nələrdir?",
          "4":"Necə işləyirik?",
          "5":"Necə işləyirik? necə etmək olar?"
        },
        "footer":{
          "0":"İndi ödənişlərdən daha çox keşbek və qazanclar əldə et.",
          "1":"Şirkət",
          "2":"Haqqımızda",
          "3":"İş imkanı",
          "4":"Bloq",
          "5":"Məhsul",
          "6":"Hesabat",
          "7":"Müqavilə",
          "8":"Mühasibat",
          "9":"Resurslar",
          "10":"Biznes təklifi şablonu",
          "11":"Müqavilə şablonu",
          "12":"İzahedici video",
          "13":"2024 Bütün hüquqları qorunur",
          "14":"buylink@gmail.com"
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
          "2": "Branch Name",
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
          "13":"Search by name"
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
      
        },
        "index-header": {
          "0": "About",
          "1": "Features",
          "2": "How to use",
          "3": "FAQ",
          "4": "Contact us",
          "5": "Login",
          "6": "Become a partner"
        },
        "index-main": {
          "0": "BuyLink  ",
          "1": "is the world first digital referral network.",
          "2": "Our mission is to connect people in one referral social network where they are able to get actual benefits from recommendations.",
          "3": "Explainer Video",
          "4": "The video shows in basic how the applications works . We cover different industries in one platform",
          "5": "Try it now"
        },
        "index-wallet": {
          "0": "BuyLink Wallet - serves as a savings for your  ",
          "1": " bonuses and rewards.",
          "2": "a savings for your",
          "3": "This is the easisest way to manege your payme",
          "4": "Cash withdrawals",
          "5": "Saving of rewerads",
          "6": "Payment via wallet at our partner",
          "7": "New feature is in progress!"
        },
        "index-partnyor": {
          "0": "Explore new",
          "1": "users and ",
          "2": "partners",
          "3": "End-to-end payments and financial management in a single solution. Meet the right platform to help realize.",
          "4": "Explore Our partners",
          "5": "Meet our list of partnes at our homepage",
          "6": "Add People to your Network",
          "7": "Use search to find your friends and new users. Add them, and start to recommend each other",
          "8": "Explore different categories",
          "9": "Here you can find different industries,choose any that you areasasa interested in "
        },
        "index-partnyor2":{
          "0":" in 3 steps",
          "1":"Get cash ",
          "2":"End-to-end payments and financial management in a single solution. Meet the right platform to help realize.",
          "3":  "Enter to partner page",
          "4":"Explore menu / catalogue of partner. With list of products of services, prices, discounts, and referral cashbacks",
          "5":"Share referral link to your network",
          "6":"In partner page you can recommend this business to your network via chat on share on post",
          "7":"Go to wallet and check you balance",
          "8":"After your network use your referral link , you again rewards , and can check your balance in wallet page"
        },
        "index-partnyor3":{
          "0":"discount?",
          "1":"How to get",
          "2":"End-to-end payments and financial management in a single solution. Meet the right platform to help realize.",
          "3":"See you network recommendations in referral page",
          "4":"See all posts that you network share, and chooseone that interests you",
          "5":"Add referral link to Qr Basket",
          "6":"Here you can see all rederral links from different users for different partners",
          "7":"Show qr code and get discount",
          "8":"When you show you Qr code you get discount for you purchases "
        },
        "partner":{
          "0":"Become a partner",
          "1":"Risus habitant leo egestas mauris diam eget morbi tempus vulputate.",
          "2":"Join now"
        },
        "letters":{
          "0":"newsletter",
          "1":"Join our",
          "2":"Will send you weekly updates for your better finance management.",
          "3":"Join  now"
        },
        "accordion":{
          "0":"Frequently Asked Questions",
          "1":"What is the BUYLINK?",
          "2":"Lorem ipsum dolor sit amet, consectetur adipiscing elm, quis nostrud exercitation ullamco laboris nisi",
          "3":"BWhy do we use it??",
          "4":"How it works??",
          "5":"How to get cash??"
        },
          "footer":{
      "0":"Finance helps companies manage payments easily.",
      "1":"Company",
      "2":"About Us",
      "3":"Careers",
      "4":"Bloq",
      "5":"Product",
      "6":"Invoicing",
      "7":"Contract",
      "8":"Accounting",
      "9":"Resources",
      "10":"Proposal Template",
      "11":"Invoice Template",
      "12":"Tuturoial",
      "13":"2023 All Rights Reserved"
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

  export default i18n