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
  logoUrl?: string;
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
  logoUrl?: string;
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
  {
    slug: "ai-marketing-strategii-instrumente",
    title: "AI Marketing: Strategii și Instrumente care Chiar Funcționează (2026)",
    excerpt:
      "Cele mai bune instrumente AI pentru marketing: strategii testate pentru SEO, social media, email și ads.",
    category: "ai-marketing",
    date: "2026-02-08",
    readTime: "10 min",
    imageUrl: "/articles/ai-marketing.png",
    featured: false,
  },
  {
    slug: "ai-traducere-top-instrumente-2026",
    title: "AI Traducere: Top 10 Instrumente de Traducere Automată în 2026",
    excerpt:
      "Cele mai bune instrumente AI de traducere: DeepL, Google Translate, ChatGPT. Comparație cu teste în limba română.",
    category: "ai-text",
    date: "2026-02-08",
    readTime: "9 min",
    imageUrl: "/articles/ai-traducere.png",
    featured: false,
  },
  {
    slug: "ai-rezumate-sumarizare-automata",
    title: "AI Rezumate: Cele Mai Bune Instrumente de Sumarizare Automată (2026)",
    excerpt:
      "Top instrumente AI pentru rezumate: pentru articole, PDF-uri, cărți și întâlniri. Ghid complet cu teste și prețuri.",
    category: "ai-text",
    date: "2026-02-08",
    readTime: "8 min",
    imageUrl: "/articles/ai-rezumate.png",
    featured: false,
  },
  {
    slug: "ai-chatbot-business-ghid-implementare",
    title: "AI Chatbot pentru Business: Ghid Complet de Implementare (2026)",
    excerpt:
      "Cum să implementezi un chatbot AI pentru afacerea ta: platforme, costuri și pași practici pentru IMM-uri din România.",
    category: "ai-business",
    date: "2026-02-08",
    readTime: "10 min",
    imageUrl: "/articles/ai-chatbot.png",
    featured: false,
  },
  {
    slug: "ai-scris-articole-generare-continut",
    title: "AI Scris Articole: Cum să Generezi Conținut de Calitate în 2026",
    excerpt:
      "Cum să scrii articole cu AI: instrumente, strategii și flux de lucru practic. Ghid pentru bloggeri și marketeri.",
    category: "ai-text",
    date: "2026-02-08",
    readTime: "10 min",
    imageUrl: "/articles/ai-scris.png",
    featured: false,
  },
  {
    slug: "cum-functioneaza-inteligenta-artificiala",
    title: "Cum Funcționează Inteligența Artificială? Explicat Pe Înțelesul Tuturor",
    excerpt:
      "Cum funcționează AI-ul: rețele neuronale, machine learning și GPT explicat simplu, fără jargon, cu exemple din viața reală.",
    category: "ai-educatie",
    date: "2026-02-08",
    readTime: "12 min",
    imageUrl: "/articles/cum-functioneaza-ai.png",
    featured: true,
  },
  {
    slug: "ai-video-generator-creare-clipuri",
    title: "AI Video Generator: Creează Clipuri Video din Text în 2026",
    excerpt:
      "Am testat toate generatoarele video AI: Runway, Sora, Kling, HeyGen. Teste reale, nu demo-uri — iată verdictul.",
    category: "ai-video",
    date: "2026-02-08",
    readTime: "10 min",
    imageUrl: "/articles/ai-video.png",
    featured: false,
  },
  {
    slug: "ai-programare-asistent-cod-2026",
    title: "AI Programare: Cele Mai Bune Instrumente de Asistare Cod în 2026",
    excerpt:
      "GitHub Copilot, Cursor, Claude Code: teste reale pe proiecte reale. Ce funcționează și ce e doar hype.",
    category: "ai-cod",
    date: "2026-02-08",
    readTime: "10 min",
    imageUrl: "/articles/ai-programare.png",
    featured: false,
  },
  {
    slug: "ai-voce-sinteza-vocala-clonare",
    title: "AI Voce: Sinteză Vocală și Clonare — Ce E Posibil în 2026",
    excerpt:
      "Am clonat o voce în 30 de secunde cu ElevenLabs. Teste, prețuri și implicațiile etice ale sintezei vocale AI.",
    category: "ai-audio",
    date: "2026-02-08",
    readTime: "9 min",
    imageUrl: "/articles/ai-voce.png",
    featured: false,
  },
  {
    slug: "openai-vs-anthropic-doua-viziuni-ai",
    title: "OpenAI vs Anthropic: Două Viziuni pentru Viitorul Inteligenței Artificiale",
    excerpt:
      "Analiză editorială: filozofii diferite, produse diferite, viziuni opuse. Ce înseamnă pentru tine ca utilizator.",
    category: "ai-opinie",
    date: "2026-02-08",
    readTime: "12 min",
    imageUrl: "/articles/openai-vs-anthropic.png",
    featured: true,
  },
  {
    slug: "ai-design-grafic-instrumente-vizuale",
    title: "AI Design Grafic: 10 Instrumente care Schimbă Regulile Jocului (2026)",
    excerpt:
      "Am încercat să înlocuim un designer cu AI. N-a mers complet — dar aproape. Teste reale cu Canva AI, Firefly, Figma.",
    category: "ai-imagine",
    date: "2026-02-08",
    readTime: "10 min",
    imageUrl: "/articles/ai-design.png",
    featured: false,
  },
  {
    slug: "ai-excel-formule-analiza-automata",
    title: "AI Excel: Formule, Analiză și Automatizare cu Inteligență Artificială",
    excerpt:
      "Cum am înlocuit 3 ore de VLOOKUP cu 10 secunde. Copilot, Gemini, ChatGPT pentru spreadsheet-uri.",
    category: "ai-productivitate",
    date: "2026-02-08",
    readTime: "9 min",
    imageUrl: "/articles/ai-excel.png",
    featured: false,
  },
  {
    slug: "ai-email-scrie-emailuri-rapid",
    title: "AI Email: Scrie Emailuri Profesionale în Secunde (2026)",
    excerpt:
      "Am lăsat AI-ul să răspundă la 50 de emailuri de business. Nimeni nu a observat diferența.",
    category: "ai-productivitate",
    date: "2026-02-08",
    readTime: "9 min",
    imageUrl: "/articles/ai-email.png",
    featured: false,
  },
  {
    slug: "ai-logo-generator-creare-logo",
    title: "AI Logo Generator: Merită sau E Doar O Iluzie? (Test Sincer 2026)",
    excerpt:
      "Am generat 50 de logo-uri cu AI. Câte am folosit? Două. Test brutal de sincer al generatoarelor de logo.",
    category: "ai-imagine",
    date: "2026-02-08",
    readTime: "8 min",
    imageUrl: "/articles/ai-logo.png",
    featured: false,
  },
  {
    slug: "prompt-engineering-ghid-complet-romana",
    title: "Prompt Engineering: Ghid Complet în Română (2026)",
    excerpt:
      "Arta de a pune întrebări bune unui AI: 5 principii, tehnici avansate, template-uri și greșeli de evitat.",
    category: "ai-educatie",
    date: "2026-02-08",
    readTime: "11 min",
    imageUrl: "/articles/prompt-engineering.png",
    featured: true,
  },
  {
    slug: "ai-detector-text-verificare-continut",
    title: "AI Detector Text: Cum Verifici dacă Un Text E Scris de AI (2026)",
    excerpt:
      "Am testat 6 detectoare AI pe 20 de texte. Rezultatele ne-au surprins. Niciun instrument nu e infailibil.",
    category: "ai-text",
    date: "2026-02-08",
    readTime: "9 min",
    imageUrl: "/articles/ai-detector.png",
    featured: false,
  },
  {
    slug: "ai-automatizare-workflow-fara-cod",
    title: "AI Automatizare: Creează Workflow-uri Inteligente Fără Cod (2026)",
    excerpt:
      "Cum am eliminat 15 ore de muncă repetitivă pe săptămână cu Zapier AI, Make și n8n.",
    category: "ai-productivitate",
    date: "2026-02-08",
    readTime: "9 min",
    imageUrl: "/articles/ai-automatizare.png",
    featured: false,
  },
  {
    slug: "ai-fotografie-editare-imbunatatire",
    title: "AI Fotografie: Editare și Îmbunătățire Automată (2026)",
    excerpt:
      "Am dat 10 poze proaste la 7 instrumente AI. Câteva au făcut magie. Teste reale pe fotografii reale.",
    category: "ai-imagine",
    date: "2026-02-08",
    readTime: "9 min",
    imageUrl: "/articles/ai-fotografie.png",
    featured: false,
  },
  {
    slug: "ai-invatare-limbi-straine-aplicatii",
    title: "AI Învățare Limbi Străine: Cele Mai Bune Aplicații în 2026",
    excerpt:
      "Am studiat spaniolă 30 de zile exclusiv cu AI. Iată ce instrumente au funcționat și ce am învățat.",
    category: "ai-educatie",
    date: "2026-02-08",
    readTime: "10 min",
    imageUrl: "/articles/ai-limbi.png",
    featured: false,
  },
  {
    slug: "ai-business-plan-antreprenori",
    title: "AI Business Plan: Strategii pentru Antreprenori (2026)",
    excerpt:
      "Cum să construiești un business plan solid cu AI în 2-3 zile. Ghid practic pentru antreprenori din România.",
    category: "ai-business",
    date: "2026-02-08",
    readTime: "10 min",
    imageUrl: "/articles/ai-business.png",
    featured: false,
  },
];
