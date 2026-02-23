const projects = [
  {
    slug: 'dodge-garage',
    title: 'Dodge Garage',
    tagline: 'Enterprise content platform for the Dodge enthusiast community.',
    description: 'The official digital hub for Dodge enthusiasts — a high-traffic content platform delivering news, racing coverage, events, vehicle experiences, and media across both U.S. and European markets. Built with Vue and Nuxt, powered by CrafterCMS, and scaled through a shared component library managed with Verdaccio.',
    tech: ['Vue.js', 'Nuxt.js', 'CrafterCMS', 'Verdaccio', 'JavaScript', 'SCSS', 'Java', 'Spring Boot', 'REST APIs', 'AWS'],
    liveUrl: 'https://www.dodgegarage.com',
    euUrl: 'https://www.dodgegarage.eu',
    color: 'coral',
    sections: [
      {
        heading: 'Overview',
        content: 'DodgeGarage is the official online destination for Dodge performance enthusiasts. The platform serves a rich content experience including daily news articles, NHRA racing coverage, event calendars, vehicle history timelines, interactive Drag Pak experiences, featured video series, social media integrations, and user account management. I have been the primary frontend developer maintaining and evolving this platform for over 7 years.',
      },
      {
        heading: 'Frontend Architecture',
        content: 'The frontend is built on Vue.js and Nuxt.js, delivering a server-rendered, SEO-optimized experience across hundreds of content-driven pages. The architecture supports dynamic routing for articles, events, vehicle pages, and multimedia content. Responsive design ensures a seamless experience from mobile to desktop, with performance optimizations for image-heavy editorial layouts and embedded video players.',
      },
      {
        heading: 'Content Management',
        content: 'All editorial content is managed through CrafterCMS, a headless CMS that empowers the content team to publish daily articles, manage event listings, and curate featured content independently. The frontend consumes CrafterCMS APIs to render structured content with full authoring flexibility — enabling rapid publishing workflows without developer intervention.',
      },
      {
        heading: 'Shared Component Library',
        content: 'A private npm registry powered by Verdaccio hosts a shared component library used across both DodgeGarage.com and DodgeGarage.eu. This architecture enables consistent UI patterns, shared business logic, and synchronized feature rollouts between the U.S. and European platforms while allowing region-specific customizations such as localized legal content, privacy controls, and social integrations.',
      },
      {
        heading: 'European Expansion',
        content: 'DodgeGarage.eu extends the platform to the European market, sharing the same core content pipeline and component library as the .com site. The EU variant includes region-specific adaptations including GDPR-compliant cookie management, localized privacy policies, European social channels (Dodge Europe on Facebook and Instagram), and content tailored for the EU Dodge audience.',
      },
    ],
  },
  {
    slug: 'student-dropout-risk-predictor',
    title: 'Student Dropout Risk Predictor',
    tagline: 'Machine learning model that identifies at-risk students before they drop out.',
    description: 'A full-stack application that uses a Random Forest classifier to predict student dropout risk based on demographic, socio-economic, and academic features. Built as a capstone project for CS 3120.',
    tech: ['Nuxt.js', 'Vue 3', 'Flask', 'Python', 'Scikit-learn', 'Pandas', 'SCSS', 'Bootstrap'],
    liveUrl: 'https://student-dropout-risk-predictor.netlify.app',
    repoUrl: 'https://github.com/Bphissles/student-dropout-risk-predictor',
    color: 'teal',
    sections: [
      {
        heading: 'Overview',
        content: 'Predict student dropout risk using a supervised Machine Learning model. The goal is to sort students into risk categories and present ranked results to help identify at-risk students early. The model uses a Random Forest classifier to capture non-linear feature interactions and predict outcomes — Dropout, Enrolled, or Graduate.',
      },
      {
        heading: 'How It Works',
        content: 'The application offers two modes: a single-student interactive form for individual assessment, and a batch CSV upload for processing large datasets efficiently with exportable results. The trained model analyzes 19 key features across demographic, socio-economic, macro-economic, and academic dimensions to generate predictions.',
      },
      {
        heading: 'Dataset',
        content: 'Trained on the UCI ML Repository "Predict Students Dropout and Academic Success" dataset — 4,424 rows with 36 features. The model was refined to use the 19 most impactful features for optimal prediction accuracy.',
      },
      {
        heading: 'Architecture',
        content: 'The frontend is built with Nuxt.js 3 (Vue 3) and styled with SCSS and Bootstrap. The backend is a Flask API serving predictions from a Scikit-learn Random Forest model. The frontend is deployed on Netlify and the backend on Render with Gunicorn.',
      },
    ],
  },
  {
    slug: 'marketing-ai-hub',
    title: 'Marketing AI Hub',
    tagline: 'AI-powered news aggregator delivering curated content to Discord.',
    description: 'Automated pipeline that aggregates AI news from 11 RSS sources, uses Google Gemini to filter and summarize relevant articles, then posts to Discord channels organized by marketing discipline. Runs daily and weekly via GitHub Actions — completely free to operate.',
    tech: ['Python', 'Google Gemini API', 'Discord Webhooks', 'GitHub Actions', 'feedparser', 'SQLite'],
    liveUrl: null,
    discordUrl: 'https://discord.gg/5xtrndnSr6',
    repoUrl: 'https://github.com/Bphissles/marketing-ai-hub',
    color: 'coral',
    sections: [
      {
        heading: 'Overview',
        content: 'Marketing AI Hub automatically aggregates AI news from 11 curated RSS sources, uses Google Gemini 2.0 Flash to filter and summarize the most relevant articles, then posts them to a Discord server organized by discipline — dev, design, strategy, and writing. It delivers a daily digest (Mon–Fri at 8am PT) with the top 5 articles and a weekly summary every Friday at 4pm PT.',
      },
      {
        heading: 'Gemini Integration',
        content: 'Each article is processed through Google Gemini 2.0 Flash for relevance scoring, summarization, and discipline classification. The AI generates concise summaries with a "why it matters" angle tailored for marketing professionals. Articles are filtered to exclude pure research, crypto crossovers, and hype — keeping the feed practical and actionable.',
      },
      {
        heading: 'Discord Architecture',
        content: 'The Discord server is structured with dedicated channels: #ai-daily-digest for the daily top picks, #ai-weekly-summary for weekly highlights, and discipline-specific channels (#ai-dev, #ai-design, #ai-strategy, #ai-writing) for categorized articles. Each post includes a headline, summary, marketing-specific angle, discipline tags, and a source link.',
      },
      {
        heading: 'Automation',
        content: 'The entire pipeline runs on GitHub Actions with zero infrastructure cost. A CLI interface supports individual steps (fetch, process, post) and a dry-run mode for testing. Duplicate detection prevents the same article from being posted across sources, and all state is persisted in JSON/SQLite.',
      },
    ],
  },
]

export default projects
