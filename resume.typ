#import "@preview/neat-cv:0.4.0": (
  contact-info, cv, entry, item-pills, item-with-level, side, social-links,
)

#show: cv.with(
  author: (
    firstname: "Taylor",
    lastname: "McKinney",
    email: "taylorsmck@gmail.com",
    position: "Software Engineer",
    address: [Kōbe, Hyōgo, Japan],
    github: "github.com/taylormck",
    linkedin: "taylor-mckinney-bb638398",
    phone: "(+81))-80-7265-5051",
  ),
  profile-picture: image("assets/me.jpg"),
  accent-color: rgb("#4682b4"),
  header-color: rgb("3b4f60"),
)


#side[
  = About Me
  I'm a seasoned senior software engineer, with experience delivering displays that get viewed hundreds of millions of
  times per day around the world, and with creating the infrastructure to support it. I'm fluent in both Japanese and
  client-speak, able to communicate with devs, support associates, and clients with ease. I'm always looking forward to
  building the next big thing, and take pride in ensuring client satisfaction.

  = Interests
  - Web Development and Security
  - Computer Graphics

  = Personal
  Nationality: USA

  Visa Status: Spouse Visa

  #v(1fr)

  = Contact Info
  #contact-info()
  #social-links()

  // Use colbreak() to insert a page break
  #colbreak()

  = Languages

  #item-with-level("English", 5, subtitle: "Native")
  #item-with-level("Japanese", 4, subtitle: "JLPT N2")
  #item-with-level("Spanish", 2, subtitle: "Basic")


  #scale(x: 97%, reflow: true)[= Programming Languages]

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

  = Front End

  #item-pills((
    "React.js",
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

  = Testing

  #item-pills((
    "Testing Library",
    "Jest",
    "Vitest",
    "Mocha",
    "AVA",
    "Node Tap",
    "Playwright",
  ))

  = Back End

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

  = Cloud
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
    "GCS",
  ))

  = Graphics
  #item-pills((
    "OpenGL",
    "Vulkan",
    "GLFW",
    "SDL2",
    "SDL3",
  ))
]

= Professional Experience

#entry(
  title: "Senior Software Engineer - Full Stack",
  date: "06/2023 ~ Now",
  institution: "Revcomm Inc.",
  location: "Japan",
)[
  - Built an application to manage the authentication and management of users, including
    clients, their users, and of Revcomm's internal users.
  - Implemented automated systems to prevent vulnerabilities, such as leaking passwords or tokens.
  - Created template system which enables non-engineers to customize the login page.
  - Led programmer training courses. These were meetings where I walked other developers through the creation
    of critical tools, such as an HTTP server, Redis, and SQLite, with an emphasis on understanding the
    tools' internals.
]

#entry(
  title: "Senior Software Engineer - Front End",
  date: "05/2022\n ~\n 05/2023",
  institution: "SmartNews",
  location: "Tokyo, Japan",
)[
  - Developed a Webview component for a mobile app that could be used to display news stories and a variety of
    additional content that could not be handled by the native components.
  - Developed a WYSIWYG editor that non-technical employees could use to create a variety of content, such
    as pages displaying news related to a specific event, or new visual data components. While primarily a
    React application, it also supported components vanilla web components and Svelte components.
  - Developed internal web portal for Advertising clients to manage their ads, ad groups, and campaigns.
]

#entry(
  title: "Senior Software Engineer - Front End",
  date: "08/2020\n ~\n 05/2022",
  institution: "AXA Life",
  location: "Tokyo, Japan",
)[
  - Designed the architecture for a multitude of applications and tools as requested by teams throughout
    the company. In addition to the architecture, I created the initial prototypes for most of these
    projects.
  - Developed tool to send customers automated updates on their claims via SMS.
  - Developed internal URL shortening service to create URLs that fit in an SMS message.
  - Developed an internal API authentication tool that allowed teams to secure any APIs we created in a
    one-size-fits-all manner.
  - Created a web portal for employees to manage sales representative contracts, as well as project the
    expected payment for contracted sales reps out to six months.
  - Led the JavaScript Community of Practices. Hosted weekly meetups for developers to discuss
    the latest changes in JavaScript, new tools, and company-wide best practices.
  - Held training sessions on topics related to front-end development, including Next.js,
    internationalization, accessibility, and Redux.
]

#entry(
  title: "Systems Software Engineer - Full Stack",
  date: "05/2019\n ~\n 02/2020",
  institution: "Netsmile, Inc.",
  location: "Tokyo, Japan",
)[
  - Developed an API service layer and web portal for clients, which allowed users to upload photos
    and documents for OCR scanning
]

// Page break to make avoid splitting this entry.
#colbreak()

#entry(
  title: "Software Engineer / Senior Software Engineer",
  date: "06/2013\n ~\n 02/2019",
  institution: "Bazaarvoice",
  location: "Austin, Texas, USA",
)[
  - Developed 3rd-party application to display ratings and reviews for retail clients. Served over 400 million
    unique visitors per month. Built using a combination of Backbone and jQuery, with strict requirements
    for performance and user experience.
  - Revamped accessibility support to meet the WCAG 2.0 standard.
  - Redesigned the build system for the application to scale better with growing client and site numbers.
  - Build time was reduced from hours to under 10 minutes.
  - Led the Client Satisfaction team. Developed new company processes to quickly
    triage tickets and route them to the appropriate teams. Developed runbooks for common issues and trained
    support teams to resolve issues independently.
  - Debugged client code on live sites and worked directly with clients to resolve urgent issues.
  - Worked on the Incubator team, which built prototype applications meant to suppliment the primary Ratings
    & Reviews application. Prototyped multilple applications that became new products, services, and
    internal tools.
  - Trained and led international team of engineers to take over several applications.
]

= Education

#entry(
  title: "Bachelor of Science in Computer Science",
  institution: "University of Texas",
  location: "Austin, Texas, United States of America",
  date: "2013",
)[]
