import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "Home": "Home",
          "About": "About Us",
          "InvitedSpeakers": "Invited Speakers",   
          "Venue": "Venue",
          "Registration": "Registration",
          "Contacts": "Contact",
          "ImportantDates": "Important Dates",
          "ImportantDatesDescription": "Announcing the 4th KAO National Congress and the 2nd TAO Balkan Congress! These premier events for ophthalmology professionals offer a unique platform to explore advancements, share research, and collaborate on future developments in eye care.",
          "congress4th": "4th KAO National Congress & 2nd TAO Balkan Congress",

        //   Letter

          "firstParagraph": "Dear Colleagues and friends,",
          "secondParagraph": "On behalf of the Organizing and Scientific Committees, it is my great privilege and pleasure to welcome you to the 4th National and 2nd Balkan Congress that will be take place in Prishtina.",
          "thirdParagraph": "This time we organize our meeting together with our colleagues from Turkey. This presents a great opportunity for the exchange experiences and innovative ideas in the treatment of various problems in ophthalmology.",
          "4thParagraph": "Unique topics and friendly atmosphere will help to enjoy two days exclusive scientific program. In Prishtina you can meet very polite people and nice cuisine.",
          "5thParagraph": "Let’s get together, to meet old friends and new ones and learn from each other.",
          "6thParagraph": "Looking forward to welcoming you all in Prishtina.",
          "7thParagraph": "President of Kosovo Association of Ophthalmologists",
          
        //  AboutPage

          "TitleAbout": "Ophthalmological Society of Kosova - OSK",
          "1stAboutDescription": "OSK was established in 2002 in Pristina. The founders of this society are:  Prof. Dr. Kelmend Spahiu, Prof. Dr. Gazmend Kaçaniku and Prof. Dr. Naser Salihu.",
          "2ndAboutDescription": "The purpose of the society is the education and training of ophthalmologists of the Republic of Kosova, the exchange of experiences as well as protection of their interests. To meet these goals OSK will organize seminars, presentations, professional meetings with national and international character. Special importance will be given to cooperation with other societies. OSK is a regular member of the ICO (International Council of Ophthalmology) and also in the process of admission to the SOE (European Society of Ophthalmology).",
          "3rdAboutDescription": "The society has 95 members. They have given their contribution for development of modern ophthalmology by participating in national and international meetings.",
          "4thAboutDescription": "Dear members of OSK, I wish you success in the future and also invite you for further cooperation in order of professional improvement.",
          "OurTeam": "Our Team",
          "DescriptionTeam": "Our society brings together leading experts who are passionate about improving vision health and setting new standards in ophthalmology.",

        // Register Page  

          "Please fill out the form below": "Please fill out the form below",
          "InstitutionTitle": "InstitutionTitle",
          "Title": "Title (Dr, Professor, Mr, Ms, Mrs)",
          "FirstName": "First Name",
          "LastName": "Last Name",
          "Address": "Address",
          "City": "City",
          "Country": "Country",
          "PhoneNumber": "Phone Number",

        // Venue Page

          "VenueTitle": "Prishtina Selected as Venue for 4th National Congress and 2nd Balkan Congress",
          "VenueDescription": "Hey there! Get ready for an amazing conference experience in the friendly city of Prishtina, Kosovo's lively capital! Join us for the monumental 4th National and 2nd Balkan Congress alongside the groundbreaking Ophthalmology Revolution Congress. Don't miss out on this incredible opportunity, October 25th and 26th, 2024.",
          "1stEmeraldHotel": "Nestled in the heart of Pristina, where the vibrant cityscape meets the tranquility of upscale hospitality, lies Hotel Emerald, an oasis of elegance and charm. From the moment you step into our opulent foyer, adorned with glistening chandeliers and contemporary art pieces that reflect the city's rich cultural tapestry, you'll feel enveloped in a world of sophistication and warmth.",
          "2ndEmeraldHotel": "Each corner of Hotel Emerald whispers tales of luxury and comfort, inviting you to unwind and indulge in the pleasures of refined living. Our meticulously designed rooms and suites blend modern aesthetics with timeless elegance, offering a sanctuary where every detail is curated to perfection. Sink into plush bedding adorned with the finest linens, and awaken to panoramic views of Pristina's skyline, painting the dawn sky with hues of gold and amber.",
          "ExactLocation": "Exact location of the place where the conference will be held",

        // Our Invited Speakers Page
        
          "OurInvitedSpeakersTitle": "Our Invited Speakers",
          "OurInvitedSpeakersDescription": "We are excited to introduce the esteemed speakers for the 4th National Congress and 2nd Balkan Congress of Ophthalmology. Each expert will share valuable insights and expertise in the field of ophthalmology. Here is the list of invited speakers who will join us for this remarkable event. We look forward to their inspiring presentations and engaging discussions.",

        // Contact Page
        
          "ContactUs": "Contact Us",
          "GetInTouch": "Get in touch with us",
          "OurLocation": "Our Location",
          "EmailAddress": "Email Address"
        }
      },
      alb: {
        translation: {
          "Home": "Ballina",
          "About": "Rreth Nesh",
          "InvitedSpeakers": "Folësit e ftuar",    
          "Venue": "Vendi",
          "Registration": "Regjistrimi",
          "Contacts": "Kontakti",
          "ImportantDates": "Datat me rëndësi",
          "ImportantDatesDescription": "Shpallim Kongresin e 4-të Kombëtar të KAO-s dhe Kongresin e 2-të Ballkanik të TAO-s! Këto ngjarje kryesore për profesionistët e oftalmologjisë ofrojnë një platformë unike për të eksploruar përparimet, për të shkëmbyer kërkime dhe për të bashkëpunuar në zhvillimet e ardhshme në kujdesin ndaj syve.",
          "congress4th": "Kongresi i 4-të Kombëtar i KAO-s dhe Kongresi i 2-të Ballkanik i TAO-s",

        //   Letter

          "firstParagraph": "Të nderuar kolegë dhe miq,",
          "secondParagraph": "Në emër të Komitetit Organizativ dhe Shkencor, kam privilegjin dhe kënaqësinë time të madhe t'ju uroj mirëseardhjen në Kongresin e IV-të Kombëtar dhe të 2-të Ballkanik që do të mbahet në Prishtinë.",
          "thirdParagraph": "Këtë herë ne organizojmë takimin tonë së bashku me kolegët tanë nga Turqia. Kjo paraqet një mundësi të shkëlqyer për shkëmbimin e përvojave dhe ideve inovative në trajtimin e problemeve të ndryshme në oftalmologji.",
          "4thParagraph": "Temat unike dhe atmosfera miqësore do t'ju ndihmojnë të shijoni një program ekskluziv shkencor dyditor. Në Prishtinë mund të takoni njerëz shumë të sjellshëm dhe kuzhinë të këndshme.",
          "5thParagraph": "Le të mblidhemi, të takojmë miq të vjetër dhe të rinj dhe të mësojmë nga njëri-tjetri.",
          "6thParagraph": "Ju mirëpresim të gjithëve në Prishtinë.",
          "7thParagraph": "Kryetar i Shoqatës së Oftalmologëve të Kosovës",
          
        //   AboutPage

          "TitleAbout": "SHOQATA E OFTALMOLOGËVE TË KOSOVËS – SHOFK",
          "1stAboutDescription": "SHOFK është themeluar në vitin 2002 në Prishtinë. Themeluesit e kësaj shoqate janë: Prof. Dr. Kelmend Spahiu, Prof. Dr. Gazmend Kaçaniku dhe Prof. Dr. Naser Salihu.",
          "2ndAboutDescription": "Qëllimi i shoqatës është edukimi dhe aftësimi professional i oftalmologëve të Republikës së Kosovës, shkëmbimi i përvojave si dhe mbrojtja e interesave të tyre. Për t’i përmbushur këto qëllime SHOFK do të organizojë seminare, prezentime, tubime profesionale me karakter kombëtar dhe ndërkombëtar. Bashkëpunimit me shoqatat tjera do t’i kushtohet një rëndësi e veçantë. SHOFK është anëtare e rregullt e ICO (International Council of Ophthalmology) si dhe është në procesin përfundimtar të pranimit në SOE (European Society of Ophthalmology).",
          "3rdAboutDescription": "Shoqata ka 95 anëtarë, të cilët me pjesëmarrjen aktive të tyre si në tubimet kombëtare ashtu edhe ne ndërkombëtare kanë dhënë kontributin e tyre në zhvillimin e oftalmologjisë moderne.",
          "4thAboutDescription": "Anëtarëve të SHOFK ju dëshiroj suksese edhe në të ardhmen dhe njëherit i ftoj për bashkëpunim të mëtejshëm me qëllim të ngritjes profesionale.",
          "OurTeam": "Ekipi ynë",
          "DescriptionTeam": "Shoqata jonë mbledh së bashku ekspertë kryesorë të cilët janë të apasionuar pas përmirësimit të shëndetit të shikimit dhe vendosjes së standardeve të reja në oftalmologji.",

          // Register Page

          "Please fill out the form below": "Ju lutemi plotësoni formularin e mëposhtëm",
          "InstitutionTitle": "Emri i Institucionit",
          "Title": "Titulli (Dr, Profesor, Mr, Ms, Mrs)",
          "FirstName": "Emri",
          "LastName": "Mbiemri",
          "Address": "Adresa",
          "City": "Qyteti",
          "Country": "Shteti",
          "PhoneNumber": "Nr.tel",

          // Venue Page

          "VenueTitle": "Prishtina u zgjodh si vend i Kongresit të 4-të Kombëtar dhe Kongresit të 2-të Ballkanik",
          "VenueDescription": "Hejj! Bëhuni gati për një përvojë të mrekullueshme konferencash në qytetin mik të Prishtinës, kryeqytetin e gjallë të Kosovës! Bashkohuni me ne në Kongresin e 4-të Kombëtar dhe të 2-të Ballkanik monumental krahas Kongresit novator të Revolucionit të Oftalmologjisë. Mos e humbisni këtë mundësi të jashtëzakonshme më 25 dhe 26 tetor 2024.",
          "1stEmeraldHotel": "I vendosur në zemër të Prishtinës, ku peizazhi i gjallë i qytetit takohet me qetësinë e mikpritjes luksoze, ndodhet Hotel Emerald, një oaz elegance dhe sharmi. Që nga momenti që hyni në hollin tonë të pasur, të stolisur me llambadarë vezullues dhe pjesë të artit bashkëkohor që pasqyrojnë tapiceri të pasur kulturore të qytetit, do të ndiheni të mbështjellë në një botë sofistikimi dhe ngrohtësie.",
          "2ndEmeraldHotel": "Çdo cep i Hotel Emerald pëshpërit përralla luksi dhe rehatie, duke ju ftuar të çlodheni dhe të kënaqeni me kënaqësitë e jetesës së rafinuar. Dhomat dhe suitat tona të dizajnuara me përpikëri ndërthurin estetikën moderne me elegancën e përjetshme, duke ofruar një vend të shenjtë ku çdo detaj është i kuruar në përsosmëri. Zhytuni në shtrat prej pelushi të stolisur me rrobat më të mira dhe zgjohuni me pamjet panoramike të horizontit të Prishtinës, duke pikturuar qiellin e agimit me nuancat e arit dhe qelibarit.",
          "ExactLocation": "Vendndodhja e saktë e vendit ku do të mbahet konferenca",

          // Our Invited Speaker Page

          "OurInvitedSpeakersTitle": "Folësit e ftuar",
          "OurInvitedSpeakersDescription": "Kemi kënaqësinë të prezantojmë folësit e nderuar për Kongresin e 4-të Kombëtar dhe Kongresin e 2-të Ballkanik të Oftalmologjisë. Çdo ekspert do të ndajë njohuri dhe ekspertizë të vlefshme në fushën e oftalmologjisë. Këtu është lista e folësve të ftuar që do të na bashkohen për këtë ngjarje të jashtëzakonshme. Mezi presim prezantimet e tyre frymëzuese dhe diskutimet angazhuese.",

          // Contact Page

          "ContactUs": "Na kontaktoni",
          "GetInTouch": "Kontaktoni me ne",
          "OurLocation": "Lokacioni ynë",
          "EmailAddress": "E-mail adresa"
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
