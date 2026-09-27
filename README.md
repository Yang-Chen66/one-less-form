# One Less Form

A small interactive prototype about repeated work in merchant onboarding. In a previous product role, I worked on simplifying a seller registration flow. The existing flow could get a merchant onto the platform, but unclear entry points and repeated information across business areas made the process more demanding than it needed to be. This prototype isolates one decision: what should happen when a seller's information is already available?

## Original idea

For sellers who are joining a second storefront, I wanted to compare entering business details again with reviewing a saved profile. **When someone chooses “Use saved profile,” the experience should show existing details for review and let them continue without retyping them.**

The business and details shown here are fictional. This is a front-end simulation, not a real registration system. It does not submit or store data.

## Open the project

Try the published version at https://yang-chen66.github.io/one-less-form/ or open `index.html` in a browser. No installation, account, or server is needed. You can also serve the folder locally with `python3 -m http.server 8000` and open `http://localhost:8000`.

1. Begin with **Start from scratch**. Try **Continue** with the fields empty, then enter a business name, valid email, and tax ID.
2. Select **Use saved profile**. Review the three existing details and continue without typing.
3. After either result, use **Try the other flow** to compare the two.

## Project notes

- [Design document](DESIGN.md): the original problem, brainstorming, intended interaction, and scope.
- [Learning notes](LEARNING_NOTES.md): questions, issues, tests, progress, and open questions from building the prototype.

## AI tool, selected directions, and decisions

I used Codex in ChatGPT to make the HTML, CSS, and JavaScript. These are selected directions from our work, paraphrased rather than quoted as a transcript:

1. Start from my experience simplifying merchant onboarding: make one small browser interaction about information a seller has already provided, with a clear user and design problem. I chose this over extending an earlier Bad Volume Control classroom exercise.
2. Let someone compare manually re-entering business details with reviewing a saved seller profile. When they choose the saved profile, show the existing details and let them continue without retyping. Keep the scope to one step, not a whole registration platform.
3. Check both paths and mode changes in the browser. When a screen retains text or fields from the previous path, investigate the cause and revise it.

One useful exchange during implementation concerned the switching behavior. The first version hid the form fields with HTML's `hidden` attribute, but the CSS also declared `.fields { display: grid; }`, which could override the browser's default hidden style. We added `[hidden] { display: none !important; }` and reset the step label on mode changes. A later browser check revealed that the explanation below the form still described the previous result after changing modes, so we reset that text as well. Those changes mattered: the comparison only makes sense if switching flows leaves a coherent screen.

## What I tested and changed

With Codex, I checked the interaction logic through a DOM-based test: continuing with three empty fields shows an error; an invalid email is rejected; valid manual entry reaches the manual result; switching to the saved-profile mode hides the inputs and shows the review card; continuing reaches the saved-profile result; and switching back restores the initial step label. We also clicked through the main paths in a Chromium browser and inspected the page at desktop size. I tried both flows in the browser myself. The checks passed after the visibility and reset changes. The app is intentionally static and has no backend, so these checks do not establish how account data would behave in a real system.

## Reflection

The core interaction matches my intention: both routes reach the same “business details complete” state, yet one makes the seller type three pieces of information the platform already has. Seeing them side by side makes a point I learned in my previous work: a feature can technically function and still create unnecessary effort. I initially focused on removing repeated typing, but showing the saved details for review matters too. Otherwise the seller might move faster without knowing whether the information is still correct. The empty-field and email checks also reminded me that a working flow has to respond clearly when someone does something other than the ideal happy path.

AI helped me turn that idea into a working interface and find a CSS visibility issue. The decisions about the user problem, what to compare, and why review should remain in the simplified flow came from my own product experience. The biggest unresolved question is how a real system would handle outdated or inconsistent information across storefronts. An edit path, permissions, and backend validation would be necessary in a real product; I kept them outside this small prototype so the central comparison stays clear.
