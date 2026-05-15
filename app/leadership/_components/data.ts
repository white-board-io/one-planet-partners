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
      linkedin: "https://in.linkedin.com/in/mukund-rajan-497a825",
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
      linkedin: "https://in.linkedin.com/in/bobbypauly",
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
      linkedin: "https://in.linkedin.com/in/mrinalini-mirchandani-6293a462",
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
      linkedin: "https://www.linkedin.com/in/sheetal-thakkar-3a30901",
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
      linkedin: "https://in.linkedin.com/in/manoj-kohli-34948b108",
    },
    category: "advisor",
  },
  {
    id: "rajendra",
    name: 'Rajendra Bhinge',
    designation: "Senior Advisor",
    image: "/images/leadership/Rajendra%20Bhinge.png",
    bio: [
      'Rajendra "Raju" Bhinge is a veteran business strategist and corporate advisor with decades of experience working alongside some of India\'s leading business leaders and institutions. He previously served as Executive Director of Tata Industries, the strategic investment arm of the Tata Group, where he led transformational initiatives as a close advisor to Group Chairman Ratan Tata and served on multiple Tata Group company boards.',
      "Raju is also the Founder and former CEO of Tata Strategic Management Group (TSMG), the Tata Group's premier strategy consultancy, where he advised on business transformations, market entries, restructurings, and acquisitions across India and international markets. He additionally convened the Tata Business Review Committee, a high-level advisory group guiding business performance, strategy, and capital allocation across Tata companies.",
      "He currently serves as Chairman of Antennae Ventures, a technology-focused startup accelerator supporting emerging ventures from early-stage through growth.",
      "Raju holds an MBA from IIM Ahmedabad and a B.Tech (Honors) in Electrical Engineering from IIT Bombay.",
    ],
    social: {
      linkedin: "https://in.linkedin.com/in/rajendra-bhinge",
    },
    category: "advisor",
  },
  {
    id: "ramesh",
    name: "Ramesh Subramanyam",
    designation: "Senior Advisor",
    image: "/images/leadership/Ramesh%20Subramanyam.png",
    bio: [
      "Ramesh Subramanyam is a seasoned finance and business leader with more than 33 years of experience across corporate finance, treasury, M&A, governance, strategy, and business development. His career spans leadership roles across some of India's leading business groups and multinational corporations, including the Hinduja Group, Tata Group, Monsanto, Siemens, and Unilever.",
      "Ramesh last served as Group CFO and President of Hinduja Group Limited, where he led financial strategy and growth initiatives across the Group's diversified global portfolio. Prior to joining Hinduja Group, he spent nearly 15 years at Tata Group, serving as Senior Vice President at Tata Sons and Group CFO of Tata Power, where he played a key role in expanding the company's renewable energy, transmission, solar, and distribution businesses.",
      "He serves on the boards of multiple companies, including Hinduja Renewable Energy, Hindustan Construction Company, Ashok Leyland Defence Systems Ltd, and was previously Chairman of CII's CFO Committee, Member of the Confederation of Indian Industry (CII) Committee on Economy and Committee on Financial Reporting.",
      "Ramesh holds a B.Com from Nagpur University and is a qualified AICWA, ACS, and CPA. He has completed executive programs at IIM Ahmedabad and INSEAD.",
    ],
    social: {
      linkedin: "https://in.linkedin.com/in/ramesh-n-subramanyam",
    },
    category: "advisor",
  },
  {
    id: "riki",
    name: "Riki Kojima",
    designation: "Senior Advisor",
    image: "/images/leadership/Riki%20Kojima.png",
    bio: [
      "Riki Kojima is a global business leader with over 40 years of experience across private equity, energy, corporate transformation, and institutional investing in Asia, Europe, and North America.",
      "Most recently, Riki served as Executive Vice President, Chief Innovation Officer, and Board Member of Tokyo Electric Power Company Holdings (TEPCO), where he led the company's carbon-neutral transformation and strategic partnerships. He previously served as Executive Vice President and CFO of TEPCO Renewable Power, overseeing the expansion of Japan's largest renewable energy portfolio.",
      "Earlier in his career, Riki managed a US$2 billion private equity portfolio at Mitsubishi Corporation and later served as Chief of Staff in the CEO's Office. He also held senior roles at Bridgepoint Capital, GE Capital, and GE Plastics across Asia Pacific. Riki began his international career at the World Bank Group and IFC, working on privatization and infrastructure initiatives across emerging markets.",
      "He holds an MBA from UCLA Anderson School of Management and a BA in Economics from Keio University.",
    ],
    social: {
      linkedin: "https://jp.linkedin.com/in/riki-kojima-2246474",
    },
    category: "advisor",
  },
  {
    id: "riaz",
    name: "Riaz Currimjee",
    designation: "Senior Advisor",
    image: "/images/leadership/Riaz%20Currimjee.png",
    bio: [
      "Riaz Currimjee is the Founder and Managing Partner of Surya Capital, a merchant banking, investment, and advisory firm focused on private market opportunities in India, driven by structural shifts across decarbonisation, demographics, and technology. Prior to its India focus, Surya Capital operated as a principal investment firm focused on East Africa.",
      "Earlier in his career, Riaz was a Partner at Arundel Partners, a hedge fund seeding platform, and worked as an investment banker at Lazard, specializing in mergers and acquisitions. He began his professional career at Arthur Andersen in London, where he qualified as a Chartered Accountant.",
      "Riaz has served as a Non-Executive Director of Gaja Capital, a leading Indian mid-market private equity firm, since its inception over two decades ago. He also serves on the board of Currimjee Jeewanjee & Co. Ltd, one of Mauritius' largest conglomerates, with interests spanning telecommunications, real estate, hospitality, energy, and FMCG. The group was a founding shareholder in Bharti Airtel and also founded Emtel, the Southern Hemisphere's first mobile telecommunications company.",
      "Riaz holds a BS in Finance from Boston College's Carroll School of Management.",
    ],
    social: {
      linkedin: "https://uk.linkedin.com/in/riaz-currimjee-a6232",
    },
    category: "advisor",
  },
];

export function getPersonById(id: string): Person | undefined {
  return people.find((p) => p.id === id);
}

export const leaders = people.filter((p) => p.category === "leader");
export const advisors = people.filter((p) => p.category === "advisor");
