export const fieldNotes = [
  {
    id: "imece-2026",
    number: "001",
    title: "ASME IMECE 2026",
    subtitle: "From engineering products to conversations about the future of technology.",
    location: "Chennai",
    country: "India",
    venue: "Chennai Trade Centre",
    date: "September 2026",
    displayDate: "03 – 05 SEPT 2026",
    event: "ASME International Mechanical Engineering Congress & Exposition (IMECE 2026)",
    organization: "IDG10 Engineering Solutions",
    booth: "Booth A16 — IDG10 Solutions Private Limited",
    coverImage: "/field-notes/imece-2026/imece-hero-exterior.png",
    
    gallery: [
      {
        id: "img_arrival",
        url: "/field-notes/imece-2026/imece-arrival-vivek.png",
        caption: "CHENNAI TRADE CENTRE · 03 SEPTEMBER 2026",
        title: "Arrival at ASME IMECE 2026",
        alt: "Vivek Singh standing at Chennai Trade Centre entrance badge"
      },
      {
        id: "img_banner",
        url: "/field-notes/imece-2026/imece-banner-future.png",
        caption: "EXHIBITION HALL · FUTURE OF TECH DISPLAY",
        title: "You have got the degree. Now what?",
        alt: "Digital banner displaying real projects, real mentors, real jobs"
      },
      {
        id: "img_booth",
        url: "/field-notes/imece-2026/imece-booth-idg10.png",
        caption: "BOOTH A16 · IDG10 SOLUTIONS PRIVATE LIMITED",
        title: "Exhibiting SPDT & Subsea Field Configurator",
        alt: "Vivek at IDG10 booth exhibiting subsea software tools"
      },
      {
        id: "img_floor",
        url: "/field-notes/imece-2026/imece-presentation-stage.png",
        caption: "TECHNICAL SESSION · INDIA OIL & GAS PIPELINE CONFERENCE 2026",
        title: "ASME IMECE 2026 Presentation & Flow Assurance",
        alt: "ASME IMECE 2026 India Oil and Gas Pipeline Conference presentation stage"
      },
      {
        id: "img_hero",
        url: "/field-notes/imece-2026/imece-hero-exterior.png",
        caption: "CHENNAI TRADE CENTRE · EXTERIOR HALL",
        title: "ASME IMECE 2026 Convention Venue",
        alt: "Chennai Trade Centre glass architectural facade"
      }
    ],

    scenes: [
      {
        sceneId: "scene-01",
        sceneNumber: "SCENE 01",
        title: "ARRIVING AT THE CONVENTION",
        headline: "It started with a conference.",
        body: [
          "As part of IDG10 Engineering Solutions, I had the opportunity to attend ASME IMECE 2026 at the Chennai Trade Centre.",
          "Walking into one of the largest international mechanical and systems engineering congresses, the atmosphere was immediately filled with technical intensity—engineers, researchers, and founders from over 100 countries converging in one place."
        ],
        imageId: "img_arrival",
        imagePosition: "right"
      },
      {
        sceneId: "scene-02",
        sceneNumber: "SCENE 02",
        title: "REPRESENTING THE WORK",
        headline: "Exhibiting subsea & physical engineering tools.",
        body: [
          "At Booth A16 (IDG10 Solutions Private Limited), we showcased our engineering product suite—including SPDT and the interactive Subsea Field Configurator.",
          "Demonstrating software designed for subsea pipeline stress calculations and vessel cost estimation to practicing offshore engineers reinforced a key lesson: software isn't just about clean code; it's about solving real-world physical constraints accurately."
        ],
        imageId: "img_booth",
        imagePosition: "left"
      },
      {
        sceneId: "scene-03",
        sceneNumber: "SCENE 03",
        title: "THE EXHIBITION FLOOR",
        headline: "Connecting across industry silos.",
        body: [
          "Stepping onto the main exhibition floor exposed me to perspectives spanning robotics, deep-ocean engineering, manufacturing digitalization, and AI-driven automation.",
          "Conversations ranged from marine engineers discussing vessel daily rates to startup founders building autonomous hardware systems."
        ],
        imageId: "img_banner",
        imagePosition: "right"
      },
      {
        sceneId: "scene-05",
        sceneNumber: "SCENE 05",
        title: "THE TECHNICAL SESSIONS",
        headline: "I started noticing a pattern.",
        body: [
          "Across multiple keynotes and technical presentations, one overarching trend emerged: the boundaries between hardware, software, and artificial intelligence are rapidly dissolving.",
          "Modern engineering systems can no longer be built in isolation. The future belongs to software engineers who understand physical domain constraints, and domain engineers who harness AI & software architecture."
        ],
        imageId: "img_floor",
        imagePosition: "left"
      },
      {
        sceneId: "scene-06",
        sceneNumber: "SCENE 06",
        title: "THE PEOPLE & CONVERSATIONS",
        headline: "20 minutes can change your perspective.",
        body: [
          "Some of the most valuable insights came not from slides, but from 20-minute conversations at exhibition booths and hallway discussions.",
          "Hearing how engineers from different continents approach reliability, optimization, and system safety gave me a fresh lens on how I design web and backend architectures."
        ],
        imageId: "img_hero",
        imagePosition: "right"
      }
    ],

    ideas: [
      { title: "AI + Physical Engineering", desc: "Applying grounded AI and LLM reasoning models to complex technical specifications and contract compliance." },
      { title: "Autonomous Systems", desc: "Integrating real-time hardware telemetry and IoT streams into responsive browser dashboards." },
      { title: "Subsea & Deep-Ocean Digitalization", desc: "Replacing manual spreadsheet estimation with interactive node-graph canvas calculations." },
      { title: "Engineering Tools UX", desc: "Building high-performance software designed around engineer focus and zero UI stutters." },
      { title: "Cross-Disciplinary Innovation", desc: "Combining mechanical principles, distributed microservices, and modern web frameworks." }
    ],

    takeaways: [
      { num: "01", title: "New Perspectives", desc: "A broader view of how global industries solve large-scale engineering challenges." },
      { num: "02", title: "New Connections", desc: "Meaningful dialogues with researchers, founders, and practicing offshore engineers." },
      { num: "03", title: "New Engineering Ideas", desc: "Fresh inspiration for interactive canvas rendering and real-time computation." },
      { num: "04", title: "Deeper Interest in AI + Engineering", desc: "Reinforced motivation to build grounded document RAG systems like DocuLens." },
      { num: "05", title: "Questions Worth Exploring", desc: "How can software reduce human calculation errors in critical infrastructure design?" }
    ],

    conclusionHeadline: "I left with more questions than I arrived with.",
    conclusionText: "IMECE 2026 gave me a broader view of where engineering is heading—and made me excited about being part of that journey.",

    relatedLinks: [
      { label: "WHAT I BUILD — SUBSEA CONFIGURATOR", href: "#work", desc: "Interactive desktop canvas for subsea field layout comparison." },
      { label: "WHAT I EXPLORE — GROUNDED RAG AI", href: "#chapter-04", desc: "DocuLens AI assistant for technical contract conflict detection." },
      { label: "SEE THE LAB", href: "#lab", desc: "Experimental architecture prototypes and active learning." }
    ],

    tags: ["Conference", "ASME IMECE 2026", "IDG10", "Subsea Software", "Networking", "Chennai"]
  }
];

export function getFieldLogsStats() {
  const entriesCount = fieldNotes.length;
  const placesCount = new Set(fieldNotes.map((n) => n.location)).size;
  const totalIdeas = fieldNotes.reduce((acc, curr) => acc + (curr.ideas ? curr.ideas.length : 0), 0);
  const lastUpdate = fieldNotes[0]?.date || "04.09.2026";

  return {
    entries: entriesCount < 10 ? `0${entriesCount}` : `${entriesCount}`,
    places: placesCount < 10 ? `0${placesCount}` : `${placesCount}`,
    ideas: totalIdeas < 10 ? `0${totalIdeas}` : `${totalIdeas}`,
    lastUpdate,
    status: "EXPLORING"
  };
}
