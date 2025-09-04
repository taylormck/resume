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

  = About Me
  I'm a seasoned senior software engineer with experience delivering displays that get viewed hundreds of millions of
  times per day around the world and creating the infrastructure to support it.
  I'm fluent in both Japanese and
  client-speak, able to communicate with devs, support associates, and clients with ease.
  I'm always looking forward to
  building the next big thing, and take pride in ensuring client satisfaction.

  = Interests

  - Web Development
  - Web Application Security
  - Computer Graphics
  - Game Development

  = Personal
  Nationality: USA

  Visa Status: Spouse Visa

  #v(1fr)

  = Contact Info
  #contact-info()

  = Links
  #social-links()

  // Use colbreak() to insert a page break
  #colbreak()

  = Languages

  #item-with-level("English", 5, subtitle: "Native")
  #item-with-level("Japanese", 4, subtitle: "JLPT N2")
  #item-with-level("Spanish", 2, subtitle: "Basic")


  = #scale(x: 95%, reflow: true)[Programming Languages]

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
    "Spring Boot",
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
    "Jenkins",
    "Cirlcle CI",
  ))

  = Graphics
  #item-pills((
    "OpenGL",
    "Vulkan",
    "Raylib",
    "GLFW",
    "SDL2",
    "SDL3",
  ))
]

= Professional Experience

#entry(
  title: "Senior Software Engineer - Full Stack",
  date: "06/2023\n ~\n Now",
  institution: "Revcomm Inc.",
  location: "Japan - Remote",
)[
  - Built a user management and authentication API, serving a diverse user base of clients, their end-users,
    and internal staff.
  - Engineered and enforced automated security systems that eliminated critical vulnerabilities,
    preventing potential data leaks of internal passwords and API tokens.
  - Pioneered a customizable template system that empowers non-technical team members to manage and brand login pages,
    removing an entire class of engineering ticket requests.
  - Developed and led organization-wide internal technical training courses on core infrastructure (e.g., building
    tools such as an HTTP server, Redis, SQLite, all from scratch), deepening the developers' understanding of tool
    internals and improving debugging capabilities.

  / Tech stack: Python/Django, Go, Rust/Leptos, TypeScript/Vue, AWS
]

#entry(
  title: "Senior Software Engineer - Front End",
  date: "05/2022\n ~\n 05/2023",
  institution: "SmartNews",
  location: "Tokyo, Japan",
)[
  - Developed a highly performant Webview component for the mobile app, enabling the display of dynamic news content
    and interactive features not yet supported by native components, reaching over 10 million active users.
  - Designed and built a versatile WYSIWYG editor using React, with extensible support for vanilla web components
    and Svelte components. This tool enabled non-technical content teams to create rich, data-drive pages without
    engineering support, accelerating content deployment time from days down to minutes.
  - Created an internal self-service advertising portal, allowing clients to directly manage ads, ad groups, and
    campaigns, which reduced the support team's operational workload.

  / Tech stack: TypeScript, JavaScript, React, Svelte, Vue, pnpm, Vite, AWS
]

#entry(
  title: "Senior Software Engineer - Front End",
  date: "08/2020\n ~\n 05/2022",
  institution: "AXA Life",
  location: "Tokyo, Japan",
)[
  - Designed system architecture and built initial prototypes for numerous products and internal applications,
    navigating internal bureaucracy and establishing scalable patterns adopted company-wide.
  - Developed an automated SMS notification system for customer claim updates, improving customer communication
    transparency and reducing inbound inquiry calls.
  - Engineered an internal URL shortener to generate concise links for SMS campaigns, increasing click-through rates
    by ensuring message clarity.
  - Created a universal API authentication gateway, providing a standardized, secure method for all internal teams
    to protect their services, cutting down initial API development time.
  - Led the JavaScript Community of Practices: hosted weekly meet-ups an conducted training sessions for developers
    sessions on Next.js, internationalization, accessibility, and Redux, upskilling a team of 30+ developers.

  / Tech stack: JavaScript, TypeScript, React, Java, Spring Boot, Python, AWS
]

#entry(
  title: "Systems Software Engineer - Full Stack",
  date: "05/2019\n ~\n 02/2020",
  institution: "Netsmile, Inc.",
  location: "Tokyo, Japan",
)[
  - Built a client-facing web portal and API service for document upload and OCR processing, streamlining a
    previously manual workflow.

  / Tech stack: TypeScript, Next.js, React, RabbitMQ, AWS
]

// Page break to make avoid splitting this entry.
#colbreak()

#entry(
  title: "Software Engineer / Senior Software Engineer",
  date: "06/2013\n ~\n 02/2019",
  institution: "Bazaarvoice",
  location: "Austin, Texas, USA",
)[
  - Developed and maintained a high-traffic, third-party ratings and reviews application using Backbone.js and jQuery,
    serving over 400 million unique visitors monthly with strict performance budgets.
  - Spearheaded an accessibility overhaul to achieve WCAG 2.0 compliance, expanding market reach and improving
    usability for all users, while also protecting clients from legal liability.
  - Redesigned and optimized the legacy build system, reducing build times from several hours to under 10 minutes
    and improving CI/CD efficiency for hundreds of client sites.
  - Led the Client Satisfaction team: implemented new triage processes and created detailed runbooks, decreasing
    ticket resolution time and enabling support to independently resolve over 50% of common issues.
  - Debugged and fixed critical client-side issues on live production sites, working direction with enterprise
    clients to resolve urgent problems and maintain SLA compliance.

  / Tech stack: JavaScript, TypeScript, Backbone.js, Node, React, AWS
]

= Education

#entry(
  title: "Bachelor of Science in Computer Science",
  institution: "University of Texas",
  location: "Austin, Texas, United States of America",
  date: "2013",
)[]

= Extras

#entry(
  title: "Paddletronic Duel",
  institution: "Bursting Brains",
  location: "Austin, Texas, United States of America",
  date: "2012",
)[
  Shipped a game on the Google Play store. (It has since been unpublished.)
  - Rewrote the AI for computer-controlled opponents.
  - Rewrote the physics engine to improve performance.
  Gameplay video: https://www.youtube.com/watch?v=Mw0Mdpc1e8g
]
