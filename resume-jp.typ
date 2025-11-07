#import "@preview/neat-cv:0.4.0": (
  contact-info, cv, entry, item-pills, item-with-level, side, social-links,
)

#show: cv.with(
  author: (
    firstname: "Taylor",
    lastname: "McKinney",
    email: "taylorsmck@gmail.com",
    position: "ソフトウェアエンジニア", // Software Engineer
    address: [神戸市, 兵庫県, 日本], // Kōbe, Hyōgo, Japan
    github: "taylormck",
    linkedin: "taylor-mckinney-bb638398",
    phone: "(+81)-80-7265-5051",
  ),
  profile-picture: image("assets/me.jpg"),
  accent-color: rgb("#4682b4"),
  header-color: rgb("3b4f60"),
)


#side[
  #set text(hyphenate: false)

  = 自己紹介 // About Me
  経験豊富なシニアソフトウェアエンジニアです。世界中で1日数億回表示されるコンテンツの配信と、それを支えるインフラの構築経験があります。日本語とクライアントとの対話に堪能で、開発者、サポート担当者、クライアントと容易にコミュニケーションを取ることができます。常に次の大きなものづくりに前向きで、クライアント満足を確保することに誇りを持っています。

  = 興味・関心 // Interests

  - Web開発 // Web Development
  - Webアプリケーションセキュリティ // Web Application Security
  - コンピュータグラフィックス // Computer Graphics
  - ゲーム開発 // Game Development

  = 個人情報 // Personal
  国籍: アメリカ合衆国 // Nationality: USA

  在留資格: 配偶者ビザ // Visa Status: Spouse Visa

  #v(1fr)

  = 連絡先 // Contact Info
  #contact-info()

  = リンク // Links
  #social-links()

  // Use colbreak() to insert a page break
  #colbreak()

  = 言語 // Languages

  #item-with-level("英語", 5, subtitle: "ネイティブ") // English, Native
  #item-with-level("日本語", 4, subtitle: "日本語能力試験 N2") // Japanese, JLPT N2
  #item-with-level("スペイン語", 2, subtitle: "初級") // Spanish, Basic


  = プログラミング言語 // Programming Languages

  #item-pills((
    "Javascript",
    "Typescript",
    "Odin",
    "Zig",
    "Go",
    "Rust",
    "C",
    "Elixir",
    "C++",
    "C#",
    "GLSL",
    "Slang",
    "Java",
    "Python",
  ))

  = フロントエンド // Front End

  #item-pills((
    "React",
    "Vue.js",
    "SolidJS",
    "Next.js",
    "Create React App",
    "Redux",
    "Webpack",
    "Node",
    "Deno",
    "Bun",
    "Express",
    "Hapi",
    "Vite",
    "Leptos",
    "Material UI",
    "Ant Design",
    "TailwindCSS",
  ))

  = テスト // Testing

  #item-pills((
    "Testing Library",
    "Jest",
    "Vitest",
    "Mocha",
    "AVA",
    "Node Tap",
    "Playwright",
  ))

  = バックエンド // Back End

  #item-pills((
    "Node",
    "Bun",
    "Deno",
    "Leptos",
    "Axum",
    "Django",
    "Knex.js",
    "Sequelize",
    "MySQL",
    "PostgreSQL",
    "SpringBoot",
  ))

  = クラウド // Cloud
  #item-pills((
    "AWS",
    "SQS",
    "SNS",
    "SES",
    "EC2",
    "ECS",
    "EKS",
    "RDS",
    "Lambda",
    "API Gateway",
    "CloudFront",
    "Route 53",
    "VPC",
    "S3",
    "DynamoDB",
    "ElastiCache",
    "AWS Auto Scaling",
    "CloudFormation",
    "CloudWatch",
    "Certificate Manager",
    "KMS",
    "Secrets Manager",
    "GCS", // Google Cloud Storage
    "Jenkins",
    "Cirlcle CI",
  ))

  = グラフィックス // Graphics
  #item-pills((
    "OpenGL",
    "Vulkan",
    "Raylib",
    "GLFW",
    "SDL2",
    "SDL3",
  ))
]

= 職務経歴 // Professional Experience

#entry(
  title: "シニアソフトウェアエンジニア - フルスタック", // Senior Software Engineer - Full Stack
  date: "2023年06月\n ~\n 2025年09月", // 06/2023 ~ 09/2025
  institution: "Revcomm Inc.",
  location: "日本 - リモート", // Japan - Remote
)[
  - クライアント、そのエンドユーザー、内部スタッフを含む多様なユーザーベース向けの、ユーザー管理および認証APIを構築。
  - 内部パスワードやAPIトークンの潜在的なデータ漏洩を防ぐ、重要な脆弱性を排除した自動セキュリティシステムを設計・実装。
  - 非技術系チームメンバーがログインページを管理およびブランディングできるカスタマイズ可能なテンプレートシステムを開拓し、エンジニアリングチケット依頼の大幅な削減を実現。
  - （HTTPサーバー、Redis、SQLiteなどのコアインフラツールを一から構築するなど）ツールの内部理解とデバッグ能力を深める、組織全体の社内技術トレーニングコースを開発・主導。

  / テック: Python/Django, Go, Rust/Leptos, TypeScript/Vue, AWS
]

#entry(
  title: "シニアソフトウェアエンジニア - フロントエンド", // Senior Software Engineer - Front End
  date: "2022年05月\n ~\n 2023年05月", // 05/2022 ~ 05/2023
  institution: "SmartNews",
  location: "東京都, 日本", // Tokyo, Japan
)[
  - ネイティブコンポーネントではまだサポートされていない動的ニュースコンテンツやインタラクティブ機能の表示を可能にする、モバイルアプリ向けの高性能Webviewコンポーネントを開発（1000万人以上のアクティブユーザーにリーチ）。
  - Reactを使用し、バニラWebコンポーネントとSvelteコンポーネントの拡張サポートを備えた多用途WYSIWYGエディターを設計・構築。このツールにより、非技術系コンテンツチームはエンジニアリングサポートなしでリッチなデータ駆動型ページを作成可能になり、コンテンツデプロイ時間を数日から数分に短縮。
  - 広告クライアントが広告、広告グループ、キャンペーンを直接管理できる内部セルフサービス広告ポータルを作成し、サポートチームの業務負荷を軽減。

  / テック: TypeScript, JavaScript, React, Svelte, Vue, pnpm, Vite, AWS
]

#entry(
  title: "シニアソフトウェアエンジニア - フロントエンド", // Senior Software Engineer - Front End
  date: "2020年10月\n ~\n 2022年05月", // 08/2020 ~ 05/2022
  institution: "AXA生命", // AXA Life
  location: "東京都, 日本", // Tokyo, Japan
)[
  - 社内の官僚主義を乗り越えながら、多数の製品および内部アプリケーションのシステムアーキテクチャを設計し初期プロトタイプを構築。社内全体で採用されるスケーラブルなパターンを確立。
  - 顧客の請求更新に関する自動SMS通知システムを開発し、顧客コミュニケーションの透明性を向上させ、問い合わせ電話を削減。
  - SMSキャンペーン用の簡潔なリンクを生成する内部URL短縮サービスを設計。メッセージの明確さを確保することでクリック率を向上。
  - すべての内部チームがサービスを保護するための標準化された安全な方法を提供するユニバーサルAPI認証ゲートウェイを作成し、初期API開発時間を短縮。
  - JavaScript Community of Practiceを主導：開発者向けに週次ミートアップを開催し、Next.js、国際化(i18n)、アクセシビリティ(a11y)、Reduxに関するトレーニングセッションを実施（30人以上の開発者のスキル向上を支援）。

  / テック: JavaScript, TypeScript, React, Java, Spring Boot, Python, AWS
]

#entry(
  title: "システムソフトウェアエンジニア - フルスタック", // Systems Software Engineer - Full Stack
  date: "2019年05月\n ~\n 2020年02月", // 05/2019 ~ 02/2020
  institution: "Netsmile, Inc.",
  location: "東京都, 日本", // Tokyo, Japan
)[
  - 文書アップロードとOCR処理のためのクライアント向けWebポータルおよびAPIサービスを構築し、以前は手動だったワークフローを効率化。

  / テック: TypeScript, Next.js, React, RabbitMQ, AWS
]

// Page break to make avoid splitting this entry.
#colbreak()

#entry(
  title: "ソフトウェアエンジニア / シニアソフトウェアエンジニア", // Software Engineer / Senior Software Engineer
  date: "2013年10月\n ~\n 2019年02月", // 06/2013 ~ 02/2019
  institution: "Bazaarvoice",
  location: "オースティン, テキサス州, アメリカ合衆国", // Austin, Texas, USA
)[
  - Backbone.jsとjQueryを使用した高トラフィックのサードパーティ製評価レビューアプリケーションを開発・維持（厳しいパフォーマンス予算内で月間4億人以上のユニークビジターにサービス提供）。
  - WCAG 2.0準拠を達成するためのアクセシビリティ全面改修を主導。市場到達範囲を拡大し全てのユーザーの使いやすさを向上させるとともに、クライアントの法的責任リスクから保護。
  - レガシービルドシステムの再設計と最適化を実施。ビルド時間を数時間から10分未満に短縮し、数百のクライアントサイトに対するCI/CD効率を改善。
  - 顧客満足度チームを率い、新しいトリアージプロセスを導入し詳細なRunbookを作成。チケット解決時間を短縮し、サポートチームが一般的な問題の50%以上を独自に解決できるようにした。
  - 稼働中の本番サイトで重大なクライアントサイドの問題をデバッグおよび修正。エンタープライズクライアントと直接連携して緊急の問題を解決し、SLA順守を維持。

  / テック: JavaScript, TypeScript, Backbone.js, Node, React, AWS
]

= 学歴 // Education

#entry(
  title: "計算機科学学士", // Bachelor of Science in Computer Science
  institution: "テキサス大学オースティン校", // University of Texas
  location: "オースティン, テキサス州, アメリカ合衆国", // Austin, Texas, United States of America
  date: "2013年", // 2013
)[]

= その他 // Extras

#entry(
  title: "Paddletronic Duel", // (Game Title, often kept in English)
  institution: "Bursting Brains", // (Company Name, often kept in English)
  location: "オースティン, テキサス州, アメリカ合衆国", // Austin, Texas, United States of America
  date: "2012年", // 2012
)[
  Google Playストアでゲームをリリース（現在は非公開）。
  - コンピューター制御の対戦相手のAIを書き換え。
  - パフォーマンスを改善するために物理エンジンを書き換え。
  ゲームプレイ動画: https://www.youtube.com/watch?v=Mw0Mdpc1e8g
]
