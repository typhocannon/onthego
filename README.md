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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Developer Notes
Completed Tasks:
DONE: 
    - Input Text
    - Logo ISH
    - Display Google Map on separate component
    -> Frontend Layout

TODO:
1. Map Component:
    - Current props: center, zoom
    - Want Props: start destination, end destionation
        1. Find path between start destination & end destination
            - maybe turn start destination and end destination into longitude and latitude (Geocoder)
            - Autocomplete addresses (Places API)

        2. display the path
        3. find the CENTER between the paths
        4. display the center
    - Center:
        1.
        - need to find center point between start destination and end destination to display
        - turn 
    - Take in props that centers where the user currently is and it's path to their destination
2. Yelp API:
    - Be Able to search what food they want
    - take account the distance
3. Combined Yelp API searches with Google Map Markers and destination
4. Style Map
