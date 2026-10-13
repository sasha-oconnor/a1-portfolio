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

My portfolio has four pages: a home page, a projects page, an experience page that works as my resume, and a contact page. All of the content comes from my real resume. The design is based on the software engineers use to lay out computer chips, like Cadence Virtuoso. Each of the four colors stands for a type of work I do (red for hardware, green for systems, blue for software, and violet for AI), so a recruiter can see the range of my work on the first screen.

(a) Basic features
- Images with alt text that describes them: a headshot and three SVG diagrams (a MIPS pipeline, a CMOS NAND gate, and the OpenLaunch architecture).
- One main heading per page, with the rest of the headings in order and no skipped levels.
- Links to my LinkedIn, GitHub, and Opus Technologies, plus an email link.
- The same nav bar on every page, and it marks which page is currently open.
- Semantic HTML tags like header, nav, main, section, article, aside, figure, and footer, so the structure of each page is clear to screen readers.
- Icons from Bootstrap Icons, plus a custom logo icon that is also the favicon.

(b) CSS features
- Consistent spacing, with more space above headings than below them.
- A custom color palette saved as CSS variables. All text meets the WCAG AA contrast standard, meaning it is dark enough against its background to read easily.
- Bootstrap's grid, table, and display classes. Instead of overriding Bootstrap's rules one by one, style.css changes Bootstrap's own variables.
- The Archivo font from Google Fonts.
- Advanced selectors from lecture 3, including adjacent sibling, child, attribute, :hover, :focus-visible, and pseudo-elements.

(c) Advanced features
- A filter on the Projects page that shows one type of project at a time, written with filter and forEach from lecture 5. It works with a keyboard and a screen reader, and a link like projects.html#layer-software opens the page already filtered. Without JavaScript, every project still shows.
- An accessible skills table on the Experience page, meaning every cell is linked to its row and column headers so a screen reader reads it correctly.
- A more complex layout, including a nav bar that collapses on phones, a Projects sidebar that stays in place while scrolling on large screens, and a timeline that shows jobs that overlap.
- A contact form with labels, required fields, and email format checking. JavaScript turns the message into a pre-filled email, and the form still works without JavaScript.
- A print version of the Experience page, so the "Print or save as PDF" button gives a clean resume without the nav bar or footer.
- An animation on the home page that turns off for anyone who has reduced motion turned on in their device settings.
- A button that copies my email address.

Responsive design
I wrote the CSS for phones first and then added changes for bigger screens at Bootstrap's breakpoints. I checked every page from 320px to 1440px wide, and nothing scrolls sideways. On phones, the nav bar collapses into a menu, sections that sit side by side stack on top of each other, wide diagrams scroll inside their own box, and the skills table turns into stacked blocks.

Bonus point
I built the site for its real audience, which is recruiters hiring new-grad software engineers. The design comes from the hardware side of my degree instead of a template, and each color means the same thing on every page. I also added things the checkers do not test for, like visible outlines for keyboard users, a link to skip past the nav bar, the reduced-motion setting, and the print version.

3. Did you ignore any of the warnings or errors presented by the accessibility checker? If so, why does this not seem like an accessibility concern? If it's useful, you can consolidate your thoughts on multiple warnings/errors if the rationale is similar.

All four pages pass the W3C HTML checker, and style.css passes the W3C CSS validator with no errors or warnings. AChecker shows zero known problems and zero likely problems. At first, it flagged the skills table on experience.html because the table has headers on both its rows and columns. I fixed this by linking each cell to its headers.

AChecker also lists "potential problems," which are things it cannot check on its own and asks a person to review. I went through each one, and none of them is a real problem:
- Images: the diagram alt text is long on purpose, because the diagrams contain information that someone who cannot see them still needs. No image relies on color alone.
- Links: every link says where it goes, and none of them say "click here."
- Headings: they are real section headings, and they go in order.
- Page structure: every page has a skip link, a clear title, and the same nav bar. A site map is not needed for a four-page site.
- Language: every page is set to English.
- Scripts: nothing flashes, and every button works with a keyboard.
- Table: it has a caption and labeled headers. AChecker asks for a summary attribute, but that attribute is no longer part of HTML5.
- Form: every field has a visible label, the optional field is marked, and the browser shows a message when a required field is empty.
- Long quotations and text that only makes sense by position, shape, or color: the site has none.

4. How long, in hours, did it take you to complete this assignment?

About five hours.

5. What online resources did you consult when completing this assignment? (list specific URLs, describe queries to Generative AI, or use of AI-based code completion)

Generative AI: I used Claude Code (Anthropic) in VS Code throughout this assignment. I gave it the assignment rubric and asked it to answer some of my questions about how to attack the assignment. I gave it my resume, so that I could plan how I wanted to structure the site. I used it to help plan the theme of the portfolio. I made the main decisions about the audience, using Bootstrap, which personal details to include, and the visual design. Claude generated SVG diagrams from those choices, helped me find and fix what the validators flagged, which I reviewed. Claude also helped me structure my style.css page to make it neater, and helped me with some of the naming conventions used. I also used Claude to help revise code and streamline the reuse of similar components and themes throughout the repo.

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

Open index.html in Chrome. No server or install is needed, but it does need an internet connection to load Bootstrap and the Archivo font.

All four pages use the same css/style.css file, so the CSS validation screenshots all show that one file. Because the site is not hosted online, I checked the HTML and CSS by uploading the files, and I checked accessibility by pasting each page's HTML into AChecker.
