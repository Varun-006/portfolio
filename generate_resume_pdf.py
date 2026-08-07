import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle

def build_pdf(filename="public/resume.pdf"):
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )
    
    styles = getSampleStyleSheet()
    
    # Custom styles
    name_style = ParagraphStyle(
        'NameStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=22,
        leading=24,
        alignment=1, # Center
        textColor=colors.HexColor('#000000')
    )
    
    contact_style = ParagraphStyle(
        'ContactStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        alignment=1, # Center
        textColor=colors.HexColor('#222222')
    )
    
    section_title_style = ParagraphStyle(
        'SectionTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=13,
        textColor=colors.HexColor('#000000'),
        textTransform='uppercase'
    )
    
    item_header_left = ParagraphStyle(
        'ItemHeaderLeft',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=12,
        textColor=colors.HexColor('#000000')
    )
    
    item_header_right = ParagraphStyle(
        'ItemHeaderRight',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        alignment=2, # Right
        textColor=colors.HexColor('#333333')
    )
    
    sub_title_style = ParagraphStyle(
        'SubTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=9.5,
        leading=11.5,
        textColor=colors.HexColor('#333333')
    )

    body_style = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        textColor=colors.HexColor('#222222')
    )
    
    bullet_style = ParagraphStyle(
        'BulletCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        leftIndent=12,
        textColor=colors.HexColor('#222222')
    )
    
    bold_label_style = ParagraphStyle(
        'BoldLabel',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11,
        textColor=colors.HexColor('#000000')
    )

    story = []
    
    # 1. Header
    story.append(Paragraph("Varuna D", name_style))
    story.append(Spacer(1, 4))
    
    contact_text = (
        "📞 7349236822 &nbsp;&nbsp;|&nbsp;&nbsp; "
        "✉ varund9110820617@gmail.com &nbsp;&nbsp;|&nbsp;&nbsp; "
        '<a href="https://github.com/Varun-006" color="#0056b3"><u>GitHub</u></a> &nbsp;&nbsp;|&nbsp;&nbsp; '
        '<a href="https://www.linkedin.com/in/varun-d9483/" color="#0056b3"><u>LinkedIn</u></a> &nbsp;&nbsp;|&nbsp;&nbsp; '
        "📍 Hassan"
    )
    story.append(Paragraph(contact_text, contact_style))
    story.append(Spacer(1, 8))
    
    def add_section_header(title):
        story.append(Paragraph(title, section_title_style))
        story.append(Spacer(1, 2))
        story.append(HRFlowable(width="100%", thickness=0.75, color=colors.HexColor('#000000'), spaceAfter=6, spaceBefore=0))

    # 2. WORK EXPERIENCES
    add_section_header("WORK EXPERIENCES")
    
    exp_table_data = [
        [
            Paragraph("<b>MERN + RN Developer</b> | Internship", item_header_left),
            Paragraph("2025 - Present", item_header_right)
        ],
        [
            Paragraph("<i>Automatech</i>", sub_title_style),
            Paragraph("Remote", item_header_right)
        ]
    ]
    t = Table(exp_table_data, colWidths=[380, 160])
    t.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(t)
    story.append(Spacer(1, 3))
    
    story.append(Paragraph("• Selected via <b>Aignite 2.0 – TECHXHIBIT</b>, collaborated on real-world technology projects within an <b>Agile/Scrum team</b> (bi-weekly stand-ups, sprint tracking, 14+ hrs/week).", bullet_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Recognized as a <b>top performer</b> — among <b>3 of 12 interns</b> eligible for <b>outstanding contribution stipend</b> based on performance, teamwork, and innovation.", bullet_style))
    story.append(Spacer(1, 3))
    story.append(Paragraph("<b>Technologies :</b> React, MongoDB, Node.js, Tailwind CSS, Express", body_style))
    story.append(Spacer(1, 10))
    
    # 3. PROJECTS
    add_section_header("PROJECTS")
    
    # Project 1: SKILLBRIDGE
    proj1_table = [
        [
            Paragraph("<b>SKILLBRIDGE</b> | <a href='https://github.com/Varun-006' color='#000000'><u>Github</u></a>", item_header_left),
            Paragraph("", item_header_right)
        ]
    ]
    t1 = Table(proj1_table, colWidths=[380, 160])
    t1.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(t1)
    story.append(Paragraph("<i>Full-Stack Developer</i>", sub_title_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Developed a <b>full-stack peer-to-peer skill exchange platform</b> using <b>React, Node.js, Express, and MongoDB</b>. Integrated <b>JWT authentication</b> and real-time chat through <u>Socket.io</u>.", bullet_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Enabled features such as skill-matching, ratings/reviews, video calls, and an AI assistant for enhanced user-to-user learning experiences. Utilized <b>Cloudinary</b> for media uploads.", bullet_style))
    story.append(Spacer(1, 3))
    story.append(Paragraph("<b>Tools Used :</b> React.js, Node.js, MongoDB, Socket.io, Docker, Google OAuth", body_style))
    story.append(Spacer(1, 8))
    
    # Project 2: Resume Search Engine
    proj2_table = [
        [
            Paragraph("<b>Resume Search Engine</b> | <a href='https://github.com/Varun-006' color='#000000'><u>Github</u></a>", item_header_left),
            Paragraph("", item_header_right)
        ]
    ]
    t2 = Table(proj2_table, colWidths=[380, 160])
    t2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(t2)
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Developed an <b>AI-powered resume search engine</b> that parses PDF, DOCX, and TXT resumes. <b>Chunked and embedded</b> content into 384-dimensional vectors using <code>all-MiniLM-L6-v2</code>, storing them in ChromaDB for <b>semantic retrieval</b>.", bullet_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Implemented a cosine-similarity ranking pipeline, featuring both a CLI and a Streamlit web app for recruiters to effectively search candidates by job description.", bullet_style))
    story.append(Spacer(1, 3))
    story.append(Paragraph("<b>Tools Used :</b> Python, chromadb, pypdf, torch", body_style))
    story.append(Spacer(1, 10))

    # 4. SKILLS
    add_section_header("SKILLS")
    
    skills_data = [
        [Paragraph("<b>Databases :</b>", bold_label_style), Paragraph("MongoDB, MySQL", body_style)],
        [Paragraph("<b>Frameworks & Libraries :</b>", bold_label_style), Paragraph("React.js, Node.js, Express, Tailwind CSS", body_style)],
        [Paragraph("<b>Languages :</b>", bold_label_style), Paragraph("English, Kannada, Hindi", body_style)],
        [Paragraph("<b>Programming Languages :</b>", bold_label_style), Paragraph("Python, Java, C, JavaScript, HTML", body_style)],
        [Paragraph("<b>Soft Skills :</b>", bold_label_style), Paragraph("Time Management, Decision Making", body_style)],
        [Paragraph("<b>Tools & Platforms :</b>", bold_label_style), Paragraph("Git, GitHub, CI/CD, Socket.io, Docker, Google OAuth, Cloudinary, ChromaDB", body_style)],
    ]
    st = Table(skills_data, colWidths=[150, 390])
    st.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('TOPPADDING', (0,0), (-1,-1), 2),
    ]))
    story.append(st)
    story.append(Spacer(1, 10))

    # 5. AWARDS & ACHIEVEMENTS
    add_section_header("AWARDS & ACHIEVEMENTS")
    
    ach1_table = [
        [
            Paragraph("<b>HACKABHiGNA 2025</b>", item_header_left),
            Paragraph("Oct 29-30, 2025", item_header_right)
        ]
    ]
    ta1 = Table(ach1_table, colWidths=[380, 160])
    ta1.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(ta1)
    story.append(Paragraph("• Participated in <b>24-hour National Level Hackathon</b> (Fullstack Marketing Analytics & Agentic Flow) at AIT, Chikkamagaluru, facilitated by Google Student Ambassador Program; sponsored by Google Gemini, Streamz AI & Environ India.", bullet_style))
    story.append(Spacer(1, 6))
    
    story.append(Paragraph("<b>GameForge</b>", item_header_left))
    story.append(Paragraph("<b>Runner-Up — GameForge (Game Development using Python)</b>, Club Avinya, Rajeev Institute of Technology, Hassan (Sept 2025)", sub_title_style))
    story.append(Spacer(1, 1))
    story.append(Paragraph("Achieved Runner-up position in the GameForge competition, showcasing <b>innovative game design</b> and <b>strong technical execution</b> among competing teams in game development using Python.", bullet_style))
    story.append(Spacer(1, 10))

    # 6. EDUCATIONS
    add_section_header("EDUCATIONS")
    
    edu_table_data = [
        [
            Paragraph("<b>Rajeev Institute of Technology, Hassan (VTU)</b>", item_header_left),
            Paragraph("2023 - 2027", item_header_right)
        ],
        [
            Paragraph("<i>B.E. — Information Science & Engineering</i>", sub_title_style),
            Paragraph("<b>CGPA : 8.36</b>", item_header_right)
        ]
    ]
    te = Table(edu_table_data, colWidths=[380, 160])
    te.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(te)
    story.append(Spacer(1, 2))
    story.append(Paragraph("• <b>Relevant Coursework:</b> Data Structures & Algorithms, DBMS, OS, Computer Networks, OOP, Software Engineering, Machine Learning", bullet_style))

    doc.build(story)
    print("PDF generated successfully at public/resume.pdf!")

if __name__ == "__main__":
    build_pdf()
