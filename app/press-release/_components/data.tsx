import type { ReactNode } from "react";
import {
  AboutBox,
  ArticleLink,
  Attribution,
  MediaContact,
  Paragraph,
  PullQuote,
} from "./article-blocks";

export type PressRelease = {
  slug: string;
  /** Rendered as separate lines in the detail page hero on large screens. */
  titleLines: string[];
  subtitle: string;
  image: string;
  imageAlt: string;
  content: ReactNode;
};

export const pressReleases: PressRelease[] = [
  {
    slug: "one-planet-partners-launches-maiden-private-equity-fund",
    titleLines: [
      "One Planet Partners launches maiden private equity fund,",
      "announces strategic partnership with Sumitomo Mitsui Trust Bank",
    ],
    subtitle: "Targets deployment of over INR 3,000 Cr; first close planned by mid-2027",
    image: "/images/press-release-founders.webp",
    imageAlt:
      "One Planet Partners founding partners Mukund Rajan, Bobby Pauly, Mrinalini Mirchandani and Sheetal Thakkar",
    content: (
      <>
        <Paragraph>
          <strong>Mumbai, 29 October 2026</strong>
          {" - "}One Planet Partners, an India-focused private equity firm, today announced a
          strategic partnership with Japan&rsquo;s Sumitomo Mitsui Trust Bank (SMTB), and the launch
          of its maiden private equity fund. The Japanese financial institution has made a strategic
          equity investment in One Planet Partners, alongside the anchoring of a dedicated private
          equity fund managed by One Planet. This collaboration marks the formal launch of One
          Planet&rsquo;s investment program targeting high-growth businesses benefiting from
          India&rsquo;s energy transition, mobility and manufacturing-led industrial expansion.
        </Paragraph>
        <Paragraph>
          Founded in 2024, One Planet is an asset management firm established by four founding
          partners: <ArticleLink href="/leadership/mukund">Dr Mukund Rajan</ArticleLink> and{" "}
          <ArticleLink href="/leadership/bobby">Mr Bobby Pauly</ArticleLink>, both of whom played
          central roles within the Tata Group and were instrumental in launching and leading its
          private equity business at Tata Capital;{" "}
          <ArticleLink href="/leadership/mrinalini">Ms Mrinalini Mirchandani</ArticleLink>, the
          first female Senior Partner at McKinsey &amp; Co India who led Private Equity for the firm
          in India; and <ArticleLink href="/leadership/sheetal">Ms Sheetal Thakkar</ArticleLink>,
          who brings investment experience from leading firms, including Blackstone and Tata
          Capital.
        </Paragraph>
        <Paragraph>
          One Planet Partners will focus on high-growth mid-market businesses, providing scale-up
          capital of INR 100 &ndash; 500 Cr to enterprises with attractive unit economics and
          revenue between INR 200 and 2000 Cr. Its investment strategy spans energy, mobility and
          manufacturing, focusing on businesses positioned to benefit from India&rsquo;s structural
          economic growth, energy transition and industrial transformation. The firm aims to combine
          growth capital with active ownership and operational expertise to help businesses scale
          and strengthen their competitive positioning.
        </Paragraph>

        <Attribution>
          <strong>
            <ArticleLink href="/leadership/mukund">Dr. Mukund Rajan</ArticleLink>, Founder and
            Chairperson,
            <br />
            One Planet Partners, said:
          </strong>
        </Attribution>
        <PullQuote>
          We are deeply honoured by SMTB&rsquo;s confidence in our vision and team. Their commitment
          is a powerful endorsement of the strengthening ties between India and Japan. With strong
          institutional support, our ambition is to build a world-class investment platform focused
          on high-growth businesses at the intersection of India&rsquo;s economic expansion, energy
          transition, and industrial transformation.
        </PullQuote>

        <Attribution>
          Commenting on the investment,{" "}
          <strong>
            Mr Kazuya Yoneda, General Manager &ndash; Equity Investment Department, of Sumitomo
            Mitsui Trust Bank, said:
          </strong>
        </Attribution>
        <PullQuote>
          India is one of the world&rsquo;s most compelling long-term investment destinations. Our
          strategic investment reflects confidence in both the market and One Planet Partners&rsquo;
          proven track record, institutional approach, and differentiated ability to access and
          create value in India&rsquo;s private markets. We look forward to building a long-term
          partnership across asset classes.
        </PullQuote>

        <Attribution>
          <strong>
            <ArticleLink href="/leadership/bobby">Bobby Pauly</ArticleLink>, Founder and Managing
            Partner,
            <br />
            One Planet Partners, said:
          </strong>
        </Attribution>
        {/* Narrower measure, as in the design, so the quote doesn't end on an orphan. */}
        <PullQuote className="lg:max-w-222">
          Our partnership pairs SMTB&rsquo;s global scale, investment expertise and patient capital
          with our team&rsquo;s unique market access, thematic insights and business-building
          experience. By combining deep sector expertise, institutional discipline and active
          ownership, we aim to build the next generation of market-leading Indian businesses and
          create long-term value.
        </PullQuote>

        <Paragraph>
          One Planet Partners has already commenced capital deployment, with Bengaluru-based
          electric mobility company Yulu Bikes Private Limited marking the first investment by the
          platform. The investment was made as part of Yulu&rsquo;s US$93 million Series C funding
          round. Backed by strategic investors including Bajaj Auto and Magna International, Yulu is
          the market leader in the last-mile transportation and delivery, with its
          technology-enabled electric mobility solutions, and serves India&rsquo;s rapidly expanding
          quick-commerce, e-commerce and home-services ecosystems. The investment reflects One
          Planet Partners&rsquo; focus on commercially scalable businesses benefiting from
          structural growth opportunities, including electrification, efficient urban mobility and
          India&rsquo;s expanding digital economy.
        </Paragraph>

        <AboutBox title="About One Planet Partners">
          <p>
            One Planet Partners is an India-focused private equity firm investing in high-growth
            mid-market businesses benefiting from India&rsquo;s energy transition, new mobility and
            manufacturing expansion. Founded by seasoned investment professionals, the firm combines
            entrepreneurial agility with institutional rigour to help scale market-leading
            businesses through active ownership, operational expertise and long-term capital.
          </p>
          <p>
            <strong>
              <ArticleLink href="/">oneplanetpartners.com</ArticleLink>
            </strong>
          </p>
        </AboutBox>

        <MediaContact
          name="Husain Udaipurwala"
          email="husain.udaipurwala@edelman.com"
          phone="+91 8369493724"
        />
      </>
    ),
  },
];

export function getPressReleaseBySlug(slug: string) {
  return pressReleases.find((release) => release.slug === slug);
}

export function getPressReleaseTitle(release: PressRelease) {
  return release.titleLines.join(" ");
}
