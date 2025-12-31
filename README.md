# Resume + Cover Letter (MD3)

Version control your resume and cover letter using simple YAML files. Get a beautiful, print-ready HTML template that updates automatically.

---

## What This Does

- Store your resume data in easy-to-edit YAML files
- Automatically renders a professional HTML resume and cover letter
- Change the entire color theme with one line of code
- Built with Material Design 3 for a modern, clean look
- Optimized for printing to PDF

---

## Getting Started

### Prerequisites

You need [Node.js](https://nodejs.org/) installed on your computer.

### Installation

1. Clone or download this project
2. Open your terminal in the project folder
3. Install dependencies:
   ```bash
   make install
   ```

### Starting the Server

Run one of these commands:

```bash
make resume        # Opens your resume
make cover-letter  # Opens your cover letter
make start         # Opens the project home
```

Your browser will open automatically with live reload enabled. Any changes you make will refresh the page instantly.

**Available commands:** Run `make help` to see all available commands.

---

## How to Update Your Data

All your information lives in the `/data/` folder as YAML files. Just edit these files and save - everything updates automatically!

### The 3 Data Files

**1. `data/layout.yml`** (Shared by resume and cover letter)
- Your name
- Contact info (phone, email, location)
- Links (LinkedIn, GitHub, etc.)

**2. `data/resume.yml`** (All resume content)
- Professional summary
- Work experience
- Education and certifications
- Skills by category

**3. `data/cover-letter.yml`** (Cover letter content)
- Salutation
- Body paragraphs

### Example

```yaml
# In data/layout.yml
name: YOUR NAME HERE
contact:
  phone: 555-123-4567
  email: you@example.com
  location: Your City, State
links:
  - name: LinkedIn
    url: https://linkedin.com/in/yourprofile
    icon: in
```

```yaml
# In data/resume.yml
summary:
  - Your professional summary here
  - Key skills and experience

experience:
  - title: Your Job Title
    company: Company Name
    dates: Jan 2020 - Present
    summary:
      - What you accomplished
      - Key responsibilities
```

Just edit the text, save the file, and your resume and cover letter update instantly!

---

## Customizing the Theme

Want to change the colors? It's super easy.

### Change the Seed Color

1. Open `styles.css`
2. Find line 6 (near the top)
3. Change the color value:

```css
/* SEED COLOR - Change ONLY this line to update the entire theme */
--seed-color: #1976d2;  /* Change this! */
```

Try different colors:
- `#1976d2` - Blue (default)
- `#2e7d32` - Green
- `#d32f2f` - Red
- `#7b1fa2` - Purple
- Or any hex color code!

**That's it!** The entire theme (links, accents, highlights, backgrounds) automatically updates based on this one color.

---

## About the Material Design 3 (MD3) Pattern

This project uses Material Design 3, Google's latest design system.

### What MD3 Gives You

- **Smart Color System**: One seed color generates an entire palette automatically
- **Professional Typography**: Consistent text sizes and spacing that just work
- **Print Optimized**: Built-in styles that look great when exported to PDF
- **No Framework Needed**: Pure CSS, no React or complicated build tools

### How It Works

The CSS uses a clever trick called `color-mix()` to automatically create:
- Lighter and darker versions of your seed color
- Neutral grays that complement your theme
- Text colors that are always readable
- Background colors that look professional

You get a complete, cohesive color scheme from changing just one line.

---

## Exporting to PDF

1. Open your resume with `make resume` or `make cover-letter`
2. Press `Ctrl+P` (Windows/Linux) or `Cmd+P` (Mac)
3. Choose "Save as PDF"
4. Save wherever you want!

The print styles automatically:
- Remove backgrounds for clean printing
- Add proper page breaks
- Optimize colors for ink/toner
- Set perfect margins

---

## Project Structure

```
yml_resume/
├── data/                  # Your resume data (edit these!)
│   ├── layout.yml         # Shared header/contact info
│   ├── resume.yml         # All resume content
│   └── cover-letter.yml   # Cover letter content
├── resume/
│   ├── index.html         # Resume template
│   └── scripts.js         # Loads and renders data
├── cover-letter/
│   ├── index.html         # Cover letter template
│   └── cover-letter.js    # Loads and renders data
├── styles.css             # MD3 design system (seed color here!)
└── package.json           # npm scripts
```

---

## Tips

- Keep your YAML files properly indented (use spaces, not tabs)
- The live server auto-refreshes when you save changes
- Your data is just text files - super easy to version control with Git
- Export to PDF whenever you need to send your resume somewhere

---

## Technologies Used

- **YAML** - Simple, human-readable data format
- **js-yaml** - Parses YAML in the browser
- **Live Server** - Development server with live reload
- **Material Design 3** - Modern design system
- **CSS Variables** - Dynamic theming
- **Vanilla JavaScript** - No frameworks, just simple JS

---

Made with Material Design 3 | Version controlled with YAML
