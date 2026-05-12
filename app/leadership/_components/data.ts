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
      "Mukund is one of India's earliest and best recognized professionals in sustainability and climate. Previously, he was Chairman of the Tata Global Sustainability Council, member of the apex Group Executive Council, and the first Brand Custodian of the Tata Group.",
      "In 2019, he founded ECube Investment Advisors, which evangelizes sustainability practices in India. Mukund is a member of the Steering Committee of FICCI (Federation of Indian Chambers of Commerce & Industry). He has served as Commissioner of the global Energy Transitions Commission, and has authored two books on climate policy and sustainability.",
      "In his 23 years with the Tata Group, he worked closely with successive Tata Group Chairpersons, served on multiple Tata boards, and was the youngest CEO of a major listed Tata company. He led Tata's private equity business (AUM of USD 1 Bn+) and set up the mid-market focused Tata Opportunities Fund with Bobby in 2010-11, where he served as the founding Managing Partner.",
      "Mukund holds an M.Phil and D.Phil in International Relations as a Rhodes Scholar at Oxford University and a B.Tech from IIT Delhi.",
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
    designation: "Founder & General Partner",
    image: "/images/leadership/Bobby%20Pauly.png",
    bio: [
      "Bobby brings two decades of private equity leadership in India. He co-founded Tata's pioneering private equity business in 2007 as its first employee, having earlier authored the business plan adopted by Tata Capital. In 2010, he partnered with Mukund to launch the ~USD 600 Mn Tata Opportunities Fund (TOF) — a mid-market growth and buyout fund backed by marquee global investors with average commitments of USD 75 Mn. Bobby spent 15 years building a multi-strategy platform at Tata PE, leading landmark investments across industrials, automotive, logistics, hospitality and mobility, and serving on market-leading portfolio boards as Managing Partner.",
      "Earlier, Bobby was a senior leader at Tata Strategic Management Group, where he built new consumer and retail ventures for Tata and drove deep strategic initiatives across mobility, manufacturing, industrials and energy in India and overseas. He also led the firm's private equity practice.",
      "Bobby holds a management degree from IIM Calcutta and graduated from the Mechanical Engineering program of College of Engineering, Guindy.",
    ],
    social: {
      linkedin: "https://linkedin.com/in/bobbypauly",
    },
    category: "leader",
  },
  {
    id: "mrinalini",
    name: "Mrinalini Mirchandani",
    designation: "Founder & General Partner",
    image: "/images/leadership/Mrinalini%20Mirchandani.png",
    bio: [
      "Mrinalini brings over two decades of experience advising leading Indian and global organizations on strategy, private equity, M&A, talent & business transformation.",
      "She is the first and only woman to be elected Senior Partner in McKinsey's 34-year history in India. Over 15+ years at the firm, she held multiple leadership roles, including heading McKinsey's Private Equity practice in India. In that capacity, she advised leading global and Indian PE funds on investment diligence and portfolio value creation.",
      "Earlier, Mrinalini led Healthcare and Consumer Investment Banking for Merrill Lynch in India as well as Healthcare recruiting for Egon Zehnder in India. In 2018, she featured in the Economic Times list of India's 40 Under Forty Young Business Leaders.",
      "Mrinalini holds a management degree from IIM Calcutta and a B.Com from Mumbai University.",
    ],
    social: {
      linkedin: "https://linkedin.com/in/mrinalinim",
    },
    category: "leader",
  },
  {
    id: "sheetal",
    name: "Sheetal Thakkar",
    designation: "Founder & General Partner",
    image: "/images/leadership/Sheetal%20Thakkar.png",
    bio: [
      "Sheetal is an investment professional with over 15 years of experience in private equity investing and leveraged finance across the US and Emerging Markets. She worked with The Blackstone Group and Odyssey Investment Partners in New York, before moving to Mumbai to join Tata's inaugural Private Equity team along with Bobby and Mukund.",
      "More recently, Sheetal helped build the Global Sustainability Leadership Practice at Russell Reynolds in Washington DC, where she worked at the intersection of private equity and climate. She serves on the Steering Committee of Allocator Collective, where she leads initiatives enhancing diversity in asset management.",
      "Sheetal holds an MBA from the Wharton School and a BS from NYU's Stern School of Business.",
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
