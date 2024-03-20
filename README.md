Let's imagine we got a customer request to build a table that displays some events. But this is not just an exercise to make a table, that'd be boring! To help the user get a better idea of what has happened, we want this table to have a graphical representation (a timeline) above it, so they get a quick idea of when most events took place, i.e. did they all happen around the same time, are they bunched or were they spread out evenly over time?

# Acceptance criteria:
- A table is rendered with the events above (see the example JSON in this email's attachments).
- A timeline is rendered above the table with the same events.
- When the user hovers over an event in the timeline, the row in the table is highlighted visually (you may decide how)
- When the user hovers over a row in the table, the event in the timeline should be highlighted (you may decide how)
- The code is tested (we use Jasmine/Karma and https://github.com/ngneat/spectator, and don't write e2e tests ourselves, but feel free to use what works for you)

# Bonus ideas (optional):
- The user can click and drag in the timeline to zoom in on a specific area. The zoomed area is visually rendered.
- This zoom UI can be resized and moved to change where it's zoomed (like in the Chrome dev tools performance tab).

# Notes:
- Internally we use Angular Material, so feel free to use that if it makes things easier.
- We don't set rules on using dependencies, do what you think makes sense and what you think is 'good practice'.
- Mockups have been provided, but they're deliberately vague in some areas. Feel free to be creative!
- The REST API can be mocked and an example response is given in the attachments.
- Filtering can just be done on the client for now, no need for any server side filtering.
- Don't worry about mobile users for now, desktop with mouse is good enough.
- There's probably things that are unclear: feel free to ask, or be creative!
- Go as far as you like, we're interested in seeing what you can come up with.