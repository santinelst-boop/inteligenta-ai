#!/usr/bin/env python3
"""
Generate Lead Magnet PDF: "Top 20 Instrumente AI Gratuite pentru Români în 2026"
Run: python3 scripts/generate-lead-magnet.py
Output: public/downloads/top-20-instrumente-ai-gratuite-2026.pdf
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm, cm
from reportlab.lib.colors import HexColor, white, black
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, KeepTogether
)
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
from reportlab.pdfgen import canvas as cv
from reportlab.platypus.doctemplate import PageTemplate, BaseDocTemplate, Frame
import os

# Colors
PRIMARY = HexColor("#4f46e5")
PRIMARY_DARK = HexColor("#3730a3")
ACCENT = HexColor("#7c3aed")
TEXT_DARK = HexColor("#1e1b4b")
TEXT_LIGHT = HexColor("#6b7280")
BG_LIGHT = HexColor("#f5f3ff")
BG_WHITE = HexColor("#ffffff")
STAR_COLOR = HexColor("#f59e0b")

WIDTH, HEIGHT = A4

# Styles
style_title = ParagraphStyle(
    "Title", fontName="Helvetica-Bold", fontSize=28,
    textColor=white, alignment=TA_CENTER, leading=34,
    spaceAfter=10
)
style_subtitle = ParagraphStyle(
    "Subtitle", fontName="Helvetica", fontSize=14,
    textColor=HexColor("#c7d2fe"), alignment=TA_CENTER, leading=18,
    spaceAfter=6
)
style_h1 = ParagraphStyle(
    "H1", fontName="Helvetica-Bold", fontSize=20,
    textColor=PRIMARY_DARK, alignment=TA_LEFT, leading=26,
    spaceBefore=16, spaceAfter=10
)
style_h2 = ParagraphStyle(
    "H2", fontName="Helvetica-Bold", fontSize=14,
    textColor=PRIMARY, alignment=TA_LEFT, leading=18,
    spaceBefore=8, spaceAfter=4
)
style_body = ParagraphStyle(
    "Body", fontName="Helvetica", fontSize=10.5,
    textColor=TEXT_DARK, alignment=TA_JUSTIFY, leading=15,
    spaceAfter=6
)
style_small = ParagraphStyle(
    "Small", fontName="Helvetica", fontSize=9,
    textColor=TEXT_LIGHT, alignment=TA_LEFT, leading=12
)
style_tool_name = ParagraphStyle(
    "ToolName", fontName="Helvetica-Bold", fontSize=13,
    textColor=PRIMARY_DARK, alignment=TA_LEFT, leading=17
)
style_tool_desc = ParagraphStyle(
    "ToolDesc", fontName="Helvetica", fontSize=10,
    textColor=TEXT_DARK, alignment=TA_LEFT, leading=14,
    spaceAfter=2
)
style_tool_meta = ParagraphStyle(
    "ToolMeta", fontName="Helvetica", fontSize=9,
    textColor=TEXT_LIGHT, alignment=TA_LEFT, leading=12
)
style_cta = ParagraphStyle(
    "CTA", fontName="Helvetica-Bold", fontSize=14,
    textColor=PRIMARY, alignment=TA_CENTER, leading=18,
    spaceBefore=12, spaceAfter=8
)
style_footer = ParagraphStyle(
    "Footer", fontName="Helvetica", fontSize=8,
    textColor=TEXT_LIGHT, alignment=TA_CENTER
)

# Tools data
TOOLS = [
    {
        "nr": 1, "name": "ChatGPT", "url": "https://chat.openai.com",
        "desc": "Cel mai popular chatbot AI din lume. Ideal pentru scriere, rezumate, brainstorming, traduceri si programare. Modelul GPT-4o e disponibil gratuit cu limite.",
        "pricing": "Gratuit (GPT-4o limitat)", "rating": 5,
        "punct_forte": "Versatilitate extrema — face aproape orice"
    },
    {
        "nr": 2, "name": "Claude", "url": "https://claude.ai",
        "desc": "Alternativa de top la ChatGPT, creat de Anthropic. Excelent pentru analiza documentelor lungi, scriere creativa si rationament complex.",
        "pricing": "Gratuit (Sonnet)", "rating": 5,
        "punct_forte": "Context window imens — analizeaza documente de 200+ pagini"
    },
    {
        "nr": 3, "name": "Google Gemini", "url": "https://gemini.google.com",
        "desc": "AI-ul Google cu acces la informatii in timp real. Integrat cu Google Search, Gmail si Google Workspace.",
        "pricing": "Gratuit (Gemini 1.5 Flash)", "rating": 4,
        "punct_forte": "Acces la informatii actuale via Google Search"
    },
    {
        "nr": 4, "name": "Perplexity AI", "url": "https://perplexity.ai",
        "desc": "Motor de cautare AI care ofera raspunsuri cu surse. Perfect pentru research si verificarea informatiilor.",
        "pricing": "Gratuit (5 cautari Pro/zi)", "rating": 5,
        "punct_forte": "Cite-uri si surse verificabile pentru fiecare raspuns"
    },
    {
        "nr": 5, "name": "Microsoft Copilot", "url": "https://copilot.microsoft.com",
        "desc": "AI integrat in ecosistemul Microsoft. Acces gratuit la GPT-4, generare imagini cu DALL-E 3 si integrare Office.",
        "pricing": "Gratuit", "rating": 4,
        "punct_forte": "Generare imagini DALL-E 3 inclusa gratuit"
    },
    {
        "nr": 6, "name": "Canva AI", "url": "https://canva.com",
        "desc": "Platforma de design cu functii AI puternice: Magic Write, Magic Eraser, text-to-image, prezentari automate.",
        "pricing": "Freemium", "rating": 5,
        "punct_forte": "Design profesional fara cunostinte grafice"
    },
    {
        "nr": 7, "name": "Grammarly", "url": "https://grammarly.com",
        "desc": "Asistent AI pentru scriere corecta in limba engleza. Corectii gramaticale, sugestii de stil si ton, reformulari.",
        "pricing": "Freemium", "rating": 4,
        "punct_forte": "Corectii in timp real direct in browser"
    },
    {
        "nr": 8, "name": "Notion AI", "url": "https://notion.so",
        "desc": "AI integrat in Notion pentru organizare, scriere, rezumate si managementul proiectelor. Q&A pe documentele tale.",
        "pricing": "Freemium", "rating": 4,
        "punct_forte": "Organizare completa: note, taskuri, wiki + AI"
    },
    {
        "nr": 9, "name": "Remove.bg", "url": "https://remove.bg",
        "desc": "Elimina fundalul din orice fotografie in cateva secunde. Rezultate profesionale instant, fara Photoshop.",
        "pricing": "Gratuit (rezolutie mica)", "rating": 4,
        "punct_forte": "Un click — fundal eliminat perfect"
    },
    {
        "nr": 10, "name": "ElevenLabs", "url": "https://elevenlabs.io",
        "desc": "Generare voce AI ultra-realista. Text-to-speech in zeci de limbi, inclusiv romana. Clonare voce disponibila.",
        "pricing": "Freemium (10.000 caractere/luna)", "rating": 5,
        "punct_forte": "Cea mai naturala voce AI de pe piata"
    },
    {
        "nr": 11, "name": "Suno AI", "url": "https://suno.com",
        "desc": "Genereaza muzica originala din text. Scrii ce vrei si primesti o melodie completa cu voce, instrumente si productie.",
        "pricing": "Freemium (10 melodii/zi)", "rating": 4,
        "punct_forte": "Muzica completa generata din cateva cuvinte"
    },
    {
        "nr": 12, "name": "Gamma", "url": "https://gamma.app",
        "desc": "Creaza prezentari, documente si site-uri web din text. Alternativa AI la PowerPoint — rapid si profesional.",
        "pricing": "Freemium (400 credite)", "rating": 4,
        "punct_forte": "Prezentari profesionale generate in 30 secunde"
    },
    {
        "nr": 13, "name": "DeepL", "url": "https://deepl.com",
        "desc": "Cel mai precis translator AI. Suporta romana si produce traduceri naturale, superioare Google Translate.",
        "pricing": "Gratuit (limite text)", "rating": 5,
        "punct_forte": "Traduceri cu nuante naturale, nu mecanice"
    },
    {
        "nr": 14, "name": "Ideogram", "url": "https://ideogram.ai",
        "desc": "Generator de imagini AI cu text integrat. Exceleaza la logo-uri, postere si imagini care contin text lizibil.",
        "pricing": "Freemium (10 imagini/zi)", "rating": 4,
        "punct_forte": "Genereaza text in imagini corect — unic pe piata"
    },
    {
        "nr": 15, "name": "Hugging Face", "url": "https://huggingface.co",
        "desc": "Platforma open-source cu mii de modele AI gratuite. Chat, generare imagini, NLP, computer vision — toate gratuit.",
        "pricing": "Gratuit", "rating": 4,
        "punct_forte": "Acces la mii de modele AI open-source"
    },
    {
        "nr": 16, "name": "Otter.ai", "url": "https://otter.ai",
        "desc": "Transcriere automata a intalnirilor si conversatiilor. Suport pentru Zoom, Google Meet si Microsoft Teams.",
        "pricing": "Freemium (300 min/luna)", "rating": 4,
        "punct_forte": "Transcriere in timp real a meeting-urilor"
    },
    {
        "nr": 17, "name": "Poe", "url": "https://poe.com",
        "desc": "Acces la multiple modele AI (GPT-4, Claude, Llama, Gemini) dintr-o singura interfata. Compara raspunsurile.",
        "pricing": "Freemium", "rating": 4,
        "punct_forte": "Mai multe modele AI intr-un singur loc"
    },
    {
        "nr": 18, "name": "Leonardo AI", "url": "https://leonardo.ai",
        "desc": "Generator de imagini AI cu control avansat. Ideal pentru arta conceptuala, game assets si ilustratii profesionale.",
        "pricing": "Freemium (150 tokeni/zi)", "rating": 4,
        "punct_forte": "Control fin asupra stilului si compozitiei"
    },
    {
        "nr": 19, "name": "Tldraw / Make Real", "url": "https://tldraw.com",
        "desc": "Deseneaza o schita si AI-ul o transforma in cod functional. Prototipare rapida de interfete web din desene.",
        "pricing": "Gratuit", "rating": 4,
        "punct_forte": "Din schita pe hartie la site functional"
    },
    {
        "nr": 20, "name": "Writesonic", "url": "https://writesonic.com",
        "desc": "Generator de continut AI pentru marketing: articole blog, reclame, descrieri produse, email-uri si landing pages.",
        "pricing": "Freemium (25 credite/luna)", "rating": 4,
        "punct_forte": "Templates optimizate pentru marketing si SEO"
    },
]


def draw_cover_page(c, doc):
    """Draw a gradient cover page."""
    w, h = A4

    # Gradient background (simulated with rectangles)
    steps = 100
    for i in range(steps):
        ratio = i / steps
        r = int(79 + (124 - 79) * ratio)
        g = int(70 + (58 - 70) * ratio)
        b = int(229 + (237 - 229) * ratio)
        color = HexColor(f"#{r:02x}{g:02x}{b:02x}")
        c.setFillColor(color)
        y = h - (h * i / steps)
        c.rect(0, y - h/steps, w, h/steps + 1, fill=True, stroke=False)

    # Decorative circles
    c.setFillColor(HexColor("#ffffff10"))
    c.setStrokeColor(HexColor("#ffffff08"))
    c.circle(w * 0.8, h * 0.85, 120, fill=0, stroke=1)
    c.circle(w * 0.15, h * 0.2, 80, fill=0, stroke=1)

    # Logo area
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 18)
    # Logo box
    logo_x, logo_y = w/2 - 20, h - 80
    c.roundRect(logo_x, logo_y, 40, 40, 8, fill=0, stroke=0)
    c.setFillColor(HexColor("#ffffff30"))
    c.roundRect(logo_x, logo_y, 40, 40, 8, fill=1, stroke=0)
    c.setFillColor(white)
    c.drawCentredString(w/2, logo_y + 12, "ia")

    # Brand name
    c.setFont("Helvetica-Bold", 16)
    c.drawCentredString(w/2, logo_y - 20, "inteligenta.ai")

    # Main title
    c.setFont("Helvetica-Bold", 32)
    c.setFillColor(white)
    title_y = h * 0.55
    c.drawCentredString(w/2, title_y + 30, "Top 20")
    c.drawCentredString(w/2, title_y - 10, "Instrumente AI Gratuite")
    c.setFont("Helvetica-Bold", 28)
    c.drawCentredString(w/2, title_y - 48, "pentru Romani")

    # Year badge
    c.setFillColor(HexColor("#ffffff20"))
    badge_y = title_y - 90
    c.roundRect(w/2 - 50, badge_y - 5, 100, 35, 17, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 20)
    c.drawCentredString(w/2, badge_y + 5, "2026")

    # Subtitle
    c.setFillColor(HexColor("#c7d2fe"))
    c.setFont("Helvetica", 13)
    c.drawCentredString(w/2, badge_y - 35, "Ghid complet cu cele mai bune tool-uri AI")
    c.drawCentredString(w/2, badge_y - 52, "disponibile gratuit sau freemium")

    # Footer
    c.setFillColor(HexColor("#ffffff60"))
    c.setFont("Helvetica", 10)
    c.drawCentredString(w/2, 40, "inteligenta.ai — Primul portal AI din Romania")
    c.drawCentredString(w/2, 26, "Februarie 2026")


def footer_on_page(canvas_obj, doc):
    """Add footer to each page."""
    canvas_obj.saveState()
    w, h = A4
    # Line
    canvas_obj.setStrokeColor(HexColor("#e5e7eb"))
    canvas_obj.line(2*cm, 1.2*cm, w - 2*cm, 1.2*cm)
    # Text
    canvas_obj.setFont("Helvetica", 8)
    canvas_obj.setFillColor(TEXT_LIGHT)
    canvas_obj.drawString(2*cm, 0.7*cm, "inteligenta.ai")
    canvas_obj.drawRightString(w - 2*cm, 0.7*cm, f"Pagina {doc.page}")
    canvas_obj.restoreState()


def build_tool_block(tool):
    """Build a KeepTogether block for a single tool."""
    stars = "★" * tool["rating"] + "☆" * (5 - tool["rating"])

    elements = []

    # Header row with number and name
    header = Paragraph(
        f'<font color="#4f46e5" size="11">{tool["nr"]:02d}.</font>  '
        f'<font size="13"><b>{tool["name"]}</b></font>',
        style_tool_name
    )
    elements.append(header)
    elements.append(Spacer(1, 3))

    # Description
    elements.append(Paragraph(tool["desc"], style_tool_desc))
    elements.append(Spacer(1, 2))

    # Meta info
    meta_text = (
        f'<font color="#f59e0b">{stars}</font>  |  '
        f'{tool["pricing"]}  |  '
        f'<font color="#4f46e5"><link href="{tool["url"]}">{tool["url"]}</link></font>'
    )
    elements.append(Paragraph(meta_text, style_tool_meta))
    elements.append(Spacer(1, 2))

    # Punct forte
    forte = Paragraph(
        f'<font color="#059669"><b>Punct forte:</b></font> {tool["punct_forte"]}',
        style_tool_meta
    )
    elements.append(forte)

    # Separator
    elements.append(Spacer(1, 8))

    return KeepTogether(elements)


def generate_pdf():
    output_path = "public/downloads/top-20-instrumente-ai-gratuite-2026.pdf"

    # First, draw the cover page
    from reportlab.lib.pagesizes import A4
    c = cv.Canvas(output_path + ".cover", pagesize=A4)
    draw_cover_page(c, type('obj', (object,), {'page': 1})())
    c.save()

    # Build main content
    doc = SimpleDocTemplate(
        output_path + ".content",
        pagesize=A4,
        leftMargin=2*cm,
        rightMargin=2*cm,
        topMargin=2.5*cm,
        bottomMargin=2*cm,
    )

    story = []

    # Intro page
    story.append(Paragraph("Introducere", style_h1))
    story.append(Spacer(1, 6))

    intro_text = (
        "Inteligenta artificiala nu mai e un concept din viitor — e realitate, "
        "si e accesibila tuturor. In 2026, exista sute de instrumente AI pe care le poti "
        "folosi gratuit sau cu plan freemium generos. Am selectat cele mai bune 20 "
        "pentru tine."
    )
    story.append(Paragraph(intro_text, style_body))

    story.append(Paragraph(
        "Acest ghid include instrumente verificate si testate de echipa inteligenta.ai. "
        "Fiecare tool a fost evaluat dupa: utilitate practica, accesibilitate (pret si "
        "limba), calitatea rezultatelor si usurinta de folosire.",
        style_body
    ))

    story.append(Paragraph(
        "<b>Cum sa folosesti acest ghid:</b> Fiecare instrument include o descriere scurta, "
        "tipul de pret (Gratuit sau Freemium), un rating de la 1 la 5 stele si punctul "
        "sau forte principal. Link-urile duc direct la site-ul oficial.",
        style_body
    ))

    story.append(Spacer(1, 6))

    # Categories overview
    story.append(Paragraph("Ce vei gasi in acest ghid:", style_h2))
    categories = [
        "Chatboti AI (ChatGPT, Claude, Gemini, Copilot)",
        "Cautare si research (Perplexity, Poe)",
        "Design si imagini (Canva AI, Ideogram, Leonardo, Remove.bg)",
        "Scriere si traducere (Grammarly, DeepL, Writesonic, Notion AI)",
        "Audio si muzica (ElevenLabs, Suno AI)",
        "Prezentari si prototipare (Gamma, Tldraw)",
        "Platforme open-source (Hugging Face)",
        "Productivitate (Otter.ai)",
    ]
    for cat in categories:
        story.append(Paragraph(f"• {cat}", style_body))

    story.append(PageBreak())

    # Tools - 2 per page roughly, but let KeepTogether handle it
    story.append(Paragraph("Top 20 Instrumente AI Gratuite", style_h1))
    story.append(Spacer(1, 8))

    for tool in TOOLS:
        story.append(build_tool_block(tool))

    story.append(PageBreak())

    # Conclusion page
    story.append(Paragraph("Concluzie", style_h1))
    story.append(Spacer(1, 6))
    story.append(Paragraph(
        "Aceste 20 de instrumente AI sunt doar inceputul. Piata AI evolueaza rapid, "
        "si noi instrumente apar in fiecare saptamana. Cel mai important lucru e sa "
        "incepi sa experimentezi — alege 2-3 tool-uri din aceasta lista si integreaza-le "
        "in rutina ta zilnica.",
        style_body
    ))
    story.append(Paragraph(
        "Fie ca esti student, antreprenor, marketer sau pur si simplu curios, AI-ul "
        "iti poate economisi ore intregi de munca si poate imbunatati dramatic calitatea "
        "rezultatelor tale.",
        style_body
    ))
    story.append(Spacer(1, 16))

    # CTA
    story.append(Paragraph(
        "Vrei recenzii complete si comparatii detaliate?",
        style_cta
    ))
    story.append(Paragraph(
        '<font color="#4f46e5" size="16"><b>'
        '<link href="https://inteligenta.ai">Viziteaza inteligenta.ai</link>'
        '</b></font>',
        ParagraphStyle("CTALink", alignment=TA_CENTER, fontSize=16, spaceAfter=8)
    ))
    story.append(Paragraph(
        "Recenzii obiective • Comparatii detaliate • Ghiduri practice • Actualizat zilnic",
        ParagraphStyle("CTASub", fontName="Helvetica", fontSize=10,
                       textColor=TEXT_LIGHT, alignment=TA_CENTER, leading=14)
    ))
    story.append(Spacer(1, 20))
    story.append(Paragraph(
        "Aboneaza-te la newsletter-ul nostru pentru a primi saptamanal "
        "cele mai importante noutati din lumea AI.",
        ParagraphStyle("CTANews", fontName="Helvetica", fontSize=10,
                       textColor=TEXT_DARK, alignment=TA_CENTER, leading=14)
    ))
    story.append(Spacer(1, 30))
    story.append(Paragraph(
        "© 2026 inteligenta.ai — Toate drepturile rezervate.",
        style_footer
    ))
    story.append(Paragraph(
        "Acest ghid contine link-uri catre site-uri externe. "
        "inteligenta.ai nu este afiliat cu instrumentele mentionate decat acolo unde este specificat explicit.",
        style_footer
    ))

    # Build content pages
    doc.build(story, onFirstPage=footer_on_page, onLaterPages=footer_on_page)

    # Now merge cover + content using pypdf
    from pypdf import PdfReader, PdfWriter

    writer = PdfWriter()

    # Add cover
    cover_reader = PdfReader(output_path + ".cover")
    writer.add_page(cover_reader.pages[0])

    # Add content
    content_reader = PdfReader(output_path + ".content")
    for page in content_reader.pages:
        writer.add_page(page)

    # Set metadata
    writer.add_metadata({
        "/Title": "Top 20 Instrumente AI Gratuite pentru Romani in 2026",
        "/Author": "inteligenta.ai",
        "/Subject": "Ghid gratuit cu cele mai bune instrumente AI disponibile in 2026",
        "/Creator": "inteligenta.ai",
    })

    with open(output_path, "wb") as f:
        writer.write(f)

    # Cleanup temp files
    os.remove(output_path + ".cover")
    os.remove(output_path + ".content")

    print(f"PDF generated: {output_path}")
    print(f"Size: {os.path.getsize(output_path) / 1024:.1f} KB")
    print(f"Pages: {len(writer.pages)}")


if __name__ == "__main__":
    generate_pdf()
