export const locales = ["en", "ka"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);

export type Translations = {
  nav: {
    home: string;
    about: string;
    projects: string;
    motion: string;
    contact: string;
    navigate: string;
    close: string;
    ariaLabel: string;
  };
  localeSwitch: {
    toEnglish: string;
    toGeorgian: string;
    ariaToEnglish: string;
    ariaToGeorgian: string;
  };
  hero: {
    title: string;
  };
  about: {
    lines: string[];
    sliderAlt: {
      one: string;
      two: string;
      three: string;
    };
  };
  projects: {
    header: {
      eyebrow: string;
      title: string;
      description: string;
    };
    label: string;
    visit: string;
    closeAria: string;
    previewSuffix: string;
    livePreview: string;
    brandCards: string;
    previews: {
      memorify: {
        title: string;
        subtitle: string;
        teamLine: string;
        detail: string;
        highlight: string;
        images: {
          primary: string[];
          desktop: string;
          watch: string[];
        };
      };
      maeli: {
        title: string;
        subtitle: string;
        teamLine: string;
        detail: string;
        images: {
          primary: string[];
          desktop: string;
        };
      };
      kutaisi: {
        title: string;
        subtitle: string;
        teamLine: string;
        detail: string;
        highlight: string;
        images: {
          primary: string[];
          desktop: string;
          mockups: string[];
        };
      };
      steel: {
        title: string;
        subtitle: string;
        teamLine: string;
        detail: string;
        images: {
          primary: string[];
          desktop: string;
          mockups: string[];
        };
      };
    };
  };
  motion: {
    srTitle: string;
    itemAlt: string[];
  };
  contact: {
    header: {
      eyebrow: string;
      title: string;
      description: string;
    };
    badge: string;
    eyes: {
      success: string;
      missingAt: string;
      holding: string;
      name: string;
      email: string;
      message: string;
      idle: string;
    };
    form: {
      labels: {
        name: string;
        email: string;
        message: string;
      };
      errors: {
        name: string;
        email: string;
        message: string;
      };
      submit: string;
      statusSending: string;
      statusSuccess: string;
      statusError: string;
      statusIdle: string;
    };
  };
};

const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      motion: "Vision",
      contact: "Contact",
      navigate: "Navigate",
      close: "Close",
      ariaLabel: "Primary navigation",
    },
    localeSwitch: {
      toEnglish: "EN",
      toGeorgian: "KA",
      ariaToEnglish: "Switch to English",
      ariaToGeorgian: "Switch to Georgian",
    },
    hero: {
      title: "Powered By Weby",
    },
    about: {
      lines: [
        "We create high-quality websites for businesses",
        "and various companies, Our strategy is to provide a client-specific design",
        "and interface that is of the highest level,",
        "based on the client's requirements.",
        
      ],
      sliderAlt: {
        one: "Slider 1",
        two: "Slider 2",
        three: "Slider 3",
      },
    },
    projects: {
      header: {
        eyebrow: "Our projects",
        title: "A selection of our recent work, showcasing strategy, design, and development in action",
        description:
          "Each project reflects our commitment to quality, performance, and user-focused design.",
      },
      label: "Projects",
      visit: "Visit website",
      closeAria: "Close preview",
      previewSuffix: "preview",
      livePreview: "Live Company preview",
      brandCards: "Company brand cards",
      previews: {
        memorify: {
          title: "Preview of website - Memorify.",
          subtitle:
            "A modern web platform designed to capture and revisit meaningful moments.",
          teamLine:
            "Our Team created full responsive Web site with unique Ul/UX design for Memorify brand.",
          detail:
            "Memorify is a clean and minimal website concept focused on preserving memories through an intultive and responsive user interface. The project emphasizes clarity, emotional storytelling, and consistent design across devices.",
          highlight:
            "Minimal interface, soft visual rhythm, and a calm color palette to support a memory-driven experience without visual noise.",
          images: {
            primary: [
              "Memorify page preview one",
              "Memorify page preview two",
            ],
            desktop: "Memorify desktop layout",
            watch: [
              "Memorify watch view one",
              "Memorify watch view two",
              "Memorify watch view three",
              "Memorify watch view four",
            ],
          },
        },
        maeli: {
          title: "Preview of website - Maeli LLC.",
          subtitle:
            "A modern web platform built to simplify car shipping, providing fast quotes, transparent communication, and nationwide coverage.",
          teamLine:
            "Our Team created full responsive Web site with unique UI/UX design for Maeli LLC Company.",
          detail:
            "Maeli LLC is a modern auto transport platform built to simplify nationwide car shipping with fast quotes, transparent communication, and reliable coverage across the U.S.",
          images: {
            primary: ["Maeli page preview one", "Maeli page preview two"],
            desktop: "Maeli desktop layout",
          },
        },
        kutaisi: {
          title: "Preview of website - Guide in Kutaisi.",
          subtitle:
            "A modern travel guide built to help visitors explore Kutaisi with clarity and inspiration.",
          teamLine:
            "Our Team created full responsive Web site with unique Ul/UX design for Guide in Kutaisi.",
          detail:
            "Guide in Kutaisi is a modern city guide platform built to help visitors explore Kutaisiƒ?Ts landmarks, history, and local culture through a clean, accessible, and user-friendly interface. The website focuses on clear navigation, visual storytelling, and practical information to make discovering the city simple and engaging for tourists and locals alike.",
          highlight:
            "Designed with minimalism in mind, this grid uses soft colors and a calm rhythm to showcase Kutaisi, creating a serene, memory-focused experience free of visual noise.",
          images: {
            primary: [
              "Guide in Kutaisi page preview one",
              "Guide in Kutaisi page preview two",
            ],
            desktop: "Guide in Kutaisi desktop layout",
            mockups: [
              "Guide in Kutaisi mockup one",
              "Guide in Kutaisi mockup two",
              "Guide in Kutaisi mockup three",
              "Guide in Kutaisi mockup four",
            ],
          },
        },
        steel: {
          title: "Preview of website - Lilien Store.",
          subtitle:
            "A clean e-commerce experience built for easy product discovery and fast checkout.",
          teamLine:
            "Our Team created full responsive Web site with unique Ul/UX design for Lilien store.",
          detail:
            "Lilien Store is an interactive e-commerce platform designed to provide a seamless shopping experience with intuitive navigation, engaging visuals, and efficient checkout processes.",
          images: {
            primary: [
              "Lilien Store page preview one",
              "Lilien Store page preview two",
            ],
            desktop: "Steel Company desktop layout",
            mockups: [
              "Steel mockup one",
              "Steel mockup two",
              "Steel mockup three",
              "Steel mockup four",
            ],
          },
        },
      },
    },
    motion: {
      srTitle: "Motion interlude",
      itemAlt: [
        "Motion image 1",
        "Motion image 2",
        "Motion image 3",
        "Motion image 4",
        "Motion image 5",
        "Motion image 6",
        "Motion image 7",
        "Motion image 8",
      ],
    },
    contact: {
      header: {
        eyebrow: "Contact us",
        title: "We help turn ideas into well-built products.",
        description:
          "Have a business, idea, challenge, or launch in mind? Get in touch — we’ll turn it into a real product.",
      },
      badge: "",
      eyes: {
        success: "Got your message! We'll respond soon.",
        missingAt: "Missing @",
        holding: "YEA!",
        name: "What a beautiful name!",
        email: "Checking your email...",
        message: "Write whatever you want, I'm not looking.",
        idle: "Hold me!",
      },
      form: {
        labels: {
          name: "Name",
          email: "Email",
          message: "Message",
        },
        errors: {
          name: "Please enter at least 2 characters.",
          email: "Please enter a valid email address.",
          message: "Message should be at least 10 characters.",
        },
        submit: "Send message",
        statusSending: "Sending your message...",
        statusSuccess: "Message sent successfully. We will reply soon.",
        statusError:
          "Message could not be sent right now. Please try again in a moment.",
        statusIdle: "We reply within two business days.",
      },
    },
  },
  ka: {
    nav: {
      home: "მთავარი",
      about: "ჩვენ შესახებ",
      projects: "პროექტები",
      motion: "ხედვა",
      contact: "კონტაქტი",
      navigate: "მენიუ",
      close: "დახურვა",
      ariaLabel: "ძირითადი ნავიგაცია",
    },
    localeSwitch: {
      toEnglish: "EN",
      toGeorgian: "KA",
      ariaToEnglish: "გადართე ინგლისურზე",
      ariaToGeorgian: "გადართე ქართულზე",
    },
    hero: {
      title: "Powered By Weby",
    },
    about: {
      lines: [
        "ჩვენ ვქმნით მაღალი ხარისხის ვებსაიტებს",
        "ბიზნესებისა და სხვადასხვა კომპანიებისთვის.",
        "ჩვენი სტრატეგია არის, კლიენტზე მორგებული დიზაინი",
        "და ინტერფეისი იყოს უმაღლესი დონის,",
        "კლიენტის მოთხოვნებიდან გამომდინარე.",
      ],
      sliderAlt: {
        one: "სლაიდერი 1",
        two: "სლაიდერი 2",
        three: "სლაიდერი 3",
      },
    },
    projects: {
      header: {
        eyebrow: "ჩვენი პროექტები",
        title: "ჩვენი ბოლო პროექტები, სადაც ნათლად ჩანს სტრატეგიის, დიზაინისა და განვითარების პრაქტიკული განხორციელება",
        description:
          "ყოველი პროექტი გამოხატავს ჩვენს ფოკუსს ხარისხზე, მაღალ წარმადობასა და მომხმარებელზე ორიენტირებულ დიზაინზე.",
      },
      label: "პროექტები",
      visit: "ვებსაიტის ნახვა",
      closeAria: "პრევიუს დახურვა",
      previewSuffix: "პრევიუ",
      livePreview: "კომპანიის ცოცხალი პრევიუ",
      brandCards: "კომპანიის ბრენდის ქარდები",
      previews: {
        memorify: {
          title: "ვებგვერდის პრევიუ — Memorify.",
          subtitle:
            "თანამედროვე ვებ-პლატფორმა, რომელიც შექმნილია მნიშვნელოვანი მომენტების დასაფიქსირებლად და დასაბრუნებლად.",
          teamLine:
            "ჩვენმა გუნდმა Memorify ბრენდისთვის შექმნა სრულად რისპონსივი ვებგვერდი უნიკალური UI/UX დიზაინით.",
          detail:
            "Memorify არის სუფთა და მინიმალისტური კონცეფცია, რომელიც ფოკუსირებულია მოგონებების შენარჩუნებაზე ინტუიტიური და რისპონსივი ინტერფეისით. პროექტი ხაზს უსვამს სისუფთავეს, ემოციურ თხრობას და ერთიან დიზაინს ყველა მოწყობილობაზე.",
          highlight:
            "მინიმალისტური ინტერფეისი, რბილი ვიზუალური რიტმი და მშვიდი ფერთა პალიტრა ქმნის მოგონებებზე დაფუძნებულ გამოცდილებას ზედმეტი ვიზუალური ხმაურის გარეშე.",
          images: {
            primary: [
              "Memorify გვერდის პრევიუ ერთი",
              "Memorify გვერდის პრევიუ ორი",
            ],
            desktop: "Memorify დესკტოპის განლაგება",
            watch: [
              "Memorify საათის ხედვა ერთი",
              "Memorify საათის ხედვა ორი",
              "Memorify საათის ხედვა სამი",
              "Memorify საათის ხედვა ოთხი",
            ],
          },
        },
        maeli: {
          title: "ვებგვერდის პრევიუ — Maeli LLC.",
          subtitle:
            "თანამედროვე პლატფორმა ავტომობილების ტრანსპორტირების გასამარტივებლად, სწრაფი შეთავაზებებით, გამჭვირვალე კომუნიკაციით და აშშ-ის მასშტაბით დაფარვით.",
          teamLine:
            "ჩვენმა გუნდმა Maeli LLC კომპანიისთვის შექმნა სრულად რისპონსივი ვებგვერდი უნიკალური UI/UX დიზაინით.",
          detail:
            "Maeli LLC არის თანამედროვე ავტოტრანსპორტირების პლატფორმა, რომელიც ამარტივებს ქვეყნის მასშტაბით მანქანების გადაზიდვას სწრაფი შეთავაზებებით, გამჭვირვალე კომუნიკაციით და საიმედო დაფარვით აშშ-ში.",
          images: {
            primary: ["Maeli გვერდის პრევიუ ერთი", "Maeli გვერდის პრევიუ ორი"],
            desktop: "Maeli დესკტოპის განლაგება",
          },
        },
        kutaisi: {
          title: "ვებგვერდის პრევიუ — Guide in Kutaisi.",
          subtitle:
            "თანამედროვე სამოგზაურო გიდი, რომელიც ეხმარება სტუმრებს ქუთაისის აღმოჩენაში სიზუსტითა და შთაგონებით.",
          teamLine:
            "ჩვენმა გუნდმა Guide in Kutaisi-ისთვის შექმნა სრულად რისპონსივი ვებგვერდი უნიკალური UI/UX დიზაინით.",
          detail:
            "Guide in Kutaisi არის თანამედროვე ქალაქის გიდის პლატფორმა, რომელიც ეხმარება ვიზიტორებს ქუთაისის ღირსშესანიშნაობების, ისტორიისა და ადგილობრივი კულტურის აღმოჩენაში სუფთა, ხელმისაწვდომი და მომხმარებელზე ორიენტირებული ინტერფეისით. ვებგვერდი ფოკუსირებულია მკაფიო ნავიგაციაზე, ვიზუალურ თხრობასა და პრაქტიკულ ინფორმაციაზე, რათა ქალაქის აღმოჩენა მარტივი და მიმზიდველი იყოს ტურისტებისა და ადგილობრივებისთვის.",
          highlight:
            "მინიმალისტური ხედვით შექმნილი ეს გრიდი რბილი ფერებითა და მშვიდი რიტმით აჩვენებს ქუთაისს და ქმნის მშვიდ, მოგონებებზე დაფუძნებულ გამოცდილებას ვიზუალური ხმაურის გარეშე.",
          images: {
            primary: [
              "Guide in Kutaisi გვერდის პრევიუ ერთი",
              "Guide in Kutaisi გვერდის პრევიუ ორი",
            ],
            desktop: "Guide in Kutaisi დესკტოპის განლაგება",
            mockups: [
              "Guide in Kutaisi მაკაპი ერთი",
              "Guide in Kutaisi მაკაპი ორი",
              "Guide in Kutaisi მაკაპი სამი",
              "Guide in Kutaisi მაკაპი ოთხი",
            ],
          },
        },
        steel: {
          title: "ვებგვერდის პრევიუ — Lilien Store.",
          subtitle:
            "სუფთა e-commerce გამოცდილება, რომელიც შექმნილია მარტივი პროდუქტის ძიებისა და სწრაფი checkout-ისთვის.",
          teamLine:
            "ჩვენმა გუნდმა Lilien Store-ისთვის შექმნა ყველა მოწყობილობაზე მორგებული e-commerce ვებსაიტი გამორჩეული UI/UX დიზაინით.",
          detail:
            "Lilien Store არის თანამედროვე e-commerce პლატფორმა მკაფიო კატალოგით, მარტივი ნავიგაციით და სწრაფი checkout პროცესით.",
          images: {
            primary: [
              "Lilien Store გვერდის პრევიუ ერთი",
              "Lilien Store გვერდის პრევიუ ორი",
            ],
            desktop: "Lilien Store დესკტოპის განლაგება",
            mockups: [
              "Lilien Store მაკაპი ერთი",
              "Lilien Store მაკაპი ორი",
              "Lilien Store მაკაპი სამი",
              "Lilien Store მაკაპი ოთხი",
            ],
          },
        },
      },
    },
    motion: {
      srTitle: "მოძრაობის ინტერლუდია",
      itemAlt: [
        "მოძრაობის სურათი 1",
        "მოძრაობის სურათი 2",
        "მოძრაობის სურათი 3",
        "მოძრაობის სურათი 4",
        "მოძრაობის სურათი 5",
        "მოძრაობის სურათი 6",
        "მოძრაობის სურათი 7",
        "მოძრაობის სურათი 8",
      ],
    },
    contact: {
      header: {
        eyebrow: "დაგვიკავშირდით",
        title: "ჩვენ დაგეხმარებით იდეების რეალურ პროდუქტებად გარდაქმნაში.",
        description:
          "გაქვს ბიზნესი, იდეა ან პროექტი? დაგვიკავშირდი — დაგეხმარებით მის სრულფასოვან პროდუქტად ჩამოყალიბებაში.",
      },
      badge: "",
      eyes: {
        success: "შეტყობინება მივიღეთ! მალე გიპასუხებთ.",
        missingAt: "აკლია @",
        holding: "იეე!",
        name: "როგორი ლამაზი სახელია!",
        email: "ელფოსტას ვამოწმებ...",
        message: "რაც გინდა დაწერე, მე არ ვუყურებ.",
        idle: "მომეჭიდე!",
      },
      form: {
        labels: {
          name: "სახელი",
          email: "ელფოსტა",
          message: "შეტყობინება",
        },
        errors: {
          name: "გთხოვთ შეიყვანოთ მინიმუმ 2 სიმბოლო.",
          email: "გთხოვთ შეიყვანოთ სწორი ელფოსტა.",
          message: "შეტყობინება უნდა იყოს მინიმუმ 10 სიმბოლო.",
        },
        submit: "შეტყობინების გაგზავნა",
        statusSending: "შეტყობინება იგზავნება...",
        statusSuccess: "შეტყობინება წარმატებით გაიგზავნა. მალე გიპასუხებთ.",
        statusError:
          "ახლა შეტყობინების გაგზავნა ვერ მოხერხდა. გთხოვთ სცადოთ ცოტა მოგვიანებით.",
        statusIdle: "ვპასუხობთ ორი სამუშაო დღის განმავლობაში.",
      },
    },
  },
};

export const getTranslations = (locale: Locale): Translations =>
  translations[locale] ?? translations[defaultLocale];

export const getLocaleFromPathname = (pathname: string): Locale => {
  const segment = pathname.split("/")[1];
  return isLocale(segment) ? segment : defaultLocale;
};
