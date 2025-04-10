import React from "react";
import { Page, Text, View, Document, Font, render } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";

Font.register({
  family: "Crimson Text",
  fonts: [
    {
      src: `${__dirname}/assets/fonts/Crimson_Text/CrimsonText-Regular.ttf`,
    },
    {
      src: `${__dirname}/assets/fonts/Crimson_Text/CrimsonText-Italic.ttf`,
      fontStyle: "italic",
    },
    // NOTE: there are more, I just haven't linked them all.
  ],
});

const tw = createTw({
  theme: {
    fontFamily: {
      sans: ["Fira Sans"],
      serif: ["Crimson Text"],
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
    street: "Kita Ward Seiwadai 2-57-9",
    city: "Kōbe",
    subdivision: "Hyōgo",
    country: "Japan",
  },
  jobs: [
    {
      employerName: "Revcomm",
      positionTitle: "Senior Software Engineer - Full Stack",
      location: {
        city: "Tokyo",
        country: "Japan",
      },
      startDate: "2023",
      talkingPoints: [
        "Built and maintained an application to manage the authentication and management of users, including " +
          "clients, their users, and of Revcomm's internal users. This includes several APIs for managing user data, " +
          "and multiple front-end applications.",
        "Created template system for login page. This new system allows the design team to adjust the login page " +
          "in a variety of ways. Before this change, the team needed to manually create the changes to the login page " +
          "in code. To run the additional service, I used fullstack Rust with Leptos.",
      ],
    },
    {
      employerName: "SmartNews",
      location: {
        city: "Tokyo",
        country: "Japan",
      },
      positionTitle: "Senior Software Engineer - Front-End",
      startDate: "2022",
      endDate: "2023",
      talkingPoints: [
        "Developed a Webview component for a mobile app that could be used to display news stories and a variety of " +
          "additional content that could not be handled by the native components. This was my introduction to mobile " +
          "development, and I learned a lot about building web applications designed to run inside mobile " +
          "applications. For this project I used vanilla JavaScript with Rollup and bash scripts for deployment.",
        "Maintained a WYSIWYG editor that non-engineering employees could use to create a variety of content, such as " +
          "pages displaying news related to a specific event, or new visual data components. This application was built with" +
          "React, but supported adding components made by other teams which could be vanilla web components, React " +
          "components, or Svelte components.",
        "Developed internal web portal for Advertising clients to manage their ads, ad groups, and campaigns. This " +
          "brought the company up to modern standards for advertisement management. I used this as an opportunity to " +
          "some of the latest front-end libraries, such as Vite, pnpm, and ReactQuery.",
      ],
    },
    {
      employerName: "AXA",
      location: {
        city: "Tokyo",
        country: "Japan",
      },
      positionTitle: "Senior Software Engineer - Front-End",
      startDate: "2020",
      endDate: "2022",
      talkingPoints: [
        "Developed tool to send customers automated updates on their claims via SMS. This service ran on AWS Lambda " +
          "functions, and used S3 for storage some simple details, such as shorted URLs which could fit in an SMS " +
          "message.",
        "Developed an internal API authentication tool that allowed teams to secure any APIs we created in a " +
          "one-size-fits-all manner. This freed up API teams from needing to design their own security measures. " +
          "This tool made use of some AWS Lambda functions and some neat API Gateway configuration.",
        "Created a web portal for employees to manage sales representative contracts, as well as project the " +
          "expected payment for contracted sales reps out to six months. This project used Create React App for the " +
          "front-end, and Java for the API, and a z/OS mainframe for the back-end.",
        "Designed the architecture for a multitude of applications and tools as requested by teams throughout " +
          "the company. In addition to the architecture, I created the initial prototypes for most of these " +
          "projects. This gave me plenty of opportunity to try out new tool suites and frameworks. This is when " +
          "I first started learning newer JavaScript frameworks like Svelte and Vue",
        "Became a leader for the JavaScript Community of Practices. Hosted weekly meetups for everyone to discuss " +
          "the latest changes in JavaScript, discuss new tools, and have the occasional friendly bike-shed about our " +
          "company-wide practices. We also held small quizzes to demonstrate useful new features, and all worked " +
          "together to create the standards for front-end development at the company. Additionally, I led training " +
          "sessions on topics including Next.js, internationalization, accessibility, and Redux.",
      ],
    },
    {
      employerName: "Netsmile",
      location: {
        city: "Tokyo",
        country: "Japan",
      },
      positionTitle: "Systems Software Engineer - Full-Stack",
      startDate: "2019",
      endDate: "2020",
      talkingPoints: [
        "Developed an API service layer and web portal for clients. This application allowed users to upload photos " +
          "and documents, forward those files along with client configuration to an AI pipeline for OCR and image " +
          "recognition tasks, then report the results to the user. This application used Next.js for the front-end, " +
          "Knex.js and PostgreSQL for metadata and client config, S3 for storing copies of output files, and " +
          "RabbitMQ to interface with the AI pipeline.",
      ],
    },
    {
      employerName: "Bazaarvoice",
      location: {
        city: "Austin",
        country: "USA",
      },
      positionTitle: "Senior Software Engineer - Front-End",
      startDate: "2013",
      endDate: "2019",
      talkingPoints: [
        "Developed 3rd-party application to display ratings and reviews for retail clients. With over 400 million " +
          "unique visitors per month, work on this application was high pressure, and it's where I first worked in " +
          "front-end development. The application itself was built using a combination of Backbone and jQuery, and " +
          "had strict requirements for performance and user experience.",
        "Early work on this project involved improving accessibility support. This involved learning the WCAG 2.0 " +
          "standard and how to meet it, how to use and test various software for supporting impaired users, and " +
          "learning a mental framework for how to approach accessibility early and effectively.",
        "Completely overhauled the build system for the application to scale better with growing use. As our client " +
          "base grew, the build system needed to handle an order of magnitude more messages. I was able to completely " +
          "retool the build system to use an solution. This solution took the form of a docker image running in an " +
          "autoscaling group in EC2 that processed messages coming from SQS and SNS, and started new instances based " +
          "on the size of the queue. Once this overhaul was done, the build system could handle any number of builds " +
          "in under 10 minutes.",
        "Managed client satisfaction for all display applications. Developed new company processes to quickly triage " +
          "tickets and route them to the appropriate teams. Later developed runbooks for the most common reoccurring " +
          "issues, and trained support teams to use the runbooks to solve these issues immediately, avoiding the " +
          "need to wait for developers to respond. This gave me plenty of practice debugging client code on live " +
          "sites, taught me many ways to approach identifying and solving errors, and also helped me develop soft " +
          "skills such as communicating with clients and support staff.",
        "Worked on the Incubator team, which built prototype applications meant to suppliment the primary Ratings " +
          "& Reviews application. I created an application that allowed clients to display SVG star images, " +
          "an application to display a carousel of user submitted images, and a debugger tool to help the " +
          "Support team quickly identify errors in the clients' implementation.",
        "Trained and lead international team of engineers to take over several applications, including the front-end " +
          "application mentioned above. This involved helping them get familiar with the application and teaching them " +
          "the various support processes that I had developed while maintaining the applciation myself.",
      ],
    },
  ],
  skillSets: [
    {
      name: "Languages",
      skills: [
        {
          name: "English",
          qualification: "Native Speaker",
        },
        {
          name: "Japanese",
          qualification: "JLPT N2 - Business-level proficiency",
        },
      ],
    },
    {
      name: "Programming Languages",
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
      ].map((lang) => ({ name: lang })),
    },
    {
      name: "Front End",
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
      name: "Testing",
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
      name: "Back End",
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
      name: "Pipeline",
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
      name: "Infrastructure",
      skills: [
        "Redis",
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
      name: "Assorted",
      skills: [].map((tool) => ({
        name: tool,
      })),
    },
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
    title="Resume"
    author={info.name}
    subject={`${info.name}'s Resume`}
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

          {info.links.map((link) => (
            <Text>{link}</Text>
          ))}
        </View>
      </View>

      <View style={tw("mx-4 flex flex-col items-start")}>
        <SectionHeader text="Experience" />

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
        <SectionHeader text="Skills" />

        <ul style={tw("gap-y-3")}>
          {info.skillSets.map((skillSet, i) => (
            <li key={`skillSet-${i}`}>
              <View style={tw("flex flex-row gap-x-2")}>
                <Text style={tw("basis-24 text-right")}>{skillSet.name}</Text>

                <View style={tw("flex flex-row flex-wrap gap-1 basis-5/6")}>
                  {skillSet.skills.map((skill) => (
                    <SkillDisplay skill={skill} />
                  ))}
                </View>
              </View>
            </li>
          ))}
        </ul>
      </View>

      <View style={tw("mx-4 flex flex-col items-start")}>
        <SectionHeader text="Education" />

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

render(<MyDocument />, `${__dirname}/resume.pdf`);
