export type Locale = 'en' | 'ja';

export const translations = {
  en: {
    // Header
    home: 'Home',
    articles: 'Articles',
    benchmarks: 'AI Benchmarks',
    history: 'AI History',
    gallery: 'Technyans',
    about: 'About',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',

    // Footer
    legal: 'Legal',
    quickLinks: 'Quick Links',
    categories: 'Categories',
    footerDescription: 'Supporting busy people in their AI learning journey with Technyan. Making AI news easy and enjoyable.',
    allRightsReserved: 'All rights reserved',

    // Home Page
    latestAiNews: 'LATEST AI NEWS',
    stayUpdatedWithAI: 'We Support Your AI Learning Journey',
    heroDescription: 'Keeping up with AI is tough, but you\'re doing great! We\'re here to make your daily AI catch-up easier and more enjoyable. Let\'s stay informed together!',
    browseAllArticles: 'Browse All Articles',
    aboutUs: 'About Us',

    // Features Section
    featuresTitle: 'Key Features',
    featureLatestNewsTitle: 'Catch Up on AI News Daily',
    featureLatestNewsDesc: 'Stay up-to-date with the latest AI developments and breakthroughs as they happen.',
    featureMultiViewTitle: 'Look Back at AI History',
    featureMultiViewDesc: 'Explore AI evolution history through timeline, milestone, impact map, and more - trace back and overview the journey in your preferred format.',
    featureTechnyanTitle: 'Grow with Tech-nyan',
    featureTechnyanDesc: 'Our adorable mascot Tech-nyan brings comfort and joy to your daily AI news catch-up.',

    latestArticles: 'Latest Articles',
    viewAll: 'View All',
    browseByCategory: 'Browse by Category',

    // Articles Page
    allArticles: 'All Articles',
    articlesPageDescription: 'Explore our comprehensive collection of AI news, research, and insights. Use the filters below to find exactly what you\'re looking for.',
    searchPlaceholder: 'Search articles...',
    search: 'Search',
    all: 'All',
    showing: 'Showing',
    article: 'article',
    articlesCount: 'articles',
    noArticlesFound: 'No articles found matching your criteria.',

    // History Page
    historyPageTitle: 'Impact History',
    historyPageDescription: 'Explore the timeline of AI developments that shaped the world. View major milestones and breakthroughs in different formats.',
    viewMode: 'View Mode',
    timelineView: 'Timeline',
    milestoneView: 'Milestone',
    impactMapView: 'Impact Map',
    archiveGridView: 'Archive',
    storyFlowView: 'Story',
    timelineViewDesc: 'Vertical timeline with chronological flow',
    milestoneViewDesc: 'Grouped by year and month',
    impactMapViewDesc: 'Visualized by impact size',
    archiveGridViewDesc: 'Compact calendar-style grid',
    storyFlowViewDesc: 'Immersive storytelling experience',
    publishedOn: 'Published on',
    articlesByMonth: 'articles',
    noArticlesInPeriod: 'No articles in this period',

    // Gallery Page
    galleryTitle: 'Technyan Gallery',
    galleryDescription: 'Meet our team of coding cats! Each Technyan brings their unique style to the world of tech.',
    filterAll: 'All',
    filterBasic: 'Basic',
    filterAccessorized: 'Accessorized',
    filterThemed: 'Themed',
    categoryBasic: 'Basic',
    categoryAccessorized: 'Accessorized',
    categoryThemed: 'Themed',
    galleryNoResults: 'No Technyans found in this category.',
    galleryShowing: 'Showing',
    galleryOf: 'of',
    galleryTechnyans: 'Technyans',
    galleryCopyright: 'All Technyan images are copyrighted. Unauthorized use is prohibited.',

    // Technyan Character Names - Basic
    technyanBlackCat: 'Black Cat',
    technyanBrownTabby: 'Brown Tabby',
    technyanCalicoCat: 'Calico Cat',
    technyanGreyCat: 'Grey Cat',
    technyanOrangeTabby: 'Orange Tabby',
    technyanSiameseCat: 'Siamese Cat',
    technyanTortoiseshellCat: 'Tortoiseshell Cat',
    technyanTuxedoCat: 'Tuxedo Cat',
    technyanWhiteCat: 'White Cat',

    // Technyan Character Names - Accessorized
    technyanCapCat: 'Cap Cat',
    technyanFluffyBowtie: 'Fluffy Cat with Bowtie',
    technyanHeadphones: 'Headphones Cat',
    technyanScottishFold: 'Scottish Fold with Glasses',
    technyanSunglasses: 'Sunglasses Cat',

    // Technyan Character Names - Themed
    technyanAlien: 'Alien Cat',
    technyanAstronaut: 'Astronaut Cat',
    technyanChef: 'Chef Cat',
    technyanClown: 'Clown Cat',
    technyanConstruction: 'Construction Cat',
    technyanDetective: 'Detective Cat',
    technyanDiver: 'Diver Cat',
    technyanElf: 'Elf Cat',
    technyanFairy: 'Fairy Cat',
    technyanFarmer: 'Farmer Cat',
    technyanFirefighter: 'Firefighter Cat',
    technyanGamer: 'Gamer Cat',
    technyanGhost: 'Ghost Cat',
    technyanGraduate: 'Graduate Cat',
    technyanKimono: 'Kimono Cat',
    technyanKing: 'King Cat',
    technyanMagician: 'Magician Cat',
    technyanMummy: 'Mummy Cat',
    technyanNurse: 'Nurse Cat',
    technyanOrc: 'Orc Cat',
    technyanPilot: 'Pilot Cat',
    technyanPirate: 'Pirate Cat',
    technyanPolice: 'Police Cat',
    technyanRobot: 'Robot Cat',
    technyanRockstar: 'Rockstar Cat',
    technyanSamurai: 'Samurai Cat',
    technyanSkater: 'Skater Cat',
    technyanSuperhero: 'Superhero Cat',
    technyanTeacher: 'Teacher Cat',
    technyanVampire: 'Vampire Cat',
    technyanViking: 'Viking Cat',
    technyanWizard: 'Wizard Cat',
    technyanZombie: 'Zombie Cat',

    // About Page
    aboutTitle: 'About Technyan\'s AI Digests',
    aboutSubtitle: 'Supporting busy people who are doing their best to keep up with AI.',
    ourMission: 'Our Mission',
    missionParagraph1: 'Technyan\'s AI Digests was founded to support busy people trying to stay current with AI developments. We know how challenging it can be to keep up with the rapid pace of AI innovation while managing your daily responsibilities.',
    missionParagraph2: 'Our mission is simple: make AI news accessible, easy to digest, and enjoyable to read. We\'re here to cheer you on as you stay informed about AI. You\'re doing amazing by being here!',
    whatWeCover: 'What We Cover',
    languageModels: 'Language Models',
    languageModelsDescription: 'Latest updates on ChatGPT, Claude, Gemini, and other breakthrough language models transforming how we interact with AI.',
    imageGeneration: 'Image Generation',
    imageGenerationDescription: 'News about Midjourney, Stable Diffusion, DALL-E, and other AI art tools pushing creative boundaries.',
    researchBreakthroughs: 'Research Breakthroughs',
    researchBreakthroughsDescription: 'Cutting-edge AI research from leading institutions and companies around the world.',
    practicalApplications: 'Practical Applications',
    practicalApplicationsDescription: 'Real-world AI implementations and use cases across industries and domains.',
    ourValues: 'Our Values',
    accuracy: 'Accuracy',
    accuracyDescription: 'We verify our sources and strive for factual, accurate reporting on all AI developments.',
    clarity: 'Clarity',
    clarityDescription: 'We explain complex AI concepts in clear, accessible language without oversimplification.',
    timeliness: 'Timeliness',
    timelinessDescription: 'We deliver news quickly while maintaining our commitment to accuracy and quality.',
    independence: 'Independence',
    independenceDescription: 'We maintain editorial independence and provide unbiased coverage of the AI landscape.',
    meetTechnyan: 'Meet Technyan!',
    technyanDesc: 'A studious and enthusiastic AI-savvy cat who cheers on busy people trying to keep up with AI news! Technyan (Tech × Nyan) is here to make your daily AI catch-up easier and more enjoyable. You\'re doing great! 🐱✨',
    mascotAlt: 'Technyan - Technyan\'s AI Digests mascot',
    technyanGreeting: 'Keep going! You\'re awesome! 🐱✨',
    stayConnected: 'Stay Connected',
    stayConnectedDescription: 'Explore our latest articles and join thousands of readers staying informed about AI.',

    // 404 Page
    pageNotFound: 'PAGE NOT FOUND',
    notFoundMessage: 'Oops! Technyan couldn\'t find the page you\'re looking for.',
    notFoundDescription: 'The page might have been moved, deleted, or never existed. Let\'s get you back on track!',
    goToHomepage: 'Go to Homepage',
    lookingForSomething: 'Looking for something specific?',
    otherTopics: 'Other Topics',

    // Categories
    chatgpt: 'ChatGPT',
    claude: 'Claude',
    research: 'Research',
    other: 'Other',

    // Bookmarks
    bookmark: 'Bookmark',
    bookmarked: 'Bookmarked',
    removeBookmark: 'Remove bookmark',
    addToBookmarks: 'Add to bookmarks',
    bookmarkSavedComment: 'Great choice! 🐱✨',
    bookmarkHoverComment: 'Save this for later! 📖',

    // Privacy Policy Page
    privacyTitle: 'Privacy Policy',
    privacyLastUpdated: 'Last Updated: January 20, 2025',
    privacyIntro: 'Technyan\'s AI Digests ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website.',

    privacySection1Title: '1. Information We Collect',
    privacySection1Subtitle: '1.1 Information You Provide',
    privacySection1Content1: 'We do not currently collect personal information directly from users. Our website does not have contact forms, comment features, or user registration.',
    privacySection1Subtitle2: '1.2 Automatically Collected Information',
    privacySection1Content2: 'Language Preference: We store your selected language preference (Japanese or English) in your browser\'s Local Storage to enhance your browsing experience.',
    privacySection1Content3: 'Site Analytics: We use Google Search Console to monitor site performance and improve content quality. This service may collect information such as your IP address, browser type, and pages visited.',

    privacySection2Title: '2. How We Use Your Information',
    privacySection2Content1: 'Language Settings: To remember your language preference and display content in your preferred language.',
    privacySection2Content2: 'Site Improvement: To understand how visitors use our site and improve content quality and user experience.',
    privacySection2Content3: 'Technical Maintenance: To ensure our website functions properly and securely.',

    privacySection3Title: '3. Cookies and Local Storage',
    privacySection3Content1: 'Our website uses Local Storage (not cookies) to save your language preference. This data is stored only on your device and is not transmitted to our servers.',
    privacySection3Content2: 'Google Search Console may use cookies to collect analytics data. You can control cookie settings through your browser preferences.',

    privacySection4Title: '4. Third-Party Services',
    privacySection4Subtitle: '4.1 Vercel (Hosting)',
    privacySection4Content1: 'Our website is hosted on Vercel. Vercel may collect technical information for hosting purposes. Please refer to Vercel\'s Privacy Policy for more information.',
    privacySection4Subtitle2: '4.2 Google Search Console',
    privacySection4Content2: 'We use Google Search Console to monitor site performance. Google may collect data about your visit. Please refer to Google\'s Privacy Policy for more information.',

    privacySection5Title: '5. Data Security',
    privacySection5Content: 'We implement reasonable security measures to protect information. However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.',

    privacySection6Title: '6. Your Rights',
    privacySection6Content1: 'Access and Control: You can clear your language preference by clearing your browser\'s Local Storage.',
    privacySection6Content2: 'Browser Settings: You can control cookies and tracking through your browser settings.',
    privacySection6Content3: 'Opt-Out: You can opt out of Google Analytics tracking using browser extensions or privacy settings.',

    privacySection7Title: '7. Children\'s Privacy',
    privacySection7Content: 'Our website is not directed to children under 13. We do not knowingly collect information from children.',

    privacySection8Title: '8. Changes to This Policy',
    privacySection8Content: 'We may update this Privacy Policy from time to time. We will notify users of significant changes by updating the "Last Updated" date at the top of this page.',

    privacySection9Title: '9. Contact Us',
    privacySection9Content: 'If you have questions about this Privacy Policy, please contact us through our website or social media channels.',

    privacyOperator: 'Operator: Technyan\'s AI Digests Team',

    // Terms of Service Page
    termsTitle: 'Terms of Service',
    termsLastUpdated: 'Last Updated: January 20, 2025',
    termsIntro: 'Welcome to Technyan\'s AI Digests. By accessing or using our website, you agree to be bound by these Terms of Service. Please read them carefully.',

    termsSection1Title: '1. Service Overview',
    termsSection1Content: 'Technyan\'s AI Digests is a website that provides news, articles, and information about artificial intelligence developments. We curate and present AI-related content to help busy people stay informed about the latest AI developments.',

    termsSection2Title: '2. Acceptance of Terms',
    termsSection2Content: 'By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use our website.',

    termsSection3Title: '3. Intellectual Property Rights',
    termsSection3Subtitle: '3.1 Our Content',
    termsSection3Content1: 'All original content on this website, including but not limited to articles, images, graphics, logos, and the Technyan character, is the property of Technyan\'s AI Digests and is protected by copyright laws.',
    termsSection3Subtitle2: '3.2 Third-Party Content',
    termsSection3Content2: 'We reference and cite third-party sources in our articles. All third-party content remains the property of its respective owners. We provide proper attribution and links to original sources.',
    termsSection3Subtitle3: '3.3 Limited Use License',
    termsSection3Content3: 'You may view and access our content for personal, non-commercial use. You may not reproduce, distribute, modify, or create derivative works without our express written permission.',

    termsSection4Title: '4. Disclaimer of Warranties',
    termsSection4Subtitle: '4.1 Information Accuracy',
    termsSection4Content1: 'While we strive to provide accurate and up-to-date information, we make no warranties or representations about the accuracy, completeness, or reliability of any content on our website.',
    termsSection4Subtitle2: '4.2 Service Availability',
    termsSection4Content2: 'We do not guarantee that our website will be available at all times. We may suspend, modify, or discontinue any part of our service without notice.',
    termsSection4Content3: 'THE WEBSITE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.',

    termsSection5Title: '5. Limitation of Liability',
    termsSection5Content: 'To the fullest extent permitted by law, Technyan\'s AI Digests shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website.',

    termsSection6Title: '6. Prohibited Activities',
    termsSection6Content: 'You agree not to:',
    termsSection6Item1: 'Use our website for any unlawful purpose',
    termsSection6Item2: 'Attempt to gain unauthorized access to our systems',
    termsSection6Item3: 'Interfere with or disrupt the website or servers',
    termsSection6Item4: 'Use automated tools to access or scrape content without permission',
    termsSection6Item5: 'Reproduce or redistribute our content without permission',
    termsSection6Item6: 'Misrepresent your affiliation with any person or entity',

    termsSection7Title: '7. External Links',
    termsSection7Content: 'Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of external sites. Accessing third-party links is at your own risk.',

    termsSection8Title: '8. Governing Law',
    termsSection8Content: 'These Terms of Service shall be governed by and construed in accordance with the laws of Japan. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Japan.',

    termsSection9Title: '9. Changes to Terms',
    termsSection9Content: 'We reserve the right to modify these Terms of Service at any time. We will notify users of significant changes by updating the "Last Updated" date. Your continued use of the website after changes constitutes acceptance of the modified terms.',

    termsSection10Title: '10. Contact Information',
    termsSection10Content: 'If you have any questions about these Terms of Service, please contact us through our website or social media channels.',

    termsOperator: 'Operator: Technyan\'s AI Digests Team',
  },
  ja: {
    // Header
    home: 'ホーム',
    articles: '記事一覧',
    benchmarks: 'AIベンチマーク',
    history: 'AIの歴史',
    gallery: 'テクにゃんたち',
    about: 'このサイトについて',
    privacy: 'プライバシーポリシー',
    terms: '利用規約',

    // Footer
    legal: '法的情報',
    quickLinks: 'クイックリンク',
    categories: 'カテゴリ',
    footerDescription: '忙しい毎日の中でAI情報のキャッチアップを頑張るあなたを、テクにゃんと一緒に応援します。',
    allRightsReserved: '全著作権所有',

    // Home Page
    latestAiNews: '最新AIニュース',
    stayUpdatedWithAI: 'あなたのAI学習を、全力で応援',
    heroDescription: 'AIのキャッチアップは大変だけど、あなたは頑張ってる！毎日のAI情報収集を、もっと楽しく、もっと簡単に。一緒に最新情報を追いかけよう！',
    browseAllArticles: 'すべての記事を見る',
    aboutUs: 'このサイトについて',

    // Features Section
    featuresTitle: '主な機能',
    featureLatestNewsTitle: '毎日最新のAIニュースをキャッチアップ',
    featureLatestNewsDesc: 'AIの最新情報や躍進をいち早くキャッチアップできます。',
    featureMultiViewTitle: 'AIの歴史を振り返る',
    featureMultiViewDesc: 'タイムライン、マイルストーン、インパクトマップなど、好みの形式でAI進化の歴史をさかのぼって俯瞰できます。',
    featureTechnyanTitle: 'テクにゃんと一緒に成長する',
    featureTechnyanDesc: '可愛いマスコット・テクにゃんが、毎日のAIニュースチェックに癒しと楽しさをプラスします。',

    latestArticles: '最新記事',
    viewAll: 'すべて見る',
    browseByCategory: 'カテゴリから探す',

    // Articles Page
    allArticles: 'すべての記事',
    articlesPageDescription: 'AIニュース、研究、洞察の包括的なコレクションをご覧ください。下のフィルターを使用して、お探しの情報を見つけてください。',
    searchPlaceholder: '記事を検索...',
    search: '検索',
    all: 'すべて',
    showing: '表示中',
    article: '件の記事',
    articlesCount: '件の記事',
    noArticlesFound: '条件に一致する記事が見つかりませんでした。',

    // History Page
    historyPageTitle: 'インパクトヒストリー',
    historyPageDescription: '世界を変えたAI開発のタイムラインを探索しましょう。主要なマイルストーンと躍進を、さまざまな形式でご覧ください。',
    viewMode: '表示モード',
    timelineView: 'タイムライン',
    milestoneView: 'マイルストーン',
    impactMapView: 'インパクトマップ',
    archiveGridView: 'アーカイブ',
    storyFlowView: 'ストーリー',
    timelineViewDesc: '時系列の流れを可視化',
    milestoneViewDesc: '年月でグループ化',
    impactMapViewDesc: 'インパクトの大きさで可視化',
    archiveGridViewDesc: 'カレンダー風コンパクト表示',
    storyFlowViewDesc: '没入型ストーリー体験',
    publishedOn: '公開日',
    articlesByMonth: '件の記事',
    noArticlesInPeriod: 'この期間に記事はありません',

    // Gallery Page
    galleryTitle: 'テクにゃんギャラリー',
    galleryDescription: 'コーディングする猫のチームに会おう！それぞれのテクにゃんが、テクノロジーの世界に独自のスタイルをもたらします。',
    filterAll: 'すべて',
    filterBasic: 'ベーシック',
    filterAccessorized: 'アクセサリー付き',
    filterThemed: 'テーマ別',
    categoryBasic: 'ベーシック',
    categoryAccessorized: 'アクセサリー付き',
    categoryThemed: 'テーマ別',
    galleryNoResults: 'このカテゴリにテクにゃんは見つかりませんでした。',
    galleryShowing: '表示中',
    galleryOf: '/',
    galleryTechnyans: '件のテクにゃん',
    galleryCopyright: 'すべてのテクにゃん画像は著作権で保護されています。無断使用を禁止します。',

    // Technyan Character Names - Basic
    technyanBlackCat: '黒猫',
    technyanBrownTabby: '茶トラ',
    technyanCalicoCat: '三毛猫',
    technyanGreyCat: '灰色猫',
    technyanOrangeTabby: '茶トラ',
    technyanSiameseCat: 'シャム猫',
    technyanTortoiseshellCat: 'サビ猫',
    technyanTuxedoCat: 'ハチワレ猫',
    technyanWhiteCat: '白猫',

    // Technyan Character Names - Accessorized
    technyanCapCat: '帽子猫',
    technyanFluffyBowtie: '蝶ネクタイのふわふわ猫',
    technyanHeadphones: 'ヘッドホン猫',
    technyanScottishFold: 'メガネのスコティッシュフォールド',
    technyanSunglasses: 'サングラス猫',

    // Technyan Character Names - Themed
    technyanAlien: 'エイリアン猫',
    technyanAstronaut: '宇宙飛行士猫',
    technyanChef: 'シェフ猫',
    technyanClown: 'ピエロ猫',
    technyanConstruction: '工事現場猫',
    technyanDetective: '探偵猫',
    technyanDiver: 'ダイバー猫',
    technyanElf: 'エルフ猫',
    technyanFairy: '妖精猫',
    technyanFarmer: '農家猫',
    technyanFirefighter: '消防士猫',
    technyanGamer: 'ゲーマー猫',
    technyanGhost: 'ゴースト猫',
    technyanGraduate: '卒業生猫',
    technyanKimono: '着物猫',
    technyanKing: '王様猫',
    technyanMagician: 'マジシャン猫',
    technyanMummy: 'ミイラ猫',
    technyanNurse: '看護師猫',
    technyanOrc: 'オーク猫',
    technyanPilot: 'パイロット猫',
    technyanPirate: '海賊猫',
    technyanPolice: '警察官猫',
    technyanRobot: 'ロボット猫',
    technyanRockstar: 'ロックスター猫',
    technyanSamurai: '侍猫',
    technyanSkater: 'スケーター猫',
    technyanSuperhero: 'スーパーヒーロー猫',
    technyanTeacher: '先生猫',
    technyanVampire: '吸血鬼猫',
    technyanViking: 'バイキング猫',
    technyanWizard: '魔法使い猫',
    technyanZombie: 'ゾンビ猫',

    // About Page
    aboutTitle: 'Technyan\'s AI Digestsについて',
    aboutSubtitle: '忙しい毎日の中でAI情報のキャッチアップを頑張る、あなたを応援します。',
    ourMission: 'ミッション',
    missionParagraph1: 'Technyan\'s AI Digestsは、忙しい日々の中でAIの最新情報を追い続けようと頑張る人たちを応援するために設立されました。日々の仕事や生活で忙しい中、急速に進化するAI技術に追いつくのは大変だということを、私たちは理解しています。',
    missionParagraph2: '私たちのミッションはシンプルです。AIニュースをわかりやすく、読みやすく、楽しく。あなたがAIの情報をキャッチアップし続けることを、全力で応援します。ここに来てくれて、本当にありがとう！',
    whatWeCover: 'カバーする内容',
    languageModels: '言語モデル',
    languageModelsDescription: 'ChatGPT、Claude、Gemini、その他の画期的な言語モデルに関する最新情報で、AIとの対話方法を変革しています。',
    imageGeneration: '画像生成',
    imageGenerationDescription: 'Midjourney、Stable Diffusion、DALL-E、その他のAIアートツールに関するニュースで、クリエイティブの限界を押し広げています。',
    researchBreakthroughs: '研究の躍進',
    researchBreakthroughsDescription: '世界中の主要機関や企業による最先端のAI研究。',
    practicalApplications: '実用的なアプリケーション',
    practicalApplicationsDescription: '産業やドメイン全体での実世界のAI実装とユースケース。',
    ourValues: '私たちの価値観',
    accuracy: '正確性',
    accuracyDescription: '私たちは情報源を検証し、すべてのAI開発について事実に基づいた正確な報道を心がけています。',
    clarity: '明確性',
    clarityDescription: '私たちは複雑なAIの概念を、単純化しすぎることなく明確でアクセスしやすい言葉で説明します。',
    timeliness: '適時性',
    timelinessDescription: '正確性と品質へのコミットメントを維持しながら、迅速にニュースをお届けします。',
    independence: '独立性',
    independenceDescription: '私たちは編集の独立性を維持し、AI業界の偏りのないカバレッジを提供します。',
    meetTechnyan: 'テクにゃんに会おう！',
    technyanDesc: '忙しい毎日の中でAI情報のキャッチアップを頑張る人を応援する、勉強熱心な猫です！テクにゃん（Tech × にゃん）は、あなたの日々のAI情報収集をもっと楽しく、もっと簡単にするためにいます。いつも頑張ってるね！🐱✨',
    mascotAlt: 'テクにゃん - Technyan\'s AI Digestsマスコット',
    technyanGreeting: '頑張ってるね！応援してるよ！🐱✨',
    stayConnected: 'つながり続ける',
    stayConnectedDescription: '最新記事を探索し、AIの情報を常に把握している何千もの読者に参加しましょう。',

    // 404 Page
    pageNotFound: 'ページが見つかりません',
    notFoundMessage: 'おっと！テクにゃんがお探しのページを見つけられませんでした。',
    notFoundDescription: 'ページが移動、削除、または存在しない可能性があります。元の場所に戻りましょう！',
    goToHomepage: 'ホームページへ',
    lookingForSomething: 'お探しのものは？',
    otherTopics: 'その他のトピック',

    // Categories
    chatgpt: 'ChatGPT',
    claude: 'Claude',
    research: '研究',
    other: 'その他',

    // Bookmarks
    bookmark: 'ブックマーク',
    bookmarked: 'ブックマーク済み',
    removeBookmark: 'ブックマークを削除',
    addToBookmarks: 'ブックマークに追加',
    bookmarkSavedComment: 'いいね！保存したよ！🐱✨',
    bookmarkHoverComment: 'あとで読もう！📖',

    // Privacy Policy Page
    privacyTitle: 'プライバシーポリシー',
    privacyLastUpdated: '最終更新日：2025年1月20日',
    privacyIntro: 'Technyan\'s AI Digests（以下「当サイト」）は、ユーザーのプライバシー保護に取り組んでいます。本プライバシーポリシーは、当サイトを訪問された際に、どのように情報を収集、使用、保護するかを説明します。',

    privacySection1Title: '1. 収集する情報',
    privacySection1Subtitle: '1.1 ユーザーが提供する情報',
    privacySection1Content1: '現在、当サイトはユーザーから直接個人情報を収集していません。お問い合わせフォーム、コメント機能、ユーザー登録機能はありません。',
    privacySection1Subtitle2: '1.2 自動的に収集される情報',
    privacySection1Content2: '言語設定：ブラウジング体験を向上させるため、選択された言語設定（日本語または英語）をブラウザのLocal Storageに保存します。',
    privacySection1Content3: 'サイト分析：サイトのパフォーマンスを監視し、コンテンツの質を向上させるため、Google Search Consoleを使用しています。このサービスは、IPアドレス、ブラウザの種類、訪問したページなどの情報を収集する場合があります。',

    privacySection2Title: '2. 情報の使用目的',
    privacySection2Content1: '言語設定：ユーザーの言語設定を記憶し、選択された言語でコンテンツを表示するため。',
    privacySection2Content2: 'サイト改善：訪問者がサイトをどのように利用しているかを理解し、コンテンツの質とユーザー体験を向上させるため。',
    privacySection2Content3: '技術的メンテナンス：当サイトが適切かつ安全に機能することを保証するため。',

    privacySection3Title: '3. CookieとLocal Storage',
    privacySection3Content1: '当サイトは、言語設定を保存するためにLocal Storage（Cookieではありません）を使用しています。このデータはユーザーのデバイスにのみ保存され、当サイトのサーバーには送信されません。',
    privacySection3Content2: 'Google Search Consoleは、分析データを収集するためにCookieを使用する場合があります。Cookieの設定は、ブラウザの設定から管理できます。',

    privacySection4Title: '4. 外部サービス',
    privacySection4Subtitle: '4.1 Vercel（ホスティング）',
    privacySection4Content1: '当サイトはVercelでホスティングされています。Vercelは、ホスティング目的で技術情報を収集する場合があります。詳細については、Vercelのプライバシーポリシーをご参照ください。',
    privacySection4Subtitle2: '4.2 Google Search Console',
    privacySection4Content2: 'サイトのパフォーマンス監視のため、Google Search Consoleを使用しています。Googleは、訪問に関するデータを収集する場合があります。詳細については、Googleのプライバシーポリシーをご参照ください。',

    privacySection5Title: '5. データセキュリティ',
    privacySection5Content: '当サイトは、情報を保護するために合理的なセキュリティ対策を実施しています。ただし、インターネット上の送信方法は100％安全ではありません。情報の保護に努めますが、絶対的なセキュリティを保証することはできません。',

    privacySection6Title: '6. ユーザーの権利',
    privacySection6Content1: 'アクセスと管理：ブラウザのLocal Storageをクリアすることで、言語設定を削除できます。',
    privacySection6Content2: 'ブラウザ設定：ブラウザの設定から、Cookieやトラッキングを管理できます。',
    privacySection6Content3: 'オプトアウト：ブラウザ拡張機能やプライバシー設定を使用して、Google Analyticsのトラッキングをオプトアウトできます。',

    privacySection7Title: '7. 子どものプライバシー',
    privacySection7Content: '当サイトは13歳未満の子どもを対象としていません。子どもから意図的に情報を収集することはありません。',

    privacySection8Title: '8. ポリシーの変更',
    privacySection8Content: '当サイトは、このプライバシーポリシーを随時更新する場合があります。重要な変更がある場合は、このページ上部の「最終更新日」を更新してユーザーに通知します。',

    privacySection9Title: '9. お問い合わせ',
    privacySection9Content: 'このプライバシーポリシーについてご質問がある場合は、当サイトまたはソーシャルメディアチャンネルを通じてお問い合わせください。',

    privacyOperator: '運営者：Technyan\'s AI Digests運営チーム',

    // Terms of Service Page
    termsTitle: '利用規約',
    termsLastUpdated: '最終更新日：2025年1月20日',
    termsIntro: 'Technyan\'s AI Digestsへようこそ。当サイトにアクセスまたは使用することにより、本利用規約に同意したものとみなされます。注意深くお読みください。',

    termsSection1Title: '1. サービス概要',
    termsSection1Content: 'Technyan\'s AI Digestsは、人工知能の発展に関するニュース、記事、情報を提供するウェブサイトです。忙しい方々がAIの最新動向を把握できるよう、AI関連コンテンツを厳選して提供しています。',

    termsSection2Title: '2. 規約の承認',
    termsSection2Content: '当サイトにアクセスまたは使用することにより、本利用規約およびプライバシーポリシーを読み、理解し、同意したことを認めるものとします。同意しない場合は、当サイトを使用しないでください。',

    termsSection3Title: '3. 知的財産権',
    termsSection3Subtitle: '3.1 当サイトのコンテンツ',
    termsSection3Content1: '当サイトのすべてのオリジナルコンテンツ（記事、画像、グラフィック、ロゴ、テクにゃんキャラクターを含むがこれらに限定されない）は、Technyan\'s AI Digestsの財産であり、著作権法により保護されています。',
    termsSection3Subtitle2: '3.2 第三者コンテンツ',
    termsSection3Content2: '記事内で第三者の情報源を参照・引用しています。すべての第三者コンテンツは、それぞれの所有者の財産です。適切な帰属表示と元のソースへのリンクを提供しています。',
    termsSection3Subtitle3: '3.3 限定的使用ライセンス',
    termsSection3Content3: '個人的な非商用目的でコンテンツを閲覧およびアクセスできます。当サイトの明示的な書面による許可なく、複製、配布、修正、または派生物を作成することはできません。',

    termsSection4Title: '4. 免責事項',
    termsSection4Subtitle: '4.1 情報の正確性',
    termsSection4Content1: '正確で最新の情報を提供するよう努めていますが、当サイトのコンテンツの正確性、完全性、信頼性について、いかなる保証や表明も行いません。',
    termsSection4Subtitle2: '4.2 サービスの可用性',
    termsSection4Content2: '当サイトが常に利用可能であることを保証しません。予告なく、サービスの一部または全部を一時停止、変更、または中止する場合があります。',
    termsSection4Content3: '当サイトは「現状有姿」および「提供可能な範囲」で提供され、明示的または黙示的ないかなる保証も行いません。',

    termsSection5Title: '5. 責任の制限',
    termsSection5Content: '法律で認められる最大限の範囲において、Technyan\'s AI Digestsは、当サイトの使用または使用不能に起因する間接的、付随的、特別、結果的、または懲罰的損害について責任を負いません。',

    termsSection6Title: '6. 禁止事項',
    termsSection6Content: '以下の行為を禁止します：',
    termsSection6Item1: '違法な目的で当サイトを使用すること',
    termsSection6Item2: 'システムへの不正アクセスを試みること',
    termsSection6Item3: 'ウェブサイトやサーバーを妨害または混乱させること',
    termsSection6Item4: '許可なく自動化ツールを使用してコンテンツにアクセスまたはスクレイピングすること',
    termsSection6Item5: '許可なくコンテンツを複製または再配布すること',
    termsSection6Item6: '個人または団体との関係を偽って表示すること',

    termsSection7Title: '7. 外部リンク',
    termsSection7Content: '当サイトには第三者のウェブサイトへのリンクが含まれる場合があります。外部サイトのコンテンツ、プライバシーポリシー、または慣行について責任を負いません。第三者リンクへのアクセスは、ご自身の責任で行ってください。',

    termsSection8Title: '8. 準拠法',
    termsSection8Content: '本利用規約は日本国の法律に準拠し、解釈されます。本規約から生じる紛争は、日本の裁判所の専属的管轄に服するものとします。',

    termsSection9Title: '9. 規約の変更',
    termsSection9Content: '当サイトは、本利用規約をいつでも変更する権利を留保します。重要な変更がある場合は、「最終更新日」を更新してユーザーに通知します。変更後も当サイトを継続して使用することにより、変更された規約に同意したものとみなされます。',

    termsSection10Title: '10. お問い合わせ',
    termsSection10Content: '本利用規約についてご質問がある場合は、当サイトまたはソーシャルメディアチャンネルを通じてお問い合わせください。',

    termsOperator: '運営者：Technyan\'s AI Digests運営チーム',
  },
} as const;

export function getTranslation(locale: Locale, key: keyof typeof translations.en): string {
  return translations[locale][key];
}
