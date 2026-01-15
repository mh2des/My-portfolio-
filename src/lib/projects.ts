import { Project } from "@/components/project-card";

export const projects: Project[] = [
    {
        slug: "learntube-ai",
        title: "LearnTube AI",
        description:
            "AI-powered learning platform that transforms YouTube videos into comprehensive study materials. Features AI transcription, smart summaries, auto-generated flashcards, interactive quizzes, and an AI tutor chat.",
        categories: ["AI & Deep Learning Systems", "Web Platform"],
        stack: ["Next.js", "TypeScript", "FastAPI", "Python", "Gemini 2.0", "Groq Whisper", "Tailwind CSS"],
        metrics: "Full-Stack AI",
        image: "/images/projects/learntube-ai/learntubeai.svg",
        githubUrl: "https://github.com/mh2des/Learntube-AI",
        featured: true,
    },
    {
        slug: "portfolio",
        title: "Developer Portfolio",
        description:
            "Modern, Awwwards-level developer portfolio with cutting-edge animations, Lenis smooth scroll, 3D parallax effects, and glassmorphism design. Built with Next.js 16 and Framer Motion.",
        categories: ["Web Platform"],
        stack: ["Next.js", "TypeScript", "Framer Motion", "Lenis", "Tailwind CSS", "GSAP"],
        metrics: "Premium Design",
        image: "/images/projects/portfolio/personal_photo.png",
        liveUrl: "https://me.qamoos.org",
        githubUrl: "https://github.com/mh2des/My-portfolio-",
        featured: true,
    },
    {
        slug: "qamoos",
        title: "Qamoos.org",
        description:
            "A comprehensive Arabic linguistic platform managing 189,000+ dictionary entries, 48 grammar books, and 36,000+ poetry verses. Implemented a 3-tier JSON loading strategy that reduced initial payload by 97%.",
        categories: ["Web Platform"],
        stack: ["JavaScript", "Flask", "Docker", "GCP Cloud Run", "PostgreSQL", "Cloudflare"],
        metrics: "97% faster",
        image: "/images/projects/qamoos/web_icon.png",
        gallery: [
            "/images/projects/qamoos/Screenshot 2026-01-05 191544.png",
            "/images/projects/qamoos/Screenshot 2026-01-05 191609.png",
        ],
        liveUrl: "https://qamoos.org",
        githubUrl: "https://github.com/mh2des/qamoos-comprehensive-arabic-resource-",
        featured: true,
    },
    {
        slug: "irab",
        title: "Irab - Arabic Grammar App",
        description:
            "AI-powered Arabic grammar app for grammatical parsing, lexicon analysis, and learning modules. Published on Google Play with 700+ downloads and 5-star rating in the first month.",
        categories: ["Mobile App", "AI & Deep Learning Systems"],
        stack: ["Flutter", "Firebase", "OCR", "Gemini API", "Groq"],
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
    },
    {
        slug: "sentiment-ai",
        title: "SentimentAI - NLP Analytics",
        description:
            "A stunning web application for analyzing customer sentiment in mobile phone reviews using advanced NLP and Machine Learning techniques. Compares iPhone 15 vs Galaxy S24 using multiple ML models.",
        categories: ["AI & Deep Learning Systems", "Web App"],
        stack: ["Python", "FastAPI", "Scikit-learn", "NLTK", "Gensim"],
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
    },
    {
        slug: "sermon-translation",
        title: "Real-Time Sermon Translation",
        description:
            "Real-time subtitle synchronization for live sermons with human-in-the-loop verification workflow. Optimized inference speed and multi-client WebSocket delivery.",
        categories: ["AI & Deep Learning Systems", "Web Platform"],
        stack: ["FastAPI", "Faster-Whisper", "WebSockets", "PostgreSQL"],
        metrics: "Real-time",
        image: "/images/projects/sermon-translation/Screenshot 2026-01-05 190326.png",
        gallery: [
            "/images/projects/sermon-translation/Screenshot 2026-01-05 190349.png",
            "/images/projects/sermon-translation/Screenshot 2026-01-05 190717.png",
            "/images/projects/sermon-translation/Screenshot 2026-01-05 190800.png",
        ],
        githubUrl: "https://github.com/mh2des/mosque-sermon-translation",
        featured: true,
    },
    {
        slug: "shifu",
        title: "Shifu - AI Recipe Generator",
        description:
            "Generative AI recipe assistant built in 10 days for Salam Hackathon 2025. Enter ingredients and get custom recipes with steps, nutrition info, and add-ons.",
        categories: ["Hackathon", "Mobile App"],
        stack: ["Flutter", "Flask", "Firebase", "OpenRouter AI"],
        metrics: "Hackathon Entry",
        image: "/images/projects/shifu/app_icon.jpg",
        gallery: [
            "/images/projects/shifu/1745567618539.jpg",
            "/images/projects/shifu/1745567619376.jpg",
            "/images/projects/shifu/1745567620362.jpg",
        ],
        githubUrl: "https://github.com/mh2des/Shifo_App",
        featured: true,
    },
    {
        slug: "wanderwise",
        title: "WanderWise - AI Travel Planner",
        description:
            "AI-powered travel planning app that generates personalized itineraries. Built for Salam Hackathon 2025 with beautiful UI and smart destination recommendations.",
        categories: ["Hackathon", "Web App"],
        stack: ["Flutter", "Firebase", "OpenAI API", "Material 3"],
        metrics: "Hackathon Entry",
        image: "/images/projects/wanderwise/cover.png",
        featured: true,
    },
    {
        slug: "flutter-store",
        title: "Flutter E-Commerce Store",
        description:
            "Full-featured e-commerce mobile application with Firebase authentication, Google Sign-In, and local data persistence. Modern shopping experience with Provider state management and Material Design.",
        categories: ["Mobile App"],
        stack: ["Flutter", "Firebase Auth", "Google Sign-In", "Provider", "Shared Preferences"],
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
    },
    {
        slug: "digit-recognition",
        title: "Handwritten Digit Recognition",
        description:
            "Custom digit recognition system (01–70 classes) using transfer learning and dataset-specific preprocessing. Achieved 82.86% accuracy using 35-patch ensemble voting.",
        categories: ["AI & Deep Learning Systems"],
        stack: ["TensorFlow", "MobileNetV2", "OpenCV", "CLAHE"],
        metrics: "82.86% accuracy",
        image: "/images/projects/digit-recognition/cover.png",
        githubUrl: "https://github.com/mh2des/handwritten-digit-recognition",
        featured: false,
    },
    {
        slug: "class-management",
        title: "Class Management System API",
        description:
            "Role-based education platform API with secure authentication, relational modeling, automated grading, and enrollment tracking.",
        categories: ["Backend API"],
        stack: ["Django 5", "DRF", "JWT", "PostgreSQL"],
        image: "/images/projects/class-management/cover.jpg",
        githubUrl: "https://github.com/mh2des/class-management-system",
        featured: false,
    },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}

export const categories = [
    "All",
    ...Array.from(new Set(projects.flatMap((p) => p.categories))),
];
