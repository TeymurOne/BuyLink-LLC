import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import detector from 'i18next-browser-languagedetector';
import backend from 'i18next-http-backend';
const resources = {
  az: {
    translation: {
      default: {
        '0': 'az',
      },
      member: {
        '0': 'Üzvlər',
        '1': 'Üzv yarat',
        '2': 'Şəkil',
        '3': 'Üzv tipləri',
        '4': 'Ad',
        '5': 'Vəzifə ',
        '6': 'Hərəkətlər ',
        '7': 'Dəyiş ',
        '8': 'Ləğv et ',
        '9': 'Saxla ',
        '10': 'Dəyiş',
        '11': 'Üzv Tipləri',
        '12': 'Statistika',
        '13': 'Balans',
      },
      branch: {
        '0': 'Filial',
        '1': 'Yarat Filial',
        '2': ' Adı',
        '3': 'Lat',
        '4': 'Lng',
        '5': 'Ünvan ',
        '6': 'Hərəkətlər ',
        '7': 'Dəyiş ',
        '8': 'Ləğv et ',
        '9': 'Saxla ',
        '10': 'Dəyiş',
        '11': 'Haqqında',
        '12': 'Xəritə',
        '13': 'Adına görə axtarış',
      },
      product: {
        '0': 'Məhsul ',
        '1': 'Yarat Məhsul',
        '2': 'Şəkil',
        '3': 'Başlıq',
        '4': 'Məzmun',
        '5': 'Qiymət ',
        '6': 'Endirilmiş Price ',
        '7': 'Kateqoriya ',
        '8': 'Hərəkətlət ',
        '9': 'Ləgv et ',
        '10': 'Saxla',
        '11': 'Dəyış',
        '12': 'Haqqında',
        '13': 'Kateqoriya',
      },
      operator: {
        '0': 'Operator ',
        '1': 'Yarat Operator',
        '2': 'Filiali',
        '3': 'Ad',
        '4': 'Email',

        '5': 'Hərəkətlər ',
        '6': 'Ləğv et ',
        '7': 'Saxla',
        '8': 'Dəyiş',
        '9': 'Şifrə',
        '10': 'Seçin',
      },
      partnerinfo: {
        '0': 'Partnyor Məlumat ',
        '1': 'Logo',
        '3': 'Cover Şəkil',
        '4': 'Ad',

        '5': 'Haqqında ',
        '6': 'Ünvan ',
        '7': 'Məzmun',
        '8': 'Email',
        '9': 'Telefon ',
        '10': 'Facebook ',
        '11': 'Whatsapp',
        '12': 'Twitter',
        '13': 'Linkedln ',
        '14': 'YouTube ',
        '15': 'Instagram',
        '16': 'Ləgv et',
        '17': 'Saxla',
      },
      header: {
        '0': 'Haqqımızda',
        '1': 'Üstünlüklərimiz',
        '2': 'Necə işləyir?',
        '3': 'FAQ',
        '4': 'Bizimlə əlaqə',
        '5': 'Giriş',
        '6': 'Partnyor ol',
      },
      main: {
        '0': 'BuyLink  ',
        '1': 'dünyanın ilk rəqəmsal referal platformasıdır.',
        '2': `Bizim missiyamız insanları və biznesləri tövsiyələrdən faktiki fayda əldə edə biləcəkləri bir sosial şəbəkədə birləşdirməkdir.`,
        '3': 'İzahedici video',
        '4': 'Bu video ən sadə şəkildə bizim   biznesin necə işlədiyini göstərir.',
        '5': 'Yüklə BuyLink',
      },
      wallet: {
        '0': 'BuyLink Pul kisəsi   ',
        '1': ' bonus və mükafatlar.',
        '2': 'qazanaraq xərclərinə qanaət et.',
        '3': 'Bizim pul kisəsi sayəsində ödənişlər etməklə bir sıra üstünlüklərdən yararlanacaqsan:',
        '4': 'Nağdlaşdırma',
        '5': 'Mükafatlara qənaət',
        '6': 'Partnyorumuzda pul kisəsi vasitəsilə ödəniş',
        '7': 'Yeni funksiya çox yaxında!',
      },
      partnyor: {
        '0': 'Yeni',
        '1': 'istifadəçi və partnyorları  ',
        '2': '       kəşf et',
        '3': 'Şəbəkəni genişləndir və tövsiyə edəcəyin bizneslərdən gəlir əldə etməyin  ən asan yoluna bizimlə başla.',
        '4': 'Partnyorlarımızla tanış ol',
        '5': 'Ana səhifədəki partynor siyahımızı kəşf et',
        '6': 'Şəbəkəni genişləndir',
        '7': 'Axtarış bölməsindən dostlarını və ya yeni istifadəçiləri axtar. Onları öz dost siyahına əlavə edərək istinad prosesinə başla.',
        '8': 'Müxtəlif kateqoriyaları kəşf et',
        '9': 'Maraqlandığın biznesləri burada kəşf edərək onların endirim və qazanc dərəcələri ilə tanış ola bilərsən. ',
      },
      partnyor2: {
        '0': '3 addımla',
        '1': 'qazanc',
        '2': 'Öz şəbəkənə istədiyin biznesi tövsiyə et və qazan.',
        '3': 'Partnyor səhifəsinə daxil ol',
        '4': 'Tərəfdaşın kataloqunu araşdırın:məhsul və ya xidmətlərin siyahısı, qiymətlər, endirimlər və referal keşbekləri.',
        '5': 'İstinad linkini öz şəbəkən ilə bölüş',
        '6': 'Partnyor səhifəsində sən bu biznesi söhbət vasitəsilə şəbəkənə tövsiyə edə və ya poçtla paylaşa bilərsən.',
        '7': 'Pul kisəsinə keçid et və balansını yoxla',
        '8': 'Şəbəkən istinad linkindən istifadə etdikdən sonra səm  mükafatlar qazanırsan. Sonda pul kisəsi səhifəsində balansını yoxlaya bilərsən.',
        '9': ' əldə et',
      },
      partnyor3: {
        '0': 'Endirim  ',
        '1': 'necə əldə etmək olar?',
        '2': 'İstinad linklərindən istifadə edərək endirimlər qazan.',
        '3': 'İstinad səhifəsində dostlarının tövsiyələrini nəzərdən keç',
        '4': 'Şəbəkənin paylaşdığı bütün yazılara bax və səni  maraqlandıran birini seç.',
        '5': 'QR səbətinə istinad linklərini əlavə et',
        '6': 'Burada tərəfdaşlar üçün müxtəlif istifadəçilərin bütün istinad bağlantılarını görə bilərsən.',
        '7': 'QR kodu gör və endirim əldə et',
        '8': 'Qr kodu alış-veriş zamanı partnyora göstər və endirim əldə et.',
      },
      partner: {
        '0': 'Partnyor ol',
        '1': 'Partnyor şəbəkəmizə qoşularaq satışlarını, həmçinin müştəri bazanı artıra bilərsən.',
        '2': 'Elə indi qoşul',
      },
      letters: {
        '0': 'Jurnalımıza',
        '1': 'qoşul',
        '2': 'BuyLink-lə bağlı ən son yenilik və fürsətləri e-poçtuna göndərəcəyik.',
        '3': 'İndi qoşul',
      },
      accordion: {
        '0': 'Ən çox soruşulanlar',
        '1': 'BuyLink nədir?',
        '2': 'Bizim missiyamız insanları və biznesləri bir referal sosial şəbəkəsi altında birləşdirərək onların müəyyən qazanc və üstünlüklərdən faydalanmasını təmin etməkdir.',
        '3': 'BuyLink-in üstünlükləri nələrdir?',
        '4': 'Necə işləyirik?',
        '5': 'Necə işləyirik? necə etmək olar?',
      },
      footer: {
        '0': 'İndi ödənişlərdən daha çox keşbek və qazanclar əldə et.',
        '1': 'Şirkət',
        '2': 'Haqqımızda',
        '3': 'İş imkanı',
        '4': 'Bloq',
        '5': 'Məhsul',
        '6': 'Hesabat',
        '7': 'Müqavilə',
        '8': 'Mühasibat',
        '9': 'Məxfilik siyasəti',
        '10': 'Biznes təklifi şablonu',
        '11': 'Müqavilə şablonu',
        '12': 'İzahedici video',
        '13': '2024 Bütün hüquqları qorunur',
        '14': 'buylink@gmail.com',
        '15': '000-000-00',
      },
      privacy: {
        '0': `
        
    
        “BuyLink” mobil tətbiqinin Məxfilik Siyasəti
        Məzmun
        Şərhlər və hüquqi istinadlar
        Fərdi Məlumat (və ya Məlumat)
        Mobil Tətbiq İstifadəçisinin birbaşa, dolayı yolla və ya digər məlumatlarla əlaqəli hər hansı bir məlumat, fərdi identifikasiya nömrəsi daxil olmaqla, fiziki şəxsin kimliyini müəyyənləşdirməyə imkan verən məlumat.
        Məlumatdan istifadə
        Cari Tətbiq vasitəsilə avtomatik olaraq toplanan məlumatlar (və ya bu Tətbiqdə istifadə olunan üçüncü tərəf xidmətləri), bunlara aşağıdakılar daxil ola bilər: cari Tətbiqdən istifadə edən İstifadəçilər vasitəsilə istifadə olunan cihazların IP ünvanları və ya domen adları, URI ünvanları (Uniform Resource İdentifier), mənşə ölkəsi, İstifadəçinin istifadə etdiyi brauzerin və əməliyyat sisteminin xüsusiyyətləri, hər ziyarət başına gələn müxtəlif vaxt təfərrüatları (məsələn, Tətbiq daxilində hər səhifədə sərf olunan vaxt) və ziyarət edilən səhifələrin ardıcıllığına xüsusi istinadla Tətbiq daxili izlənilən trayektoriya barədə məlumatlar və cihazın əməliyyat sistemi və / və ya İstifadəçinin İT mühiti barədə digər parametrlər.
        İstifadəçi
        Başqa cür göstərilmədiyi təqdirdə Məlumat Mövzusuna uyğun Bu Tətbiqdən istifadə edən şəxs.
        Məlumatı İşləyən (və ya Məlumat Supervayzeri)
        Fərdi Məlumatı cari məxfilik siyasətində təsvir edildiyi kimi Nəzarətçi (Kontroler) adından işləyən fiziki, və ya hüquqi şəxs, dövlət orqanı, vasitəçi və ya digər orqan.
        Məlumat Nəzarətçisi (və ya Sahibkar)
        Cari Tətbiqin işlənməsi və istifadəsi ilə bağlı Fərdi Məlumatın məqsədləri və vasitələrini, təhlükəsizlik tədbirləri də daxil olmaqla, təkbaşına və ya birlikdə müəyyənləşdirən fiziki və ya hüquqi şəxs, dövlət orqanı, vasitəçi və ya digər qurum. Başqa cür göstərilmədiyi təqdirdə, Məlumat Nəzarətçisi, cari Tətbiqin Sahibidir.
        Cari Tətbiq
        İstifadəçinin Fərdi Məlumatlarının toplanması və işlənməsi məqsədilə istifadə edilən vasitə - “BuyLink”.
        Xidmət 
        Müvafiq şərtlərdə (mövcuddursa) və bu səhifədə / tətbiqetmədə təsvir edildiyi kimi cari Tətbiq vasitəsilə göstərilən xidmət.
        İşlənmə məqsədi
        İstifadəçilər tərəfindən “BuyLink” mobil tətbiqi (bundan sonra “Mobil Tətbiq”) vasitəsilə təqdim edilmiş fərdi məlumatlar aşağıdakı məqəsədlərdə istifadə olunacaqlar:
        Reklam
        Telefon ilə əlaqə
        E-poçt vasitəs ilə marketing
        SMS vasitəsi ilə marketing
        İstifadəçi ilə əlaqə
        Birbaşa qeydiyyat
        Hostinq və bekend işləri
        VDS Xidmətləri (VDS TÜRKİYE)
        Mobil tətbiqə giriş üçün cihaz icazələri
        Fərdi məlumatlar
        Mobil Tətbiq birbaşa və ya üçüncü tərəf vasitəsilə növbəti növ məlumatları toplayacaqdır:
        telefon nömrəsi; 
        ad, soyad;
        e-poçt ünvanı; 
        cinsiyyət; 
        doğum tarixi;
        Tərəfdaşın ünvanı;
        Kamera icazəsi (Tərəfdaşlardan); 
        Dəqiq coğrafi mövqe icazəsi (qeyri-davamlı) (Tərəfdaşlardan); 
        Təxmini coğrafi mövqe icazəsi (qeyri-davamlı) (Tərəfdaşlardan); 
        Telefon kitabçası icazəsi;
        SMS icazə; 
        Xatırlatma icazəsi; 
        istifadəçi adı; 
        şifrə; 
        şəkil; 
        profil şəkli.
        Bu məxfilik siyasəti Mobil tətbiq vasitəsilə toplanmış istənilən Fərdi Məlumatın təminatını müvafiq bölmələri və ya qabaqcadan təqdim edilmiş xüsusi təminat bildirişi ilə əhatə edir. Fərdi Məlumatlar İstifadəçi tərəfindən birbaşa sərbəst şəkildə və ya istifadə zamanı avtomatik qaydada təmin edilə bilər. “BuyLink” mobil tətbiqi tərəfindən tələb olunan bütün məlumatlar mobil tətbiqin məqbul qaydada işləməsi və istifadəçiyə xidmətlərin göstərilməsi üçün zəruridir, əks təqdirdə mobil tətbiqin İstifadəçiyə xidmət göstərməsi mümkünsüz ola bilər. Mobil Tətbiqdə zəruri olmadığı qeyd edilmiş məlumatların təmin edilməməsini İstifadəçi öz mülahizəsinə əsasən qərara ala bilər. 
        Cookies-in və ya digər izləmə vasitələrinin cari Tətbiq tərəfindən və ya bu Tətbiq tərəfindən istifadə olunan üçüncü tərəflərdən istifadə edilməsi, bu sənəddə, əgər mövcuddursa, Cookie Siyasətində təsvir edilmiş digər məqsədlərə əlavə olaraq, İstifadəçinin tələb etdiyi Xidməti təmin etmək məqsədi daşıyır.
        İstifadəçilər özlərinə və ya üçüncü şəxslərə məxsus məlumatların Mobil tətbiq vasitəsilə təqdim edilməsi, yayımlanması və ya paylaşılan hər hansı Fərdi Məlumata görə məsuliyyəti birbaşa özləri daşıyırlar və bu məlumatların təqdim edilməsi üçün üçüncü tərəfin razılığını əldə edildiyini təsdiq etməlidirlər.
        Məlumatın İşlənmə qaydaları
        İşlənmə üsulları
        Tətbiq Sahibi Məxfi Məlumatların bu Məxfilik Siysətində nəzərdə tutulmayan və icazəsiz daxil olmaların, açıqlanmaların, dəyişdirilmələrin və ya məhv edilmənin qarşısını almaq üçün bütün zəruri tədbirlər görür.
        Məlumatlar İnformasiya Texnologiyaları vasitələrindən effektiv şəkildə istfadə olunmaqla cari Məxfilik siyasətinin məqsədlərində və təşkilati qaydalar və prosedurlara uyğun işlənilir.
        Tətbiq Sahibindən qeyri, zərurət yarandıqda Məxfi Məlumatlar bu Məxfilik Siyasətinin şərt və müddəalarına uyğun olaraq Tətbiq Sahibinin təyin etdiyi, xarici tərəflər (texniki xidmət, hostinq, İT təminatçları) və idarəedilməyə cəlb edilmiş tərəflər daxil olmaqla, üçüncü tərəflərlə çatdırıla bilər. 
        Hüquqi əsaslar
        Aşağıdakı şərtlərdən hər hansı biri tətbiq olunarsa, Fərdin Məlumatlar Tətbiq Sahibi tərəfindən işlənilə bilər:
        İstifadəçi Fərdi məlumatının işlənməsi üçün birmənalı razılıq verdiyi təqdirdə;
        Məlumatın təqdim edilməsi İstifadəçi ilə razılaşmanın yerinə yetirilməsi və / və ya hər hansı bir müqavilə öncəsi öhdəliklərin həyata keçirilməsi üçün zərurət yarandığı təqdirdə; 
        Mobil Tərbiq Sahibinin tabe olduğu qanuni öhdəliyə cavab verməsi üçün zərurət yarandığı təqdirdə; 
        İşlənmə, ictimai maraq və ya Mobil Tərbiq Sahibi üzərinə qoyulmuş xidməti səlahiyyətlərin həyata keçirilməsi üçün zərurət yarandığı təqdirdə; 
        İşlənmə Sahibkarın və ya üçüncü tərəfin izlədiyi qanuni maraqlar məqsədi üçün zərurət yarandığı təqdirdə. 
        İşlənmənin məqsədləri
        İstifadəçi ilə əlaqəli məlumatlar Sahibkarın öz Xidmətini təmin etməsi, qanuni öhdəliklərinə əməl etməsi, icra tələblərinə cavab verməsi, hüquq və mənafelərini (və ya istifadəçilərinin və ya üçüncü şəxslərin) qoruması, hər hansı bir zərərli və ya saxta fəaliyyəti aşkar etməsi üçün toplanılır və işlənilir. 
        Saxlama müddəti
        Fərdi Məlumatlar toplandığı tarixdən etibərn İstifadəçinin mobil tətbiqdən istifadə etdiyi müddət ərzində işlənir və saxlanılır. İstifadəçi mobil tətbiqdən 1 il müddətində istifadə etmədiyi təqdirdə Fərdi Məlumatlar avtomatik olaraq 1 ay ərzində silinir. Bu hal baş verdiyi təqdirdə İstifadəçi Fərdi Məlumatların bərpası üçün Mobil Tətbiq Sahibinə 14 iş günü müddətində müraciət edə bilər. 
        Fərdi Məlumatların bərpası üçün müraciət müddəti başa çatdıqdan və İstifadəçi tərəfindən müddət ərzində heç bir müraciət daxil olmadığı təqdirdə Fərdi Məlumatlar barpa olunmamaq şərti ilə tam silinir.
        Giriş üçün Cihaz İcazəsi
        Mobil Tətbiqin quraşdırıldığı cihazdan asılı olaraq, Mobil Tətbiq İstifadəçinin cihazından müəyyən icazələr tələb edə bilər.
        Bu icazələr Fərdi Məlumatlar İstifadəçi tərəfindən Mobil Tətbiqə daxil edilməmişdən əvvəl tələb edilir. İstifadəçinin verdiyi müvafiq icazələr istənilən vaxt İstifadəçi tərəfindən ləğv edilə bilər. Verilmiş icazələrin ləğvi prosesi zamanı İstifadəçi birbaşa cihaz ayarlarında və ya Mobil Tətbiq Sahibinə müraciət yolu ilə icazələri istənilən vaxt ləğv edə bilər.
        İcazələrin ləğvi Mobil Tətbiqin düzgün işləməməsinə səbəb ola bilər. İstifadəçi tələb olunan müvafiq icazələri verdiyi təqdirdə, müvafiq Fərdi Məlumat cari Tətbiq tərəfindən işlənilə.
        Məlumatların İşlənmə Məkanı
        Məlumat Sahibkarın fəaliyyət göstərən ofislərində və işlənmədə iştirak edən tərəflərin yerləşdiyi digər məkanlarda işlənir. İstifadəçinin məkanından asılı olaraq məlumat ötürülməsi, İstifadəçinin məlumatlarını onların öz ölkələrindən başqa bir ölkəyə köçürməyi özünə daxil edə bilər. 
        Fərdi Məlumat girişi üçün Cihaz İcazəsi
        İstifadəçinin xüsusi cihazından asılı olaraq, cari Tətbiq İstifadəçinin cihaz məlumatlarına daxil olmağa izn verən aşağıda təsvir olunmuş müəyyən icazələr tələb edə bilər.
        Standart olaraq, bu icazələr, müvafiq məlumatlar əldə olunmazdan öncə İstifadəçi tərəfindən verilməlidir. İcazə verildikdən sonra İstifadəçi tərəfindən istənilən vaxt ləğv edilə bilər. Bu icazələrin ləğv edilməsi üçün İstifadəçilər cihaz ayarlarına istinad edə bilərlər və ya cari sənəddə göstərilən əlaqə məlumatları vasitəsilə dəstək almaq məqsədilə Sahibkara müraciət edə bilərlər. Tətbiq icazələrini idarə etmək üçün dəqiq prosedur İstifadəçinin cihaz və proqramından asılı ola bilər.
        Nəzərə alın ki, bu cür icazələrin ləğvi bu Tətbiqin düzgün işləməməsinə səbəb ola bilər. İstifadəçi aşağıda sadalanan istənilən icazəni verərsə, müvafiq Fərdi Məlumat cari Tətbiq tərəfindən işlənə bilər (yəni həmin məlumata daxil olmaq, dəyişdirmək və ya çıxarmaq olar).
        Xatırlatma icazəsi
        Daxiledilmələri oxumaq, əlavə etmək və silmək də daxil olmaqla İstifadəçinin cihazında Xatırlatmalara giriş üçün istifadə olunur.
        Fərdi Məlumatın işlənməsi üzrə Ətraflı İnformasiya
        Fərdi Məlumatlar aşağıdakı məqsədlərlə toplanır və aşağıdakı xidmətlər üçün istifadə edilir:
        İstifadəçi ilə Əlaqə
        Əlaqə forması (cari Tətbiq)
        Əlaqə formasını öz Məlumatları ilə doldurmaqla, İstifadəçi bu Tətbiqə səlahiyyət icazə ki, formanın başlığında qeyd edildiyi kimi informasiya, kvotalar və ya digər bu növ tələblərə cavab vermək məqsədilə bu məlumatlardan istifadə etsin.
        Tələb olunan Fərdi Məlumat: ünvan; şəhər; şirkətin adı; ölkə; doğum tarixi; e-poçt ünvanı; ad; gender; soyad; telefon nömrəsi; 
        E-poçt əlaqəsi
        E-poçt təqdim edən İstifadəçilərlə, cari Tətbiqlə bağlı kommersiya və ya tanıtım məqsədləri ilə, habelə dəstək istəklərini yerinə yetirmək məqsədilə əlaqə saxlanıla bilər.
        İşlənən Fərdi Məlumat: e-poçt
        Telefon nömrəsilə əlaqəsi
        Telefon nömrəsi təqdim edən İstifadəçilərlə, cari Tətbiqlə bağlı kommersiya və ya tanıtım məqsədləri ilə, habelə dəstək istəklərini yerinə yetirmək məqsədilə əlaqə saxlanıla bilər.
        İşlənən Fərdi Məlumat: telefon nömrəsi
        Fərdi Məlumat girişi üçün Cihaz icazəsi
        Bu Tətbiq, İstifadəçilərdən müəyyən icazələr tələb edir ki, aşağıda qeyd edildiyi kimi İstifadəçilərin cihaz məlumatlarına girişə icazə verilsin:
        Fərdi Məlumat girişi üçün Cihaz icazəsi (cari Tətbiq)
        Bu Tətbiq, İstifadəçilərdən müəyyən icazələr tələb edir ki, aşağıda qeyd edildiyi kimi və bu sənəddə təsvir edildiyi kimi İstifadəçilərin cihaz məlumatlarına girişə icazə verilsin.
        Hostinq və bekend infrastrukturu
        Bu xidmət növünün məqsədi, bu Tətbiqin işləməsini və yayılmasını təmin edən Məlumat və faylları yerləşdirməkdən, həmçinin bu Tətbiqin müəyyən xüsusiyyətlərini və ya hissələrini işlətmək üçün hazır infrastruktur təmin etməkdən ibarətdir.
        VDS TÜRKİYE (VDS) (VDS GLOBAL YAZILIM ARGE GELİŞTİRME LİMİTED ŞİRKETİ)
        VDS TÜRKİYE (VDS), VDS Global Yazilim Arge Geliştirme Limited Şirketi tərəfindən təmin edilən hostinq və bekend xidmətidir.
        İşlənən Fərdi Məlumat: xidmətin məxfilik siyasətində qeyd edildiyi kimi müxtəlif növ məlumatlar.
        İşlənmə yeri: Türkiyə.
        Qeydiyyat və birbaşa bu Tətbiq vasitəsilə təmin edilmiş identifikasiya
        Qeydiyyatdan keçməklə və ya identifikasiya verməklə, İstifadəçilər cari Tətbiqə onları identifikasiya etməyə imkan verir və xüsusi xidmətlərə çıxış imkanı verir. Fərdi Məlumat yalnız qeydiyyat və ya identifikasiya məqsədləri üçün toplanır və saxlanılır. Toplanmış məlumatlar yalnız İstifadəçilər tərəfindən tələb olunan xidmətin göstərilməsi üçün tələb olunan məlumatlardır.
        Birbaşa qeydiyyat (cari Tətbiq)
        İstifadəçi qeydiyyat formasını doldurmaqla və birbaşa cari Tətbiqə Fərdi Məlumat təqdim etməklə qeydiyyatdan keçir.
        İşlənən Fərdi Məlumat: ünvan; şəhər; şirkətin adı; ölkə; doğum tarixi; e-poçt ünvanı; ad; cinsiyyət; soyad; şifrə; telefon nömrəsi; şəkil; prefiks ; profil şəkli; İstifadəçi ID; istifadəçi adı; müxtəlif növ məlumat.
        İstifadəçinin hüquqları
        İstifadəçilər Sahibkar tərəfindən işlənmiş Məlumatlarına dair müəyyən hüquqlardan istifadə edə bilərlər. Hüquqlar tətbiq olunan qanunvericilik çərçivəsində tənzimlənir.
        Xüsusilə, İstifadəçilər aşağıdakı hüquqlara malikdirlər:
        İstədikləri zaman öz razılıqlarını geri götürmək. . İstifadəçilər Fərdi Məlumatlarının işlənməsinə verdikləri razılığı geri götürmək hüququna malikdirlər.
        Məlumatların işlənməsinə etiraz. İstifadəçilər, onların məlumatları razılıqla deyil başqa qanuni əsaslarla əldə edildiyi təqdirdə onların işlənməsinə etiraz etmək hüququna malikdirlər. Ətraflı məlumat aşağıdakı müvafiq bölmədə verilir.
        Məlumata giriş. İstifadəçilər, Məlumatların Sahibkar tərəfindən işlənib-işlənmədiyini öyrənmək, işlənmənin müəyyən məqamları barədə açıqlama əldə etmək və işlənən məlumatların surətini əldə etmək hüququna malikdirlər.
        Yoxlama və düzəliş etmə. İstifadəçilər məlumatlarının düzgünlüyünü yoxlamaq və onun yenilənməsini və ya düzəldilməsini tələb etmək hüququna malikdirlər
        Məlumatların işlənməsinə məhdudiyyət qoyma. İstifadəçilər müəyyən şərtlər daxilində Məlumatlarının işlənməsini məhdudlaşdırmaq hüququna malikdirlər. Bu halda Sahibkarın onların məlumatlarını heç bir məqsədlə işləmək hüququ yoxdur, o sadəcə bu məlumatları saxlaya bilər.
        Fərdi Məlumatlarını silmə və ya digər şəkildə çıxarma. İstifadəçilər müəyyən şərtlər daxilində Sahibkarın Məlumatlarını silməsini tələb etmək hüququna malikdirlər.
        Məlumatı alma və onu digər nəzarətçiyə (kontrolerə) ötürmə. İstifadəçilər öz məlumatlarını strukturlaşdırılmış, çox istifadə olunan və cihazla oxunan formatda əldə etmək və texniki cəhətdən mümkün olduqda heç bir maneə olmadan bu məlumatları başqa bir nəzarətçiyə (kontrolerə) ötürmək hüququna malikdirlər. Bu müddəa, məlumatın avtomatlaşdırılmış vasitələrlə işləndiyi və işlənmənin İstifadəçinin razılığı əsasında, İstifadəçinin tərəfdaş olduğu müqavilə və ya onunla əvvəlcədən bağlanmış öhdəliklər əsasında olduqda tətbiq edilir.
        Şikayət irəli sürmə. İstifadəçilər onların məlumatlarını qoruma səlahiyyətinə malik orqana qarşı iddia qaldırmaq hüququna malikdirlər.
        
        İşlənməyə etiraz hüququ
        Fərdi Məlumat ictimai maraqlar, Mobil Tətbiq Sahibinə verilmiş rəsmi səlahiyyətin həyata keçirilməsi və ya Mobil Tətbiq Sahibinin həyata keçirdiyi qanuni maraqlar məqsədilə işlənildiyi təqdirdə, İstifadəçilər öz etirazlarını lazımi şəkildə əsaslandırmaqla bu işlənməyə etiraz edə bilərlər. İstifadəçilər bilməlidirlər ki, onların Fərdi Məlumatları birbaşa marketinq məqsədilə işlənilərsə, onların istənilən zaman heç bir əsaslandırma irəli sürmədən bu işlənməyə etiraz etmək hüququ var. Sahibkarın Fərdi Məlumatı birbaşa marketinq məqsədilə işlədiyini öyrənmək üçün İstifadəçilər cari sənədin müvafiq bölmələrinə istinad edə bilərlər.
        Hüquqlarından istifadə
        İstifadəçi hüquqlarını həyata keçirmək üçün istənilən müraciət, cari sənəddə göstərilən əlaqə məlumatları vasitəsilə Sahibkara yönləndirilə bilər. Bu istəklər Sahibkar tərəfindən pulsuz, mümkün qədər tez və həmişə bir ay ərzində yerinə yetirilməlidir.
        Hüquqi fəaliyyət
        İstifadəçinin Fərdi Məlumatı Sahibkar tərəfindən məhkəmədə və ya bu Tətbiqdən və ya əlaqəli Xidmətlərdən düzgün istifadə edilməməsinin səbəb olduğu mümkün hüquqi fəaliyyətdən yaranan mərhələlərdə qanuni məqsədlər üçün istifadə edilə bilər.
        Sistemə giriş və texniki xidmət
        Istismar və texniki xidmət məqsədilə bu Tətbiq və istənilən üçüncü şəxs xidmətləri bu Tətbiqlə (Sistem girişi) qarşılıqlı əlaqəni qeyd edən faylları bu məqsəd üçün digər Fərdi Məlumatlardan (IP ünvanı kimi) istifadə etməklə toplaya bilər.
        Məxfilik Siyasətinə Dəyişikliklər 
        Sahibkar vaxtaşırı qaydada cari məxfilik siyasətinə dəyişikliklər etmək hüququna malikdir.
        Sahibkar Mobil Tətbiq vasitəsilə İstifadəçini Məxfilik Siyasətinə edilmiş dəyişikliklər haqqında məlumatlandıracaqdır.
        Tətbiq edilən Məxfilik Siyasətinin yoxlanılması və ona edilmiş dəyişikliklərdən xəbardar olmaq İstifadəçinin öhdəliyindədir.
        Dəyişikliklər İstifadəçinin razılığı əsasında həyata keçirilən işlənmə fəaliyyətlərinə təsir göstərərsə, Sahibkar lazım olduqda istifadəçidən yeni razılıq əldə etməlidir.`,
      },
      statistic: {
        '0': 'Məhsul sayı',
        '1': 'Bugün tövsiyyə olunanlar',
        '2': 'Ümumi tövsiyyələr',
        '3': 'Bugün ki əməliyyatlar',
        '4': 'Ümumi əməliyyatlar',
        '5': 'Ümumi əməliyyatlaın məbləği',
        '6': 'Aylıq gəlir',
        '7': 'Ümumi məsləhətlər',
        '8': 'Rəy əsasında',
        '9': 'Ulduz',
        '10': 'Ümumi tövsiyyələr',
        '11': 'İstifadə olunan tövsiyyələr',
      },
      balance: {
        '0': ' Ümumi satış',
        '1': ' BuyLinkə  borc',

        '2': 'Kassadan əməliyyatlar',
        '3': 'BuyLink balansdan',
        '4': 'Net məbləğ',
      },
    },
  },

  en: {
    translation: {
      default: {
        '0': 'en',
      },
      member: {
        '0': 'Members',
        '1': 'Create Member',
        '2': 'Image',
        '3': 'Membertype',
        '4': 'Full Name',
        '5': 'Position ',
        '6': 'Actions ',
        '7': 'Change ',
        '8': 'Cancal ',
        '9': 'Save ',
        '10': 'Update',
        '11': 'MemberType',
        '12': 'Statistics',
        '13': 'Balance',
      },
      branch: {
        '0': 'Branch ',
        '1': 'Create Branch',
        '2': ' Name',
        '3': 'Lat',
        '4': 'Lng',
        '5': 'ADDRESS ',
        '6': 'Actions ',
        '7': 'Change ',
        '8': 'Cancal ',
        '9': 'Save ',
        '10': 'Update',
        '11': 'Details',
        '12': 'Map',
        '13': 'Search by name',
      },
      product: {
        '0': 'Products ',
        '1': 'Create Products',
        '2': 'Image',
        '3': 'Title',
        '4': 'Description',
        '5': 'Price ',
        '6': 'Discount Price ',
        '7': 'Category ',
        '8': 'Actions ',
        '9': 'Cancel ',
        '10': 'Save',
        '11': 'Update',
        '12': 'Details',
        '13': 'Category',
      },
      operator: {
        '0': 'Operator ',
        '1': 'Create Operator',
        '2': 'Branch',
        '3': 'Name',
        '4': 'Email',

        '5': 'Actions ',
        '6': 'Cancel ',
        '7': 'Save',
        '8': 'Update',
        '9': 'Password',
        '10': 'Select',
      },
      partnerinfo: {
        '0': 'Partner Info ',
        '1': 'Logo',
        '3': 'Cover Photo',
        '4': 'Title',

        '5': 'About ',
        '6': 'Address ',
        '7': 'Description',
        '8': 'Email',
        '9': 'Phone ',
        '10': 'Facebook ',
        '11': 'Whatsapp',
        '12': 'Twitter',
        '13': 'Linkedln ',
        '14': 'YouTube ',
        '15': 'Instagram',
        '16': 'Cancel',
        '17': 'Save',
      },
      header: {
        '0': 'About',
        '1': 'Features',
        '2': 'How to use',
        '3': 'FAQ',
        '4': 'Contact us',
        '5': 'Login',
        '6': 'Become a partner',
      },
      main: {
        '0': 'BuyLink  ',
        '1': 'is the world first digital referral network.',
        '2': `Our mission is to connect people and businesses in one referral social network where they are able to get actual benefits from recommendations.`,
        '3': 'Explainer Video',
        '4': 'The video shows in basic how the applications works . We cover different industries in one platform',
        '5': 'Download BuyLink',
      },
      wallet: {
        '0': 'BuyLink Wallet - serves as a savings for your  ',
        '1': 'bonuses and rewards.',
        '2': 'a savings for your',
        '3': 'This is the easisest way to manege your payme',
        '4': 'Cash withdrawals',
        '5': 'Saving of rewerads',
        '6': 'Payment via wallet at our partner',
        '7': 'New feature is in progress!',
      },
      partnyor: {
        '0': 'Explore new',
        '1': 'users and ',
        '2': 'partners',
        '3': 'End-to-end payments and financial management in a single solution. Meet the right platform to help realize.',
        '4': 'Explore Our partners',
        '5': 'Meet our list of partnes at our homepage',
        '6': 'Add People to your Network',
        '7': 'Use search to find your friends and new users. Add them, and start to recommend each other',
        '8': 'Explore different categories',
        '9': 'Here you can find different industries,choose any that you areasasa interested in ',
      },
      partnyor2: {
        '0': 'Get cash ',
        '1': 'in 3 steps',
        '2': 'End-to-end payments and financial management in a single solution. Meet the right platform to help realize.',
        '3': 'Enter to partner page',
        '4': 'Explore menu / catalogue of partner. With list of products of services, prices, discounts, and referral cashbacks',
        '5': 'Share referral link to your network',
        '6': 'In partner page you can recommend this business to your network via chat on share on post',
        '7': 'Go to wallet and check you balance',
        '8': 'After your network use your referral link , you again rewards , and can check your balance in wallet page',
        '9': '',
      },
      partnyor3: {
        '0': 'How to get',
        '1': ' discount?',
        '2': 'End-to-end payments and financial management in a single solution. Meet the right platform to help realize.',
        '3': 'See you network recommendations in referral page',
        '4': 'See all posts that you network share, and chooseone that interests you',
        '5': 'Add referral link to Qr Basket',
        '6': 'Here you can see all rederral links from different users for different partners',
        '7': 'Show qr code and get discount',
        '8': 'When you show you Qr code you get discount for you purchases ',
      },
      partner: {
        '0': 'Become a partner',
        '1': 'Risus habitant leo egestas mauris diam eget morbi tempus vulputate.',
        '2': 'Join now',
      },
      letters: {
        '0': 'newsletter',
        '1': 'Join our',
        '2': 'Will send you weekly updates for your better finance management.',
        '3': 'Join  now',
      },
      accordion: {
        '0': 'Frequently Asked Questions',
        '1': 'What is the BUYLINK?',
        '2': 'Lorem ipsum dolor sit amet, consectetur adipiscing elm, quis nostrud exercitation ullamco laboris nisi',
        '3': 'BWhy do we use it??',
        '4': 'How it works??',
        '5': 'How to get cash??',
      },
      footer: {
        '0': 'Finance helps companies manage payments easily.',
        '1': 'Company',
        '2': 'About Us',
        '3': 'Careers',
        '4': 'Bloq',
        '5': 'Product',
        '6': 'Invoicing',
        '7': 'Contract',
        '8': 'Accounting',
        '9': 'Privacy Policy',
        '10': 'Proposal Template',
        '11': 'Invoice Template',
        '12': 'Tuturoial',
        '13': '2024 All Rights Reserved',
        '14': 'buylink@gmail.com',
        '15': '000-000-00',
      },
      privacy: {
        '0': `
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        “BuyLink” Mobile Application Privacy Polic 
        Content 
        Terms and Definitions
        Personal Information (or Information)
        Any information directly, indirectly or otherwise related to the User of the Mobile Application, information that enables the identification of a natural person, including a personal identification number. 
        Use of Information
        Information automatically collected through the Current Application (or third-party services used in this Application), which may include: IP addresses or domain names of devices used by Users using the Current Application, URI addresses (Uniform Resource Identifier), origin country, the characteristics of the browser and operating system used by the User, various time details per visit (for example, time spent on each page within the Application) and information about the trajectory followed within the Application with particular reference to the sequence of pages visited and the operating system of the device and / or Other parameters about the user's IT environment.
        User
        A person who uses a mobile application as the data subject.
        Data Processor (or Data Supervisor)
        A natural or legal person, government agency, intermediary or other body acting on behalf of the Controller (Controller) as described in this Privacy Policy.
        Data Controller (or Owner)
        A natural or legal person, government agency, intermediary or other entity that, alone or jointly, determines the purposes and means, including security measures, of Personal Information related to the processing and use of the Current Application. Unless otherwise stated, the Data Controller is the Owner of the current Application.
        Application
        The tool used for the purpose of collecting and processing the User's Personal Data.
        Service
        Service provided through the Application as described in the applicable terms (if any) and on this page / application.
        Purpose of processing
        Personal data provided by users through the "BuyLink" mobile application (hereinafter "Mobile Application") will be used for the following purposes:
        Advertising
        Contact by phone
        Marketing through email
        Marketing via SMS
        Contact with the user
        Direct registration
        Hosting and backend works
        VDS Services (VDS TÜRKİYE)
        Device permissions for mobile application access
        Personal Data
        The Mobile Application will collect the following types of information directly or through a third party:
        telephone number; 
        name, surname;
        e-mail address; 
        gender; 
        date of birth;
        address; 
        various types of Information; 
        Calendar permission;
        Camera permission; 
        Precise geolocation permission (non-permanent); 
        Approximate geographic location permission (non-permanent); 
        Phone permission; 
        Sensors permission; 
        SMS permission; 
        Notification permissioni; 
        Motion sensors permission; 
        username; 
        password; 
        picture; 
        prefix; 
        profile picture.
        This privacy policy covers the security of any Personal Information collected through the Mobile application in the relevant sections or specific security notice provided in advance. Personal Data may be provided directly by the User freely or automatically during use. All information requested by the "BuyLink" mobile application is necessary for the proper functioning of the mobile application and the provision of services to the user, otherwise the mobile application may not be able to serve the User. The User may decide not to provide the information marked as unnecessary in the Mobile Application at own discretion.
        The use of cookies or other tracking tools by the current Application or by third parties used by this Application is intended to provide the Service requested by the User, in addition to the other purposes described in this document, if any, in the Cookie Policy.
        Users are solely responsible for any Personal Information they or third parties submit, broadcast or share through the Mobile Application and must confirm that the third party's consent has been obtained for such submission.
        Data Processing Rules
        Processing methods
        The Application Owner shall take all necessary measures to prevent unauthorized access, disclosure, alteration or destruction of Confidential Information covered by this Privacy Policy.
        Data is processed in accordance with the purposes of the current Privacy policy and organizational rules and procedures with the effective use of Information Technology tools.
        Other than the Application Owner, if necessary, Confidential Information may be communicated with third parties, including external parties (maintenance, hosting, IT providers) and parties involved in management, designated by the Application Owner in accordance with the terms and conditions of this Privacy Policy.
        
        Legal grounds
        An Individual's Data may be processed by the Application Owner if any of the following conditions apply:
        • If the User has given his unequivocal consent to the processing of his Personal data;
        • Providing information if it is necessary for the performance of the agreement with the User and / or the implementation of any pre-contractual obligations;
        • If necessary for the Mobile Application Owner to comply with a legal obligation to which it is subject;
        • If it is necessary for processing, public interest or the implementation of the service powers imposed on the Owner of Mobile Education;
        • If processing is necessary for the purposes of legitimate interests pursued by the Owner or a third party.
        Purposes of the processing
        User-related information is collected and processed in order for the Entrepreneur to provide its Service, comply with its legal obligations, meet enforcement requirements, protect its rights and interests (or that of its users or third parties), and detect any malicious or fraudulent activity.
        Storage period
        Personal Data is processed and stored for the duration of the User's use of the mobile application from the date of collection. Personal Data is automatically deleted within 1 month if the user does not use the mobile application for a period of one year. If this happens, the User can apply to the Mobile Application Owner for the recovery of Personal Data within 14 working days.
        After the expiry of the application period for the restoration of Personal Data and if no application is received by the User during the period, the Personal Data is completely deleted, provided that it is not restored.
        Permission for Device Access
        Depending on the device on which the Mobile Application is installed, the Mobile Application may require certain permissions from the User's device.
        These permissions are required before Personal Data can be entered by the User into the Mobile Application. The relevant permissions granted by the User may be revoked by the User at any time. During the process of revoking granted permissions, the User can revoke permissions at any time directly in the device settings or by contacting the Mobile Application Owner.
        Revoking permissions may cause the Mobile Application to malfunction. The relevant Personal Data may be processed by the current Application if the User has granted the relevant permissions required.
        Data Processing Location
        Data is processed in the operating offices of the Entrepreneur and other locations where the parties involved in the processing are located. Depending on the User's location, data transfer may include transferring the User's data from their home country to another country.
        Device Permission for Personal Data Access
        Depending on the User's specific device, the current Application may require certain permissions, described below, that allow access to the User's device data.
        By default, these permissions must be granted by the User before the relevant data can be accessed. Once granted, permission may be revoked by the User at any time. To revoke these permissions, Users can refer to the device settings or contact the Owner for support via the contact information provided in the current document. The exact procedure for managing application permissions may depend on the User's device and application.
        Please note that revoking such permissions may cause this App to malfunction. If the User grants any of the permissions listed below, the relevant Personal Data may be processed (ie accessed, modified or removed) by the current Application.
        Notification Permission
        Used to access Reminders on the User's device, including reading, adding and deleting entries.
        Detailed Information on the Processing of Personal Data
        Personal Data is collected for the following purposes and used for the following services:
        Contact with the User
        Contact form (current Application)
        By filling out the contact form with his/her Information, the User authorizes this Application to use such information for the purpose of responding to requests for information, quotas or other such requests as stated in the title of the form.
        Required Personal Data: address; city; company name; country; Date of birth; email address; name; gender; last name; telephone number;
        Contact via e-mail
        With users submitting email, commercial or promotional product related to the current Promotion, support is required.
        Required Personal Data: email
        Contact via phone number
        Users who provide a phone number may be contacted for commercial or promotional purposes related to the current Application, as well as to fulfill support requests.
        Required Personal Data: phone number
        • Device Permission for Personal Data Access
        The Application requires permissions from Users to allow access to Users' device data as follows:
        Device permission for Personal Data access (current App)
        This Application requires certain permissions from Users to allow access to Users' device data, as noted below and as described in this document.
        • Hosting and backend infrastructure
        The purpose of this type of service is to host the Data and files that enable the operation and distribution of this Application, as well as to provide an infrastructure ready to run certain features or parts of this Application.
        VDS TÜRKİYE (VDS) (VDS GLOBAL YAZILIM ARGE GELİŞTİRME LİMİTED ŞİRKETİ)
        VDS TÜRKİYE (VDS), VDS Global Yazilim Arge Geliştirme Limited Şirketi hosting and backend services provision.
        Personal Data processed: various data as mentioned in the privacy policy of the service.
        Processing location: Türkiye. 
        Registration and authentication provided directly through this Application
        By registering or providing identification, Users allow the current Application to identify them and provide access to specific services. Personal Information is collected and stored only for registration or identification purposes. The information collected is only the information required to provide the service requested by the Users.
        Direct registration (current Application)
        The User registers by filling out the registration form and submitting Personal Information directly to the current Application.
        Personal Data processed: address; city; company name; country; Date of birth; email address; name; gender; last name; Password; telephone number; picture; prefix; profile picture; User ID; username; different types of information.
        User’s rights
        Users may exercise certain rights regarding their Data processed by the Owner. Rights are governed by applicable law.
        In particular, Users have the following rights:
        To withdraw their consent at any time. Users have the right to withdraw their consent to the processing of their Personal Data.
        Objection to data processing. Users have the right to object to the processing of their data if it is obtained on lawful grounds other than consent. More information is provided in the relevant section below.
        Access to information. Users have the right to find out whether the Data is being processed by the Owner, to get a statement on certain aspects of the processing, and to obtain a copy of the processed data.
        Check and fix. Users have the right to verify the accuracy of their data and request that it be updated or corrected.
        Limitation of data processing. Users have the right to restrict the processing of their Data under certain conditions. In this case, the Owner does not have the right to process their data for any purpose, he can only store this data.
        Deletion or otherwise removal of Personal Data. Users have the right to request the Owner to delete their Data under certain conditions. Fərdi Məlumatlarını silmə və ya digər şəkildə çıxarma.
        Receiving information and transmitting it to another controller(s). Users have the right to receive their data in a structured, commonly used and device-readable format and to transmit this data to another controller (controller) without any obstacles, if technically possible. This provision applies when the information is processed by automated means and the processing is based on the consent of the User, on the basis of a contract in which the User is a partner, or on the basis of obligations previously concluded with him. 
        Filing a complaint. Users have the right to file a claim against the authority authorized to protect their data.
        
        Right to object to processing
        If Personal Data is processed for the purpose of public interest, the exercise of official authority granted to the Mobile Application Owner, or legitimate interests exercised by the Mobile Application Owner, Users may object to this processing by properly justifying their objection. Users should be aware that if their Personal Data is processed for direct marketing purposes, they have the right to object to this processing at any time without giving any justification. Users can refer to the relevant sections of the current document to find out if the Owner processes Personal Data for direct marketing purposes. 
        Excersice of rights
        Any request to exercise user rights can be directed to the Owner through the contact information provided in the current document. These requests must be fulfilled by the Entrepreneur free of charge, as soon as possible and always within one month.
        Legal actions
        The User's Personal Information may be used by the Owner for legal purposes in court or in the stages of possible legal action caused by improper use of this Application or related Services.
        System access and maintenance
        For operation and maintenance purposes, this Application and any third-party services may collect files that record interactions with this Application (System login) using other Personal Information (such as IP address) for this purpose.
        Məxfilik Siyasətinə Dəyişikliklər 
        The Owner reserves the right to make changes to the current privacy policy from time to time.
        The Owner will inform the User about changes to the Privacy Policy through the Mobile Application.
        It is the User's responsibility to check the applicable Privacy Policy and to be aware of any changes made to it.
        If the changes affect the processing activities performed on the basis of the User's consent, the Owner must obtain a new consent from the user, if necessary.`,
      },
      statistic: {
        '0': 'Product count',
        '1': 'Today referer ',
        '2': 'Total Refers  ',
        '3': 'Today Transactions',
        '4': 'Total Transactions',
        '5': 'Total sales   ',
        '6': 'Revenue per Month',
        '7': 'Total Referers',
        '8': 'Based on  reviews',
        '9': 'Star',
        '10': 'Total recommended',
        '11': 'Used recommendations',
        '12': '   ',
      },
      balance: {
        '0': 'Total Revenue',
        '1': 'Duo to BuyLink',
        '2': 'Cash Till',
        '3': 'Buylink  Wallet',
        '4': 'Net amount',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .use(detector)
  .use(backend)
  .use(initReactI18next)
  .init({
    resources,

    lng: localStorage.getItem('lng') || 'en',
  });

export default i18n;
