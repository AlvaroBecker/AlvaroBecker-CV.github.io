# Planning Guide

A sleek, modern digital CV/portfolio showcasing Álvaro Becker Ruiz's expertise as a Systems Engineer with strong backend development, data processing, and AI/ML skills.

**Experience Qualities**:
1. **Professional** - Conveys technical competence and credibility through clean, structured layout
2. **Dynamic** - Interactive elements and subtle animations bring the CV to life beyond static paper
3. **Distinctive** - A unique visual identity that stands out from traditional CVs while remaining professional

**Complexity Level**: Content Showcase (information-focused) - This is primarily an information display application with organized sections for work history, skills, education, and contact information. The focus is on presenting data beautifully rather than complex interactivity.

## Essential Features

### Hero Section
- Functionality: Full-width header with name, title, and contact information
- Purpose: Immediate professional impression and key contact details
- Trigger: Page load
- Progression: User sees name → title → contact links (clickable)
- Success criteria: All contact info visible and links functional

### Skills Visualization
- Functionality: Visual representation of technical skills with proficiency levels
- Purpose: Quick scan of technical competencies
- Trigger: Scrolling to skills section
- Progression: Skills appear → grouped by category → proficiency bars animate
- Success criteria: All skills visible with clear proficiency indicators

### Work Experience Timeline
- Functionality: Chronological display of work history with expandable details
- Purpose: Showcase professional journey and achievements
- Trigger: Scrolling to experience section
- Progression: Timeline appears → job cards with dates/titles → detailed responsibilities
- Success criteria: Clear chronological flow, all roles documented

### Education & Certifications
- Functionality: Display academic background and professional certifications
- Purpose: Validate qualifications and continuous learning
- Trigger: Scrolling to education section
- Progression: Education card → list of certifications with dates
- Success criteria: All credentials displayed with dates

## Edge Case Handling
- **Long text content**: Text truncation with proper line clamping where needed
- **Mobile viewing**: Responsive design adapts layout for smaller screens
- **Print functionality**: CSS print styles for clean PDF export

## Design Direction
The design should evoke feelings of technical sophistication and innovation while maintaining approachability. Think of a blend between a tech startup's landing page and a premium digital resume - dark mode with vibrant accent colors that suggest data visualization and AI themes.

## Color Selection
A dark, sophisticated palette with electric blue and cyan accents representing data/AI themes.

- **Primary Color**: `oklch(0.65 0.2 250)` - Electric blue representing technology and innovation
- **Secondary Colors**: `oklch(0.75 0.15 180)` - Cyan/teal for data visualization vibes
- **Accent Color**: `oklch(0.85 0.18 160)` - Bright cyan for highlights and CTAs
- **Background**: `oklch(0.15 0.02 270)` - Deep navy/dark purple for sophistication
- **Foreground/Background Pairings**:
  - Background (Deep Navy): White text (`oklch(0.98 0 0)`) - Ratio 12:1 ✓
  - Primary (Electric Blue): White text - Ratio 4.8:1 ✓
  - Cards (Slightly lighter): Light text (`oklch(0.9 0 0)`) - Ratio 8:1 ✓

## Font Selection
Typography should feel modern and technical - conveying engineering precision while remaining highly readable.

- **Primary Font**: Space Grotesk - A geometric sans-serif with technical character
- **Secondary Font**: JetBrains Mono - For code-like elements and skill tags

**Typographic Hierarchy**:
- H1 (Name): Space Grotesk Bold/48px/tight letter spacing
- H2 (Section Titles): Space Grotesk SemiBold/28px/normal
- H3 (Job Titles): Space Grotesk Medium/20px/normal
- Body: Space Grotesk Regular/16px/1.6 line height
- Tags/Skills: JetBrains Mono Regular/13px/normal

## Animations
Subtle, purposeful animations that enhance the data-driven theme without being distracting - skill bars filling, sections fading in on scroll, hover effects on interactive elements.

## Component Selection

**Components**:
- Card: For work experience entries and education sections
- Badge: For skill tags and certifications
- Separator: Between major sections
- Progress: For skill proficiency visualization
- Tooltip: For additional context on hover

**Customizations**:
- Custom animated skill bars with gradient fills
- Custom timeline connector for work history
- Floating contact pills with hover effects

**States**:
- Links: Underline on hover, color shift
- Cards: Subtle lift and glow on hover
- Skill bars: Animate fill on scroll into view

**Icon Selection**:
- Envelope for email
- Phone for telephone
- MapPin for location
- LinkedinLogo for LinkedIn
- GithubLogo for GitHub
- Briefcase for work
- GraduationCap for education
- Certificate for certifications

**Spacing**:
- Section padding: py-16 (64px)
- Card padding: p-6 (24px)
- Gap between items: gap-4 (16px)
- Container max-width: max-w-4xl

**Mobile**:
- Single column layout on mobile
- Reduced font sizes
- Stacked skill badges
- Collapsible work experience details
