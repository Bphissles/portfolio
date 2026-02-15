const projects = [
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
