--Readme document for Aleksander (Sasha) O'Connor, aleksano@uci.edu--

A reminder on academic integrity, as described in the syllabus.

In general, the course staff expects that you will look at code and examples from many online resources as part of the assignments, particularly to resolve syntax and understand frameworks. We expect that you'll use other libraries you find, and will even require it in some assignments. These practices are often critical to the work of developers today. The best developers are adept at interpreting the examples they see, customizing them to their specific situation, and citing their sources so they can find them later. We expect you to do the same.

While learning from examples is encouraged, attempting to pass an existing project or example from the web as your own is not allowed. If you ever have a question about what is or is not appropriate, feel free to ask the course staff!

Talking to classmates about class material, assignment requirements, etc. is a great way to verify ideas and get feedback. But this distinctly does *not* permit attempting to pass off someone else’s code as your own. Talking over ideas and approaches is allowed, but the work that you produce and submit must be your own.

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

10/10
- 1/1 Readme
- 2/2 Basic HTML content
- 1/1 Basic CSS styling
- 1/1 Advanced feature
- 2/2 Responsive layout
- 1/1 Passes validation checks
- 2/2 Embraces spirit of the assignment


This portfolio is also my case for the bonus point (see the end of question 2).

2. What (a) basic features, (b) CSS features, and (c) advanced features did you include in your portfolio?

Four pages: index.html, projects.html, experience.html (an on-page resume), and contact.html, all with real content from my resume. The design is based on chip layout software like Cadence Virtuoso: a dot-grid background, outlined boxes, and four layer colors that each stand for a type of work (red hardware, green systems, blue software, violet AI), so a recruiter sees my range from logic gates to AI agents on the first screen.

(a) Basic features
- Images with descriptive alt text: a headshot and three hand-drawn SVG diagrams (MIPS pipeline, CMOS NAND gate, OpenLaunch architecture).
- One h1 per page, with headings in order and no skipped levels.
- External links: LinkedIn, GitHub, Opus Technologies, and mailto.
- The same nav bar on all four pages, with aria-current="page" on the current one.
- Semantic tags: header, nav, main, section, article, aside, figure/figcaption, footer, and dl.
- Icons: inline Bootstrap Icons, plus a hand-drawn via icon used as the logo and favicon.

(b) CSS features
- Consistent padding and margins, with more space above headings than below.
- A custom palette stored as CSS variables; all text passes WCAG AA (4.5:1).
- Bootstrap grid, rounded-circle, table, and display classes. style.css restyles Bootstrap through its own CSS variables instead of overriding rules one by one.
- The Archivo Google Font, using its variable width for wide capital labels.
- Advanced selectors from lecture 3: adjacent sibling, child, attribute, :hover, :focus-visible, and pseudo-elements.

(c) Advanced features
- Projects page layer filter (filter and forEach from lecture 5), with aria-pressed buttons, match counts, an aria-live status line, and deep links like projects.html#layer-software. Without JavaScript, every project is shown.
- An accessible skills table with a caption, thead/tbody, row and column headers, and headers attributes on every cell.
- A more complex layout: collapsing navbar, sticky Projects sidebar on large screens, and a CSS Grid timeline that shows overlapping jobs.
- A contact form with labels, required fields, type="email", and autocomplete. JavaScript turns it into a pre-filled email; without JavaScript, the mailto action still works.
- A print stylesheet for the Experience page ("Print or save as PDF" button) that hides the nav and footer and prints link addresses.
- A layer fill-in animation on the home page, turned off for prefers-reduced-motion.
- A "Copy email address" button using the Clipboard API.

Responsive design
Mobile-first CSS with min-width queries at Bootstrap's breakpoints, checked from 320px to 1440px with no sideways scrolling. On small screens the nav collapses, the home layer stack moves below the intro, the Projects sidebar moves above the projects, wide diagrams scroll inside their own box, timeline labels move above their tracks, and the skills table becomes stacked blocks below 576px.

Bonus point
The site is built for its real audience, recruiters hiring new-grad software engineers. The design comes from the hardware side of my degree instead of a template, and the layer colors mean the same thing on every page. It also goes past the checkers with focus styles, a skip link, reduced motion support, and a print version.

3. Did you ignore any of the warnings or errors presented by the accessibility checker? If so, why does this not seem like an accessibility concern? If it's useful, you can consolidate your thoughts on multiple warnings/errors if the rationale is similar.

All four pages pass the W3C HTML checker and css/style.css passes the W3C CSS validator with no errors or warnings. AChecker (WCAG 2.0 AA) shows zero known and zero likely problems. It first flagged check 245 on experience.html (a table with multiple header rows/columns), which I fixed with id and headers attributes.

AChecker's "potential problems" need human review. I reviewed each one, and none is a real problem:
- Images: the diagram alt text is long on purpose because the diagrams carry information. No image relies on color alone.
- Links: every link names its destination; there is no "click here".
- Headings: real section headings, in order.
- Page structure: skip links, descriptive titles, real lists, and the same nav on every page. A site map is not needed for four pages.
- Language: all English, set with lang="en".
- Scripts: no color-only meaning, nothing flashes, and every control is a keyboard-accessible button.
- Table: a data table with caption, thead/tbody, scope, id, and headers. summary is obsolete in HTML5.
- Form: visible labels, "(optional)" marked, logical tab order, and browser validation messages. The form only opens an email draft.
- Long quotations: there are none.
- Text by position: no text refers to things only by position, shape, or color.

4. How long, in hours, did it take you to complete this assignment?

About five hours.

5. What online resources did you consult when completing this assignment? (list specific URLs, describe queries to Generative AI, or use of AI-based code completion)

Generative AI: I used Claude Code (Anthropic) in VS Code throughout this assignment. I gave it the assignment rubric and asked it to answer some of my questions about how to attack the assignment. I gave it my resume, so that I could plan how I wanted to structure the site. I used it to help plan the theme of the portfolio. I made the main decisions about the audience, using Bootstrap, which personal details to include, and the visual design. Claude generated SVG diagrams from those choices, helped me find and fix what the validators flagged, which I reviewed. Claude also helped me structure my style.css page to make it neater, and helped me with some of the naming conventions used.

Other resources:
- The IN4MTX 133 lecture slides (lectures 2 through 5) on Canvas
- https://getbootstrap.com/docs/5.3/ (grid, navbar, display utilities, tables, forms, and CSS variables)
- https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/ (the Bootstrap CSS and JavaScript files, loaded with integrity hashes the way lecture 4 shows)
- https://icons.getbootstrap.com/ (Bootstrap Icons, MIT license, used as inline SVG for the envelope, LinkedIn, GitHub, location, clipboard, printer, and arrow icons)
- https://fonts.google.com/specimen/Archivo (the Archivo font)
- https://validator.w3.org/nu/ (HTML validation)
- https://jigsaw.w3.org/css-validator/ (CSS validation)
- https://achecks.org/achecker/ (accessibility validation, WCAG 2.0 Level AA)
- https://webaim.org/techniques/alttext/ (alt text guidelines, from lecture 2)

6. What classmates or other individuals did you consult as part of this assignment? What did you discuss?

I did not consult any classmates or other individuals.

7. Is there anything special we need to know in order to run your code?

Open index.html in Chrome; no server or install is needed. An internet connection is needed to load Bootstrap 5.3.3 and Archivo.

All pages share css/style.css, so the valid-css-*.jpg screenshots all show that one file. Since the site is not hosted, HTML and CSS were checked by file upload and accessibility by pasting each page's HTML into AChecker.
