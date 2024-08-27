import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  az: {
    translation: {
      default: {
        '0': 'az',
      },
      member: {
        '12': 'Statistika',
        '13': 'Balans',
        '14': 'Due To Buylink',
        '15': 'Çıxış Et',
      },
      branch: {
        '0': 'Filiallar',
        '1': 'Filial yarat ',
        '2': ' Adı',
        '3': 'Lat',
        '4': 'Lng',
        '5': 'Ünvan ',
        '6': 'Hərəkətlər ',
        '7': 'Dəyiş ',
        '8': 'Ləğv et ',
        '9': 'Saxla ',
        '10': 'Filial Dəyiş',
        '11': 'Haqqında',
        '12': 'Xəritə',
        '13': 'Adına görə axtarış',
        '14': 'Nömrə',
        '15': 'Koordinatlar ',
        '16': 'Bakı,Xatai ray.',
      },
      product: {
        '0': 'Məhsul ',
        '1': ' Məhsul Yarat',
        '2': 'Şəkil',
        '3': 'Ad',
        '4': 'Məzmun     ',
        '5': 'Qiymət ',
        '6': 'Endirimli qiymət ',
        '7': 'Kateqoriya ',
        '8': 'Redakt ',
        '9': 'Ləgv et ',
        '10': 'Saxla',
        '11': 'Dəyiş',
        '12': 'Haqqında',
        '13': 'Kateqoriya',
        '14': 'adı     ',
        '15': 'Şəkil əlave et',
        '16': 'Bura yaz...',
        '17': 'Kateqoriya seçin',
      },
      operator: {
        '0': 'Operator ',
        '1': ' Operator yarat',
        '2': 'Filiali',
        '3': 'Ad',
        '4': 'Email',
        '5': 'Hərəkətlər ',
        '6': 'Ləğv et ',
        '7': 'Saxla',
        '8': 'Dəyiş',
        '9': 'Şifrə',
        '10': 'Seçin',
        '11': 'Şifrəni Dəyiş',
      },
      partnerinfo: {
        '0': 'Partnyor Məlumatları ',
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
        '18': 'Partnyor adı',
        '19': 'Ümumi Komissiya',
        '20': 'Endirim',
      },
      header: {
        '0': 'Haqqımızda',
        '1': 'Üstünlüklərimiz',
        '2': 'Necə işləyir?',
        '3': 'FAQ',
        '4': 'Bizimlə əlaqə',
        '5': 'Giriş',
        '6': 'Partnyor ol',
        '7': 'Axtar...',
      },
      main: {
        '0': 'BuyLink',
        '1': `dünyanın ilk rəqəmsal tövsiyə platformasıdır!`,
        '2': `Bizim missiyamız insanları və biznesləri bir referal sosial şəbəkəsi altında birləşdirərək onların müəyyən qazanc və üstünlüklərdən faydalanmasını təmin etməkdir.`,
        '3': 'İzahedici video',
        '4': 'Bu video ən sadə şəkildə Buylink-in necə işlədiyini göstərir.',
        '5': 'Videonu izləyib mobil tətbiqimizlə ətraflı tanış ola bilərsiniz',
        '6': 'BuyLinki  yüklə',
        '7': '300+ istifadəçi puluna qənaət etdi',
      },
      wallet: {
        '0': 'qazan!',
        '1': 'Bonus və mükafatlar',
        '2': 'qazanaraq xərclərinə qanaət et.',
        '3': 'BuyLink balansı sənə mobil tətbiqimizdə bonus və mükafatlar qazanmağa, toplanan məbləği istənilən ölkədaxili bank kartına köçürməyə imkan verən rəqəmsal pul kisəsidir.',
        '4': 'Köçürmə',
        '5': 'Qazancları toplamaq',
        '6': 'Balans ilə partnyorlarda ödəniş',
        '7': 'Tarixçə',
        '8': ' ',
        '9': '  ',
        '10': 'Balansı',
      },
      partnyor: {
        '0': 'Yeni',
        '1': 'istifadəçi və partnyorları  ',
        '2': '       kəşf et',
        '3': 'Şəbəkəni genişləndir və tövsiyə edəcəyin bizneslərdən gəlir əldə etməyin  ən asan yoluna bizimlə başla.',
        '4': 'Partnyorlarımızla tanış ol',
        '5': 'Ana səhifədəki partynor siyahımızı kəşf et',
        '6': 'Şəbəkəni genişləndir',
        '7': 'Axtarış bölməsindən dostlarını və ya yeni istifadəçiləri axtar. Onları öz dost siyahına əlavə edərək referal prosesinə başla.',
        '8': 'Müxtəlif kateqoriyaları kəşf et',
        '9': 'Maraqlandığın biznesləri burada kəşf edərək onların endirim və qazanc dərəcələri ilə tanış ola bilərsən. ',
      },
      partnyor2: {
        '0': '3 addımla',
        '1': 'qazanc',
        '2': 'Öz şəbəkənə istədiyin biznesi tövsiyə et və qazan.',
        '3': 'Partnyor səhifəsinə daxil ol',
        '4': 'Tərəfdaşın kataloqunu gözdən keçir: məhsul və ya xidmətlər siyahısı, qiymətlər, endirim və referal keşbekləri.',
        '5': 'Referal linkini öz şəbəkən ilə bölüş',
        '6': 'Partnyor səhifəsində sən bu biznesi söhbət vasitəsilə şəbəkənə tövsiyə edə və ya poçtla paylaşa bilərsən.',
        '7': 'Pul kisəsinə keçid et və balansını yoxla',
        '8': 'Şəbəkə referal linkindən istifadə etdikdən sonra  mükafatlar qazanırsan. Sonda pul kisəsi səhifəsində balansını yoxlaya bilərsən.',
        '9': ' əldə et',
      },
      partnyor3: {
        '0': 'Endirim  ',
        '1': 'necə əldə etmək olar?',
        '2': 'Referal linklərindən istifadə edərək endirimlər qazan.',
        '3': ' Dostlarının referallarını incələ',
        '4': 'Şəbəkənin paylaşdığı bütün yazılara bax və səni  maraqlandıran birini seç.',
        '5': 'QR səbətinə referal linklərini əlavə et',
        '6': 'Burada tərəfdaşlar üçün müxtəlif istifadəçilərin bütün referal bağlantılarını görə bilərsən.',
        '7': 'QR kodu gör və endirim əldə et',
        '8': 'Qr kodu alış-veriş zamanı partnyora göstər və endirim əldə et.',
      },
      partner: {
        '0': 'Partnyor ol!',
        '1': `Buylink mobil tətbiqində yer almaqla siz bazarda tanıtım, yüksək gəlir və rəqabət üstünlüyü əldə edəcəksiniz.`,
        '2': 'Elə indi qoşulun',
      },
      letters: {
        '0': 'Jurnalımıza',
        '1': 'qoşul',
        '2': 'BuyLink-lə bağlı ən son yenilik və fürsətləri e-poçtuna göndərəcəyik.',
        '3': 'İndi qoşul',
      },
      accordion: {
        '0': 'Ən çox verilən suallar',
        '1': 'BuyLink nədir?',
        '2': 'BuyLink dünyanın ilk rəqəmsal tövsiyə platformasıdır. Bizim missiyamız insanları və biznesləri bir referal sosial şəbəkəsi altında birləşdirərək onların müəyyən qazanc və üstünlüklərdən faydalanmasını təmin etməkdir.',
        '3': 'BuyLink-in üstünlükləri nələrdir?',
        '4': `BuyLink-in bir sıra üstünlükləri var. Bu platforma istifadəçilərə həm pul qazanmaq, həm də endirimlərdən yararlanmaq fürsəti yaradır. Mobil tətbiq vasitəsilə istifadəçilər endirimlərdən yararlanmaqla yanaşı, tövsiyələrdən gəlir əldə edə bilərlər. Həmçinin daha çox insanı platformaya cəlb edən istifadəçilər artan gəlir modeli sayəsində daha çox qazanc əldə edəcəklər.`,
        '5': 'Necə işləyirik?',
        '6': `Buylink platformunda paylaşılan postlar, istifadəçilərin mekanları tanıtmalarını, təcrübələrini paylaşmalarını və promosyonlar təklif etmələrini təmin edir. Bu, onların öz sosial şəbəkələrindən faydalanaraq gəlir qazanmalarına və digər istifadəçilərə fayda vermələrinə imkan verir.`,
      },
      become: {
        '0': 'BuyLink',
        '1': 'tətbiqini yüklə',
        '2': 'Hər yerdə mövcuddur',
        '3': 'Yükləmək üçün Scan QR',
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
        '14': 'partnership@buylink.info',
        '15': '000-000-00',
      },
      privacy: {
        '0': `
        
    
        “BuyLink” mobil tətbiqinin Məxfilik Siyasəti
        Məzmun
        Şərhlər və hüquqi referallar
        Fərdi Məlumat (və ya Məlumat)
        Mobil Tətbiq İstifadəçisinin birbaşa, dolayı yolla və ya digər məlumatlarla əlaqəli hər hansı bir məlumat, fərdi identifikasiya nömrəsi daxil olmaqla, fiziki şəxsin kimliyini müəyyənləşdirməyə imkan verən məlumat.
        Məlumatdan istifadə
        Cari Tətbiq vasitəsilə avtomatik olaraq toplanan məlumatlar (və ya bu Tətbiqdə istifadə olunan üçüncü tərəf xidmətləri), bunlara aşağıdakılar daxil ola bilər: cari Tətbiqdən istifadə edən İstifadəçilər vasitəsilə istifadə olunan cihazların IP ünvanları və ya domen adları, URI ünvanları (Uniform Resource İdentifier), mənşə ölkəsi, İstifadəçinin istifadə etdiyi brauzerin və əməliyyat sisteminin xüsusiyyətləri, hər ziyarət başına gələn müxtəlif vaxt təfərrüatları (məsələn, Tətbiq daxilində hər səhifədə sərf olunan vaxt) və ziyarət edilən səhifələrin ardıcıllığına xüsusi referalla Tətbiq daxili izlənilən trayektoriya barədə məlumatlar və cihazın əməliyyat sistemi və / və ya İstifadəçinin İT mühiti barədə digər parametrlər.
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
        Standart olaraq, bu icazələr, müvafiq məlumatlar əldə olunmazdan öncə İstifadəçi tərəfindən verilməlidir. İcazə verildikdən sonra İstifadəçi tərəfindən istənilən vaxt ləğv edilə bilər. Bu icazələrin ləğv edilməsi üçün İstifadəçilər cihaz ayarlarına referal edə bilərlər və ya cari sənəddə göstərilən əlaqə məlumatları vasitəsilə dəstək almaq məqsədilə Sahibkara müraciət edə bilərlər. Tətbiq icazələrini idarə etmək üçün dəqiq prosedur İstifadəçinin cihaz və proqramından asılı ola bilər.
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
        Fərdi Məlumat ictimai maraqlar, Mobil Tətbiq Sahibinə verilmiş rəsmi səlahiyyətin həyata keçirilməsi və ya Mobil Tətbiq Sahibinin həyata keçirdiyi qanuni maraqlar məqsədilə işlənildiyi təqdirdə, İstifadəçilər öz etirazlarını lazımi şəkildə əsaslandırmaqla bu işlənməyə etiraz edə bilərlər. İstifadəçilər bilməlidirlər ki, onların Fərdi Məlumatları birbaşa marketinq məqsədilə işlənilərsə, onların istənilən zaman heç bir əsaslandırma irəli sürmədən bu işlənməyə etiraz etmək hüququ var. Sahibkarın Fərdi Məlumatı birbaşa marketinq məqsədilə işlədiyini öyrənmək üçün İstifadəçilər cari sənədin müvafiq bölmələrinə referal edə bilərlər.
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
        '1': 'Ümumi satış',
        '2': 'Ümumi tövsiyyələr',
        '3': 'Ümumi əməliyyatlar',

        '4': 'Ümumi tövsiyələr',
        '5': 'İstifadə olunmuş tövsiyələr',
        '6': 'Tövsiyələr  ',
        '7': 'Aylıq gəlir',
        '8': ' Satış',
        '9': 'Trend',
        '10': 'Reytinq və rəylər ',
        '11': ' Qiymətləndirmə sayı',
      },
      balance: {
        '0': 'Ümumi satış',
        '1': 'BuyLinkə  öhdəlik',
        '2': 'Kassadan',
        '3': 'Balansdan',
        '4': 'Xalis məbləğ',
        '5': '3 gün gecikmədən sonra cərimələr hesablanmağa başlayır',
        '6': 'Cərimələr tutulmağa başlayır (ümumi məbləğin 0,1%-i)',
        '7': 'Ödəniş gecikdirildikdə, cərimələr olacaq',
        '8': ' Ödəniş tarixi! ',
        '9': 'Gecikdirilmiş ödəniş!',
        '10': ' Gün sonra ödəniş',
        '11': 'Hal hazirda tarix ve data yoxdur',
        '12': 'Ümumi borc',
        '13': 'Ödənişlər',
        '14': 'Xalis borc',
      },
      balanceTable: {
        '0': 'Hesab məbləği',
        '1': 'Endirim  %',
        '2': 'Endirimli məbləğ',
        '3': 'Komissiya %',
        '4': 'Komissiya məbləği',
        '5': 'Tarix',
        '6': 'Xalis Məbləğ',
        '7': 'İstifadəçi adı',
        '8': 'Operator adı',
        '9': 'Məbləğ',
        '10': 'Ödəniş növü',
        '11': 'Qəbz',
      },
      settingDashboard: {
        '1': 'Parametrlər',
        '2': 'Partnyorun adı  ',
        '3': 'Köhnə Şifrə  ',
        '4': 'E-poçt ',
        '5': 'Yeni şifrə ',
      },
      months: {
        '1': 'May',
        '2': 'İyun',
        '3': 'İyul',
        '4': 'Avq',
        '5': 'Sent',
        '6': 'Okt',
        '7': 'Noy',
        '8': 'Dek',
        '9': 'Yanv',
        '10': 'Fev',
        '11': 'Mart',
        '12': 'Apr',
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
        '8': 'Cancel ',
        '9': 'Save ',
        '10': 'Update',
        '11': 'MemberType',
        '12': 'Statistics',
        '13': 'Balance',
        '14': 'Buylinkə öhdəlik',
        '15': 'Log Out',
      },
      branch: {
        '0': 'Branches',
        '1': 'Create Branch',
        '2': ' Name',
        '3': 'Lat',
        '4': 'Lng',
        '5': 'Address ',
        '6': 'Actions ',
        '7': 'Change ',
        '8': 'Cancal ',
        '9': 'Save ',
        '10': 'Branch Update',
        '11': 'Details',
        '12': 'Map',
        '13': 'Search by name',
        '14': 'Phone',
        '15': 'Coordinates ',
        '16': 'Baku,Khatai dist.',
      },
      product: {
        '0': 'Product ',
        '1': 'Create Product',
        '2': 'Image',
        '3': 'Title',
        '4': 'Description   ',
        '5': 'Price ',
        '6': 'Discount Price ',
        '7': 'Category ',
        '8': 'Actions ',
        '9': 'Cancel ',
        '10': 'Save',
        '11': 'Update',
        '12': 'Details',
        '13': 'Category',
        '14': 'name    ',
        '15': 'Add image',
        '16': 'Write here...',
        '17': 'Choose сategory',
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
        '11': 'Change Password',
      },
      partnerinfo: {
        '0': 'Partner Info',
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
        '18': 'Partner name',
        '19': 'Total Commission',
        '20': 'Discount',
      },
      header: {
        '0': 'About',
        '2': 'How to use',
        '3': 'FAQ',
        '4': 'Contact us',
        '5': 'Login',
        '6': 'Become a partner',
        '7': 'Search...',
      },
      main: {
        '0': 'BuyLink',
        '1': 'is the world first digital referral network  .',
        '2': `Our mission is to connect people and businesses in one referral social network where they are able to get actual benefits from recommendations.`,
        '3': 'Explainer Video',
        '4': 'This video shows how BuyLink works in the simplest way.',
        '5': 'You can watch the video and learn more about our mobile application.',
        '6': 'Download BuyLink',
        '7': '300+ costumer saved money',
      },
      wallet: {
        '0': '   ',
        '1': '  ',
        '2': 'a savings for your',
        '3': 'BuyLink is a digital wallet that allows you to easily save bonuses and rewards in your balance. You can also transfer funds from your balance to a bank account at any time.',
        '4': 'Transfer',
        '5': 'Save Rewards',
        '6': 'Pay with Wallet at Our Partners',
        '7': 'Transaction History',
        '8': 'Save Your',
        '9': 'Bonuses and Rewards ',
        '10': 'Wallet',
      },
      partnyor: {
        '0': 'Explore New',
        '1': 'Users and ',
        '2': 'Partners',
        '3': 'An easy way to expand your network and find businesses you want to recommend',
        '4': 'Our Partners',
        '5': 'Discover our list of partners on our homepage',
        '6': 'Add People to Your Network',
        '7': 'Use the search feature to find your friends and new users. Add them and start recommending each other',
        '8': 'Explore Different Categories',
        '9': 'Here you can find various industries. Choose any that you are interested in ',
      },
      partnyor2: {
        '0': 'Get Cash',
        '1': 'in 3 Steps',
        '2': 'End-to-end payments and financial management in a single solution. Discover the right platform to help you achieve your financial goals.',
        '3': 'Enter the Partner Page',
        '4': 'Explore the menu/catalog of our partners, including a list of products and services, prices, discounts, and referral cashbacks',
        '5': 'Share Referral Link with Your Network',
        '6': 'On the partner page, you can recommend this business to your network via chat or by sharing a post',
        '7': 'Go to Wallet and Check Your Balance',
        '8': 'After your network uses your referral link, you earn rewards and can check your balance on the wallet page',
        '9': '',
      },
      partnyor3: {
        '0': 'How to Get',
        '1': ' a Discount?',
        '2': 'End-to-end payments and financial management in a single solution. Discover the right platform to help you achieve your goals.',
        '3': 'See Your Network’s Recommendations on the Referral Page',
        '4': 'View all the posts shared by your network and choose the ones that interest you',
        '5': 'Add Referral Link to QR Basket',
        '6': 'Here, you can see all referral links from different users for various partners',
        '7': 'Show QR Code and Get a Discount',
        '8': 'When you show your QR code, you receive a discount on your purchases',
      },
      partner: {
        '0': 'Become a Partner',
        '1': `We invite you to become our partner and enhance your capabilities, market recognition, and increase your income with “BuyLink”!`,
        '2': 'Join now',
      },
      letters: {
        '0': 'Join our',
        '1': 'Newsletter',
        '2': 'We will send you weekly updates to help you manage your finances better.',
        '3': 'Join  now',
      },
      become: {
        '0': ' Download',
        '1': 'Buylink',
        '2': 'Available everywhere',
        '3': 'For download Scan QR ',
      },
      accordion: {
        '0': 'Frequently Asked Questions',
        '1': 'What is BuyLink?',
        '2': `BuyLink is the world’s first digital referral platform and social network designed to connect people and businesses. Our mission is to create a space where users can benefit from mutual recommendations and earn rewards. By joining BuyLink, users can discover and recommend businesses, helping both themselves and others gain valuable benefits.`,
        '3': 'Why do we use BuyLink?',
        '4': `BuyLink offers numerous advantages. Firstly, this platform provides users with a network where they can earn money and take advantage of discounts. This allows users to access quality products while generating income. Additionally, BuyLink’s referral-based marketing model enables users to attract more people to the platform and earn increased revenue based on the volume of their referrals.`,
        '5': 'How do I get cash on BuyLink?',
        '6': 'On the BuyLink platform, users can share posts to promote businesses, share their experiences, and offer promotions. This allows them to leverage their social networks to earn income and provide benefits to other users. By sharing referral links, users can earn rewards based on the engagement and transactions generated by their network. This system helps users earn cash rewards while also helping others discover quality products and services.',
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
        '14': 'partnership@buylink.info',
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
        '0': 'Product Count',
        '1': 'Total Sales',
        '2': 'Total Refers',
        '3': 'Total Transactions',
        '4': 'Total reccommended',
        '5': 'Used recommendation',
        '6': 'Recommendations',
        '7': 'Revenue per Month  ',
        '8': 'Sales',
        '9': 'Trend',
        '10': 'Rating and Reviews',
        '11': 'Review count',
      },
      balance: {
        '0': 'Total Revenue',
        '1': 'Due to BuyLink',
        '2': 'Cash Till',
        '3': 'Buylink  Wallet',
        '4': 'Net amount',
        '5': 'Payment date! After 3 days of delay, penalties start to charge ',
        '6': 'Penalties start to charge (0.1% of total amount)',
        '7': 'In case of late payment, there will be penalties',
        '8': 'Days Left Until Payment',
        '9': 'Overdue Payment!',
        '10': 'Days Payment Date!',
        '11': 'Currently there is no date and data  ',
        '12': 'Total debt',
        '13': 'Payments',
        '14': 'Net debt',
      },
      balanceTable: {
        '0': 'Bill amount',
        '1': 'Discount %',
        '2': 'Discounted amount',
        '3': 'Commission %',
        '4': 'Commission Amount',
        '5': 'Date',
        '6': 'Net Amount',
        '7': 'User ID',
        '8': 'Operator Name',
        '9': 'Amount',
        '10': 'Payment Type',
        '11': 'Bill',
      },
      settingDashboard: {
        '1': 'Settings',
        '2': 'Partner   Name  ',
        '3': 'Old Password  ',
        '4': 'E-mail  ',
        '5': 'New Password ',
      },
      months: {
        '1': 'May',
        '2': 'Jun',
        '3': 'Jul',
        '4': 'Aug',
        '5': 'Sep',
        '6': 'Oct',
        '7': 'Nov',
        '8': 'Dec',
        '9': 'Jan',
        '10': 'Feb',
        '11': 'Mar',
        '12': 'Apr',
      },
    },
  },
  ru: {
    translation: {
      default: {
        '0': 'ru',
      },
      member: {
        '12': 'Статистика',
        '13': 'Баланс',
        '14': 'Обязательство перед Buylink',
        '15': 'Выйти',
      },
      branch: {
        '0': 'Филиалы',
        '1': 'Создать филиал',
        '2': 'Название',
        '3': 'Широта',
        '4': 'Долгота',
        '5': 'Адрес',
        '6': 'Действия',
        '7': 'Изменить',
        '8': 'Отменить',
        '9': 'Сохранить',
        '10': 'Обновить Филиал',
        '11': 'О филиале',
        '12': 'Карта',
        '13': 'Поиск по имени',
        '14': 'Номер телефона',
        '15': 'Координаты',
        '16': 'Баку,Хатаинский район',
      },
      product: {
        '0': 'Продукт',
        '1': 'Создать продукт',
        '2': 'Изображение',
        '3': 'Название',
        '4': 'Описание',
        '5': 'Цена',
        '6': 'Цена со скидкой',
        '7': 'Категория',
        '8': 'Редактировать',
        '9': 'Отменить',
        '10': 'Сохранить',
        '11': 'Обновить',
        '12': 'О продукте',
        '13': 'Категория',
        '14': 'Имя',
        '15': 'Добавить изображение',
        '16': 'Напишите здесь...',
        '17': 'Выберите категорию',
      },
      operator: {
        '0': 'Оператор',
        '1': 'Создать оператора',
        '2': 'Филиал',
        '3': 'Имя',
        '4': 'Электронная почта',
        '5': 'Действия',
        '6': 'Отменить',
        '7': 'Сохранить',
        '8': 'Обновить',
        '9': 'Пароль',
        '10': 'Выбрать',
        '11': 'Изменить пароль',
      },
      partnerinfo: {
        '0': 'Информация о партнере',
        '1': 'Логотип',
        '3': 'Обложка',
        '4': 'Название',
        '5': 'О компании',
        '6': 'Адрес',
        '7': 'Описание',
        '8': 'Электронная почта',
        '9': 'Телефон',
        '10': 'Facebook',
        '11': 'WhatsApp',
        '12': 'Twitter',
        '13': 'LinkedIn',
        '14': 'YouTube',
        '15': 'Instagram',
        '16': 'Отменить',
        '17': 'Сохранить',
        '18': 'Имя партнера',
        '19': 'Общая комиссия',
        '20': 'Скидка',
      },
      header: {
        '0': 'О нас',
        '1': 'Наши преимущества',
        '2': 'Как это работает?',
        '3': 'Часто задаваемые вопросы',
        '4': 'Связаться с нами',
        '5': 'Вход',
        '6': 'Стать партнером',
        '7': 'Поиск...',
      },
      main: {
        '0': 'BuyLink',
        '1': 'первая в мире цифровая реферальная платформа!',
        '2': 'Наша миссия – объединять людей и бизнесы в одну социальную сеть рекомендаций, чтобы они могли получать реальные выгоды от рекомендаций.',
        '3': 'Объясняющее видео',
        '4': 'Это видео показывает, как работает BuyLink самым простым способом.',
        '5': 'Вы можете посмотреть видео и узнать больше о нашем мобильном приложении.',
        '6': 'Скачать BuyLink',
        '7': '300+ пользователей сэкономили деньги',
      },
      wallet: {
        '0': 'Зарабатывай!',
        '1': 'Бонусы и награды',
        '2': 'зарабатывай и экономь на своих расходах.',
        '3': 'BuyLink – это цифровой кошелек, который позволяет вам зарабатывать бонусы и награды в вашем балансе, а также переводить собранную сумму на любую банковскую карту в вашей стране.',
        '4': 'Перевод',
        '5': 'Собрать доходы',
        '6': 'Оплата партнерам с баланса',
        '7': 'История транзакций',
        '8': ' ',
        '9': ' ',
        '10': 'Баланс',
      },
      partnyor: {
        '0': 'Исследуй',
        '1': 'новых пользователей и партнеров',
        '2': ' ',
        '3': 'Расширяйте свою сеть и начните зарабатывать, рекомендуя бизнесы вместе с нами.',
        '4': 'Знакомьтесь с нашими партнерами',
        '5': 'Откройте список партнеров на главной странице',
        '6': 'Расширяйте свою сеть',
        '7': 'Используйте функцию поиска, чтобы найти друзей или новых пользователей. Добавляйте их в свой список друзей и начните процесс рекомендаций.',
        '8': 'Откройте разные категории',
        '9': 'Здесь вы можете найти интересующие вас бизнесы и ознакомиться с их скидками и процентами прибыли.',
      },
      partnyor2: {
        '0': 'Заработай',
        '1': 'в 3 шага',
        '2': 'Рекомендуйте бизнесы в своей сети и зарабатывайте.',
        '3': 'Перейдите на страницу партнера',
        '4': 'Просмотрите каталог партнера: список продуктов или услуг, цены, скидки и реферальные кэшбеки.',
        '5': 'Поделитесь реферальной ссылкой со своей сетью',
        '6': 'На странице партнера вы можете рекомендовать этот бизнес через чат или поделиться по почте.',
        '7': 'Перейдите в кошелек и проверьте свой баланс',
        '8': 'После того как ваша сеть использует реферальную ссылку, вы заработаете награды. В конце концов, проверьте свой баланс на странице кошелька.',
        '9': ' ',
      },
      partnyor3: {
        '0': 'Как получить',
        '1': 'скидку?',
        '2': 'Используйте реферальные ссылки для получения скидок.',
        '3': 'Изучите рекомендации вашей сети',
        '4': 'Просмотрите все записи, которые были опубликованы вашей сетью, и выберите те, которые вам интересны.',
        '5': 'Добавьте реферальную ссылку в корзину QR',
        '6': 'Здесь вы можете увидеть все реферальные ссылки разных пользователей для различных партнеров.',
        '7': 'Покажите QR-код и получите скидку',
        '8': 'Покажите QR-код во время покупок у партнера и получите скидку.',
      },
      partner: {
        '0': 'Стань партнером!',
        '1': 'Присоединившись к Buylink, вы получите рекламные возможности, высокий доход и конкурентные преимущества на рынке.',
        '2': 'Присоединяйтесь сейчас',
      },
      letters: {
        '0': 'Подпишитесь на',
        '1': 'наш журнал',
        '2': 'Мы будем отправлять вам последние новости и возможности Buylink по электронной почте.',
        '3': 'Подписаться сейчас',
      },
      accordion: {
        '0': 'Часто задаваемые вопросы',
        '1': 'Что такое BuyLink?',
        '2': 'BuyLink – это первая в мире цифровая реферальная платформа. Наша миссия – объединять людей и бизнесы в одну социальную сеть рекомендаций, чтобы они могли получать реальные выгоды от рекомендаций.',
        '3': 'Какие преимущества у BuyLink?',
        '4': 'У BuyLink есть ряд преимуществ. Эта платформа предоставляет пользователям возможность как зарабатывать деньги, так и получать скидки. Через мобильное приложение пользователи могут не только получать скидки, но и зарабатывать на рекомендациях. Кроме того, пользователи, привлекающие больше людей на платформу, благодаря растущей модели доходов смогут зарабатывать еще больше.',
        '5': 'Как мы работаем?',
        '6': 'Посты, опубликованные на платформе Buylink, позволяют пользователям делиться своими рекомендациями, опытом и предлагать акции. Это дает возможность зарабатывать, используя свои социальные сети, и приносить пользу другим пользователям.',
      },
      become: {
        '0': 'Скачайте',
        '1': 'BuyLink',
        '2': 'Доступен везде',
        '3': 'Сканируйте QR для скачивания',
      },
      footer: {
        '0': 'Теперь получайте больше кэшбека и прибыли от платежей.',
        '1': 'Компания',
        '2': 'О нас',
        '3': 'Карьера',
        '4': 'Блог',
        '5': 'Продукт',
        '6': 'Отчеты',
        '7': 'Контракты',
        '8': 'Бухгалтерия',
        '9': 'Политика конфиденциальности',
        '10': 'Шаблон коммерческого предложения',
        '11': 'Шаблон контракта',
        '12': 'Объясняющее видео',
        '13': '2024 Все права защищены',
        '14': 'partnership@buylink.info',
        '15': '000-000-00',
      },
      privacy: {
        '0': `
        
    
        Политика конфиденциальности мобильного приложения «BuyLink»
        Содержание
        Термины и определения
        Персональные данные (или данные)
        Любая информация, напрямую или косвенно связанная с Пользователем мобильного приложения, информация, позволяющая идентифицировать физическое лицо, включая личный идентификационный номер.
        Использование данных
        Информация, автоматически собираемая через текущее приложение (или сторонние службы, используемые в этом приложении), которая может включать: IP-адреса или доменные имена устройств, используемых Пользователями, использующими текущее приложение, URI-адреса (Унифицированный идентификатор ресурсов), страну происхождения, характеристики браузера и операционной системы, используемых Пользователем, различные временные данные за визит (например, время, проведенное на каждой странице в приложении) и информацию о траектории, которой следовали в приложении, с указанием порядка посещенных страниц и операционной системы устройства и/или других параметров ИТ-среды пользователя.
        Пользователь
        Лицо, использующее мобильное приложение в качестве субъекта данных.
        Обработчик данных (или Супервайзер данных)
        Физическое или юридическое лицо, государственное учреждение, посредник или другой орган, действующий от имени Контролера данных (Контролера), как описано в настоящей Политике конфиденциальности.
        Контролер данных (или Владелец)
        Физическое или юридическое лицо, государственное учреждение, посредник или другой орган, который самостоятельно или совместно определяет цели и средства обработки и использования Персональных данных, включая меры безопасности. Если не указано иное, Контролер данных является Владельцем текущего приложения.
        Текущее приложение
        Инструмент, используемый для сбора и обработки Персональных данных Пользователя.
        Служба
        Услуга, предоставляемая через приложение, как описано в применимых условиях (если таковые имеются) и на этой странице/в этом приложении.
        Цель обработки
        Персональные данные, предоставленные пользователями через мобильное приложение «BuyLink» (далее «Мобильное приложение»), будут использоваться для следующих целей:
        Реклама
        Контакт по телефону
        Маркетинг по электронной почте
        Маркетинг по SMS
        Связь с пользователем
        Прямая регистрация
        Хостинг и бекенд работы
        Услуги VDS (VDS TÜRKİYE)
        Разрешения на доступ к устройству для использования мобильного приложения
        Персональные данные
        Мобильное приложение будет собирать следующие типы информации напрямую или через третьи стороны:
        номер телефона;
        имя, фамилия;
        адрес электронной почты;
        пол;
        дата рождения;
        адрес;
        различные типы информации;
        Разрешение на доступ к календарю;
        Разрешение на использование камеры;
        Разрешение на точное определение геолокации (непостоянное);
        Разрешение на приблизительное определение геолокации (непостоянное);
        Разрешение на использование телефона;
        Разрешение на использование сенсоров;
        Разрешение на отправку SMS;
        Разрешение на уведомления;
        Разрешение на использование датчиков движения;
        имя пользователя;
        пароль;
        изображение;
        префикс;
        фотография профиля.
        Настоящая политика конфиденциальности охватывает защиту любых Персональных данных, собранных через мобильное приложение, в соответствующих разделах или в предоставленном заранее специальном уведомлении о безопасности. Персональные данные могут быть предоставлены Пользователем свободно напрямую или автоматически во время использования. Вся информация, запрашиваемая мобильным приложением «BuyLink», необходима для правильного функционирования мобильного приложения и предоставления услуг пользователю, в противном случае мобильное приложение может не оказаться в состоянии обслуживать Пользователя. Пользователь может по своему усмотрению решить не предоставлять информацию, помеченную как ненужная в мобильном приложении.
        Использование файлов cookie или других инструментов отслеживания текущим приложением или сторонними организациями, используемыми этим приложением, направлено на предоставление Услуги, запрошенной Пользователем, а также на другие цели, описанные в этом документе, если таковые имеются, в Политике использования файлов cookie.
        Пользователи несут полную ответственность за любые Персональные данные, которые они или третьи стороны предоставляют, распространяют или делятся через мобильное приложение, и должны подтвердить, что третья сторона дала свое согласие на такое предоставление.
        Правила обработки данных
        Методы обработки
        Владелец приложения принимает все необходимые меры для предотвращения несанкционированного доступа, раскрытия, изменения или уничтожения конфиденциальной информации, охватываемой настоящей Политикой конфиденциальности.
        Данные обрабатываются в соответствии с целями текущей Политики конфиденциальности и организационными правилами и процедурами с эффективным использованием инструментов информационных технологий.
        Помимо Владельца приложения, если это необходимо, Конфиденциальная информация может быть передана третьим лицам, включая внешние стороны (обслуживание, хостинг, поставщики ИТ-услуг) и стороны, участвующие в управлении, назначенные Владельцем приложения в соответствии с условиями и положениями настоящей Политики конфиденциальности.
        Правовые основания
        Личные данные могут обрабатываться Владельцем приложения, если применяются следующие условия:
        • Если Пользователь дал свое однозначное согласие на обработку своих Персональных данных;
        • Предоставление информации, если это необходимо для выполнения соглашения с Пользователем и/или выполнения любых преддоговорных обязательств;
        • Если это необходимо для того, чтобы Владелец мобильного приложения выполнил юридическое обязательство, которому он подчиняется;
        • Если обработка необходима для осуществления общественных интересов или служебных полномочий, возложенных на Владельца мобильного образования;
        • Если обработка необходима для целей законных интересов, преследуемых Владельцем или третьей стороной.
        Цели обработки
        Информация, относящаяся к пользователю, собирается и обрабатывается для того, чтобы Предприниматель мог предоставлять свои услуги, соблюдать свои юридические обязательства, отвечать на запросы о правоприменении, защищать свои права и интересы (или права и интересы своих пользователей или третьих лиц), а также выявлять любые вредоносные или мошеннические действия.
        Срок хранения
        Персональные данные обрабатываются и хранятся в течение срока использования мобильного приложения пользователем с даты сбора. Персональные данные автоматически удаляются в течение 1 месяца, если пользователь не использует мобильное приложение в течение одного года. Если это произойдет, Пользователь может обратиться к Владельцу мобильного приложения для восстановления Персональных данных в течение 14 рабочих дней.
        По истечении срока подачи заявки на восстановление Персональных данных и если в течение этого периода от Пользователя не поступило никаких заявок, Персональные данные полностью удаляются без возможности восстановления.
        Разрешение на доступ к устройству
        В зависимости от устройства, на котором установлено мобильное приложение, мобильное приложение может потребовать определенных разрешений от устройства Пользователя.
        Эти разрешения необходимы до того, как Персональные данные будут введены Пользователем в мобильное приложение. Соответствующие разрешения, предоставленные Пользователем, могут быть отозваны Пользователем в любое время. В процессе отзыва предоставленных разрешений Пользователь может в любое время отозвать разрешения непосредственно в настройках устройства или связавшись с Владельцем мобильного приложения.
        Отзыв разрешений может привести к сбою в работе мобильного приложения. Соответствующие Персональные данные могут быть обработаны текущим приложением, если Пользователь предоставил необходимые разрешения.
        Место обработки данных
        Данные обрабатываются в операционных офисах Предпринимателя и других местах, где находятся стороны, участвующие в обработке. В зависимости от местоположения Пользователя передача данных может включать передачу данных Пользователя из его страны в другую страну.
        Разрешение на доступ к устройству для Персональных данных
        В зависимости от конкретного устройства Пользователя текущее приложение может потребовать определенных разрешений, описанных ниже, которые позволяют получить доступ к данным устройства Пользователя.
        По умолчанию эти разрешения должны быть предоставлены Пользователем до того, как будет предоставлен доступ к соответствующим данным. После предоставления разрешение может быть отозвано Пользователем в любое время. Чтобы отозвать эти разрешения, Пользователи могут обратиться к настройкам устройства или обратиться за поддержкой к Владельцу через контактную информацию, указанную в настоящем документе. Точный порядок управления разрешениями приложения может зависеть от устройства и приложения Пользователя.
        Обратите внимание, что отзыв таких разрешений может привести к сбою в работе этого приложения. Если Пользователь предоставит любое из перечисленных ниже разрешений, соответствующие Персональные данные могут быть обработаны (т.е. доступ к ним, их изменение или удаление) текущим приложением.
        Разрешение на уведомления
        Используется для доступа к напоминаниям на устройстве Пользователя, включая чтение, добавление и удаление записей.
        Подробная информация о обработке Персональных данных
        Персональные данные собираются для следующих целей и используются для следующих услуг:
        Связь с пользователем
        Форма обратной связи (текущее приложение)
        Заполнив форму обратной связи своими данными, Пользователь разрешает этому приложению использовать такую информацию в целях ответа на запросы о предоставлении информации, квот или других аналогичных запросов, указанных в заголовке формы.
        Требуемые Персональные данные: адрес; город; название компании; страна; дата рождения; адрес электронной почты; имя; пол; фамилия; номер телефона;
        Связь по электронной почте
        Пользователи, предоставившие адрес электронной почты, могут быть связаны с поддержкой, связанной с текущей Промоакцией, в коммерческих или рекламных целях.
        Требуемые Персональные данные: адрес электронной почты
        Связь по номеру телефона
        Пользователи, предоставившие номер телефона, могут быть связаны с поддержкой, связанной с текущим приложением, в коммерческих или рекламных целях.
        Требуемые Персональные данные: номер телефона
        Разрешение на доступ к устройству для Персональных данных
        Приложение требует разрешений от Пользователей для доступа к данным их устройств, как указано ниже:
        Разрешение на доступ к данным устройства для Персональных данных (текущее приложение)
        Это приложение требует от Пользователей определенных разрешений для доступа к данным их устройств, как указано ниже и описано в настоящем документе.
        Хостинг и инфраструктура бэкэнда
        Цель этого типа услуги – размещение данных и файлов, которые обеспечивают работу и распространение этого приложения, а также предоставление инфраструктуры, готовой для запуска определенных функций или частей этого приложения.
        VDS TÜRKİYE (VDS) (VDS GLOBAL YAZILIM ARGE GELİŞTİRME LİMİTED ŞİRKETİ)
        VDS TÜRKİYE (VDS) предоставляет хостинг и услуги бэкэнда, предоставляемые VDS Global Yazilim Arge Geliştirme Limited Şirketi.
        Обрабатываемые Персональные данные: различные данные, указанные в политике конфиденциальности услуги.
        Место обработки: Турция.
        Регистрация и аутентификация, предоставляемая напрямую через это приложение
        Регистрируясь или предоставляя идентификацию, Пользователи позволяют текущему приложению идентифицировать их и предоставлять доступ к определенным услугам. Персональные данные собираются и хранятся только для целей регистрации или идентификации. Собранная информация является только той информацией, которая необходима для предоставления запрашиваемой Пользователями услуги.
        Прямая регистрация (текущее приложение)
        Пользователь регистрируется, заполнив регистрационную форму и предоставив Персональные данные напрямую в текущее приложение.
        Обрабатываемые Персональные данные: адрес; город; название компании; страна; дата рождения; адрес электронной почты; имя; пол; фамилия; пароль; номер телефона; изображение; префикс; фотография профиля; Идентификатор Пользователя; имя пользователя; различные типы информации.
        Права пользователя
        Пользователи могут воспользоваться определенными правами в отношении своих данных, обрабатываемых Владельцем. Права регулируются применимым законодательством.
        В частности, Пользователи имеют следующие права:
        В любое время отозвать свое согласие. Пользователи имеют право отозвать свое согласие на обработку своих Персональных данных.
        Возражение против обработки данных. Пользователи имеют право возражать против обработки их данных, если они были получены на законных основаниях, кроме согласия. Более подробная информация предоставлена в соответствующем разделе ниже.
        Доступ к информации. Пользователи имеют право узнать, обрабатываются ли данные Владельцем, получить объяснение определенных аспектов обработки и получить копию обрабатываемых данных.
        Проверка и исправление. Пользователи имеют право проверить точность своих данных и потребовать их обновления или исправления.
        Ограничение обработки данных. Пользователи имеют право ограничить обработку своих данных в определенных условиях. В этом случае Владелец не имеет права обрабатывать их данные в каких-либо целях, он может только хранить эти данные.
        Удаление или иное удаление Персональных данных. Пользователи имеют право потребовать от Владельца удалить их данные в определенных условиях.
        Получение информации и передача ее другому контролеру. Пользователи имеют право получать свои данные в структурированном, широко используемом и машиночитаемом формате и передавать эти данные другому контролеру (контролеру) без каких-либо препятствий, если это технически возможно. Это положение применяется, когда информация обрабатывается автоматизированными средствами, и обработка основана на согласии Пользователя, на основе договора, в котором Пользователь является партнером, или на основе обязательств, ранее заключенных с ним.
        Подать жалобу. Пользователи имеют право подать жалобу в орган, уполномоченный на защиту их данных.
        
        Право на возражение против обработки
        Если Персональные данные обрабатываются в целях общественного интереса, осуществления служебных полномочий, предоставленных Владельцу мобильного приложения, или законных интересов, осуществляемых Владельцем мобильного приложения, Пользователи могут возразить против этой обработки, должным образом обосновав свое возражение. Пользователи должны знать, что если их Персональные данные обрабатываются для целей прямого маркетинга, они имеют право возражать против этой обработки в любое время без указания причин. Пользователи могут обратиться к соответствующим разделам текущего документа, чтобы узнать, обрабатывает ли Владелец Персональные данные в целях прямого маркетинга.
        Реализация прав
        Любой запрос на реализацию прав пользователя может быть направлен Владельцу через контактную информацию, указанную в настоящем документе. Эти запросы должны быть выполнены Предпринимателем бесплатно, как можно скорее и всегда в течение одного месяца.
        Правовые действия
        Персональные данные Пользователя могут использоваться Владельцем в юридических целях в суде или на стадиях возможных юридических действий, вызванных ненадлежащим использованием этого Приложения или связанных с ним Услуг.
        Доступ к системе и обслуживание
        В целях эксплуатации и обслуживания это Приложение и любые сторонние службы могут собирать файлы, которые фиксируют взаимодействия с этим Приложением (Системный вход), используя для этой цели другие Персональные данные (например, IP-адрес).
        Изменения в Политике конфиденциальности
        Владелец оставляет за собой право время от времени вносить изменения в текущую политику конфиденциальности.
        Владелец уведомит Пользователя об изменениях в Политике конфиденциальности через Мобильное приложение.
        Пользователь несет ответственность за проверку действующей Политики конфиденциальности и за осведомленность о любых внесенных в нее изменениях.
        Если изменения затрагивают деятельность по обработке, осуществляемую на основании согласия Пользователя, Владелец должен получить новое согласие от пользователя, если это необходимо.`,
      },
      statistic: {
        '0': 'Количество товаров',
        '1': 'Общая сумма продаж',
        '2': 'Общее количество рекомендаций',
        '3': 'Общее количество транзакций',
        '4': 'Всего рекомендовано',
        '5': 'Использованные рекомендации',
        '6': 'Рекомендации',
        '7': 'Доход за месяц',
        '8': 'Продажи',
        '9': 'Тренд',
        '10': 'Оценки и отзывы',
        '11': 'Количество оценок',
      },
      balance: {
        '0': 'Общая выручка',
        '1': 'Обязательство перед BuyLink',
        '2': 'Из кассы',
        '3': 'С баланса',
        '4': 'Чистая сумма',
        '5': 'После 3 дней задержки начнут начисляться штрафы',
        '6': 'Начинают начисляться штрафы (0,1% от общей суммы)',
        '7': 'В случае задержки платежа будут штрафы',
        '8': 'Дата платежа!',
        '9': 'Просроченный платеж!',
        '10': 'Осталось дней до платежа',
        '11': 'На данный момент нет данных',
        '12': 'Общий долг',
        '13': 'Платежи',
        '14': 'Чистый долг',
      },
      balanceTable: {
        '0': 'Сумма счета',
        '1': 'Скидка %',
        '2': 'Сумма со скидкой',
        '3': 'Комиссия %',
        '4': 'Сумма комиссии',
        '5': 'Дата',
        '6': 'Чистая сумма',
        '7': 'Имя пользователя',
        '8': 'Имя оператора',
        '9': 'Сумма',
        '10': 'Тип платежа',
        '11': 'Счет',
      },
      settingDashboard: {
        '1': 'Настройки',
        '2': 'Имя партнера',
        '3': 'Старый пароль',
        '4': 'Электронная почта',
        '5': 'Новый пароль',
      },
      months: {
        '1': 'Май',
        '2': 'Июнь',
        '3': 'Июль',
        '4': 'Авг',
        '5': 'Сент',
        '6': 'Октб',
        '7': 'Нояб',
        '8': 'Дек',
        '9': 'Янв',
        '10': 'Февр',
        '11': 'Март',
        '12': 'Aпр',
      },
    },
  },
};
const defaultLanguage = localStorage.getItem('lng');

i18n.use(initReactI18next).init({
  resources,

  lng: defaultLanguage ? defaultLanguage : 'az',
});

export default i18n;
