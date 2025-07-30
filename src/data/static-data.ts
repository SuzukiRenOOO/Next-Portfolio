// NAVIGATION ITEM
export const navItems = [
  {
    id: 1,
    title: "ホーム",
    url: "/",
  },
  {
    id: 2,
    title: "会社概要",
    url: "#about",
  },
  {
    id: 3,
    title: "プロジェクト",
    url: "/projects",
  },
  {
    id: 4,
    title: "スキル",
    url: "#skills",
  },
  {
    id: 5,
    title: "スキル",
    url: "#experience",
  },
  {
    id: 6,
    title: "お問い合わせ",
    url: "#contact",
  },
];

// HERO ITEM
export const heroItem = {
  id: 1,
  image_url: "/avatar.jfif",
  title: "hero",
  name: "こんにちは、私はSasada Yosukeです。",
  designation: "ソフトウェアエンジニア",
  experience: "8 years",
  focus: "Next.js & TypeScript",
  contact: {
    title: "こちらからお問い合わせください",
    url: "#contact",
  },
};

// ABOUT ITEM
export const aboutItem = {
  title: "私について",
  btnTitle: "Know More About Me",
  url: "#",
  description:
    "👋 こんにちは！MERNとPERNスタックを専門とするソフトウェアエンジニアの笹田洋介です。TypeScript、JavaScript、React、Next.js、Redux、Node.js、Express.js、MongoDB、PostgreSQLなど、様々な言語を使っています。役立つアプリケーションの開発と、他の開発者の支援に情熱を注いでいます。ぜひ一緒に、影響力のあるソフトウェアソリューションを構築しましょう。",
};

// PROJECTS ITEM
export const projectsItem = {
  title: "私のプロジェクト",
  url: "/projects",
  btnTitle: "すべてのプロジェクト",
  projects: [
    {
      id: 1,
      title: "DEAN & DELUCA 公式オンラインストア",
      image_url: "/1.jpeg",
      description:
        "このサイトは、厳選されたグルメ商品、キッチン用品、ギフトを取り揃えた高級食品小売業者、DEAN & DELUCAの公式オンラインストアです。定期配送、店舗受け取り、カスタマイズ可能なギフトセット、オンライン限定商品などのサービスを提供しています。ウェブサイトは、eコマース機能をサポートし、ユーザーエクスペリエンスを向上させるためにカスタマイズされたカスタムCMSを使用して開発されています。",
      date: new Date(2022, 11, 22),
      projectLink: "https://www.deandeluca.co.jp/shop/",
      github: "https://www.deandeluca.co.jp/shop/",
      technology: [
        {
          id: 1,
          title: "jQuery",
        },
        {
          id: 2,
          title: "Bootstrap",
        },
        {
          id: 3,
          title: "Underscore",
        },
        {
          id: 4,
          title: "Magento",
        },
        {
          id: 5,
          title: "Slick",
        },
        {
          id: 6,
          title: "Eric Meyer's Reset CSS",
        },
      ],
    },
    {
      id: 2,
      title: "醤３（ショウスリー）プロジェクト 公式サイト",
      image_url: "/2.png",
      description:
        "このサイトは、醤３（ショウスリー）プロジェクトの公式サイトです。このプロジェクトは、独自の醤油「Shoyu3」の開発と普及に注力する共同プロジェクトです。このプロジェクトは、革新的な醸造技術を取り入れながら、日本の食文化の真髄を体現する醤油の創造を目指しています。このウェブサイトでは、プロジェクトの理念、醸造プロセス、そしてShoyu3を支えるチームに関する情報を提供しています。ただし、サイト構築に使用したフレームワークやツールに関する技術的な詳細は非公開です。",
      date: new Date(2022, 11, 23),
      projectLink: "https://shoyu3.com/",
      github: "https://shoyu3.com/",
      technology: [
        {
          id: 1,
          title: "STUDIO",
        },
        {
          id: 2,
          title: "EB Garamond",
        },
        {
          id: 3,
          title: "Lato ",
        },
        {
          id: 4,
          title: "Roboto ",
        },
      ],
    },
    {
      id: 3,
      title: "プレイリビング伊豆公式サイト",
      image_url: "/3.png",
      description: "このサイトは、伊豆半島にあるプライベートヴィラタイプのホテル「PLAYLIVING IZU」の公式サイトです。露天風呂やサウナ、海と山のパノラマビューなど、贅沢でありながらもアットホームな雰囲気をお楽しみいただけます。自然とモダンなデザインが融合した快適な空間で、人と人との繋がりを深めることをコンセプトにしています。宿泊施設、施設、ご予約方法についてご案内いたします。",
      date: new Date(2022, 11, 24),
      projectLink: "https://playliving-izu.com/",
      github: "https://playliving-izu.com/",
      technology: [
        {
          id: 1,
          title: "STUDIO",
        },
        {
          id: 2,
          title: "EB Garamond",
        },
        {
          id: 3,
          title: "Zen Old Mincho",
        },
        {
          id: 4,
          title: "Motserrat",
        },
      ],
    },
    {
      id: 4,
      title: "株式会社アネシス 採用情報サイト",
      image_url: "/4.png",
      description:
        "このサイトは、熊本と福岡に拠点を置く日本の住宅メーカー、株式会社アネシスの公式採用プラットフォームです。注文住宅を専門とする同社は、設計、施工、営業、サポートなど、様々な職種で積極的に人材を募集しています。ウェブサイトでは、求人情報、採用イベント、そして企業文化や価値観に関する情報を提供しています。サイト構築に使用されているフレームワークやツールに関する技術的な詳細は非公開です。",
      date: new Date(2022, 11, 25),
      projectLink:
        "https://anesis.co.jp/recruit/",
      github:
        "https://anesis.co.jp/recruit/",
      technology: [
        {
          id: 1,
          title: "WordPress",
        },
        {
          id: 2,
          title: "Barba.js",
        },
        {
          id: 3,
          title: "GSAP",
        },
        {
          id: 4,
          title: "jQuery",
        },
        {
          id: 5,
          title: "Swiper",
        },
        {
          id: 6,
          title: "js-cookie",
        },
        {
          id: 7,
          title: "Pjax",
        },
        {
          id: 8,
          title: "normalize.css",
        },
        {
          id: 9,
          title: "Apache",
        },
        {
          id: 10,
          title: "Lato",
        },
      ],
    },
    {
      id: 5,
      title: "株式会社renue公式サイト",
      image_url: "/5.png",
      description:
        "このサイトは、AIを活用したビジネス変革を専門とする日本のコンサルティングファーム、株式会社renueの公式サイトです。同社は、レポート作成や定例会議といった従来の業務を自動化することで、コンサルタントが価値創造に集中できるよう、コンサルティングの在り方を再定義することに重点を置いています。同社のサービスは、新規事業開発、AI製品開発、プロジェクトマネジメント、ITデューデリジェンス、AI人材育成など多岐にわたります。ウェブサイトでは、同社のサービス内容、企業理念、チームメンバー、採用情報などに関する情報を提供しています。ただし、サイト構築に使用したフレームワークやツールに関する技術的な詳細は非公開です。",
      date: new Date(2022, 11, 26),
      projectLink:
        "https://renue.co.jp/",
      github:
        "https://renue.co.jp/",
      technology: [
        {
          id: 1,
          title: "STUDO",
        },
        {
          id: 2,
          title: "Inter",
        },
        {
          id: 3,
          title: "NotoSansJP",
        },
      ],
    },
    {
      id: 6,
      title: "",
      image_url: "/6.png",
      description:
        "WordPressスタックを使用して構築されたミニマルなEコマースストアです。このアプリケーションは、商品の閲覧、検索、購入のためのユーザーフレンドリーで効率的なプラットフォームを提供します。ユーザー認証、商品分類、ショッピングカート管理、安全な決済処理などの機能が含まれています。",
      date: new Date(2022, 11, 27),
      projectLink:
        "https://www.rokkakukan-sakurado.com/",
      github:
        "https://www.rokkakukan-sakurado.com/",
      technology: [
        {
          id: 1,
          title: "WordPress",
        },
        {
          id: 2,
          title: "Barba.js",
        },
        {
          id: 3,
          title: "GSAP",
        },
        {
          id: 4,
          title: "jQuery",
        },
        {
          id: 5,
          title: "Locomotive Scroll",
        },
        {
          id: 6,
          title: "Swiper",
        },
        {
          id: 7,
          title: "Pjax",
        },
        {
          id: 8,
          title: "Apache",
        },
      ],
    },
    {
      id: 7,
      title: "",
      image_url: "/7.png",
      description: "説明：このサイトは、1948年創業の沖縄の伝統酒造会社、米島酒造株式会社の公式サイトです。久米島に拠点を置く同社は、沖縄の蒸留酒である泡盛（琉球泡盛）を専門に手造りしています。地元の軟水と伝統的な製法を用い、少量生産にこだわり、豊かでまろやかな味わいを生み出しています。ウェブサイトでは、同社の歴史、製造工程、商品ラインナップ、オンラインストアに関する情報を提供しています。サイト構築に使用したフレームワークやツールに関する技術的な詳細は非公開です。",
      date: new Date(2022, 11, 30),
      projectLink: "https://yoneshima-shuzo.co.jp/",
      github: "https://yoneshima-shuzo.co.jp/",
      technology: [
        {
          id: 1,
          title: "Shopify",
        },
        {
          id: 2,
          title: "GSAP",
        },
        {
          id: 3,
          title: "jQuery",
        },
        {
          id: 4,
          title: "Iazysizes",
        },
        {
          id: 5,
          title: "jQuery-UI",
        },
        {
          id: 6,
          title: "Awiper",
        },
        {
          id: 7,
          title: "Alata",
        },
        {
          id: 8,
          title: "Crimson Text",
        },
        {
          id: 9,
          title: "Zen Old Mincho",
        },
        {
          id: 10,
          title: "NotoSansJP",
        },
      ],
    },
    {
      id: 8,
      title: "とまりのつけもの公式サイト",
      image_url: "/8.png",
      description:
        "このサイトは、鳥取に拠点を置く高品質な漬物専門店「とまりのつけもの」の公式ウェブサイトです。特にらっきょうを中心とした漬物商品を扱っており、三年子らっきょうなどの多彩な商品を提供しています。サイト内では、会社の歴史や製造方法、商品紹介に加え、レシピや季節ごとの記事、漬物作りの魅力やこだわりについても発信しています。使用されているフレームワークや開発ツールなどの技術的な詳細は公開されていません。",
      date: new Date(2023, 0, 17),
      projectLink:
        "https://tomarino.jp/",
      github: "https://tomarino.jp/",
      technology: [
        {
          id: 1,
          title: "Shopify",
        },
        {
          id: 2,
          title: "Flickity",
        },
        {
          id: 3,
          title: "GSAP",
        },
        {
          id: 4,
          title: "NotoSerif JP",
        },
        {
          id: 5,
          title: "Shippori Antique",
        },
        {
          id: 6,
          title: "Raleway",
        },
      ],
    },
    {
      id: 9,
      title: "UNEVEN HUB STORE 公式サイト",
      image_url: "/9.png",
      description:
        "このサイトは、名古屋を拠点とするファッション＆ライフスタイルコンセプトストア「UNEVEN HUB STORE」の公式オンラインストアです。モード、ストリート、カジュアル、ヴィンテージなど、様々なスタイルを融合させた、厳選されたアパレル、アクセサリー、ホームグッズを取り揃えています。国内外のブランドを取り扱い、新鮮で多様なショッピング体験を提供することを目指しています。ウェブサイトでは、商品コレクション、今後のイベント情報、そしてストアの理念を紹介しています。サイト構築に使用されたフレームワークやツールに関する技術的な詳細は非公開です。",
      date: new Date(2023, 0, 18),
      projectLink: "https://unevenhub.store/",
      github: "https://unevenhub.store/",
      technology: [
        {
          id: 1,
          title: "Shopify",
        },
        {
          id: 2,
          title: "React.js",
        },
        {
          id: 3,
          title: "StyledComponents",
        },
        {
          id: 4,
          title: "jQuery",
        },
        {
          id: 5,
          title: "destyle.css",
        },
      ],
    },
    {
      id: 10,
      title: "スムーズスキン公式オンラインストア ",
      image_url: "/10.png",
      description:
        "このサイトは、家庭用IPL（インテンス・パルス・ライト）脱毛器を専門とするブランド、SmoothSkinの公式オンラインストアです。英国を拠点とするIPL技術のパイオニアであるCyDen Ltd.が開発したSmoothSkinは、安全かつ効果的な脱毛を実現するピュアアダプト、ベアポップ、ベアスマートなどの製品を提供しています。ウェブサイトでは、製品情報、ユーザーガイド、購入オプションを提供しています。サイト構築に使用されたフレームワークやツールに関する技術的な詳細は非公開です。",
      date: new Date(2023, 0, 19),
      projectLink:
        "https://mysmoothskin.jp/",
      github:
        "https://mysmoothskin.jp/",
      technology: [
        {
          id: 1,
          title: "MakeShop",
        },
        {
          id: 2,
          title: "WordPress",
        },
        {
          id: 3,
          title: "Vue.js",
        },
        {
          id: 4,
          title: "imagesLoaded",
        },
        {
          id: 5,
          title: "GSAP",
        },
        {
          id: 6,
          title: "jquery",
        },
        {
          id: 7,
          title: "Lodash",
        },
        {
          id: 8,
          title: "Lodash",
        },
        {
          id: 9,
          title: "Nginx",
        },
      ],
    },
    {
      id: 11,
      title: "六角館さくら堂KYOTO（ロッカクカン さくら堂 KYOTO）公式サイト",
      image_url: "/11.png",
      description:
        "このサイトは、京都で高品質なメイクブラシと関連アクセサリーを取り扱う専門店「六角館さくら堂 KYOTO」の公式オンラインストアです。京都の伝統的な町家を改装した店内には、広島県熊野筆の技法を用いて作られた150種類以上のブラシを取り揃えています。チークブラシ、コンシーラーブラシ、シルク製のまつ毛カールアップブラシなど、豊富な品揃えをご用意しています。また、着物レンタルやブラシケア用品のレンタルも行っており、京都らしい伝統的なショッピング体験とモダンな感覚を融合させた空間で、お客様をおもてなしいたします。",
      date: new Date(2023, 1, 8),
      projectLink:
        "http://pgdesign.com/",
      github:
        "http://pgdesign.com/",
      technology: [
        {
          id: 1,
          title: "WordPress",
        },
        {
          id: 2,
          title: "jQuery",
        },
        {
          id: 3,
          title: "Apache",
        },
        {
          id: 4,
          title: "MySQL",
        },
        {
          id: 5,
          title: "PHP",
        },
      ],
    },
    {
      id: 12,
      title: "Appbrew公式サイト",
      image_url: "/12.png",
      description: "このサイトは、アイグッズ株式会社（iGoods Co., Ltd.）が提供するサービス「ROBOTI」の公式プラットフォームです。ROBOTIは、食品配送、搬送、清掃などの業務に特化した業務用ロボットを提供しています。T9 Pro、BellaBot、RACLEBOなど、ホスピタリティ、レストラン、工場、倉庫、オフィス、医療など、様々な業種に対応する幅広いロボットを取り揃えています。製品選定から設置、メンテナンスまで、包括的なサポートを提供しています。レンタルサービスや、ロボット導入のための補助金活用ガイドも提供しています。",
      date: new Date(2023, 1, 17),
      projectLink:
        "https://appbrew.io/",
      github:
        "https://appbrew.io/",
      technology: [
        {
          id: 1,
          title: "Next.js",
        },
        {
          id: 2,
          title: "Newt",
        },
        {
          id: 3,
          title: "React.js",
        },
        {
          id: 4,
          title: "jamstack",
        },
        {
          id: 5,
          title: "Amazon Cloudfront",
        },
        {
          id: 6,
          title: "AmazonS3",
        },
        {
          id: 7,
          title: "Poppins",
        },
      ],
    },
    {
      id: 13,
      title: "Appbrew公式サイト",
      image_url: "/13.png",
      description:
        "このサイトは、アイグッズ株式会社（iGoods Co., Ltd.）が提供するサービス「ROBOTI」の公式プラットフォームです。ROBOTIは、食品配送、搬送、清掃などの業務に特化した業務用ロボットを提供しています。T9 Pro、BellaBot、RACLEBOなど、ホスピタリティ、レストラン、工場、倉庫、オフィス、医療など、様々な業種に対応する幅広いロボットを取り揃えています。製品選定から設置、メンテナンスまで、包括的なサポートを提供しています。レンタルサービスや、ロボット導入のための補助金活用ガイドも提供しています。",
      date: new Date(2023, 7, 14),
      projectLink: "https://robot.i-goods.co.jp/",
      github: "https://robot.i-goods.co.jp/",
      technology: [
        {
          id: 1,
          title: "WordPress",
        },
        {
          id: 2,
          title: "flatpickr",
        },
        {
          id: 3,
          title: "GSAP",
        },
        {
          id: 4,
          title: "Swiper",
        },
        {
          id: 5,
          title: "Nginx",
        },
      ],
    },
    {
      id: 14,
      title: "ナイル株式会社（Nyle Inc.）公式サイト",
      image_url: "/14.png",
      description:
        "このサイトは、デジタルトランスフォーメーション（DX）とマーケティングサービスを専門とする日本企業、ナイル株式会社（Nyle Inc.）の公式プラットフォームです。SEOコンサルティング、コンテンツ制作、データ分析、AIを活用したソリューションを提供し、企業のオンラインプレゼンス向上を支援しています。また、人気アプリ検索サイト「Appliv」などのメディアプラットフォームの運営や、自動車サブスクリプションサービスを含む自動車業界向けDXソリューションの提供も行っています。",
      date: new Date(2023, 9, 19),
      projectLink: "https://nyle.co.jp/",
      github: "https://nyle.co.jp/",
      technology: [
        {
          id: 1,
          title: "AmazonS3",
        },
        {
          id: 2,
          title: "React",
        },
        {
          id: 3,
          title: "Next.js",
        },
        {
          id: 4,
          title: "GSAP",
        },
        {
          id: 5,
          title: "microCMS",
        },
        {
          id: 6,
          title: "GTM",
        },
        {
          id: 7,
          title: "Amazon Web Services",
        },
      ],
    },
    {
      id: 15,
      title: "シック・ジャパン公式サイト",
      image_url: "/15.png",
      description:
        "このサイトは、シェービングとスキンケア製品を専門とするリーディングカンパニー、シック・ジャパンの公式プラットフォームです。シック・ジャパンは、カミソリ、シェービングジェル、スキンケア製品など、男性と女性の両方のグルーミングニーズに応える幅広い製品を提供しています。ウェブサイトでは、快適で効果的なシェービング体験を実現するための詳細な製品情報、使用上のヒント、安全に関するガイドラインを提供しています。",
      date: new Date(2024, 0, 12),
      projectLink: "https://schick.jp/",
      github: "https://schick.jp/",
      technology: [
        {
          id: 1,
          title: "Shopify",
        },
        {
          id: 2,
          title: "jQuery",
        },
        {
          id: 3,
          title: "Cloudflare",
        },
        {
          id: 4,
          title: "jsDelivr",
        },
        {
          id: 5,
          title: "NotoSerifJP",
        },
        {
          id: 6,
          title: "Playfair Display",
        },
        {
          id: 7,
          title: "NotoSansJP",
        },
      ],
    },
  ],
};

// SKILLS ITEM
export const skillsItem = [
  {
    id: 1,
    title: "HTML",
  },
  {
    id: 2,
    title: "CSS",
  },
  {
    id: 3,
    title: "JavaScript",
  },
  {
    id: 4,
    title: "TypeScript",
  },
  {
    id: 21,
    title: "C",
  },
  {
    id: 22,
    title: "C++",
  },
  {
    id: 5,
    title: "React.js",
  },
  {
    id: 6,
    title: "Next.js",
  },
  {
    id: 7,
    title: "jQuery",
  },
  {
    id: 8,
    title: "Node.js",
  },
  {
    id: 9,
    title: "Express.js",
  },
  {
    id: 10,
    title: "MongoDB",
  },
  {
    id: 11,
    title: "PostgreSQL",
  },
  {
    id: 12,
    title: "SCSS",
  },
  {
    id: 13,
    title: "Bootstrap",
  },
  {
    id: 14,
    title: "Tailwind CSS",
  },
  {
    id: 15,
    title: "Linux",
  },
  {
    id: 16,
    title: "Git",
  },
  {
    id: 17,
    title: "GitHub",
  },
  {
    id: 18,
    title: "Prisma",
  },
  {
    id: 19,
    title: "Figma",
  },
  {
    id: 20,
    title: "Photoshop",
  },
];

// EXPERIENCE ITEM
export const experienceItem = [
  {
    id: 1,
    company: "Bluetechinternational · リモート",
    role: "フルスタック開発者",
    from: new Date(2017, 3, 1).getFullYear(),
    to: new Date(2023, 3, 1).getFullYear(),
    description:
      "BlueTech Internationalでは、2019年から2023年までフルスタック開発者として勤務し、リモート環境の中でさまざまなテクノロジーやフレームワークを活用した革新的なソフトウェアソリューションの開発において中心的な役割を担いました。クロスファンクショナルなチームと連携しながら、クライアントのニーズに応えるスケーラブルなアプリケーションの設計・開発・導入に貢献しました。フルスタック開発の専門知識を活かし、BlueTech Internationalの事業成長と成功に寄与いたしました。",
    stack: [
      {
        id: 1,
        title: "HTML",
      },
      {
        id: 2,
        title: "CSS",
      },
      {
        id: 3,
        title: "JAVASCRIPT",
      },
      {
        id: 4,
        title: "TYPESCRIPT",
      },
      {
        id: 5,
        title: "REACT.JS",
      },
      {
        id: 6,
        title: "NEXT.JS",
      },
      {
        id: 7,
        title: "JQUERY",
      },
      {
        id: 8,
        title: "NODE.JS",
      },
      {
        id: 9,
        title: "EXPRESS.JS",
      },
      {
        id: 10,
        title: "MONGODB",
      },
      {
        id: 11,
        title: "POSTGRESQL",
      },
      {
        id: 12,
        title: "SCSS",
      },
      {
        id: 13,
        title: "BOOTSTRAP",
      },
      {
        id: 14,
        title: "TAILWIND CSS",
      },
      {
        id: 15,
        title: "LINUX",
      },
      {
        id: 16,
        title: "GIT",
      },
      {
        id: 17,
        title: "GITHUB",
      },
      {
        id: 18,
        title: "PRISMA",
      },
      {
        id: 19,
        title: "FIGMA",
      },
      {
        id: 20,
        title: "PHOTOSHOP",
      },
    ],
  },
  {
    id: 2,
    company: "RojrzTech LLC · リモート",
    role: "ソフトウェアエンジニア",
    from: new Date(2024, 9, 1).getFullYear(),
    to: "",
    description:
      "現在、RojrzTech LLCにてソフトウェアエンジニアとして勤務しております。2024年に入社して以来、複雑なビジネス課題に対応するソフトウェアアプリケーションの設計・開発・保守を担当しています。リモート環境で業務を行いながら、多職種のチームと連携し、クライアントの要件を満たす高品質なソリューションの提供に努めています。ソフトウェアエンジニアとしてのスキルと経験を活かし、RojrzTech LLCの成長と成功に貢献しています。",
    stack: [
      {
        id: 1,
        title: "HTML",
      },
      {
        id: 2,
        title: "CSS",
      },
      {
        id: 3,
        title: "JAVASCRIPT",
      },
      {
        id: 4,
        title: "WooCommerce",
      },
      {
        id: 5,
        title: "Responsive Web Design",
      },
      {
        id: 6,
        title: "Web Development",
      },
    ],
  },
  {
    id: 3,
    company: "GTソリューションズ · フルタイム",
    role: "フルスタックエンジニア",
    from: new Date(2022, 9, 1).getFullYear(),
    to: "",
    description:
      "現在、GTソリューションズ Japanにてフルスタックエンジニアとして勤務しております。2022年に入社して以来、オンサイトで堅牢なソフトウェアソリューションの設計および開発に携わってまいりました。チームと協力しながら、ビジネスの成長と成功を促進するアプリケーションの設計、実装、最適化に貢献しています。フルスタックエンジニアとして、GTソリューションズ Japanおよびそのクライアントのニーズに応える高品質なソリューションの提供に尽力しております。",
    stack: [
      {
        id: 1,
        title: "HTML",
      },
      {
        id: 2,
        title: "CSS",
      },
      {
        id: 3,
        title: "JAVASCRIPT",
      },
      {
        id: 4,
        title: "WooCommerce",
      },
      {
        id: 5,
        title: "Responsive Web Design",
      },
      {
        id: 6,
        title: "Web Development",
      },
    ],
  },
];

// CONTACT ITEM
export const contactItem = {
  title: "お問い合わせ",
  description:
    "ご質問やご連絡がございましたら、どうぞお気軽にお問い合わせください。\nお気軽にお問い合わせください! 私は常に、刺激的な新しい機会について交流し、話し合うことを楽しみにしています。\n下記の連絡フォームを使用してメッセージを送信することもできます。 できるだけ早くご連絡いたします。\nあなたからの返信を楽しみにしています！",
  contact_items: [
    {
      id: 1,
      title: "メールを送信",
      url: "mailto:t0p.superstar0518@gmail.com",
    },
    {
      id: 2,
      title: "電話してね",
      url: "tel:+92-320-1221617",
    },
    // {
    //   id: 3,
    //   title: "Linkedin",
    //   url: "https://www.linkedin.com/in/alpha97/",
    // },
  ],
};
// COPYRIGHT ITEM
export const copyrightItem = {
  name: "T0P | Sasada Yosuke",
  url: "https://www.linkedin.com/in/alpha97/",
};
