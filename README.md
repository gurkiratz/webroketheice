# We Broke The Ice

[![GDSC Hacks 2024](https://img.shields.io/badge/GDSC%20Hacks%202024-red)](https://www.gdschacks.com/)
[![MLH](https://img.shields.io/badge/MLH-yellow)](https://mlh.io/)
[![Hackathon Winner](https://img.shields.io/badge/Hackathon%20Winner-blue)](https://devpost.com/software/breaktheice)
[![MLH](https://img.shields.io/badge/Best%20UI%20Hack-orange)](https://devpost.com/software/breaktheice)

The web application centralizes icebreaker ideas for easy access and intuitive step-by-step instructions. It also allows users to select a combination of tags which will send a request to Google Gemini for an icebreaker that meets all the selected criteria. Upon satisfaction, the user will accept the request and it will be added to a global database

[Live](https://webroketheice.vercel.app/)

[Devpost](https://devpost.com/software/breaktheice)

## Tech Stack

**Client:** Next.js, TypeScript, TailwindCSS

**Authentication:** NextAuth

**Database:** Prisma ORM, PostgreSQL

## Getting Started

First, install dependencies:

```bash
npm install
```

And then run the project:

```bash
npm run dev
```

## Environment Variables

To setup authentication via Google OAuth, you will need to add the following environment variables to your .env file

`GOOGLE_CLIENT_ID`

`GOOGLE_CLIENT_SECRET`

`NEXTAUTH_URL=http://localhost:3000/`

`NEXTAUTH_SECRET`

`DATABASE_URL`

## Acknowledgements

This is a [Subframe](https://subframe.com) Next.js Starter Kit that provides just enough configuration to get off and running with Subframe.
