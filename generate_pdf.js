/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  @page {
    size: letter;
    margin: 10mm 15mm 10mm 15mm;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: "Times New Roman", Times, Georgia, serif;
    font-size: 10pt;
    line-height: 1.28;
    color: #000;
    background: #fff;
  }
  a {
    color: #000;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  .header {
    text-align: center;
    margin-bottom: 6px;
  }
  .name {
    font-size: 17pt;
    font-weight: bold;
    letter-spacing: 0.8px;
    margin-bottom: 3px;
  }
  .contact-info {
    font-size: 8.8pt;
    line-height: 1.35;
    color: #111;
  }
  .section {
    margin-top: 6px;
    margin-bottom: 2px;
  }
  .section-title {
    font-size: 9.8pt;
    font-weight: bold;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    border-bottom: 1px solid #111;
    padding-bottom: 1px;
    margin-bottom: 3px;
  }
  .entry-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 9.3pt;
  }
  .entry-title {
    font-weight: bold;
  }
  .entry-subtitle {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 9pt;
    margin-bottom: 1.5px;
  }
  .entry-location, .entry-date {
    font-style: normal;
    text-align: right;
    white-space: nowrap;
    font-size: 9pt;
  }
  ul {
    margin-left: 15px;
    margin-bottom: 2px;
  }
  li {
    font-size: 8.8pt;
    line-height: 1.25;
    margin-bottom: 1.5px;
    text-align: justify;
  }
  .skills-list p {
    font-size: 8.8pt;
    line-height: 1.3;
    margin-bottom: 1.5px;
    text-align: justify;
  }
  .skills-list strong {
    font-weight: bold;
  }
  .achievements-text {
    font-size: 8.8pt;
    line-height: 1.3;
  }
</style>
</head>
<body>

<div class="header">
  <div class="name">SAMRIDDHI TRIPATHI</div>
  <div class="contact-info">
    <a href="mailto:samriddhitripathi26@gmail.com">samriddhitripathi26@gmail.com</a> | 
    <a href="https://linkedin.com/in/samriddhi-tripathi">linkedin.com/in/samriddhi-tripathi</a> | 
    <a href="https://github.com/samriddhitripathi26">github.com/samriddhitripathi26</a><br>
    <a href="https://samriddhi-tripathi.vercel.app">portfolio</a> | 
    <a href="https://leetcode.com/u/samriddhi23BCE10140">leetcode.com/u/samriddhi23BCE10140</a> | 
    +91-9650800775
  </div>
</div>

<div class="section">
  <div class="section-title">EDUCATION</div>
  <div class="entry-header">
    <span class="entry-title">Vellore Institute of Technology</span>
  </div>
  <div class="entry-subtitle">
    <span>B.Tech in Computer Science &nbsp;|&nbsp; CGPA: 8.80</span>
    <span class="entry-date">Aug 2023 – May 2027</span>
  </div>
  <div class="entry-header" style="margin-top: 1.5px;">
    <span class="entry-title">Queen Mary’s School, Tis Hazari</span>
  </div>
  <div class="entry-subtitle">
    <span>Class XII: 93.4% &nbsp;|&nbsp; Class X: 94.2%</span>
    <span class="entry-date">May 2023 & May 2021</span>
  </div>
</div>

<div class="section">
  <div class="section-title">TECHNICAL SKILLS</div>
  <div class="skills-list">
    <p>• <strong>Languages:</strong> C++, JavaScript, TypeScript, SQL</p>
    <p>• <strong>Web Technologies:</strong> React.js, Tailwind CSS, Next.js, Monaco Editor, Node.js, Express.js, REST APIs, JWT, bcrypt</p>
    <p>• <strong>Databases:</strong> MongoDB, MySQL, Redis</p>
    <p>• <strong>AI &amp; Cloud:</strong> LLM API Integration, Prompt Engineering, Vercel, Render, CI/CD, AWS (EC2, IAM, S3, VPC, Cloudfront , CloudFormation, API Gateway, RDS, CloudWatch, ELB, DynamoDB)</p>
    <p>• <strong>Tools &amp; Fundamentals:</strong> Postman, VS Code, Git, GitHub, DSA, DBMS, OOPs, OS, CN</p>
  </div>
</div>

<div class="section">
  <div class="section-title">WORK EXPERIENCE</div>
  <div class="entry-header">
    <span class="entry-title">Victorious Infotech Pvt. Ltd.</span>
    <span class="entry-location">Noida, Uttar Pradesh</span>
  </div>
  <div class="entry-subtitle">
    <span style="font-weight: bold; font-style: italic;">Software Development Engineer (SDE) Intern</span>
    <span class="entry-date" style="font-style: italic;">Apr 2026 – Jun 2026</span>
  </div>
  <ul>
    <li>Engineered full-stack web features using React.js, Node.js, and Express.js, improving page speed by 30% and reducing server latency by 20%.</li>
    <li>Architected scalable RESTful APIs handling 1,000+ daily requests with 99.9% uptime, ensuring reliable communication between services.</li>
    <li>Established Jest unit tests (85% coverage), maintained GitHub Actions CI/CD pipelines, and delivered 3 sprint features on schedule within Agile workflows.</li>
  </ul>
</div>

<div class="section">
  <div class="section-title">PROJECTS</div>
  
  <div class="entry-header">
    <span><strong>TestPilot AI</strong> | <a href="https://github.com/samriddhitripathi26/TestPilot-AI.git" style="text-decoration: underline;">Link</a></span>
    <span class="entry-date" style="font-style: italic;">January 2026 – March 2026</span>
  </div>
  <div style="font-size: 8.8pt; font-style: italic; margin-bottom: 1.5px;">
    React, Node.js, MongoDB, Gemini API, Monaco Editor, BullMQ, JWT
  </div>
  <ul>
    <li>Architected a full-stack MERN application that generates AI-powered unit tests (Jest, Mocha, PyTest, JUnit) with edge-case coverage, secured with JWT authentication, and built a scope-based output validation pipeline with auto-regeneration that cut invalid test cases by 85% across 500+ generations.</li>
    <li>Implemented a BullMQ background job queue with per-user rate limiting (10 generations/hour) and exponential-backoff retries, enabling reliable concurrent request handling without API rate limit violations.</li>
  </ul>

  <div class="entry-header" style="margin-top: 3px;">
    <span><strong>Flagify</strong> | <a href="https://github.com/samriddhitripathi26/Flagify" style="text-decoration: underline;">Link</a></span>
    <span class="entry-date" style="font-style: italic;">Jan 2026 – Mar 2026</span>
  </div>
  <div style="font-size: 8.8pt; font-style: italic; margin-bottom: 1.5px;">
    TypeScript, Next.js, React, Node.js, Express, MongoDB, Redis
  </div>
  <ul>
    <li>Engineered a feature flag platform using Node.js, Express, and MongoDB for real-time toggling of 500+ flags across 3 microservices, reducing rollout time by 40%, with Python and JavaScript REST SDKs.</li>
    <li>Integrated Redis caching for sub-50 ms API responses (60% latency reduction, 200+ concurrent evaluations), and added Jest tests (85% coverage) and Docker containerization for consistent deployments.</li>
  </ul>

  <div class="entry-header" style="margin-top: 3px;">
    <span><strong>RepoSphere</strong> | <a href="https://github.com/samriddhitripathi26/RepoSphere" style="text-decoration: underline;">Link</a></span>
    <span class="entry-date" style="font-style: italic;">Jan 2025 – Mar 2025</span>
  </div>
  <div style="font-size: 8.8pt; font-style: italic; margin-bottom: 1.5px;">
    React, TypeScript, Node.js, REST API, OAuth
  </div>
  <ul>
    <li>Built a GitHub analytics dashboard with React, TypeScript, and REST APIs, processing 10,000+ commits across 500+ repositories with interactive visualizations.</li>
    <li>Implemented OAuth Device Flow authentication with server-side token storage and automatic refresh, securing 200+ user sessions, and streamlined GitHub Actions CI/CD pipelines to cut deployment errors by 70%.</li>
  </ul>
</div>

<div class="section">
  <div class="section-title">ACHIEVEMENTS</div>
  <p class="achievements-text">
    Participated in 8+ hackathons across India, Global Finalist – NASSCOM Hackathon 2025 (1000+ teams), 3rd Place- SolVIT Hackathon 2025 (150+ teams)
  </p>
</div>

<div class="section">
  <div class="section-title">EXTRA-CURRICULAR ACTIVITIES</div>
  <div class="entry-header">
    <span><strong>Android Club</strong> | Social Media Manager</span>
  </div>
  <ul>
    <li>Managed social media presence across platforms, increasing follower engagement by 35% and reach by 50%.</li>
    <li>Coordinated outreach for 5+ tech events, resulting in 200+ student registrations per event.</li>
  </ul>

  <div class="entry-header" style="margin-top: 1.5px;">
    <span><strong>Google Developers Group (GDG)</strong> | Events Team Member</span>
  </div>
  <ul>
    <li>Organised 8+ technical workshops and hackathons with 150+ average attendance, ensuring smooth on-ground execution.</li>
    <li>Collaborated with speakers and sponsors, handling logistics and post-event feedback collection.</li>
  </ul>
</div>

</body>
</html>
`;

const htmlPath = path.join(__dirname, 'resume_render.html');
const pdfPath = path.join(__dirname, 'public', 'SAMRIDDHI_TRIPATHI_RESUME.pdf');

fs.writeFileSync(htmlPath, htmlContent);

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const browserExe = fs.existsSync(chromePath) ? chromePath : edgePath;

const cmd = `"${browserExe}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${pdfPath}" "${htmlPath}"`;
console.log('Running:', cmd);
execSync(cmd);
console.log('Successfully generated PDF at:', pdfPath);
