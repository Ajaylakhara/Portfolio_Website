import Logo1Img from "../assets/Logo/logo_1.png";
import Logo2Img from "../assets/Logo/logo_2.png";
import Logo3Img from "../assets/Logo/logo_3.png";
import Logo4Img from "../assets/Logo/logo_4.png";
import Logo5Img from "../assets/Logo/logo_5.png";
import Logo6Img from "../assets/Logo/logo_6.png";


const baseUrl = import.meta.env.BASE_URL || "/";


const MedicareHubImg = `${baseUrl}optimized/projecting/medicare.webp`;
const BankAppDesignImg = `${baseUrl}optimized/projecting/BankApp_Design.webp`;

export const projects = [
  {
    id: "bank-app-design",
    title: "Apex Banking UI Kit",
    outcomeTitle: "Apex Banking UI Kit: Designing a High-Fidelity Responsive Financial System",
    category: "UI Design",
    techStack: ["Figma", "UI/UX Design", "Wireframing"],
    tags: ["Figma", "UI/UX Design", "Wireframing"],
    image: BankAppDesignImg,
    img: BankAppDesignImg,
    role: "Lead UI/UX Designer",
    duration: "2 Weeks",
    metrics: [
      { value: "45+", label: "Figma Screens" },
      { value: "100%", label: "Auto-Layout" },
      { value: "150+", label: "Community Dupes" }
    ],
    description: "A comprehensive, high-fidelity Banking UI Kit created in Figma, detailing responsive dashboards, sleek mobile screens, and a robust design system.",
    liveLink: "https://www.figma.com/community/file/1625148447327410477",
    problem: "Financial application designs often struggle to balance complex security requirements with clear, modern, and engaging user interfaces.",
    detailedProblem: "Most online banking interfaces feel cluttered and outdated, making user navigation frustrating. Designing a unified web and mobile visual interface with a complete design system helps developers implement clean, accessible finance experiences.",
    userPersona: "UX Designers and Frontend Developers looking for a modern, well-structured finance UI kit to build upon.",
    detailedGoal: "Construct an immersive and sleek dark-and-light themed banking UI Kit with interactive components, transaction tracking modules, and comprehensive charts.",
    research: "Analyzed top modern fintech application flows like Revolut, Wise, and Apple Card to structure transaction histories, card management, and account switches.",
    ui: "Crafted a beautiful dark modern interface with custom neo-brutalist financial cards, vibrant accent tones, and clean information hierarchy.",
    solution: "Designed 45+ pixel-perfect screens in Figma using auto-layout v5, comprehensive design tokens, interactive components, and responsive grid layouts.",
    impact: "Created a popular Figma Community template that provides ready-to-code components and highly intuitive banking layouts for UI/UX designers globally.",
    result: "Established an elite fintech design system showcase highlighting modern layout aesthetics, clean navigation hierarchies, and developer-friendly Figma specs.",
    userFlow: [
      { step: "1", title: "Dashboard Overview", desc: "User views total balance, recent transactions, and graphical spending analyses at a glance." },
      { step: "2", title: "Card Management", desc: "Select and view virtual credit/debit cards, toggling limits or locking/unlocking them instantly." },
      { step: "3", title: "Quick Transfer", desc: "Send money to frequent contacts in a simple, streamlined two-step flow." },
      { step: "4", title: "Dark/Light Toggle", desc: "Switch the entire visual system between custom dark and light UI states seamlessly." }
    ],
    wireframeStructure: {
      type: "fintech",
      layout: ["Card Carousel", "Spending Analytics Chart", "Quick Transfer Bar", "Transaction Activity Feed"]
    }
  },
  {
    id: "medicare-hub",
    title: "MedicareHub Health Portal",
    outcomeTitle: "MedicareHub: Elevating Healthcare Access & Accelerating Patient Care Systems",
    category: "Web Design",
    techStack: ["React 19", "Framer Motion", "Tailwind CSS", "Vite"],
    tags: ["React 19", "Framer Motion", "Tailwind CSS", "Vite"],
    image: MedicareHubImg,
    img: MedicareHubImg,
    role: "Lead Frontend Architect",
    duration: "3 Weeks",
    metrics: [
      { value: "99.9%", label: "Uptime Reliability" },
      { value: "1.2s", label: "Page Load Index" },
      { value: "30k+", label: "Daily Vitals Logged" },
      { value: "50%", label: "Faster Booking Flow" }
    ],
    description: "A premium clinical patient dashboard designed to streamline appointment scheduling, doctor discovery, and electronic health record retrieval.",
    liveLink: "https://medicarehub-health.vercel.app/",
    githubLink: "https://github.com/Ajaylakhara/Medicare_health_frontend",
    problem: "Legacy medical check-in systems suffer from high data latency, confusing appointment forms, and poor mobile device responsiveness.",
    detailedProblem: "Standard healthcare booking systems fail to convey surgeon and consultant availability dynamically. Patients frequently spend more than 15 minutes navigating complex medical sub-menus, leading to a massive drop-off in active portal engagement.",
    userPersona: "Digital patients seeking fast healthcare solutions and emergency medical consultations on mobile devices.",
    detailedGoal: "Construct an immersive patient portal utilizing clean healthcare-teal highlights, smooth component animations, and instantaneous appointment booking loops under 3 clicks.",
    research: "Reviewed modern medical telemetry layouts to design clear status checkmarks, intuitive specialist filter cards, and high-contrast clinical typography.",
    ui: "Adopted a soft glassmorphic teal and deep navy theme featuring interactive calendar widgets and smooth responsive transitions.",
    solution: "Engineered MedicareHub utilizing lightweight React components, optimized responsive breakpoints, and custom Framer Motion transition states for seamless 60fps operation.",
    impact: "Achieved perfect responsive performance across tablets, smartphones, and large screens. Compressed average check-in friction by 50% while sustaining ultra-fast load speeds.",
    result: "Developed an elite medical and patient booking interface showcase that highlights modern design sensibility and frontend optimization.",
    userFlow: [
      { step: "1", title: "Portal Onboarding", desc: "User opens dashboard, instantly receiving clinical services and certified doctor ratings." },
      { step: "2", title: "Smart Filtering", desc: "Patient filters specialized doctors by location, fees, or timing without full-page reloads." },
      { step: "3", title: "Appointment Lock", desc: "A sleek modal books the selected slot, capturing contact inputs in under 10 seconds." },
      { step: "4", title: "Vitals Summary", desc: "Triggers a particle-supported success badge and registers digital healthcare check-ins." }
    ],
    wireframeStructure: {
      type: "healthcare",
      layout: ["Frosted Topbar", "Specialist Filtration Cards", "Dynamic Appointment Wizard", "Patient Records Matrix"]
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

