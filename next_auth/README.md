This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

``` 
    .
    ├── /public
    ├── /src
    |    ├── /components
    |    |    ├── /auth
    |    |    |    ├── login-form.js
    |    |    |    ├── register-form.js
    |    |    |    └── logout-button.js
    |    |    |
    |    |    ├── /profile
    |    |    |    ├── profile-card.js
    |    |    |    └── profile-settings.js
    |    |    |
    |    |    ├── /dashboard
    |    |    |    ├── dashboard-card.js
    |    |    |    └── dashboard-settings.js
    |    |    |
    |    |    ├── /admin
    |    |    |    ├── admin-card.js
    |    |    |    └── admin-settings.js
    |    |    |
    |    |    ├── /common
    |    |    |    ├── header.js
    |    |    |    └── footer.js
    |    |    |
    |    |    ├── /layout
    |    |    |    ├── layout.js
    |    |    |    └── sidebar.js
    |    |    |
    |    |    ├── /ui
    |    |    |    ├── button.js
    |    |    |    ├── input.js
    |    |    |    └── select.js
    |    |    |
    |    |    └── /utils
    |    |         ├── api.js
    |    |         └── auth.js
    |    |
    |    ├── /hooks
    |    |    ├── useAuth.js
    |    |    └── useUser.js
    |    |
    |    ├── /lib
    |    |    ├── /auth
    |    |    |    ├── login.js
    |    |    |    ├── register.js
    |    |    |    └── logout.js
    |    |    |
    |    |    ├── /profile
    |    |    |    ├── profile.js
    |    |    |    └── settings.js
    |    |    |
    |    |    ├── /dashboard
    |    |    |    ├── dashboard.js
    |    |    |    └── settings.js
    |    |    |
    |    |    ├── /admin
    |    |    |    ├── admin.js
    |    |    |    └── settings.js
    |    |    | 
    |    |    └── /utils
    |    |         ├── api.js
    |    |         └── auth.js
    |    |
    |    ├── /pages
    |    |    ├── /auth
    |    |    |    ├── login.js
    |    |    |    ├── register.js
    |    |    |    └── logout.js
    |    |    |
    |    |    ├── /profile
    |    |    |    ├── [id].js
    |    |    |    └── /settings
    |    |    |         ├── index.js
    |    |    |         └── password.js
    |    |    |
    |    |    ├── /dashboard
    |    |    |    ├── index.js
    |    |    |    ├── /reports
    |    |    |    |    ├── index.js
    |    |    |    |    └── [id].js
    |    |    |    └── /settings
    |    |    |         ├── index.js
    |    |    |         └── /team
    |    |    |              ├── index.js
    |    |    |              └── [id].js
    |    |    |
    |    |    ├── /admin
    |    |    |    ├── index.js
    |    |    |    └── /users
    |    |    |         ├── index.js
    |    |    |         └── [id].js
    |    |    |
    |    |    ├── index.js
    |    |    ├── _app.js
    |    |    └── _document.js
    |    |
    |    ├── /styles
    |    |    ├── globals.css
    |    |    ├── theme.js
    |    |    └── index.js
    |    |
    |    └── /utils
    |         ├── api.js
    |         └── auth.js
    |
    ├── .gitignore
    ├── package.json
    ├── README.md
    └── yarn.lock
```

/src
  |
  └── /pages
       |
       ├── /auth
       |    ├── login.js
       |    ├── register.js
       |    └── logout.js
       |
       ├── /profile
       |    ├── [id].js
       |    └── /settings
       |         ├── index.js
       |         └── password.js
       |
       ├── /dashboard
       |    ├── index.js
       |    ├── /reports
       |    |    ├── index.js
       |    |    └── [id].js
       |    └── /settings
       |         ├── index.js
       |         └── /team
       |              ├── index.js
       |              └── [id].js
       |
       ├── /admin
       |    ├── index.js
       |    └── /users
       |         ├── index.js
       |         └── [id].js
       |
       ├── index.js
       ├── _app.js
       └── _document.js

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
