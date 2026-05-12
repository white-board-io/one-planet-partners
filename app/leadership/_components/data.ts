export type SocialLinks = {
  linkedin?: string;
  twitter?: string;
  website?: string;
};

export type Person = {
  id: string;
  name: string;
  designation: string;
  image: string;
  bio: string[];
  social: SocialLinks;
  category: "leader" | "advisor";
};

export const people: Person[] = [
  // Leaders
  {
    id: "mukund",
    name: "Dr. Mukund Rajan",
    designation: "Founder & General Partner",
    image: "/images/leadership/Mukund%20Rajan.png",
    bio: [
      "Dr. Rajan is one of India's earliest and best recognized professionals in sustainability and climate. Previously, he was Chairman of the Tata Global Sustainability Council and member of the apex Group Executive Council of the Tata Group.",
      "In 2019, he founded ECube Investment Advisors, which evangelizes sustainability practices in India. Mukund mentors the Environment & Climate Change Committee of FICCI (Federation of Indian Chambers of Commerce & Industry) and has served as Commissioner of the global Energy Transitions Commission. He has authored 2 books on climate policy and sustainability.",
      "In his 23 years with the Tata group, he worked closely with successive Tata Group Chairpersons, served on multiple Tata boards, and was the youngest CEO of a listed Tata company. He led Tata's private equity business (AUM of USD 1 Bn) as its first Managing Partner where he set up the mid-market focused Tata Opportunities Fund with Bobby in 2010-11.",
      "Dr Rajan holds an M.Phil and D.Phil in International Relations as a Rhodes Scholar at Oxford University and a B.Tech from IIT Delhi.",
    ],
    social: {
      linkedin: "https://linkedin.com/in/mukundrajan",
      twitter: "https://twitter.com/mukundrajan",
      website: "https://oneplanetpartners.com",
    },
    category: "leader",
  },
  {
    id: "bobby",
    name: "Bobby Pauly",
    designation: "Managing Partner",
    image: "/images/leadership/Bobby%20Pauly.png",
    bio: [
      "Bobby Pauly brings over two decades of private equity experience across India's mid-market landscape. He has been instrumental in building value across multiple investment cycles and sectors.",
      "Prior to One Planet Partners, Bobby co-led the Tata Opportunities Fund alongside Dr. Mukund Rajan, where he oversaw a portfolio of high-growth mid-market businesses across India.",
      "Bobby holds an MBA from a leading business school and has deep expertise in operational value creation, board governance, and strategic exits.",
    ],
    social: {
      linkedin: "https://linkedin.com/in/bobbypauly",
    },
    category: "leader",
  },
  {
    id: "mrinalini",
    name: "Mrinalini Mirchandani",
    designation: "Managing Partner",
    image: "/images/leadership/Mrinalini%20Mirchandani.png",
    bio: [
      "Mrinalini Mirchandani is a seasoned investment professional with extensive experience in private equity across emerging markets, with a particular focus on India's high-growth sectors.",
      "She has led several landmark transactions across consumer, healthcare, and technology sectors, bringing both financial acumen and operational expertise to portfolio companies.",
      "Mrinalini is passionate about sustainability-linked value creation and plays a central role in integrating ESG practices across the One Planet Partners investment process.",
    ],
    social: {
      linkedin: "https://linkedin.com/in/mrinalinim",
    },
    category: "leader",
  },
  {
    id: "sheetal",
    name: "Sheetal Thakkar",
    designation: "Partner and Head of Investor Relations",
    image: "/images/leadership/Sheetal%20Thakkar.png",
    bio: [
      "Sheetal Thakkar leads investor relations at One Planet Partners, bringing a deep understanding of LP relationships and fund strategy communications built over many years in the financial services industry.",
      "She has extensive experience working with institutional investors, family offices, and sovereign wealth funds across Asia, the Middle East, and global markets.",
      "Sheetal is committed to building transparent, long-term partnerships with investors and plays a critical role in articulating One Planet Partners' investment thesis and impact story.",
    ],
    social: {
      linkedin: "https://linkedin.com/in/sheetalthakkar",
    },
    category: "leader",
  },
  // Senior Advisors
  {
    id: "manoj",
    name: "Manoj Kohli",
    designation: "Senior Advisor",
    image: "/images/leadership/Manoj%20Kohli.png",
    bio: [
      "Manoj Kohli is one of India's most distinguished business leaders, having served as CEO of Bharti Airtel and leading its international expansion across Africa and Asia.",
      "With over four decades of experience spanning telecom, technology, and renewable energy, Manoj brings unmatched strategic insight and a vast network across India's corporate and policy landscape.",
      "He is currently Country Head of SoftBank India and serves on the boards of several leading Indian companies.",
    ],
    social: {
      linkedin: "https://linkedin.com/in/manojkohli",
    },
    category: "advisor",
  },
  {
    id: "rajendra",
    name: "Rajendra Bhinge",
    designation: "Senior Advisor",
    image: "/images/leadership/Rajendra%20Bhinge.png",
    bio: [
      "Rajendra Bhinge is a veteran business leader with deep expertise in manufacturing, supply chain, and large-scale operations across India and global markets.",
      "He has held senior executive roles at leading multinational corporations and Indian conglomerates, driving transformative growth and operational excellence.",
      "Rajendra provides strategic counsel to One Planet Partners on industrial and operational value creation within portfolio companies.",
    ],
    social: {
      linkedin: "https://linkedin.com/in/rajendrab",
    },
    category: "advisor",
  },
  {
    id: "ramesh",
    name: "Ramesh Subramanyam",
    designation: "Senior Advisor",
    image: "/images/leadership/Ramesh%20Subramanyam.png",
    bio: [
      "Ramesh Subramanyam is a highly respected financial leader with decades of experience in global finance, treasury, and corporate strategy.",
      "He served as CFO of Tata Communications and held senior financial roles across the Tata Group, developing deep expertise in capital markets and financial restructuring.",
      "Ramesh advises One Planet Partners on financial strategy, capital structure optimization, and navigating complex cross-border transactions.",
    ],
    social: {
      linkedin: "https://linkedin.com/in/rameshsub",
    },
    category: "advisor",
  },
  {
    id: "riki",
    name: "Riki Kojima",
    designation: "Senior Advisor",
    image: "/images/leadership/Riki%20Kojima.png",
    bio: [
      "Riki Kojima brings extensive experience in Japan-India business relations, having facilitated numerous cross-border investments and partnerships between leading Japanese corporations and Indian enterprises.",
      "He has deep expertise in the automotive, electronics, and advanced manufacturing sectors, and has built strong relationships with major Japanese institutional investors and corporations.",
      "Riki provides strategic guidance on Japan-focused investor relations and cross-border transaction advisory for One Planet Partners.",
    ],
    social: {
      linkedin: "https://linkedin.com/in/rikikojima",
    },
    category: "advisor",
  },
  {
    id: "riaz",
    name: "Riaz Currimjee",
    designation: "Senior Advisor",
    image: "/images/leadership/Riaz%20Currimjee.png",
    bio: [
      "Riaz Currimjee is a prominent business leader from Mauritius, representing the Currimjee Group — one of the most respected family business conglomerates in the Indian Ocean region.",
      "With deep ties across Africa, the Middle East, and the Indian subcontinent, Riaz brings a unique perspective on frontier market investing and family office capital deployment.",
      "He advises One Planet Partners on African and Mauritius-based LP relationships and provides strategic counsel on cross-regional business development.",
    ],
    social: {
      linkedin: "https://linkedin.com/in/riazc",
    },
    category: "advisor",
  },
];

export function getPersonById(id: string): Person | undefined {
  return people.find((p) => p.id === id);
}

export const leaders = people.filter((p) => p.category === "leader");
export const advisors = people.filter((p) => p.category === "advisor");
