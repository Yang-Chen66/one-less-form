# Design document

## Starting point

This prototype grew out of my experience working on a merchant onboarding flow. A seller could complete registration, but unclear entry points and repeated information across business areas made the process longer than it needed to be. I wanted to isolate one part of that problem for a small browser interaction.

## Design question

If a merchant is joining a second storefront and the platform already has their business details, should they have to type those details again, or should they review a saved profile and continue?

The example business, Sunday Studio, and its details are fictional. This page represents one step, not a full onboarding system.

## Early ideas and scope

- Compare two routes to the same outcome: **Start from scratch** and **Use saved profile**.
- Show the same three pieces of information in both routes: business name, contact email, and tax ID.
- In the manual route, ask the seller to enter the three values and respond to missing fields or an invalid email.
- In the saved-profile route, display the existing values for review and allow the seller to continue without retyping.
- Let someone switch routes and try the other one, so the difference in effort is visible.

I considered a broader registration redesign, but kept this version to one decision. A real edit flow for outdated data, account permissions, and backend validation are questions for a later version.

## Intended interaction

| Choice | What the visitor does | Expected result |
| --- | --- | --- |
| Start from scratch | Enters three business details and selects Continue | The page checks the input and then reaches “Business details complete.” |
| Use saved profile | Reviews three existing details and selects Continue | The page reaches the same completed state without retyping. |
| Switch routes | Chooses the other option or uses “Try the other flow” | The visible fields, text, progress, and step label match the chosen route. |

The comparison should make the cost of repeated work easy to notice. Keeping a review step also lets the seller see what information is being reused.

## What the prototype does and does not show

This is a static HTML, CSS, and JavaScript demonstration. It does not save, submit, retrieve, or verify real merchant data. The saved profile is hard-coded for the example.