export interface AITool {
  id: string;
  name: string;
  description: string;
  category: string;
  rating: number;
  pricing: "Gratuit" | "Freemium" | "Plătit" | "Open Source";
  affiliateUrl: string;
  imageUrl: string;
  tags: string[];
  featured: boolean;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  featured: boolean;
}

export const categories = [
  { id: "ai-text", name: "Scriere AI", icon: "pencil", color: "#4f46e5" },
  { id: "ai-imagine", name: "Generare Imagini", icon: "image", color: "#7c3aed" },
  { id: "ai-video", name: "AI Video", icon: "video", color: "#2563eb" },
  { id: "ai-cod", name: "Programare AI", icon: "code", color: "#059669" },
  { id: "ai-audio", name: "AI Audio", icon: "music", color: "#d97706" },
  { id: "ai-productivitate", name: "Productivitate", icon: "zap", color: "#dc2626" },
  { id: "ai-cautare", name: "Căutare AI", icon: "search", color: "#0891b2" },
  { id: "ai-email", name: "Email Marketing", icon: "mail", color: "#7c2d12" },
];

export const featuredTools: AITool[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    description:
      "Cel mai popular chatbot AI din lume. ChatGPT generează text de înaltă calitate, răspunde la întrebări complexe, scrie cod și asistă în multiple domenii. Disponibil în versiune gratuită și premium cu funcții avansate.",
    category: "ai-text",
    rating: 4.8,
    pricing: "Freemium",
    affiliateUrl: "https://chat.openai.com",
    imageUrl: "/tools/chatgpt.png",
    tags: ["chatbot", "text", "cod", "gpt-4"],
    featured: true,
  },
  {
    id: "claude",
    name: "Claude",
    description:
      "Asistentul AI de la Anthropic cu performanțe excepționale. Claude excelează la analiză detaliată, scriere lungă și programare complexă, cu un context foarte extins de 200K tokens.",
    category: "ai-text",
    rating: 4.9,
    pricing: "Freemium",
    affiliateUrl: "https://claude.ai",
    imageUrl: "/tools/claude.png",
    tags: ["chatbot", "analiză", "cod", "context-extins"],
    featured: true,
  },
  {
    id: "midjourney",
    name: "Midjourney",
    description:
      "Generator de imagini AI premium cu calitate artistică remarcabilă. Midjourney creează artă digitală uluitoare din descrieri text, cu control detaliat și rezultate de calitate profesională.",
    category: "ai-imagine",
    rating: 4.7,
    pricing: "Plătit",
    affiliateUrl: "https://midjourney.com",
    imageUrl: "/tools/midjourney.png",
    tags: ["imagine", "artă", "design", "generator"],
    featured: true,
  },
  {
    id: "runway",
    name: "Runway ML",
    description:
      "Platformă completă de editare video cu inteligență artificială. Runway ML generează și editează clipuri video cu AI, oferind instrumente avansate pentru creatori de conținut.",
    category: "ai-video",
    rating: 4.6,
    pricing: "Freemium",
    affiliateUrl: "https://runwayml.com",
    imageUrl: "/tools/runway.png",
    tags: ["video", "editare", "generare", "efecte"],
    featured: true,
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description:
      "Asistent inteligent de programare direct în editorul tău favorit. GitHub Copilot sugerează cod completat, funcții și corectări în timp real, accelerând dezvoltarea.",
    category: "ai-cod",
    rating: 4.7,
    pricing: "Plătit",
    affiliateUrl: "https://github.com/features/copilot",
    imageUrl: "/tools/copilot.png",
    tags: ["cod", "programare", "IDE", "autocompletare"],
    featured: true,
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    description:
      "Sinteză vocală AI de calitate profesională cu voici naturale. ElevenLabs transformă textul în vorbire realistă în zeci de limbi, perfectă pentru podcasting și videouri.",
    category: "ai-audio",
    rating: 4.8,
    pricing: "Freemium",
    affiliateUrl: "https://elevenlabs.io",
    imageUrl: "/tools/elevenlabs.png",
    tags: ["voce", "audio", "text-to-speech", "narare"],
    featured: true,
  },
  {
    id: "jasper",
    name: "Jasper AI",
    description:
      "Platform de scriere AI pentru marketing și content. Jasper AI generează copy pentru publicități, email-uri și articole cu personalitate și adaptabilă la ton și stil.",
    category: "ai-text",
    rating: 4.6,
    pricing: "Plătit",
    affiliateUrl: "https://jasper.ai",
    imageUrl: "/tools/jasper.png",
    tags: ["scriere", "marketing", "copy", "content"],
    featured: true,
  },
  {
    id: "grammarly",
    name: "Grammarly",
    description:
      "Asistant inteligent de scriere și corectură pentru orice platformă. Grammarly verifică gramatică, stil și ton, oferind sugestii de îmbunătățire în timp real pentru texte mai bune.",
    category: "ai-text",
    rating: 4.7,
    pricing: "Freemium",
    affiliateUrl: "https://grammarly.com",
    imageUrl: "/tools/grammarly.png",
    tags: ["scriere", "corectură", "stil", "gramatică"],
    featured: true,
  },
  {
    id: "canva",
    name: "Canva AI",
    description:
      "Designer grafic AI cu mii de șabloane profesionale. Canva AI permite crearea de designuri, postări social media și materiale marketing fără experiență de design.",
    category: "ai-imagine",
    rating: 4.8,
    pricing: "Freemium",
    affiliateUrl: "https://canva.com",
    imageUrl: "/tools/canva.png",
    tags: ["design", "grafică", "template", "marketing"],
    featured: false,
  },
  {
    id: "pictory",
    name: "Pictory",
    description:
      "Transformă texte și articole în videoclipuri AI în minute. Pictory creează videoclipuri profesionale din scripturi, perfecte pentru social media și marketing video.",
    category: "ai-video",
    rating: 4.3,
    pricing: "Plătit",
    affiliateUrl: "https://pictory.ai",
    imageUrl: "/tools/pictory.png",
    tags: ["video", "social-media", "marketing", "generare"],
    featured: false,
  },
  {
    id: "synthesia",
    name: "Synthesia",
    description:
      "Creează videoclipuri cu avatar AI personalizat fără cameră video. Synthesia generează videoclipuri profesionale cu vorbitori AI în peste 120 limbi și dialecte.",
    category: "ai-video",
    rating: 4.5,
    pricing: "Plătit",
    affiliateUrl: "https://synthesia.io",
    imageUrl: "/tools/synthesia.png",
    tags: ["video", "avatar", "training", "explicativ"],
    featured: false,
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    description:
      "Asistent AI integrat în workspace-ul Notion pentru productivitate. Notion AI generează texte, rezume și tabele direct în Notion, îmbunătățind flux de lucru.",
    category: "ai-productivitate",
    rating: 4.6,
    pricing: "Freemium",
    affiliateUrl: "https://notion.so",
    imageUrl: "/tools/notion.png",
    tags: ["productivitate", "workspace", "note", "organizare"],
    featured: false,
  },
  {
    id: "copy-ai",
    name: "Copy.ai",
    description:
      "Generator de copy AI rapid și ușor de folosit pentru marketing. Copy.ai creează titluri, descrieri și copy-uri persuasive pentru publicități și email marketing.",
    category: "ai-text",
    rating: 4.3,
    pricing: "Freemium",
    affiliateUrl: "https://copy.ai",
    imageUrl: "/tools/copy-ai.png",
    tags: ["scriere", "marketing", "copy", "publicitate"],
    featured: false,
  },
  {
    id: "dalle-3",
    name: "DALL-E 3",
    description:
      "Generator de imagini AI OpenAI cu interpretare excelentă a textului. DALL-E 3 creează imagini detaliate și corecte din descrieri, cu control fin al compoziției.",
    category: "ai-imagine",
    rating: 4.5,
    pricing: "Plătit",
    affiliateUrl: "https://openai.com/dall-e-3",
    imageUrl: "/tools/dalle3.png",
    tags: ["imagine", "generare", "gpt-4", "creativ"],
    featured: false,
  },
  {
    id: "stable-diffusion",
    name: "Stable Diffusion",
    description:
      "Generator de imagini open-source și gratuit cu comunitate activă. Stable Diffusion poate rula local și oferă control total, fiind preferat de dezvoltatori și entuziaști.",
    category: "ai-imagine",
    rating: 4.4,
    pricing: "Open Source",
    affiliateUrl: "https://stability.ai",
    imageUrl: "/tools/stable-diffusion.png",
    tags: ["imagine", "open-source", "local", "gratuit"],
    featured: false,
  },
  {
    id: "cursor",
    name: "Cursor",
    description:
      "Editor de cod AI cu autocomplete și refactoring inteligent. Cursor accelerează programarea cu sugestii context-aware și abilitate de a rescrie cod complet.",
    category: "ai-cod",
    rating: 4.7,
    pricing: "Freemium",
    affiliateUrl: "https://cursor.sh",
    imageUrl: "/tools/cursor.png",
    tags: ["cod", "editor", "IDE", "refactoring"],
    featured: false,
  },
  {
    id: "perplexity",
    name: "Perplexity",
    description:
      "Motor de căutare AI cu răspunsuri surse-citate în timp real. Perplexity combină puterea AI cu informații actuale, oferind răspunsuri verificate și contextualizate.",
    category: "ai-cautare",
    rating: 4.5,
    pricing: "Freemium",
    affiliateUrl: "https://perplexity.ai",
    imageUrl: "/tools/perplexity.png",
    tags: ["căutare", "research", "informații", "surse"],
    featured: false,
  },
  {
    id: "gemini",
    name: "Gemini",
    description:
      "Asistentul AI multimodal de la Google cu integrare ecosistem. Gemini accesează Gmail, Drive și alte servicii Google, oferind productivitate în mediul Google.",
    category: "ai-productivitate",
    rating: 4.4,
    pricing: "Freemium",
    affiliateUrl: "https://gemini.google.com",
    imageUrl: "/tools/gemini.png",
    tags: ["asistent", "google", "multimodal", "integrare"],
    featured: false,
  },
  {
    id: "getresponse",
    name: "GetResponse AI",
    description:
      "Platform email marketing AI cu automatizare inteligentă. GetResponse AI generează campaign-uri, segmentează audiență și optimizează rata de conversie automat.",
    category: "ai-email",
    rating: 4.2,
    pricing: "Plătit",
    affiliateUrl: "https://getresponse.com",
    imageUrl: "/tools/getresponse.png",
    tags: ["email", "marketing", "automatizare", "CRM"],
    featured: false,
  },
  {
    id: "writesonic",
    name: "Writesonic",
    description:
      "Generator de conținut AI pentru SEO și marketing. Writesonic creează articole optimizate pentru Google, descrieri produse și copy-uri marketing de înaltă calitate.",
    category: "ai-text",
    rating: 4.4,
    pricing: "Freemium",
    affiliateUrl: "https://writesonic.com",
    imageUrl: "/tools/writesonic.png",
    tags: ["scriere", "SEO", "marketing", "conținut"],
    featured: false,
  },
];

export const latestArticles: Article[] = [
  {
    slug: "chatgpt-vs-claude-comparatie-2026",
    title: "ChatGPT vs Claude: Care este mai bun în 2026?",
    excerpt:
      "Comparație detaliată între cei doi giganți AI. Analizăm performanța, prețul, capacitățile și cazurile ideale de utilizare pentru fiecare tool.",
    category: "ai-text",
    date: "2026-02-06",
    readTime: "8 min",
    imageUrl: "/articles/chatgpt-vs-claude.png",
    featured: true,
  },
  {
    slug: "top-10-generatoare-imagini-ai",
    title: "Top 10 Generatoare de Imagini AI în 2026",
    excerpt:
      "De la Midjourney la DALL-E 3 și Stable Diffusion. Ghid complet cu exemple, prețuri și recomandări pentru fiecare nivel de skill.",
    category: "ai-imagine",
    date: "2026-02-05",
    readTime: "12 min",
    imageUrl: "/articles/top-generatoare.png",
    featured: true,
  },
  {
    slug: "cum-sa-folosesti-ai-productivitate",
    title: "Cum să folosești AI pentru productivitate maximă",
    excerpt:
      "10 instrumente AI care îți vor transforma modul de lucru. Ghid practic cu exemple reale și strategii de implementare.",
    category: "ai-productivitate",
    date: "2026-02-04",
    readTime: "10 min",
    imageUrl: "/articles/productivitate.png",
    featured: false,
  },
  {
    slug: "ghid-complet-github-copilot",
    title: "Ghid complet GitHub Copilot: Merită investiția?",
    excerpt:
      "Recenzie detaliată cu teste practice în limbaje multiple. Cât de bun este la programare reală vs. ce promite marketingul?",
    category: "ai-cod",
    date: "2026-02-03",
    readTime: "15 min",
    imageUrl: "/articles/copilot-review.png",
    featured: false,
  },
  {
    slug: "ai-pentru-content-creators",
    title: "AI pentru Content Creators: Instrumentele pe care trebuie să le cunoști",
    excerpt:
      "De la editare video la crearea de thumbnail-uri. Descoperă ce instrumente AI folosesc creatorii profesioniști.",
    category: "ai-video",
    date: "2026-02-02",
    readTime: "11 min",
    imageUrl: "/articles/content-creators.png",
    featured: false,
  },
  {
    slug: "gratuiti-vs-plati-care-alegi",
    title: "Instrumente AI Gratuite vs Plătite: Care sunt diferențele reale?",
    excerpt:
      "Analiză profundă a avantajelor și dezavantajelor versiunilor gratuite și premium din industria AI.",
    category: "ai-productivitate",
    date: "2026-02-01",
    readTime: "9 min",
    imageUrl: "/articles/gratuit-vs-platit.png",
    featured: false,
  },
  {
    slug: "ai-scriere-seo-ranked-google",
    title: "AI pentru SEO: Cum să Scrii Articole Ranked pe Google",
    excerpt:
      "Strategii, instrumente și best practices pentru a folosi AI în crearea de conținut optimizat pentru motoarele de căutare.",
    category: "ai-text",
    date: "2026-01-31",
    readTime: "13 min",
    imageUrl: "/articles/seo-ai.png",
    featured: false,
  },
  {
    slug: "ai-audio-voce-naturala",
    title: "Sinteză Vocală AI: Cum Sună Cuvintele Generate de Mașini",
    excerpt:
      "Explorare detaliată a tehnologiei text-to-speech moderne cu exemple audio și cazuri de utilizare în producție.",
    category: "ai-audio",
    date: "2026-01-30",
    readTime: "7 min",
    imageUrl: "/articles/tts-ai.png",
    featured: false,
  },
  {
    slug: "chatgpt-romana-ghid-complet",
    title: "ChatGPT în Română: Ghid Complet 2026 (+ Versiunea Gratuită)",
    excerpt:
      "Ghid complet ChatGPT în română: cum să-l foloşeşti, sfaturi practice, versiunea gratuită vs Plus şi alternative pentru utilizatorii din România.",
    category: "ai-text",
    date: "2026-02-06",
    readTime: "10 min",
    imageUrl: "/articles/chatgpt-romana.png",
    featured: true,
  },
  {
    slug: "cele-mai-bune-chatbot-uri-ai",
    title: "Top 10 Chatbot AI în 2026: Cele Mai Bune Alternative ChatGPT",
    excerpt:
      "Comparație detaliată între cele mai bune chatbot-uri AI: ChatGPT, Claude, Gemini, Perplexity şi altele. Prețuri, funcții şi recomandări.",
    category: "ai-text",
    date: "2026-02-05",
    readTime: "12 min",
    imageUrl: "/articles/chatbot-ai.png",
    featured: true,
  },
  {
    slug: "ai-detector-verificare-text",
    title: "AI Detector 2026: Top Instrumente de Verificare Text AI",
    excerpt:
      "Cele mai bune instrumente AI detector pentru verificarea textelor generate de AI. Comparație Originality.ai, GPTZero, Turnitin.",
    category: "ai-text",
    date: "2026-02-04",
    readTime: "9 min",
    imageUrl: "/articles/ai-detector.png",
    featured: false,
  },
  {
    slug: "ai-foto-editor-editare-imagini",
    title: "AI Foto Editor: Top 10 Instrumente de Editare Imagini cu AI (2026)",
    excerpt:
      "De la eliminarea fundalului la îmbunătățirea fotografiilor — cele mai bune instrumente AI foto editor comparate.",
    category: "ai-imagine",
    date: "2026-02-03",
    readTime: "11 min",
    imageUrl: "/articles/ai-foto-editor.png",
    featured: false,
  },
  {
    slug: "chatgpt-gratuit-ce-poti-face",
    title: "ChatGPT Gratuit: Ce Poți Face Fără să Plătești în 2026?",
    excerpt:
      "Tot ce poți face cu ChatGPT gratuit: funcții disponibile, limitări, trucuri pentru utilizare maximă și când merită să treci pe Plus.",
    category: "ai-text",
    date: "2026-02-08",
    readTime: "10 min",
    imageUrl: "/articles/chatgpt-gratuit.png",
    featured: false,
  },
  {
    slug: "inteligenta-artificiala-gratuita-instrumente",
    title: "Inteligență Artificială Gratuită: 15 Instrumente pe care să le Încerci în 2026",
    excerpt:
      "Cele mai bune instrumente de inteligență artificială gratuită: chatboți, generatoare de imagini, editoare video AI și mai mult.",
    category: "ai-productivitate",
    date: "2026-02-08",
    readTime: "8 min",
    imageUrl: "/articles/ai-gratuit.png",
    featured: true,
  },
  {
    slug: "aplicatii-inteligenta-artificiala-top-2026",
    title: "Top 20 Aplicații cu Inteligență Artificială în 2026: Ghid Complet",
    excerpt:
      "Cele mai bune aplicații cu inteligență artificială: pentru productivitate, creativitate, învățare și business.",
    category: "ai-productivitate",
    date: "2026-02-08",
    readTime: "12 min",
    imageUrl: "/articles/aplicatii-ai.png",
    featured: false,
  },
  {
    slug: "ai-muzica-generatoare-instrumente",
    title: "AI Muzică: Top 10 Generatoare de Muzică cu Inteligență Artificială (2026)",
    excerpt:
      "Cele mai bune generatoare de muzică AI: Suno, Udio, AIVA și altele. Creează melodii originale gratuit. Comparație completă.",
    category: "ai-audio",
    date: "2026-02-08",
    readTime: "9 min",
    imageUrl: "/articles/ai-muzica.png",
    featured: false,
  },
  {
    slug: "ai-prezentari-slide-uri-automate",
    title: "AI Prezentări: Cum să Faci Slide-uri Profesionale în Minute",
    excerpt:
      "Cele mai bune instrumente AI pentru prezentări: Gamma, Tome, Beautiful.ai. Creează slide-uri profesionale automat.",
    category: "ai-productivitate",
    date: "2026-02-08",
    readTime: "8 min",
    imageUrl: "/articles/ai-prezentari.png",
    featured: false,
  },
  {
    slug: "ai-pentru-studenti-ghid-complet",
    title: "AI pentru Studenți: Ghid Complet cu Instrumente Gratuite (2026)",
    excerpt:
      "Cele mai bune instrumente AI gratuite pentru studenți: pentru teme, proiecte, cercetare și învățare. Cu sfaturi practice și atenționări.",
    category: "ai-educatie",
    date: "2026-02-08",
    readTime: "10 min",
    imageUrl: "/articles/ai-studenti.png",
    featured: true,
  },
  {
    slug: "cele-mai-bune-instrumente-ai-2026",
    title: "Cele Mai Bune Instrumente AI în 2026: Top 25 Testate și Clasate",
    excerpt:
      "Top 25 cele mai bune instrumente AI testate și clasate: chatboți, imagini, video, muzică și productivitate. Cu prețuri și note.",
    category: "ai-productivitate",
    date: "2026-02-08",
    readTime: "14 min",
    imageUrl: "/articles/top-ai-2026.png",
    featured: true,
  },
  {
    slug: "ai-parafrazare-top-instrumente",
    title: "AI Parafrazare: Top 8 Instrumente de Reformulare Text (2026)",
    excerpt:
      "Cele mai bune instrumente AI de parafrazare: Quillbot, Wordtune, Grammarly. Reformulează texte instant. Comparație cu prețuri.",
    category: "ai-text",
    date: "2026-02-08",
    readTime: "9 min",
    imageUrl: "/articles/ai-parafrazare.png",
    featured: false,
  },
];
