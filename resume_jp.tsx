import React from "react";
import { Page, Text, View, Document, Font, render } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";

Font.register({
  family: "Shippori Mincho",
  fonts: [
    {
      src: `${__dirname}/assets/fonts/Shippori_Mincho/ShipporiMincho-Regular.ttf`,
    },
    {
      src: `${__dirname}/assets/fonts/Shippori_Mincho/ShipporiMincho-Bold.ttf`,
      fontStyle: "italic",
    },
  ],
});

const tw = createTw({
  theme: {
    fontFamily: {
      sans: ["Shippori Mincho"],
      serif: ["Shippori Mincho"],
    },
    extend: {
      colors: {
        jet: "#2a2d31",
        "slate-gray": "#6d7f93",
        "blue-green": "#359ebf",
      },
    },
  },
});

interface Address {
  street?: string;
  building?: string;
  city?: string;
  subdivision?: string;
  country?: string;
}

type Location = Pick<Address, "city" | "country">;

interface Job {
  employerName: string;
  location: Location;
  positionTitle: string;
  startDate: string;
  endDate?: string;
  talkingPoints: string[];
}

interface Skill {
  name: string;
  qualification?: string;
}

interface SkillSet {
  name: string;
  skills: Skill[];
}

interface School {
  name: string;
  startDate: string;
  endDate: string;
  qualification: string;
  location: Location;
}

interface ResumeInfo {
  name: string;
  address: Address;
  phone: string;
  email: string;
  links: string[];
  jobs: Job[];
  skillSets: SkillSet[];
  education: School[];
}

const info: ResumeInfo = {
  name: "Taylor McKinney",
  phone: "(+81)-80-7265-5051",
  email: "taylorsmck@gmail.com",
  links: ["github.com/taylormck"],
  address: {
    street: "北区星和台２丁目５７ー９",
    city: "神戸市",
    subdivision: "兵庫県",
    country: "日本",
  },
  jobs: [
    {
      employerName: "レブコム",
      positionTitle: "シニア フル スタック ソフトウェア エンジニア",
      location: {
        city: "東京",
        country: "日本",
      },
      startDate: "2023",
      talkingPoints: [
        "クライアント、そのユーザー、およびRevcomm社内ユーザーの認証と管理を行うアプリケーションを構築。ユーザーデータを管理する複数のAPIと、複数のフロントエンドアプリケーションを含む。",
        "非エンジニアがログインページをカスタマイズできるテンプレートシステムを開発。",
        "プログラマー向けトレーニングコースを主導。HTTPサーバー、Redis、SQLiteなどの重要なツールの作成を開発者に指導し、ツールの内部構造の理解を重点的に解説。",
      ],
    },
    {
      employerName: "スマートニュース",
      location: {
        city: "東京",
        country: "日本",
      },
      positionTitle: "シニア フロント エンド ソフトウェア エンジニア",
      startDate: "2022",
      endDate: "2023",
      talkingPoints: [
        "ニュース記事やネイティブコンポーネントでは扱えない追加コンテンツを表示可能なモバイルアプリ向けWebviewコンポーネントを開発。",
        "非技術系社員が利用可能なWYSIWYGエディターを開発。特定のイベントに関連するニュースページや新しいビジュアルデータコンポーネントを作成可能。Reactアプリケーションが主体だが、Vanilla Web ComponentsやSvelteコンポーネントにも対応。",
        "広告クライアント向けの社内ウェブポータルを開発し、広告・広告グループ・キャンペーンの管理を可能にした。",
      ],
    },
    {
      employerName: "アクサ",
      location: {
        city: "東京",
        country: "日本",
      },
      positionTitle: "シニア フロント エンド ソフトウェア エンジニア",
      startDate: "2020",
      endDate: "2022",
      talkingPoints: [
        "社内各チームからの要請に基づき、多数のアプリケーションおよびツールのアーキテクチャを設計。アーキテクチャに加え、ほとんどのプロジェクトの初期プロトタイプを作成。",
        "顧客への請求状況の自動SMS通知ツールを開発。",
        "SMSメッセージに収まる短縮URLを生成する社内サービスを開発。",
        "社内API認証ツールを開発し、作成したAPIを汎用的に保護可能にした。",
        "社員向けウェブポータルを開発し、セールス担当者の契約管理および6ヶ月先までの予想報酬を算出可能にした。",
        "JavaScriptコミュニティ・オブ・プラクティスを主導。開発者が最新のJavaScriptの変更点、新ツール、社内ベストプラクティスを議論する週次ミートアップを開催。",
        "Next.js、国際化、アクセシビリティ、Reduxなどフロントエンド開発関連のトレーニングセッションを実施。",
      ],
    },
    {
      employerName: "ネットスマイル",
      location: {
        city: "東京",
        country: "日本",
      },
      positionTitle: " システム シニア ソフトウェア エンジニア",
      startDate: "2019",
      endDate: "2020",
      talkingPoints: [
        "クライアント向けAPIサービス層およびウェブポータルを開発。ユーザーが写真や文書をアップロードし、OCRスキャンを実行可能にした。",
      ],
    },
    {
      employerName: "Bazaarvoice",
      location: {
        city: "Austin",
        country: "アメリカ",
      },
      positionTitle: "シニア フロント エンド ソフトウェア エンジニア",
      startDate: "2013",
      endDate: "2019",
      talkingPoints: [
        "小売クライアント向けの評価・レビュー表示サードパーティアプリケーションを開発。月間4億以上のユニークビジターにサービス提供。BackboneとjQueryを組み合わせて構築し、パフォーマンスとユーザーエクスペリエンスに厳格な要件を適用。",
        "WCAG 2.0基準を満たすアクセシビリティサポートを刷新。",
        "ビルドシステムを再設計し、クライアント数とサイト数の増加に対応。ビルド時間を数時間から10分未満に短縮。",
        "クライアント満足度チームを率い、チケットの迅速なトリアージと適切なチームへのルーティングを行う新しい社内プロセスを構築。一般的な問題に対するRunbookを作成し、サポートチームが自立して問題を解決できるようトレーニングを実施。",
        "稼働中のサイトでクライアントコードのデバッグを行い、緊急課題の解決のために直接クライアントと連携。",
        "主要な評価＆レビューアプリケーションを補完するプロトタイプアプリケーションを開発するインキュベーションチームに所属。複数の新製品・サービス・社内ツールの原型を作成。",
        "国際的なエンジニアチームをトレーニングし、複数アプリケーションの引き継ぎを主導。",
      ],
    },
  ],
  skillSets: [
    {
      name: "言語",
      skills: [
        {
          name: "英語",
          qualification: "母語話者",
        },
        {
          name: "日本語",
          qualification: "日本語能力試験 2級",
        },
      ],
    },
    {
      name: "プログラミング 言語",
      skills: [
        "Javascript",
        "Typescript",
        "C",
        "C++",
        "C#",
        "Python",
        "Java",
        "Rust",
        "Odin",
        "Zig",
        "Elixir",
        "GLSL",
      ].map((lang) => ({ name: lang })),
    },
    {
      name: "フロント エンド ",
      skills: [
        "Next.js",
        "React.js",
        "Create React App",
        "Redux",
        "Webpack",
        "Node",
        "Express",
        "Hapi",
        "Jest",
        "Vite",
        "Leptos",
      ].map((tool) => ({ name: tool })),
    },
    {
      name: "テスト",
      skills: [
        "Testing Library",
        "Jest",
        "Vitest",
        "Mocha",
        "AVA",
        "Node Tap",
        "Playwright",
      ].map((tool) => ({
        name: tool,
      })),
    },
    {
      name: "ばっく エンド",
      skills: [
        "Node",
        "Bun",
        "SpringBoot",
        "Django",
        "Knex.js",
        "Sequelize",
        "MySQL",
        "PostgreSQL",
        "Leptos",
      ].map((tool) => ({
        name: tool,
      })),
    },
    {
      name: "AWS",
      skills: [
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
      ].map((tool) => ({ name: tool })),
    },
    {
      name: "パイプライン",
      skills: [
        "Jenkins",
        "CircleCI",
        "Github Actions",
        "OpenShift",
        "TravisCI",
        "SonarQube",
      ].map((tool) => ({ name: tool })),
    },
    {
      name: "インフラストラクチャー",
      skills: [
        "Redis",
        "Valkey",
        "Serverless",
        "Docker",
        "Podman",
        "Terraform",
        "Kubernetes",
      ].map((tool) => ({
        name: tool,
      })),
    },
    {
      name: "グラフィック",
      skills: ["OpenGL", "Vulkan", "GLFW"].map((tool) => ({
        name: tool,
      })),
    },
    // {
    //   name: "Assorted",
    //   skills: [].map((tool) => ({
    //     name: tool,
    //   })),
    // },
  ],
  education: [
    {
      name: "University of Texas",
      location: {
        city: "Austin",
        country: "USA",
      },
      startDate: "2008",
      endDate: "2013",
      qualification: "Bachelor of Science in Computer Science",
    },
  ],
};

const SectionHeader: React.FunctionComponent<{ text: string }> = ({ text }) => (
  <View style={tw("flex flex-row items-center")}>
    <View style={tw("w-6 grow-0 h-0.5 bg-sky-600")} />
    <Text style={tw("grow-0 m-1 px-1 rounded-md text-xl leading-snug")}>
      {text}
    </Text>
    <View style={tw("h-0.5 bg-sky-500 w-96")} />
  </View>
);

const SubsectionHeader: React.FunctionComponent<{ text: string }> = ({
  text,
}) => <Text style={tw("text-lg leading-normal")}>{text}</Text>;

const SkillDisplay: React.FunctionComponent<{ skill: Skill }> = ({ skill }) => (
  <Text style={tw("bg-sky-200 rounded-md flex-initial px-2 leading-normal")}>
    {skill.qualification
      ? `${skill.name} (${skill.qualification})`
      : skill.name}
  </Text>
);

const MyDocument = () => (
  <Document
    title="履歴書"
    author={info.name}
    subject={`${info.name}の履歴書`}
    language="en"
  >
    <Page size="A4" style={tw("font-serif text-base max-w-[21cm]")}>
      <View style={tw("flex flex-row justify-between m-6 mb-2")} fixed>
        <View>
          <Text style={tw("text-xl")}>{info.name}</Text>
        </View>

        <View
          style={tw("flex flex-col items-end text-sm text-slate-500 italic")}
        >
          <Text>{`${info.address.city}, ${info.address.country}`}</Text>
          <Text>{info.phone}</Text>
          <Text>{info.email}</Text>

          {info.links.map((link, i) => (
            <Text key={`link-${i}`}>{link}</Text>
          ))}
        </View>
      </View>

      <View style={tw("mx-4 flex flex-col items-start")}>
        <SectionHeader text="体験" />

        <ul style={tw("gap-2")}>
          {info.jobs.map((job, i) => (
            <li key={`job-${i}`}>
              <View style={tw("px-2")} wrap={false}>
                <View style={tw("flex flex-row items-center gap-2")}>
                  <SubsectionHeader text={job.employerName} />

                  <Text>{job.positionTitle}</Text>

                  <Text
                    style={tw("text-slate-700")}
                  >{`${job.startDate} - ${job.endDate ?? "Present"}`}</Text>
                </View>

                <ul style={tw("px-4 gap-2")}>
                  {job.talkingPoints.map((talkingPoint, j) => (
                    <li
                      key={`job-${i}-talking-point-${j}`}
                      style={tw("border-l-2 border-sky-500 pl-2")}
                    >
                      <Text>{talkingPoint}</Text>
                    </li>
                  ))}
                </ul>
              </View>
            </li>
          ))}
        </ul>
      </View>

      <View style={tw("mx-4 flex flex-col items-start")} break>
        <SectionHeader text="技術" />

        <ul style={tw("gap-y-3")}>
          {info.skillSets.map((skillSet, i) => (
            <li key={`skillSet-${i}`}>
              <View style={tw("flex flex-row gap-x-2")}>
                <Text style={tw("basis-48 text-right")}>{skillSet.name}</Text>

                <View style={tw("flex flex-row flex-wrap gap-1 basis-2/3")}>
                  {skillSet.skills.map((skill, j) => (
                    <SkillDisplay key={`skill-${j}`} skill={skill} />
                  ))}
                </View>
              </View>
            </li>
          ))}
        </ul>
      </View>

      <View style={tw("mx-4 flex flex-col items-start")}>
        <SectionHeader text="教育" />

        <ul>
          {info.education.map((school, i) => (
            <li key={`schools-${i}`}>
              <View>
                <SubsectionHeader text={school.name} />

                <View style={tw("px-2 flex flex-row gap-2")}>
                  <Text>{school.qualification}</Text>
                  <Text
                    style={tw("text-slate-500")}
                  >{`${school.startDate}-${school.endDate}`}</Text>
                  <Text
                    style={tw("text-slate-500")}
                  >{`${school.location.city}, ${school.location.country}`}</Text>
                </View>
              </View>
            </li>
          ))}
        </ul>
      </View>
    </Page>
  </Document>
);

render(<MyDocument />, `${__dirname}/resume_jp.pdf`);
