import { Project } from "@/components/project-card";

interface ProjectDetails extends Project {
    overview: string;
    problem: string;
    solution: string;
    impact: string;
    improvements: string;
    role: string;
    timeline?: string;
    gallery?: string[];
}

export const projectDetails: Record<string, ProjectDetails> = {
    qamoos: {
        slug: "qamoos",
        title: "Qamoos.org",
        description:
            "A comprehensive Arabic linguistic platform managing 189,000+ dictionary entries, 48 grammar books, and 36,000+ poetry verses.",
        categories: ["Web Platform"],
        stack: [
            "JavaScript",
            "Flask",
            "Docker",
            "GCP Cloud Run",
            "PostgreSQL",
            "Cloudflare Workers",
            "PWA",
        ],
        metrics: "97% faster",
        image: "/images/projects/qamoos/web_icon.png",
        gallery: [
            "/images/projects/qamoos/Screenshot 2026-01-05 191544.png",
            "/images/projects/qamoos/Screenshot 2026-01-05 191609.png",
        ],
        liveUrl: "https://qamoos.org",
        githubUrl: "https://github.com/mh2des/qamoos-comprehensive-arabic-resource-",
        featured: true,
        role: "Solo Developer",
        timeline: "2024 – Present",
        overview: `Qamoos.org is a comprehensive Arabic linguistic reference platform that combines traditional and modern dictionaries with a library of grammar books and Arabic poetry. The platform serves as a one-stop resource for Arabic language learners, researchers, and enthusiasts, offering instant access to over 189,000 dictionary entries and 330,000+ definitions from authoritative sources.`,
        problem: `Existing Arabic dictionary resources were fragmented across multiple websites, often slow to load, and lacked modern search capabilities. Users had to navigate between different sites for dictionaries, grammar references, and poetry—with no unified search experience. Many platforms also suffered from poor mobile experience and slow initial load times due to large data payloads.`,
        solution: `I built a unified platform that aggregates multiple Arabic dictionaries (القاموس المحيط، المعجم الوسيط، كتاب العين, and more) with a smart search system that prioritizes exact matches, then similar words, then root-based results.

Key technical decisions:
• **3-tier JSON loading strategy** - Load essential data first, defer secondary data, lazy-load tertiary content
• **PostgreSQL with FTS** - Full-text search with Arabic-specific tokenization
• **Cloudflare Workers** - Edge caching and CDN for global performance
• **PWA** - Installable app with offline capability for core features
• **Docker + GCP Cloud Run** - Containerized deployment with auto-scaling`,
        impact: `• **97% reduction** in initial data payload (from ~4MB to ~120KB)
• **189,042 dictionary entries** from 10+ authoritative sources
• **48 grammar books** fully searchable
• **36,000+ poetry verses** indexed and searchable
• **Sub-second search results** for most queries
• Featured on social media with organic sharing from Arabic language communities`,
        improvements: `• Add user accounts for bookmarking and history
• Implement AI-powered grammar analysis integration
• Add audio pronunciation using Azure Speech Services
• Build dedicated mobile apps (Flutter) for iOS and Android
• Add collaborative editing for community contributions`,
    },
    irab: {
        slug: "irab",
        title: "Irab",
        description:
            "AI-powered Arabic grammar app for grammatical parsing, lexicon analysis, and learning modules.",
        categories: ["Mobile App", "AI & Deep Learning Systems"],
        stack: ["Flutter", "Firebase", "OCR", "Gemini API", "Groq", "Material 3"],
        metrics: "700+ downloads",
        image: "/images/projects/irab/app_icon.png",
        gallery: [
            "/images/projects/irab/4.png",
            "/images/projects/irab/7.png",
            "/images/projects/irab/Asset 8 1.png",
        ],
        liveUrl: "https://play.google.com/store/apps/details?id=com.irabapp.arabic",
        githubUrl: "https://github.com/mh2des/irab-models",
        featured: true,
        role: "Solo Developer",
        timeline: "2024",
        overview: `Irab is a mobile application designed to help Arabic learners understand grammatical parsing (إعراب) through AI-powered analysis. Users can type or photograph Arabic text, and the app provides detailed grammatical breakdowns, lexicon definitions, and structured learning modules.`,
        problem: `Arabic grammatical parsing (إعراب) is one of the most challenging aspects of learning classical Arabic. Students often struggle to identify word functions, case endings, and grammatical relationships without expert guidance. Existing tools were either too academic or lacked the AI capability to provide instant, accurate analysis.`,
        solution: `I built a Flutter app that combines OCR text extraction with AI-powered grammatical analysis:

• **OCR Integration** - Capture Arabic text from images using device camera
• **AI Parsing** - Integration with Gemini API and Groq for grammatical analysis
• **Structured Learning** - Progressive modules from basic to advanced grammar
• **Offline Lexicon** - Local dictionary for instant word lookups
• **Firebase Backend** - Authentication, analytics, and crash reporting`,
        impact: `• **700+ downloads** in the first month on Google Play
• **5-star rating** during initial launch period
• Featured in Arabic language learning communities
• Organic growth through user recommendations
• Positive feedback on accuracy of grammatical analysis`,
        improvements: `• Add more comprehensive learning tracks
• Implement spaced repetition for vocabulary
• Add audio support for pronunciation
• Build iOS version
• Integrate with Qamoos.org for deeper dictionary lookups`,
    },
    "learntube-ai": {
        slug: "learntube-ai",
        title: "LearnTube AI",
        description:
            "AI-powered learning platform that transforms YouTube videos into comprehensive study materials with AI transcription, smart summaries, flashcards, quizzes, and AI tutor chat.",
        categories: ["AI & Deep Learning Systems", "Web Platform"],
        stack: [
            "Next.js 16",
            "TypeScript",
            "FastAPI",
            "Python",
            "Gemini 2.0 Flash",
            "Groq Whisper",
            "Tailwind CSS",
            "Zustand",
        ],
        metrics: "Full-Stack AI",
        image: "/images/projects/learntube-ai/learntubeai.svg",
        githubUrl: "https://github.com/mh2des/Learntube-AI",
        featured: true,
        role: "Solo Developer",
        timeline: "2025",
        overview: `LearnTube AI is a modern learning platform that transforms YouTube videos into interactive study materials using advanced AI. Paste any YouTube link and get instant access to transcripts, summaries, flashcards, quizzes, and an AI tutor - all from a single video.

The platform aims to make every YouTube video a comprehensive learning experience, helping students and self-learners extract maximum value from educational content.`,
        problem: `YouTube has become the world's largest educational resource, but watching videos passively is an inefficient way to learn. Students need to:
• Manually take notes while watching
• Create their own flashcards
• Find ways to test their understanding
• Re-watch entire videos to find specific information

Existing tools only solve one piece of the puzzle, requiring users to juggle multiple applications.`,
        solution: `I built an end-to-end learning platform with a modern tech stack:

• **AI Transcription** - Groq Whisper Large V3 Turbo with 99%+ accuracy across languages
• **Smart Summaries** - Gemini 2.0 Flash for key takeaways, chapter breakdowns, and TL;DR
• **Auto-Generated Flashcards** - Spaced repetition ready, exportable to Anki/CSV
• **Interactive Quizzes** - Multiple choice with instant feedback and explanations
• **AI Tutor Chat** - Ask questions about the video content, get detailed answers
• **Translation** - 25+ languages with context-aware translation

Built with Next.js 16 (App Router), FastAPI backend, and IndexedDB for offline storage.`,
        impact: `• **Full-Stack AI Platform** - End-to-end solution from video URL to study materials
• **99%+ Transcription Accuracy** - Using Groq's Whisper Large V3 Turbo
• **25+ Languages** - Translation support with technical term preservation
• **Offline Support** - IndexedDB storage for completed study materials
• **Modern Stack** - Next.js 16, Tailwind CSS 4, Zustand state management`,
        improvements: `• Add video annotation and timestamp bookmarking
• Implement collaborative study rooms
• Add progress tracking across multiple videos
• Build mobile apps for iOS and Android
• Integrate with LMS platforms (Canvas, Moodle)`,
    },
    portfolio: {
        slug: "portfolio",
        title: "Developer Portfolio",
        description:
            "Modern, Awwwards-level developer portfolio with cutting-edge animations, smooth scroll, 3D parallax effects, and glassmorphism design.",
        categories: ["Web Platform"],
        stack: [
            "Next.js 16",
            "TypeScript",
            "Framer Motion",
            "Lenis",
            "Tailwind CSS",
            "GSAP",
        ],
        metrics: "Premium Design",
        image: "/images/projects/portfolio/personal_photo.png",
        liveUrl: "https://me.qamoos.org",
        githubUrl: "https://github.com/mh2des/My-portfolio-",
        featured: true,
        role: "Designer & Developer",
        timeline: "2025",
        overview: `A personal developer portfolio website designed to showcase my projects, skills, and experience with an Awwwards-level aesthetic. The site features buttery-smooth animations, interactive elements, and a premium dark theme with glassmorphism effects.

Built as a living showcase of modern web development techniques and animation libraries.`,
        problem: `Most developer portfolios are either:
• Generic templates that don't stand out
• Overly complex and slow to load
• Missing the polish and attention to detail that makes a memorable impression

I needed a portfolio that would immediately communicate my design sensibility and technical capabilities while remaining performant and accessible.`,
        solution: `I designed and built a custom portfolio from scratch with premium touches:

• **Lenis Smooth Scroll** - Buttery-smooth momentum-based scrolling
• **Framer Motion** - Page transitions, reveal animations, and micro-interactions
• **3D Parallax Effects** - Mouse-reactive floating shapes and gradient orbs
• **Floating Particles** - Animated particles with glow effects
• **Tech Stack Marquee** - Infinite scrolling ticker for technologies
• **Enhanced Project Cards** - 3D tilt effect, animated gradient borders, shine animations
• **Glassmorphism Design** - Frosted glass effects with subtle blur and borders`,
        impact: `• **Premium Design** - Awwwards-level aesthetic and animation quality
• **Performance Optimized** - Fast load times despite complex animations
• **SEO Ready** - Proper metadata, semantic HTML, and sitemap
• **Fully Responsive** - Beautiful on all device sizes
• **Accessible** - Reduced motion support for users who prefer less animation`,
        improvements: `• Add dark/light theme toggle
• Implement blog section with MDX
• Add project filtering animations
• Create interactive 3D scene for hero section
• Add case study video walkthroughs`,
    },
    "sentiment-ai": {
        slug: "sentiment-ai",
        title: "SentimentAI - NLP Analytics",
        description:
            "A stunning web application for analyzing customer sentiment in mobile phone reviews using advanced NLP and Machine Learning techniques.",
        categories: ["AI & Deep Learning Systems", "Web App"],
        stack: ["Python", "FastAPI", "Scikit-learn", "NLTK", "Gensim", "JavaScript"],
        metrics: "Multi-Model NLP",
        image: "/images/projects/sentiment-ai/cover nlp.png",
        gallery: [
            "/images/projects/sentiment-ai/Screenshot 2026-01-13 235826.png",
            "/images/projects/sentiment-ai/Screenshot 2026-01-13 235842.png",
            "/images/projects/sentiment-ai/Screenshot 2026-01-13 235901.png",
        ],
        liveUrl: "https://nlp-project-sentimentai.vercel.app/",
        githubUrl: "https://github.com/mh2des/Sentiment-AI-NLP-",
        featured: true,
        role: "Lead Developer",
        timeline: "2024",
        overview: `SentimentAI is a modern web application designed to analyze and visualize customer sentiment from product reviews. It focuses on comparing flagship smartphones (iPhone 15 vs Galaxy S24) using a suite of Natural Language Processing (NLP) models. The application features a glassmorphism-inspired UI and provides detailed confidence scores for each prediction.`,
        problem: `Understanding customer sentiment from text reviews can be challenging due to sarcasm, nuance, and volume. Standard tools often lack clear visualization or rely on single, opaque models. There was a need for a transparent, multi-model approach to see how different algorithms interpret the same text.`,
        solution: `I developed a full-stack solution integrating multiple classical ML and NLP techniques:

• **Multi-Model Inference** - Compares results from TF-IDF + Logistic Regression, Word2Vec + SVM, and FastText + SVM
• **Interactive Visualization** - Displays confidence probability distributions for positive/negative sentiment
• **Real-time Analysis** - Instant feedback on typed text
• **Modern UI** - A responsive, glassmorphism design for an engaging user experience`,
        impact: `• **Transparent Analysis** - Users can see how different models agree or disagree
• **Educational Value** - Demonstrates the strengths and weaknesses of different NLP embedding techniques
• **Production Deployment** - Hosted on Vercel with a Python backend`,
        improvements: `• Add Transformer-based models (BERT/RoBERTa)
• Support for custom dataset uploads
• API endpoint for external developers
• Multi-language support`,
    },
    "sermon-translation": {
        slug: "sermon-translation",
        title: "Malay–English Sermon Translation",
        description:
            "Real-time subtitle synchronization for live sermons with human-in-the-loop verification workflow.",
        categories: ["AI & Deep Learning Systems", "Web Platform"],
        stack: [
            "FastAPI",
            "Faster-Whisper Large-V3",
            "WebSockets",
            "PostgreSQL",
            "Python",
        ],
        metrics: "Real-time",
        image: "/images/projects/sermon-translation/Screenshot 2026-01-05 190326.png",
        gallery: [
            "/images/projects/sermon-translation/Screenshot 2026-01-05 190349.png",
            "/images/projects/sermon-translation/Screenshot 2026-01-05 190717.png",
            "/images/projects/sermon-translation/Screenshot 2026-01-05 190800.png",
        ],
        githubUrl: "https://github.com/mh2des/mosque-sermon-translation",
        featured: true,
        role: "Lead Developer",
        timeline: "2025 (Final Year Project)",
        overview: `A real-time translation system that provides live Malay-to-English subtitles for mosque sermons. The system uses speech recognition, machine translation, and a human-in-the-loop verification workflow to ensure accuracy for religious content.`,
        problem: `Non-Malay speaking congregants at Malaysian mosques miss the content of Malay sermons. Automated translation alone is insufficient for religious content where accuracy is critical. The system needed to provide real-time subtitles while allowing human verification before display.`,
        solution: `I designed and implemented a multi-stage pipeline:

• **Speech Recognition** - Faster-Whisper Large-V3 for accurate Malay transcription
• **Translation** - Machine translation with domain-specific fine-tuning
• **Human Verification** - Admin interface for real-time correction before broadcast
• **Multi-client Delivery** - WebSocket-based distribution to multiple display endpoints
• **PostgreSQL** - Sermon archives with full-text search`,
        impact: `• **Real-time subtitle delivery** with <2 second latency
• **Multi-client support** for simultaneous display on multiple screens
• **Human-in-the-loop** ensures religious accuracy
• **Archived sermons** with searchable transcripts
• Successfully demonstrated in university mosque setting`,
        improvements: `• Add support for Arabic source sermons
• Implement speaker diarization for multi-speaker events
• Add mobile app for congregants to view on personal devices
• Integrate with mosque booking/management systems
• Deploy as SaaS for multiple mosques`,
    },
    "digit-recognition": {
        slug: "digit-recognition",
        title: "Handwritten Digit Recognition",
        description:
            "Custom digit recognition system using transfer learning and ensemble voting.",
        categories: ["AI & Deep Learning Systems"],
        stack: [
            "TensorFlow",
            "MobileNetV2",
            "OpenCV",
            "CLAHE",
            "Python",
            "NumPy",
        ],
        metrics: "82.86% accuracy",
        image: "/images/projects/digit-recognition/cover.png",
        githubUrl: "https://github.com/mh2des/handwritten-digit-recognition",
        featured: false,
        role: "Developer",
        timeline: "2024",
        overview: `A custom handwritten digit recognition system trained to classify 70 different digit classes (01-70) using transfer learning and dataset-specific preprocessing techniques.`,
        problem: `Standard digit recognition models (MNIST-based) only handle 0-9 digits. This project required recognizing 70 different two-digit number classes from handwritten samples, with limited training data and significant variation in writing styles.`,
        solution: `I implemented a multi-stage approach:

• **CLAHE Preprocessing** - Contrast-limited adaptive histogram equalization for consistent image quality
• **Transfer Learning** - MobileNetV2 backbone pre-trained on ImageNet, fine-tuned on custom dataset
• **Data Augmentation** - Rotation, scaling, and noise injection to increase effective training data
• **Ensemble Voting** - 35-patch extraction and voting for final prediction`,
        impact: `• **82.86% accuracy** on 70-class classification task
• **35-patch ensemble** improved robustness to writing variations
• Successfully deployed for automated form processing use case`,
        improvements: `• Collect more training data for underrepresented classes
• Experiment with attention mechanisms for better feature extraction
• Add confidence thresholds for human review of uncertain predictions
• Build real-time recognition API`,
    },
    "class-management": {
        slug: "class-management",
        title: "Class Management System API",
        description:
            "Role-based education platform API with secure authentication and relational modeling.",
        categories: ["Backend API"],
        stack: ["Django 5", "Django REST Framework", "JWT", "PostgreSQL"],
        image: "/images/projects/class-management/cover.jpg",
        githubUrl: "https://github.com/mh2des/class-management-system",
        featured: false,
        role: "Developer",
        timeline: "2024",
        overview: `A complete backend API for an education management platform, handling students, professors, courses, assignments, and grades with role-based access control.`,
        problem: `Educational institutions need secure, scalable systems for managing courses and student records. The API needed to handle complex relationships (students enrolled in multiple courses, assignments with submissions, automatic grade calculations) while maintaining strict access control.`,
        solution: `I built a comprehensive Django REST API:

• **RBAC** - Role-based access control for students, professors, and admins
• **JWT Authentication** - Secure token-based auth with refresh tokens
• **Relational Modeling** - PostgreSQL schema for courses, enrollments, assignments, submissions
• **Automated Grading** - Grade calculation and GPA tracking
• **API Documentation** - OpenAPI/Swagger documentation`,
        impact: `• Complete CRUD operations for all education entities
• Secure authentication with JWT tokens
• Automated enrollment tracking and grade calculation
• Full API documentation for frontend integration`,
        improvements: `• Add notification system for assignment deadlines
• Implement file upload for assignment submissions
• Add analytics dashboard for professor insights
• Build WebSocket support for real-time updates`,
    },
    shifu: {
        slug: "shifu",
        title: "Shifu",
        description:
            "Generative AI recipe assistant built in 10 days for hackathon.",
        categories: ["Hackathon", "Mobile App"],
        stack: ["Flutter", "Flask", "Firebase", "OpenRouter AI"],
        image: "/images/projects/shifu/app_icon.jpg",
        gallery: [
            "/images/projects/shifu/1745567618539.jpg",
            "/images/projects/shifu/1745567619376.jpg",
            "/images/projects/shifu/1745567620362.jpg",
        ],
        githubUrl: "https://github.com/mh2des/Shifo_App",
        featured: false,
        role: "Developer",
        timeline: "2024 (10 days)",
        overview: `Shifu is a mobile app that acts as a personal culinary expert and nutritionist. Enter available ingredients, and Shifu suggests custom recipes with step-by-step instructions, nutrition information, and add-on suggestions.`,
        problem: `People often have ingredients at home but lack recipe ideas. Existing recipe apps require searching through thousands of options. We wanted to build an AI assistant that generates personalized recipes based on what you have available.`,
        solution: `Built in 10 days for a hackathon:

• **Flutter Frontend** - Cross-platform mobile app with Material Design
• **Flask Backend** - API server handling AI requests
• **OpenRouter AI** - Recipe generation using large language models
• **Firebase** - User authentication and recipe history`,
        impact: `• Functional prototype delivered in 10-day timeline
• Demonstrated at hackathon presentation
• User-friendly interface for ingredient input and recipe display`,
        improvements: `• Add image recognition for ingredient detection
• Implement dietary restriction filters
• Add meal planning and grocery list features
• Deploy backend for public use`,
    },
    wanderwise: {
        slug: "wanderwise",
        title: "WanderWise - AI Travel Planner",
        description:
            "AI-powered travel planning app that generates personalized itineraries.",
        categories: ["Hackathon", "Mobile App"],
        stack: ["Flutter", "Firebase", "OpenAI API", "Material 3"],
        image: "/images/projects/wanderwise/cover.png",
        featured: true,
        role: "Lead Developer",
        timeline: "2025 (48 hours)",
        overview: `WanderWise is an intelligent travel companion built for the Salam Hackathon. It uses AI to generate personalized travel itineraries based on user preferences, budget, and travel style.`,
        problem: `Planning a trip can be overwhelming with endless options for hotels, flights, and activities. Travelers spend hours researching and often end up with generic plans that don't fit their personal style.`,
        solution: `I created an AI-powered app that acts as a personal travel agent:
        
• **Personalized Itineraries** - Generates day-by-day plans based on interests
• **Budget Optimization** - Suggests activities within specified budget constraints
• **Interactive Maps** - Visualizes the trip with integrated maps
• **Real-time Adjustments** - Allows users to modify plans on the fly`,
        impact: `• **Top 10 Finalist** at Salam Hackathon 2025
• **Working prototype** built in 48 hours
• **Seamless UI** with Material 3 design system`,
        improvements: `• Add booking integration for flights and hotels
• Implement social sharing features
• Add offline mode for travel use
• Expand AI model to include local hidden gems`,
    },
    "flutter-store": {
        slug: "flutter-store",
        title: "Flutter E-Commerce Store",
        description:
            "Full-featured e-commerce mobile application with Firebase authentication and Google Sign-In.",
        categories: ["Mobile App"],
        stack: [
            "Flutter",
            "Firebase Auth",
            "Google Sign-In",
            "Provider",
            "Shared Preferences",
            "Firebase Core",
        ],
        metrics: "Full App",
        image: "/images/projects/flutter-store/app_icon.png",
        gallery: [
            "/images/projects/flutter-store/1754015549786.jpg",
            "/images/projects/flutter-store/1754015549890.jpg",
            "/images/projects/flutter-store/1754015550565.jpg",
            "/images/projects/flutter-store/1754015551105.jpg",
            "/images/projects/flutter-store/1754015551122.jpg",
            "/images/projects/flutter-store/1754015551367.jpg",
        ],
        githubUrl: "https://github.com/mh2des/flutter_store_app",
        featured: false,
        role: "Developer",
        timeline: "2024",
        overview: `A complete e-commerce mobile application built with Flutter, featuring a modern, minimal design with abstract 3D geometry and a deep teal-blue accent color. The app offers a seamless shopping experience with secure authentication and persistent state.`,
        problem: `Building a cross-platform e-commerce app requires handling complex state management, secure user authentication, and efficient data persistence. The challenge was to create a production-ready template that feels premium and native on both iOS and Android.`,
        solution: `I implemented a robust architecture using Flutter's best practices:

• **State Management** - Provider pattern for efficient state handling
• **Authentication** - Firebase Auth with Google Sign-In integration
• **Persistence** - Shared Preferences for cart and user settings
• **Asset Management** - Optimized image loading and caching
• **Localization** - Multi-language support structure`,
        impact: `• **Production-ready** code structure
• **Cross-platform** support for iOS and Android
• **Secure authentication** flow with multiple providers
• **Responsive UI** adapting to different screen sizes`,
        improvements: `• Integrate Stripe for payment processing
• Add backend for dynamic product management
• Implement push notifications for order updates
• Add user reviews and ratings system`,
    },
};

export function getProjectDetails(slug: string): ProjectDetails | undefined {
    return projectDetails[slug];
}
