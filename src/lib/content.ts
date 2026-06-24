export const COMPANY = {
  name: "BuildTech Studios",
  tagline: "Structural Design · Environmental Engineering · Retrofitting · BIM Detailing",
  yearsExperience: 6,
  projectsDelivered: "100+",
  addresses: [
    "7, Malhar Harmony, Near GIFT City, Gandhinagar, Gujarat",
    "93-C, Sector 51-A, Chandigarh",
  ],
  emails: ["thebuildtechstudios@gmail.com", "worklife.bts@gmail.com"],
  phone: "+91 76962 03638",
};

export const SERVICES = [
  {
    title: "Structural Engineering",
    items: [
      "Structural Design",
      "Bridge Engineering & Special Structures",
      "Long-span Space Frames & Roof Systems",
      "Precast System Engineering (Residential & Industrial)",
    ],
  },
  {
    title: "Condition Assessment & Retrofitting",
    items: [
      "Structural Audits & Health Assessment",
      "NDT & Forensic Engineering",
      "Seismic Retrofitting & Strengthening",
    ],
  },
  {
    title: "WASH Infrastructure & Environmental Engineering",
    items: [
      "Wastewater Treatment (DEWATS, FSTPs, SBR/MBBR units)",
      "Rural Water Supply & Drainage",
      "Public Health Engineering in Institutions",
      "Behavioural & Programmatic WASH Support",
    ],
  },
  {
    title: "Peer Review & Vetting",
    items: [
      "Third-party structural design checking",
      "Review for government tendered projects",
    ],
  },
  {
    title: "3D Modelling & BIM",
    items: [
      "Revit Modelling, Tekla Modelling & Steel Detailing",
      "BIM-based coordination",
    ],
  },
];

export const IMAGES = {
  hero: "/images/bts-page-1.jpg",
  steel: "/images/bts-page-5.jpg",
  spaceFrame: "/images/bts-page-7.jpg",
  irrigation: "/images/bts-page-9.jpg",
  bridge: "/images/bts-page-10.jpg",
  smartCity: "/images/bts-page-12.jpg",
  auditorium: "/images/bts-page-15.jpg",
  cityscape: "/images/bts-page-19.jpg",
};


export type ProjectCategory =
  | "Steel & Space Frames"
  | "Precast"
  | "Water & Environmental"
  | "Bridges & Special Structures"
  | "Energy"
  | "RCC Buildings & Infrastructure"
  | "Healthcare"
  | "Smart City";

export interface Project {
  name: string;
  client?: string;
  location?: string;
  category: ProjectCategory;
  description: string;
  image?: string;
}

export const PROJECTS: Project[] = [
  {
    name: "Umain Lake Township",
    location: "Meghalaya",
    client: "Ministry of Tourism",
    category: "Steel & Space Frames",
    description:
      "Structural engineering for a large-scale steel township of 60+ buildings spanning ~300,000 sq ft, with modular layouts and optimized framing for hilly terrain.",
    image: IMAGES.steel,
  },
  {
    name: "LMNIIT Steel Space Frame",
    location: "Jaipur",
    category: "Steel & Space Frames",
    description:
      "Engineering of a 220 m span, 35 m high steel space frame — one of the larger institutional span systems — with advanced 3D modelling.",
    image: IMAGES.spaceFrame,
  },
  {
    name: "Sports Hostel Twin Towers",
    location: "Meghalaya",
    client: "Sports Authority of India",
    category: "Steel & Space Frames",
    description:
      "15-storey twin towers using steel composite construction (~250,000 sq ft). Scope included core design, floor systems, and lateral stability analysis.",
  },
  {
    name: "Tura Market Retrofit",
    location: "Meghalaya",
    client: "Govt. of Meghalaya",
    category: "Steel & Space Frames",
    description:
      "Condition assessment and retrofitting of a 30-year-old 6-storey RCC market building (~100,000 sq ft) with strengthening solutions.",
  },
  {
    name: "Geodesic Dome",
    location: "Manali",
    category: "Steel & Space Frames",
    description:
      "Steel geodesic dome optimized for snow loads and temperature variations in cold-climate conditions.",
  },
  {
    name: "Radio Towers — Pan India",
    client: "Airtel",
    category: "Steel & Space Frames",
    description:
      "Design of 30–55 m steel communication towers across multiple sites with wind/seismic stability and rapid-deployment member optimization.",
  },
  {
    name: "Precast Residential Towers",
    location: "Ahmedabad",
    client: "Archadia Developers",
    category: "Precast",
    description:
      "Engineering of 3 to 23 storey precast residential towers, including connection design, erection sequencing, and QC for accelerated timelines.",
  },
  {
    name: "Ambala Railway Underpass",
    client: "NHAI",
    category: "Precast",
    description:
      "Precast box culverts for a grade-separated underpass, enabling speedy construction with minimal railway disruption.",
  },
  {
    name: "Precast Industrial Sheds",
    location: "Riyadh, Saudi Arabia",
    category: "Precast",
    description:
      "Engineering of precast industrial sheds totaling ~120,000 sq ft, with connection design and erection methodology to GCC codes.",
  },
  {
    name: "Phina Medium Irrigation Project",
    location: "Kangra, Himachal Pradesh",
    category: "Water & Environmental",
    description:
      "A 54 km irrigation project featuring aqueducts up to 36 m above ground and drains 12.5 m below — planning, hydraulics, bridges and falls delivered in under 45 days.",
    image: IMAGES.irrigation,
  },
  {
    name: "LWM Gujarat — 150 Villages",
    client: "Government Programme",
    category: "Water & Environmental",
    description:
      "WASH engineering for wastewater treatment plants in 150 villages across Gujarat — hydraulic design, structural components, and implementation.",
  },
  {
    name: "Material Recovery Centers — Gujarat",
    client: "Commissionerate of Rural Development",
    category: "Water & Environmental",
    description:
      "Statewide assessment and type design of ~8,000 steel MRC units with modular systems replicable across district conditions.",
  },
  {
    name: "Walkway Bridge",
    location: "Ekta Nagar, Gujarat",
    client: "Ministry of Tourism",
    category: "Bridges & Special Structures",
    description:
      "Single-span curved steel pedestrian bridge integrating aesthetics with structural efficiency and ease of fabrication.",
    image: IMAGES.bridge,
  },
  {
    name: "Wards Lake Bridge Assessment",
    location: "Meghalaya",
    client: "Forest Department",
    category: "Bridges & Special Structures",
    description:
      "Condition assessment of a 50-year-old wooden bridge and a 100-year-old dam, with preservation-focused engineering recommendations.",
  },
  {
    name: "Intake Petroleum Tank",
    client: "BPCL",
    category: "Energy",
    description:
      "RCC underground containment tanks with specialised access openings, detailed for soil pressure, uplift, and petroleum-exposure durability.",
  },
  {
    name: "Tasra Coal Washery",
    location: "Dhanbad",
    client: "Ministry of Coal & Petroleum",
    category: "Energy",
    description:
      "Steel infrastructure for a coal washery — conveyors, platforms, and service structures.",
  },
  {
    name: "Venkatesh University Hostels",
    location: "Gajraula, Delhi",
    category: "RCC Buildings & Infrastructure",
    description:
      "Structural design of Girls’ & PG Hostels covering ~500,000 sq ft — multi-block RCC, seismic design, and service integration.",
  },
  {
    name: "Imperial Resort",
    location: "Gwalior",
    client: "Taj Resorts",
    category: "RCC Buildings & Infrastructure",
    description:
      "RCC design for a premium hospitality development with architectural compatibility, high durability, and stringent serviceability.",
  },
  {
    name: "CISF Base Camp",
    location: "Ladakh",
    category: "RCC Buildings & Infrastructure",
    description:
      "High-altitude RCC structures designed for extreme temperatures, seismic activity, and remote-terrain constructability.",
  },
  {
    name: "Mathura Smart City",
    location: "Uttar Pradesh",
    category: "Smart City",
    description:
      "₹200+ crore Govt. of UP programme — structural consultancy and IIT/NIT-vetted drawings for auditoriums, ghats, bus stands, tourist centres and Parikrama Marg facilities.",
    image: IMAGES.smartCity,
  },
  {
    name: "Mother Child Hospital",
    location: "Dakoli, Punjab",
    category: "Healthcare",
    description:
      "50-bedded hospital block — optimized structural design delivered during COVID lockdown.",
  },
  {
    name: "Drug Centers — Punjab",
    category: "Healthcare",
    description:
      "Design of 8 drug centers across Punjab during the COVID response.",
  },
  {
    name: "Dholpur Auditorium",
    location: "Rajasthan",
    category: "RCC Buildings & Infrastructure",
    description:
      "Structural consultancy with NIT Kurukshetra–vetted drawings for the Government of Rajasthan.",
    image: IMAGES.auditorium,
  },
  {
    name: "APMC Azadpur Mandi",
    location: "Delhi",
    category: "RCC Buildings & Infrastructure",
    description:
      "₹50+ crore renovation programme — structural consultancy with IIT-vetted drawings.",
  },
  {
    name: "Kurukshetra Railway Station",
    location: "Haryana",
    client: "Ministry of Railways",
    category: "RCC Buildings & Infrastructure",
    description:
      "Structural consultancy with Railway Department–vetted drawings for the station building.",
  },
  {
    name: "JW Marriott",
    location: "Shimla",
    category: "RCC Buildings & Infrastructure",
    description:
      "Effectively 16-storey stepped cast-in-situ building in high terrain with extensive design challenges.",
  },
  {
    name: "OMA",
    location: "Gurugram",
    category: "RCC Buildings & Infrastructure",
    description: "40-storey CIS SMRF system tower.",
  },
  {
    name: "Vaishnavi Serene",
    location: "Bangalore",
    category: "Precast",
    description: "12 lakh sq ft precast residential project.",
  },
];

export const LEADERSHIP = [
  {
    name: "Anshuman Verma",
    role: "Managing Director — Chartered Engineer",
    qualifications: "B.Tech (Civil); M.Tech (Structural)",
    bio: "Nine years of experience in design and development projects with the United Nations, AIILSG, and various Government of India ministries. Consultant to IIT Gandhinagar.",
  },
  {
    name: "Vineet Kumar",
    role: "Lead Engineer",
    qualifications: "B.Tech (Civil); M.Tech (Structural)",
    bio: "Five years across India and Europe, specialising in steel structures, industrial facilities, and precision-based detailing. Heads the firm’s steel-design vertical.",
  },
  {
    name: "Ajay Kumar",
    role: "Lead, Detailing",
    qualifications: "BIM & Detailing Specialist",
    bio: "Eighteen years in detailing and BIM across precast, steel, and high-rise buildings on three continents.",
  },
  {
    name: "Haider Fareed Qureshi",
    role: "Lead, Precast",
    qualifications: "B.Tech (Civil); M.Tech (Structural)",
    bio: "Six years in India and the Middle East with expertise in precast and modular construction systems, plant-produced components, and rapid infrastructure.",
  },
  {
    name: "Munir Ali",
    role: "Lead, Industrial",
    qualifications: "B.Tech (Civil); M.Tech (Structural)",
    bio: "Six years across India and the Middle East focusing on precast structures, energy-sector civil works, transmission-line foundations, and heavy industrial projects.",
  },
];
