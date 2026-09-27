# Project guidance for Codex

This is a small classroom prototype about repeated information in merchant onboarding. The learner's design question is whether a seller joining another storefront should re-enter business details or review a saved profile. Read `README.md` before changing the experience.

## Work with the learner

- Explain proposed behavior and implementation choices in plain language. Keep the learner's original idea and decisions visible.
- Before a meaningful interaction change, state what a user should be able to do and what result we expect. Afterward, test it in a browser, compare the observed result with the prediction, and record what changed.
- When a result is surprising or broken, investigate the cause and describe the evidence. Note remaining questions instead of presenting a static simulation as a real registration system.
- Help the learner understand the code and make their own design decisions. Ask for their choice when the product idea or interpretation of their personal experience is unclear.
- Keep process notes, important AI directions, test observations, and unresolved questions in the README or a separate learning-notes document. Do not invent quotations, personal experiences, or tests.

## Project structure

- Keep the runnable static site at the repository root: `index.html`, `style.css`, and `script.js`. GitHub Pages serves `index.html` from `main` and the root directory.
- Keep `README.md` at the root with the idea, instructions to run, selected AI directions, tests, and reflection.
- Prefer small, readable HTML, CSS, and JavaScript changes. No build system is needed for this prototype.
- Do not submit anything to Canvas unless the learner explicitly asks.
