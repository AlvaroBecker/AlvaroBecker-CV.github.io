# Planning Guide

**Experience Qualities**:




- Functionality: Displays name, title, and contact information prominently

- Success criteria: Name and role are immediately visible, contact info accessible

- Purpose: Demonstrat


- Functionality: Visual display of technical and soft skills
- Trigger: Scrolling to section
- Success criteria: 
### Education Section
- Purpose: Validates qualifications


- **Empty sections**: Hide sections gracefully if no data exists
- **Mobile viewing**: Stack layout vertically for narrow screens
## Design Direction

A refined dark theme with warm accents that feels modern and disting

- **Accent Color**
  - Background (Deep charcoal): Primary text `oklch(0.92 0.0
  - Accent (Warm amber): Dark text `oklch(0
## Font Selection

  - H1 (Name): Bricolage Grotesque Bold/48px/tight letter s

  - Caption: Inter Re
## Animations
- Purpose: Validates qualifications
- Trigger: Scrolling to section
- Progression: User views degrees → sees institutions and dates
- Success criteria: Education clearly presented

## Edge Case Handling
- **Empty sections**: Hide sections gracefully if no data exists
- **Long descriptions**: Truncate with expand option if needed
- **Mobile viewing**: Stack layout vertically for narrow screens

## Design Direction
The design should evoke sophistication and confidence—like a well-tailored suit. Clean lines, generous whitespace, and subtle depth create a premium feel that respects the viewer's time while making a lasting impression.

## Color Selection
A refined dark theme with warm accents that feels modern and distinguished.

- **Primary Color**: Deep charcoal `oklch(0.2 0.01 260)` - Sophisticated base that's easier on eyes than pure black
- **Secondary Colors**: Slate gray `oklch(0.35 0.02 260)` for cards and elevated surfaces
- **Accent Color**: Warm amber `oklch(0.75 0.15 75)` - Draws attention to key elements, adds warmth
- **Foreground/Background Pairings**:
  - Background (Deep charcoal): Primary text `oklch(0.92 0.01 260)` - Ratio 8.5:1 ✓
  - Card (Slate): Body text `oklch(0.85 0.01 260)` - Ratio 6.2:1 ✓
  - Accent (Warm amber): Dark text `oklch(0.15 0.02 260)` - Ratio 7.8:1 ✓

## Font Selection
Typography should feel editorial and refined—the kind you'd see in a high-end magazine or architecture portfolio.

- **Typographic Hierarchy**:
  - H1 (Name): Bricolage Grotesque Bold/48px/tight letter spacing
  - H2 (Section titles): Bricolage Grotesque Semibold/24px/normal
  - H3 (Job titles): Inter Medium/18px/normal
  - Body: Inter Regular/16px/relaxed line-height
  - Caption: Inter Regular/14px/muted color

## Animations
Subtle entrance animations create polish without distraction—sections fade in gently as they enter view, and interactive elements respond with smooth hover states.

## Component Selection
- **Components**: 
  - Card for experience entries and education items
  - Badge for skills display
  - Separator for section division
  - Avatar for profile photo placeholder
- **Customizations**: Custom timeline connector for experience section
- **States**: Hover states on cards with subtle elevation, badges with gentle scale
- **Icon Selection**: Phosphor icons - Briefcase, GraduationCap, Envelope, MapPin, Phone, LinkedinLogo, GithubLogo
- **Spacing**: Consistent 24px section gaps, 16px internal padding, 8px between related items
- **Mobile**: Single column layout, reduced font sizes, full-width cards

## Component Selection
- **Components**: 
  - Card for experience entries and education items
  - Badge for skills display
  - Separator for section division
  - Avatar for profile photo placeholder
- **Customizations**: Custom timeline connector for experience section
- **States**: Hover states on cards with subtle elevation, badges with gentle scale
- **Icon Selection**: Phosphor icons - Briefcase, GraduationCap, Envelope, MapPin, Phone, LinkedinLogo, GithubLogo
- **Spacing**: Consistent 24px section gaps, 16px internal padding, 8px between related items
- **Mobile**: Single column layout, reduced font sizes, full-width cards
