# One Less Form

A small interactive prototype about repeated work in merchant onboarding. In a previous product role, I worked on simplifying a seller registration flow. The existing flow could get a merchant onto the platform, but unclear entry points and repeated information across business areas made the process more demanding than it needed to be. This prototype isolates one decision: what should happen when a seller's information is already available?

## Original idea

For sellers who are joining a second storefront, I wanted to compare entering business details again with reviewing a saved profile. **When someone chooses “Use saved profile,” the experience should show existing details for review and let them continue without retyping them.**

The business and details shown here are fictional. This is a front-end simulation, not a real registration system. It does not submit or store data.

## Open the project

Open `index.html` in a browser. No installation, account, or server is needed. You can also serve the folder locally with `python3 -m http.server 8000` and open `http://localhost:8000`.

1. Begin with **Start from scratch**. Try **Continue** with the fields empty, then enter a business name, valid email, and tax ID.
2. Select **Use saved profile**. Review the three existing details and continue without typing.
3. After either result, use **Try the other flow** to compare the two.

## AI tool and selected directions

I used Codex in ChatGPT to make the HTML, CSS, and JavaScript. My starting direction came from my real experience: build a small, browser-based interaction around the repeated business information in merchant onboarding. I chose that idea over extending an earlier Bad Volume Control classroom exercise because the seller flow gave me a specific user and a specific design problem. The intended behavior I gave AI was to let someone compare manual re-entry with reviewing saved information, while keeping the scope to one step rather than claiming to implement a whole platform.

One useful exchange during implementation concerned the switching behavior. The first version hid the form fields with HTML's `hidden` attribute, but the CSS also declared `.fields { display: grid; }`, which could override the browser's default hidden style. We added `[hidden] { display: none !important; }` and reset the step label on mode changes. A later browser check revealed that the explanation below the form still described the previous result after changing modes, so we reset that text as well. Those were small changes, but they mattered: the comparison only makes sense if switching flows leaves a coherent screen.

## What I tested and changed

I ran the interaction logic through a DOM-based test with these cases: continuing with three empty fields shows an error; an invalid email is rejected; valid manual entry reaches the manual result; switching to the saved-profile mode hides the inputs and shows the review card; continuing reaches the saved-profile result; and switching back restores the initial step label. I also clicked through the main paths in a Chromium browser and inspected the page at desktop size. The checks passed after the visibility and reset changes. The app is intentionally static and has no backend, so these checks do not establish how account data would behave in a real system.

## Reflection

The core interaction matches my intention: both routes reach the same “business details complete” state, yet one makes the seller type three pieces of information the platform already has. Seeing them side by side makes a point I learned in my previous work: a feature can technically function and still create unnecessary effort. I initially focused on removing repeated typing, but showing the saved details for review matters too. Otherwise the seller might move faster without knowing whether the information is still correct. The empty-field and email checks also reminded me that a working flow has to respond clearly when someone does something other than the ideal happy path.

AI helped me turn that idea into a working interface and find a CSS visibility issue. The decisions about the user problem, what to compare, and why review should remain in the simplified flow came from my own product experience. The biggest unresolved question is how a real system would handle outdated or inconsistent information across storefronts. An edit path, permissions, and backend validation would be necessary in a real product; I kept them outside this small prototype so the central comparison stays clear.
