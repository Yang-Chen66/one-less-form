# Learning notes

These notes record the questions, problems, and progress from building the One Less Form prototype. The selected AI directions and the final reflection are in [README.md](README.md).

## Starting question

My previous work on merchant onboarding suggested a design problem: a flow can be functional and still ask sellers to repeat information a platform already has. For this exercise, I wanted a small interaction that makes the difference between re-entry and reuse visible.

## Building and checking the two routes

- **Plan:** Keep the experiment to one business-details step with two choices. Both should end at the same completion screen so the extra work in the manual route is clear.
- **Implementation:** Codex helped create a static page with HTML, CSS, and JavaScript. The manual route asks for three fields; the saved-profile route displays the existing details for review.
- **Check:** We checked that empty manual fields show an error, an invalid email is rejected, valid manual entry completes, and the saved route completes without typing. I also tried both routes in the browser.

## Issue: hidden fields still appeared

During implementation, the form fields could remain visible when switching to the saved-profile route. The fields had an HTML `hidden` attribute, but a CSS `display: grid` rule on the same element interfered with the hidden state. We added a rule for `[hidden]` and checked that switching routes now shows the correct content.

## Issue: old text survived a route change

A browser check showed that the explanation below the form could keep describing the previous result after the visitor changed routes. We updated the route-switching logic to restore the initial explanation and step label. This mattered because stale text undermined the comparison even when the buttons worked.

## What changed in my thinking

Removing repeated typing was the first idea, but the saved details also need to be visible before continuing. Reuse should save effort while giving the seller a chance to notice outdated information. The input checks and route-switching issues also showed me that the experience needs to handle errors and changes of mind, not only the ideal path.

## Next questions

- How would a seller edit a saved value that is out of date?
- What happens if information differs between storefronts?
- Which details can safely be reused, and who can see or change them?

Those questions need real product rules and data handling. This classroom prototype does not answer them.