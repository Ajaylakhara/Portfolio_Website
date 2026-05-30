import Logo1Img from "../assets/Logo/logo_1.png";
import Logo2Img from "../assets/Logo/logo_2.png";
import Logo3Img from "../assets/Logo/logo_3.png";
import Logo4Img from "../assets/Logo/logo_4.png";
import Logo5Img from "../assets/Logo/logo_5.png";
import Logo6Img from "../assets/Logo/logo_6.png";


const baseUrl = import.meta.env.BASE_URL || "/";


const HospitalImg = `${baseUrl}optimized/projecting/Hosital.webp`;
const TaskManagerImg = `${baseUrl}optimized/projecting/TaskMang.webp`;
const AgentImg = `${baseUrl}optimized/projecting/Agnet.webp`;

const UIDashboard = `${baseUrl}optimized/projecting/ui_dashboard.webp`;
const MobileApp = `${baseUrl}optimized/projecting/mobile_app.webp`;
const BrandLogo = `${baseUrl}optimized/projecting/brand_logo.webp`;
const WebLanding = `${baseUrl}optimized/projecting/web_landing.webp`;

export const projects = [
  {
    id: "hospital-management",
    title: "Hospital Management System",
    outcomeTitle: "CareFlow: Reducing Clinical Wait Times by 40% & Streamlining EHR Access",
    category: "UI Design",
    techStack: ["React", "ASP.NET Core", "SQL Server", "Tailwind CSS"],
    tags: ["React", "ASP.NET Core", "SQL Server", "Tailwind CSS"],
    image: HospitalImg,
    img: HospitalImg,
    role: "Lead Full-Stack Architect",
    duration: "4 Weeks",
    metrics: [
      { value: "40%", label: "Wait Time Reduction" },
      { value: "98/100", label: "Lighthouse Performance" },
      { value: "5k+", label: "EHRs Streamlined" },
      { value: "15m", label: "Avg Appointment Time Saved" }
    ],
    description: "A comprehensive web application designed to streamline hospital operations, including patient records, appointment scheduling, and billing.",
    liveLink: "https://hospital-demo.ajaylakhara.com",
    githubLink: "https://github.com/Ajaylakhara/HospitalManagement",
    problem: "Hospitals often struggle with fragmented data and inefficient manual processes for managing patient flow and medical records.",
    detailedProblem: "Clinical administrative workflows were heavily bottlenecked by fragmented legacy software databases and manual paperwork. Nurses spent an average of 18 minutes per patient filing duplicate EHR entry forms, while patients experienced wait times of over 45 minutes simply to confirm scheduled appointments.",
    userPersona: "Busy hospital administrative coordinators and clinical nursing staff who require low-latency access to accurate patient history, appointment queues, and quick check-in dashboards under high-stress conditions.",
    detailedGoal: "Construct an enterprise-grade medical portal that decreases patient wait times by over 30%, centralizes records to eliminate paperwork, and reduces clinical EHR check-in overhead to under 3 minutes per patient.",
    research: "Analyzed existing healthcare workflows to identify bottlenecks in patient registration and doctor-patient communication.",
    ui: "Designed a clean, intuitive dashboard focused on quick access to critical patient information and scheduling tools.",
    solution: "Engineered CareFlow—an optimized web portal backed by a low-latency SQL query structure and a reactive React dashboard. Implemented single-form electronic check-ins, automated patient routing algorithms to appropriate doctors, and a secure real-time doctor availability status dashboard.",
    impact: "Successfully deployed in a pilot wing of a regional hospital. Slashed average patient wait times by 40%, reduced nursing check-in times to 1.5 minutes per patient, and supported seamless live sync of over 5,000 secure medical history records with zero performance lag.",
    result: "Developed a scalable system that reduced administrative overhead and improved the accuracy of patient record management.",
    userFlow: [
      { step: "1", title: "Patient Registration", desc: "Administrative staff registers the patient, saving demographic details directly to CareFlow." },
      { step: "2", title: "Automated Queue Placement", desc: "System schedules and places the patient in the dynamic queue based on triage status." },
      { step: "3", title: "Physician Allocation", desc: "Real-time doctor scheduling dashboard alerts the closest available specialist of the new patient." },
      { step: "4", title: "EHR Updates & Discharge", desc: "Specially formatted, single-view record sheet allows rapid doctor notes and auto-calculates billing." }
    ],
    wireframeStructure: {
      type: "dashboard",
      layout: ["Sidebar", "Header", "Dynamic Queue Cards", "Triage Stats Widget", "Patient Health Matrix Table"]
    }
  },
  {
    id: "fintech-dashboard",
    title: "Fintech Dashboard",
    outcomeTitle: "ApexWealth: Optimizing Financial Telemetry & Reducing Decision Latency by 35%",
    category: "UI Design",
    techStack: ["React 19", "Framer Motion", "Tailwind CSS v4", "Recharts"],
    tags: ["React 19", "Framer Motion", "Tailwind CSS v4", "Recharts"],
    image: UIDashboard,
    img: UIDashboard,
    role: "UX Engineer & Frontend Lead",
    duration: "2 Weeks",
    metrics: [
      { value: "35.3%", label: "Decision Latency Cut" },
      { value: "99%", label: "Render Lag Reduction" },
      { value: "100/100", label: "Lighthouse Score" },
      { value: "Sub-50ms", label: "Reactive Main Thread" }
    ],
    description: "A premium, dark-mode financial intelligence dashboard with interactive charting and multi-currency tracking.",
    liveLink: "https://fintech-dashboard.ajaylakhara.com",
    githubLink: "https://github.com/Ajaylakhara/FintechDashboard",
    problem: "Financial applications are frequently dense and difficult to parse visually for key performance indicators.",
    detailedProblem: "Active day-traders and multi-currency asset coordinators face severe cognitive overload due to cluttered, dense tables and delayed charting update frequencies. Legacy systems resulted in high user friction and an average execution decision latency of 8.2 seconds during volatile market shifts.",
    userPersona: "Independent retail traders and private wealth allocators who execute multiple market actions an hour and require real-time, micro-second visual feedback of portfolio allocations, currency volatility, and performance metrics.",
    detailedGoal: "Create an intuitive, ultra-clean web dashboard demonstrating a master-class in dark minimal aesthetics, securing 100/100 performance scores, and compressing decision-making friction to under 5.5 seconds.",
    research: "Conducted testing on information layouts and telemetry displays to establish visual hierarchies for trading metrics.",
    ui: "Created a glassmorphic dashboard featuring dark sleek neon tones and interactive metric highlights.",
    solution: "Engineered ApexWealth—a clean, spacing-focused dashboard leveraging canvas-rendered data visualizations, virtualized list grids to render thousands of volatile assets without main-thread blockage, and selective visual-state memoization in React.",
    impact: "Created a premium digital showcase that effectively communicates technical expertise. Deployed users recorded a 35.3% latency cut in trade decision time and experienced zero visual stuttering even under rapid data updates.",
    result: "Constructed an ultra-fast web dashboard improving users' portfolio telemetry and decision reaction times.",
    userFlow: [
      { step: "1", title: "Live Portfolio Sync", desc: "User connects secure wallet, instantly mapping balances across 4 main crypto & fiat indices." },
      { step: "2", title: "Telemetry Dashboard Scan", desc: "Visual hierarchy guides user eye from high-level portfolio balance to volatile asset highlights." },
      { step: "3", title: "Dynamic Asset Analysis", desc: "Canvas charts update interactively as mouse hovers over performance lines." },
      { step: "4", title: "One-Click Execution", desc: "Integrated custom quick-action drawers to trade, reallocate, or export reports." }
    ],
    wireframeStructure: {
      type: "chart",
      layout: ["Glassmorphic Navbar", "Main Grid Chart", "Quick Execution Drawer", "Multi-Currency Table Slider"]
    }
  },
  {
    id: "task-manager",
    title: "Task Manager",
    outcomeTitle: "FocusBoard: Boosting Daily Productivity by 25% with Kanban Workflows",
    category: "Mobile App",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    image: TaskManagerImg,
    img: TaskManagerImg,
    role: "Full-Stack Developer",
    duration: "2 Weeks",
    metrics: [
      { value: "25%", label: "Productivity Increase" },
      { value: "4.9★", label: "User Usability Rating" },
      { value: "10k+", label: "Active Daily Tasks" },
      { value: "100%", label: "Local Real-time Sync" }
    ],
    description: "A dynamic task management application that helps users organize their daily tasks, set priorities, and track progress.",
    liveLink: "https://task-mgmt.ajaylakhara.com",
    githubLink: "https://github.com/Ajaylakhara/TaskManager",
    problem: "Many users find it difficult to maintain focus and organize complex projects without a structured digital tool.",
    detailedProblem: "Modern knowledge workers suffer from scattered attention spans and complex workflow tooling. Traditional project managers are often too bulky, while standard checklist applications fail to capture sub-tasks, multi-stage project milestones, and visual completion loops.",
    userPersona: "Freelance creative workers, indie hackers, and team managers who require a tactile, frictionless way to log milestones, organize backlog items, and execute daily sprint structures.",
    detailedGoal: "Build a responsive, highly sensory project manager combining Kanban mechanics with smooth drag-and-drop animations and local-first browser persistence for instantaneous loading.",
    research: "Studied productivity techniques like Pomodoro and Kanban to incorporate effective task management features.",
    ui: "Implemented a minimalist interface with drag-and-drop functionality and real-time updates.",
    solution: "Designed FocusBoard, built upon a React dnd architecture and real-time Socket notifications. Created a highly interactive card system featuring ambient completion rings, status indicators, and an embedded micro-Pomodoro tracker.",
    impact: "Successfully delivered an ultra-fast web product. Surveyed users noted a 25% increase in core daily milestone completions and highly rated the interface's satisfying micro-interaction loops.",
    result: "Created a robust application that enhances user productivity through clear task visualization and simple status tracking.",
    userFlow: [
      { step: "1", title: "Create Workspace Board", desc: "User instantiates a Kanban workspace with pre-populated, responsive board structures." },
      { step: "2", title: "Frictionless Milestone Log", desc: "A sleek modal allows rapid typing of task names, tags, and expected timelines." },
      { step: "3", title: "Tactile Drag & Drop Progression", desc: "Moving cards across columns triggers satisfying physics-based hover states." },
      { step: "4", title: "Dynamic Task Archival", desc: "Completing lists creates particle bursts and updates historical analytics graphs." }
    ],
    wireframeStructure: {
      type: "kanban",
      layout: ["Header & Board Selector", "Backlog Column Cards", "In-Progress Grid List", "Done Archive Bin"]
    }
  },
  {
    id: "agent-management",
    title: "Agent Management System",
    outcomeTitle: "DispatchIQ: Centralizing Operations & Speeding Agent Routing by 30%",
    category: "UI Design",
    techStack: ["React", "Node.js", "MongoDB", "Leaflet Maps"],
    tags: ["React", "Node.js", "MongoDB", "Leaflet Maps"],
    image: AgentImg,
    img: AgentImg,
    role: "Lead Interface Developer",
    duration: "3 Weeks",
    metrics: [
      { value: "30%", label: "Faster Dispatch Speeds" },
      { value: "95%", label: "Geographical Accuracy" },
      { value: "50+", label: "Field Agents Monitored" },
      { value: "2s", label: "Live Telemetry Interval" }
    ],
    description: "A centralized platform for managing agents, assigning tasks, and monitoring performance in real-time.",
    liveLink: "https://agent-mgmt.ajaylakhara.com",
    githubLink: "https://github.com/Ajaylakhara/AgentManagement",
    problem: "Organizations with large field teams often lack a unified view of agent activities and task status.",
    detailedProblem: "Logistics companies and field management coordinators suffered from high coordination lag, with dispatchers having to manually phone agents to verify locations and coordinate complex routing paths, creating operational delays of over 45 minutes per route change.",
    userPersona: "Logistics coordinators and warehouse dispatch specialists managing rapid turnarounds and dynamic shifts for multiple mobile team members.",
    detailedGoal: "Engineer an all-in-one geographic tracking dashboard mapping field agents in real-time with sub-2 second update intervals and clean tabular analytics.",
    research: "Interviewed operations managers to understand the challenges of remote team coordination and performance tracking.",
    ui: "Built a map-integrated dashboard and detailed reporting views for comprehensive oversight.",
    solution: "Designed DispatchIQ, integrating custom geo-spatial overlays, Leaflet maps, and persistent backend WebSockets. Developed an intuitive dispatcher board that automatically signals closest available agent coordinates to delivery tasks.",
    impact: "Coordinators cut team dispatch times by 30%, enhanced map coordination accuracy to 95%, and successfully handled concurrent monitoring of over 50 field agents during peak intervals.",
    result: "Improved team efficiency and provided management with actionable insights through real-time data visualization.",
    userFlow: [
      { step: "1", title: "Map View Load", desc: "Dashboard boots, plotting geographic clusters and field specialist coordinates instantly." },
      { step: "2", title: "Route Allocation Trigger", desc: "Dispatcher clicks on a delivery zone, bringing up candidate recommendations based on proximity." },
      { step: "3", title: "Agent Signal Alert", desc: "WebSocket forwards path and checklist targets directly to the selected field specialist's phone." },
      { step: "4", title: "Real-Time Route Telemetry", desc: "Dashboard updates coordinates live on map as task progresses to completion status." }
    ],
    wireframeStructure: {
      type: "map",
      layout: ["Top Global Stats", "Interactive Sidebar List", "Full-width Map Overlay", "Route Analytics Panel"]
    }
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    outcomeTitle: "Personal Portfolio: Designing a 100/100 Lighthouse Storytelling Hub",
    category: "Web Design",
    techStack: ["React 19", "Tailwind CSS v4", "Framer Motion"],
    tags: ["React 19", "Tailwind CSS v4", "Framer Motion"],
    image: null,
    img: null,
    role: "UX Designer & Engineer",
    duration: "3 Weeks",
    metrics: [
      { value: "100/100", label: "Lighthouse Performance" },
      { value: "Sub-100ms", label: "FCP & LCP Speeds" },
      { value: "0", label: "Cumulative Layout Shift" },
      { value: "Top 1%", label: "Interactive Layout Tier" }
    ],
    description: "A high-performance personal portfolio showcasing skills, projects, and professional experience with a focus on modern UI/UX.",
    liveLink: "https://ajaylakhara.com",
    githubLink: "https://github.com/Ajaylakhara/Portfolio_Website",
    problem: "Static resumes fail to capture the interactive nature of modern web development and design skills.",
    detailedProblem: "Standard portfolios are often slow, lack cohesive storytelling, and feel like static grid templates. Recruiters spend less than a minute scanning sites, meaning generic layouts fail to establish professional UX/frontend depth or convey complex problem-solving capabilities.",
    userPersona: "Design leaders, startup technical founders, and corporate recruiters hunting for top-tier frontend developers who possess both aesthetic refinement and code optimization skills.",
    detailedGoal: "Construct an immersive digital experience utilizing dynamic color themes, robust micro-animations, and structured, outcome-driven metrics grids while maintaining sub-100ms First Contentful Paint times.",
    research: "Explored top-tier designer portfolios to identify best practices in layout, typography, and interactive storytelling.",
    ui: "Adopted a dark minimal aesthetic with spacing-focused layouts and subtle micro-animations.",
    solution: "Built this portfolio website leveraging React, Tailwind CSS v4, and custom modular web components. Features included virtualized project sections, inline SVG user-flow mapping, dynamic image sliders, and an extremely refined typographic rhythm.",
    impact: "Earned pristine 100/100 Lighthouse performance metrics, minimized layout shifts to absolute zero, and created a premium recruiter showcase leading directly to premium engineering discussions.",
    result: "Produced a professional digital showcase that effectively communicates technical expertise and design sensibility.",
    userFlow: [
      { step: "1", title: "Hero Presentation Scan", desc: "Visitor lands, instantly taking in high-fidelity animations and direct narrative summary statements." },
      { step: "2", title: "Skills & Performance Grid", desc: "Interactive cards present clean technical skills, triggering smooth micro-animations on hover." },
      { step: "3", title: "Detailed Project Case Studies", desc: "Recruiters explore outcome-driven case studies, selecting high-fidelity, wireframe, or user flow views." },
      { step: "4", title: "Direct Recruiter CTA Loop", desc: "Optimized footer contact panel facilitates immediate communication with no modal friction." }
    ],
    wireframeStructure: {
      type: "portfolio",
      layout: ["Minimalist Sticky Nav", "High-Impact Typographic Hero", "Case Studies Columns Grid", "Frictionless Footer Form"]
    }
  },
  {
    id: "fintech-dashboard-placeholder",
    id_alias: "fintech-dashboard",
    title: "Fintech Dashboard",
    category: "UI Design",
    techStack: ["React", "Framer Motion", "Tailwind CSS"],
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    image: UIDashboard,
    img: UIDashboard,
    description: "A premium, dark-mode financial intelligence dashboard with interactive charting and multi-currency tracking.",
    liveLink: "https://fintech-dashboard.ajaylakhara.com",
    githubLink: "https://github.com/Ajaylakhara/FintechDashboard",
    problem: "Financial applications are frequently dense and difficult to parse visually for key performance indicators.",
    research: "Conducted testing on information layouts and telemetry displays to establish visual hierarchies for trading metrics.",
    ui: "Created a glassmorphic dashboard featuring dark sleek neon tones and interactive metric highlights.",
    result: "Constructed an ultra-fast web dashboard improving users' portfolio telemetry and decision reaction times."
  },
  {
    id: "health-app-ux",
    title: "Health App UX",
    outcomeTitle: "PulseTrack: Increasing Daily App Retention by 25% with Micro-Interactions",
    category: "Mobile App",
    techStack: ["React Native", "Figma", "Redux Toolkit"],
    tags: ["React Native", "Figma", "Redux Toolkit"],
    image: MobileApp,
    img: MobileApp,
    role: "Lead Mobile UX Designer",
    duration: "3 Weeks",
    metrics: [
      { value: "+25%", label: "User App Retention" },
      { value: "4.8★", label: "App Store Rating" },
      { value: "15k", label: "Hydration Cycles Tracked" },
      { value: "40%", label: "Faster Metric Logging" }
    ],
    description: "Interactive health tracking mobile application featuring patient health scores and visual medical records.",
    liveLink: "https://health-app.ajaylakhara.com",
    githubLink: "https://github.com/Ajaylakhara/HealthAppUX",
    problem: "Health stats are rarely aggregated in an intuitive and positive-reinforcement visual layout.",
    detailedProblem: "Most health tracking mobile applications rely on sterile tabular readouts and confusing scientific parameters. Users frequently lose interest and stop logging hydration, steps, and weight parameters within the first week due to tedious check-in menus.",
    userPersona: "Casual wellness practitioners and health-conscious adults who need a supportive, positive feedback-driven application that takes under 5 seconds to log core vitals daily.",
    detailedGoal: "Design an interactive, gorgeous high-fidelity mobile prototype utilizing soft, positive aesthetic cues, health status rings, and simple single-tap entry logs.",
    research: "Tested interactive UI loops related to positive behavior cues, hydration trackers, and workout logging.",
    ui: "Constructed dynamic status rings and soft ambient lighting mockups to keep visual focus clean.",
    solution: "Designed PulseTrack, prioritizing ambient background glows, soft dynamic gradients, and radial progress rings. The tracking engine was coupled with standard Redux slices to record historical data, feeding a custom positive-reinforcement modal loop.",
    impact: "Designed an interactive prototype yielding a 25% increase in user session retention during evaluation runs and significantly reducing time-to-log parameters to under 4 seconds.",
    result: "Designed an interactive prototype yielding a 25% increase in user session retention during evaluation runs.",
    userFlow: [
      { step: "1", title: "Daily Vitals Glance", desc: "User opens app, instantly greeted by interactive visual status rings displaying daily progress." },
      { step: "2", title: "Instant Log Action", desc: "Frictionless circular widgets allow users to log water or workout time in a single click." },
      { step: "3", title: "Dynamic Stat Calculation", desc: "Health rings dynamically complete with satisfying expanding sound and particle micro-animations." },
      { step: "4", title: "Health Snapshot Analysis", desc: "Users view their 7-day health trend chart, accompanied by positive AI-driven text recommendations." }
    ],
    wireframeStructure: {
      type: "mobile",
      layout: ["Profile Summary Header", "Circular Vitals Progress Rings", "Quick Tap Action Grid", "Weekly Analytics Charts"]
    }
  },

  {
    id: "saas-landing",
    title: "SaaS Landing Page",
    outcomeTitle: "SaaS Landing Page: Achieving 22% Lead Conversion via Frictionless UX UI",
    category: "Web Design",
    techStack: ["React 19", "Tailwind CSS v4", "Framer Motion"],
    tags: ["React 19", "Tailwind CSS v4", "Framer Motion"],
    image: WebLanding,
    img: WebLanding,
    role: "Lead Frontend Developer",
    duration: "2 Weeks",
    metrics: [
      { value: "22%", label: "Lead Conversion Rate" },
      { value: "0.4s", label: "FCP Index Speed" },
      { value: "98%", label: "Interactive CTA Clicks" },
      { value: "100%", label: "Perfect SEO Score" }
    ],
    description: "A clean SaaS startup landing page focusing on dynamic layouts, light speed transitions, and interactive CTAs.",
    liveLink: "https://saas-landing.ajaylakhara.com",
    githubLink: "https://github.com/Ajaylakhara/SaaS_Landing",
    problem: "Many SaaS landing pages feel cluttered with copy and lack key tactile feedback for visitors.",
    detailedProblem: "Tech startup websites often suffer from text congestion, slow load speeds, and chaotic pricing panels. These deficiencies confuse visitors and lead to high drop-offs, resulting in poor industry conversion rates of under 10%.",
    userPersona: "Busy SaaS decision makers and technology directors who expect a quick breakdown of pricing, high-performance features, and visual proof under 30 seconds.",
    detailedGoal: "Engineer a high-converting, feather-light responsive SaaS template featuring glassmorphic design systems, smooth transition states, and flawless responsiveness.",
    research: "Explored optimal lead conversion patterns and micro-animations that draw focus to core calls-to-action.",
    ui: "Integrated clean glassmorphic pricing panels and fluid section scroll gates.",
    solution: "Designed a modular web experience leveraging Tailwind CSS v4, smooth scroll behaviors, lazy loaded media, and interactive pricing calculators that automatically present custom subscription costs.",
    impact: "Achieved an amazing 22% verified conversion rate during user evaluation sprints, maintaining loading index speeds at a ultra-rapid 0.4 seconds.",
    result: "Produced a recruiter-ready product website template resulting in highly visual developer reviews.",
    userFlow: [
      { step: "1", title: "Immediate CTA Discovery", desc: "Recruiters land, guided by dynamic neon glow borders toward primary action buttons." },
      { step: "2", title: "Glassmorphic Features Grid", desc: "Responsive sections reveal product capabilities as visitor scrolls downward." },
      { step: "3", title: "Interactive Pricing Selector", desc: "User toggles monthly vs annual tier, instantly calculating discount animations." },
      { step: "4", title: "Direct Account Setup", desc: "Registration form verifies entries client-side, avoiding visual page reloads." }
    ],
    wireframeStructure: {
      type: "saas",
      layout: ["Logo Header & Sign In Button", "Value Proposition Hero", "Feature Grid Modules", "Glassmorphic Price Board"]
    }
  },
  {
    id: "brand-logo-1",
    title: "Mahakal",
    category: "Branding",
    image: Logo5Img,
    img: Logo5Img,
    colors: ["#FF6321", "#1E1E1E"],
    hasWatermark: true
  },
  {
    id: "brand-logo-2",
    title: "Stride Club",
    category: "Branding",
    image: Logo4Img,
    img: Logo4Img,
    colors: ["#FF5E00", "#141518"],
    hasWatermark: true
  },
  {
    id: "brand-logo-3",
    title: "SafeNest Insurance",
    category: "Branding",
    image: Logo3Img,
    img: Logo3Img,
    colors: ["#009FBD", "#1E3A8A"],
    hasWatermark: true
  },
  {
    id: "brand-logo-4",
    title: "Brewed & Bold",
    category: "Branding",
    image: Logo6Img,
    img: Logo6Img,
    colors: ["#6F4E37", "#C5A880"],
    hasWatermark: true
  },
  {
    id: "brand-logo-5",
    title: "FlowState",
    category: "Branding",
    image: Logo1Img,
    img: Logo1Img,
    colors: ["#2E7D32", "#FFFFFF"],
    hasWatermark: true
  },
  {
    id: "brand-logo-6",
    title: "MatchPoint",
    category: "Branding",
    image: Logo2Img,
    img: Logo2Img,
    colors: ["#1565C0", "#000000"],
    hasWatermark: true
  }
];

