import React from "react";
import useIsMobile from "../hooks/useIsMobile";

export default function JavaSeleniumBeginnerIntroPage() {
  const isMobile = useIsMobile();

  const outerWrapperStyle = {
    minHeight: "100vh",
    padding: isMobile ? "16px" : "32px 0",
    background:
      "linear-gradient(180deg, #0077b6 0%, #0096c7 40%, #48cae4 100%)",
    boxSizing: "border-box",
  };

  const innerCardStyle = {
    maxWidth: isMobile ? "96%" : "900px",
    margin: "0 auto",
    backgroundColor: "rgba(255, 255, 255, 0.96)",
    borderRadius: "12px",
    padding: isMobile ? "16px" : "28px 32px 32px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.18)",
    boxSizing: "border-box",
  };

  const mainTitleStyle = {
    fontSize: isMobile ? "18px" : "22px",
    fontWeight: 700,
    marginBottom: "6px",
  };

  const subTitleStyle = {
    fontSize: isMobile ? "14px" : "16px",
    fontWeight: 600,
    margin: "12px 0 6px",
  };

  const paragraphStyle = {
    fontSize: isMobile ? "13px" : "14px",
    lineHeight: 1.7,
    marginBottom: "10px",
    color: "#333",
  };

  const bulletListStyle = {
    paddingLeft: "20px",
    marginTop: "4px",
    marginBottom: "10px",
    fontSize: isMobile ? "13px" : "14px",
    color: "#333",
  };

  const linkStyle = {
    color: "#005f99",
    textDecoration: "underline",
  };

  const sectionDividerStyle = {
    borderTop: "1px solid #e4e4e4",
    margin: "16px 0",
  };

  return (
    <div style={outerWrapperStyle}>
      <div style={innerCardStyle}>
        <h1 style={mainTitleStyle}>
          Kevin’s Core Java Selenium / Playwright – Beginner Level
        </h1>
        <p style={paragraphStyle}>
          This site documents my beginner–level practice environment for{" "}
          <strong>Java Selenium</strong> and <strong>Java Playwright</strong>,
          designed from a Business Tester’s perspective.
        </p>

        <h2 style={subTitleStyle}>Background &amp; Professional Focus</h2>
        <p style={paragraphStyle}>
          I work as a <strong>Business Tester</strong> with hands-on experience
          across both <strong>SIT (System Integration Testing)</strong> and{" "}
          <strong>UAT (User Acceptance Testing)</strong>. Over the years I’ve
          built domain knowledge in{" "}
          <strong>
            KYC, transaction screening, name screening / CDD scoring, retail
            banking, private banking and investment banking
          </strong>
          . While this business expertise is a core strength, modern QA roles
          increasingly require a mix of{" "}
          <strong>domain knowledge and technical automation skills</strong>.
        </p>

        <p style={paragraphStyle}>
          This realisation motivated me to upskill into <strong>Java</strong>,
          followed by <strong>Java Selenium and Java Playwright</strong>, so
          that I can grow into a more complete and future-ready tester.
        </p>

        <h2 style={subTitleStyle}>
          Tools, Setup &amp; How the Learning Started
        </h2>
        <p style={paragraphStyle}>
          I originally started this journey on a gaming laptop, assuming that
          powerful graphics hardware would automatically be good for coding. In
          practice, I realised that automation work values{" "}
          <strong>stability, thermals and consistency</strong> more than raw
          gaming performance.
        </p>
        <p style={paragraphStyle}>
          Eventually I switched to a business laptop which, despite being{" "}
          <strong>cheaper</strong>, gave me a smoother, quieter and more
          reliable development experience. That change helped stabilise my
          workflow and gave me the push to organise my{" "}
          <strong>learning materials and practice sites more cleanly</strong>.
        </p>

        <div style={sectionDividerStyle} />

        <h2 style={subTitleStyle}>Objective &amp; Goals of This Website</h2>
        <p style={paragraphStyle}>
          On my earlier practice site{" "}
          <a
            href="https://lavenzo.github.io/javaseleniumlearning/"
            target="_blank"
            rel="noreferrer"
            style={linkStyle}
          >
            https://lavenzo.github.io/javaseleniumlearning/
          </a>
          , I focused mainly on the{" "}
          <strong>prerequisite Java foundations</strong> – core syntax, OOP,
          collections and bridging content leading up to Selenium / Playwright.
        </p>
        <p style={paragraphStyle}>
          After some unexpected hardware issues and a migration to the new
          laptop, it became clear that I needed to{" "}
          <strong>split my learning into focused tracks</strong> so each site
          has a clear purpose and a smoother progression for anyone using it.
        </p>
        <p style={paragraphStyle}>
          This new website is designed as a dedicated{" "}
          <strong>practice playground</strong> for:
        </p>
        <ul style={bulletListStyle}>
          <li>Beginner–level Java Selenium hands-on learning</li>
          <li>Beginner–level Java Playwright hands-on learning</li>
          <li>
            Practising complex web interactions (dropdowns, alerts, iframes,
            drag-and-drop, uploads, Actions class, etc.)
          </li>
          <li>
            Step-by-step challenge-based tasks that mirror real project
            automation scenarios
          </li>
        </ul>

        <p style={paragraphStyle}>
          The goal is to provide a safe, realistic environment where testers –
          especially those from a{" "}
          <strong>business testing / manual testing background</strong> – can
          steadily build confidence using automation tools.
        </p>

        <div style={sectionDividerStyle} />

        <h2 style={subTitleStyle}>Long-Term Direction</h2>
        <p style={paragraphStyle}>
          This site is part of my broader commitment to:
        </p>
        <ul style={bulletListStyle}>
          <li>
            Combine <strong>business testing expertise</strong> with{" "}
            <strong>technical automation skills</strong>
          </li>
          <li>
            Use real project workflows to shape practical, realistic challenges
          </li>
          <li>
            Demonstrate continuous learning, adaptability and applied
            problem-solving
          </li>
        </ul>

        <p style={paragraphStyle}>
          Over time, I’ll gradually add more{" "}
          <strong>modules, challenges and recordings</strong>, so this platform
          grows together with my own Selenium / Playwright journey.
        </p>
      </div>
    </div>
  );
}
