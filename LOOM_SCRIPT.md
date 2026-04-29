# Loom Demo Script

## Goal

Record a 3 to 5 minute walkthrough that proves:

- the problem is real
- the AI solution is relevant to Mumzworld
- the prototype works
- you understand how to measure success

## Suggested Opening

“Hi, I’m [Your Name], and this is my submission for the Mumzworld AI Intern challenge. I’m confirming **Track B**.

I focused on a real shopping problem for first-time moms: they often do not know what to actually buy, what is optional, and what they can skip. That uncertainty creates overwhelm and can slow down purchase decisions. So I built an AI-powered Mumzworld Checklist Builder that gives personalized shopping guidance in English, Arabic, or both.”

## Part 1: Show the Product

Say:

“This is the prototype homepage. The user first adds a Groq API key for local testing. Then they fill in the baby’s age or due date, budget, any special concerns, and preferred language.”

Do:

- Show the Groq API key field
- Mention that the key is stored only in browser local storage
- Show the form inputs

## Part 2: Show a Real Generation

Say:

“Now I’ll generate a checklist for a first-time mom with a practical use case.”

Use example input:

- Age or due date: `due in 6 weeks`
- Budget: `500-1,500 AED`
- Concerns: `breastfeeding, sensitive skin`
- Language: `Both`

Then click generate.

While it loads, say:

“The backend sends this request to Groq and returns a personalized checklist. The output is structured around essentials, nice-to-haves, and items to skip, which helps reduce decision fatigue and overspending.”

## Part 3: Show the Output

Point out:

- personalized checklist structure
- essential vs optional recommendations
- bilingual output
- practical tone
- price-aware guidance in AED

Say:

“This is useful because the user isn’t starting from a product search. They’re starting from uncertainty. The assistant helps them plan before they browse the catalog.”

## Part 4: Show Validation or Error Handling

Say:

“I also added basic product-quality behaviors for the prototype.”

Do one quick example:

- Clear the age field and try submit, or
- Mention the invalid API key error state

Say:

“The app handles missing inputs and API issues clearly, so the experience is not just a demo screen but a working prototype with real request handling.”

## Part 5: Explain Why This Matters to Mumzworld

Say:

“I chose this problem because it sits close to purchase intent. A user who asks ‘what should I buy?’ is already on the path to conversion. If Mumzworld helps them plan more confidently, that can improve trust, product discovery, and shopping intent.”

## Part 6: Explain Measurement Plan

Say:

“If this were launched, I would measure checklist generation rate, click-through to products, add-to-cart rate after checklist usage, conversion uplift versus a static guide, and Arabic usage rate. I’d also run an A/B test between a normal static checklist and this personalized AI assistant.”

## Closing

Say:

“To summarize, I identified a real planning problem in baby-commerce, used AI where personalization is genuinely useful, built a working multilingual prototype with a real backend, and defined a simple plan to measure business impact. Thank you for reviewing my submission.”

## Recording Tips

- Keep the recording under 5 minutes
- Zoom browser text to 110% or 125% if needed
- Record one successful generation and one quick validation/error state
- Keep the README open in another tab in case you want to reference the metrics or framing
