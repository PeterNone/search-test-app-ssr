# Info 

## Server Side Rendering (SSR)

I added Server Side Rendering to existing project.

This approach is hard to implement with Create React App startup that I used to make the initial application, but I manage to implement this.

SSR is usually done with custom server setup, I made my with Express.

All application routes start with server generated code and after all is loaded, React app is using it as startup point. Also, there is no initial request for data, Redux store from the server is reused as a startup point for client side application.

I made some app refactor to reuse all app with SSR. So only one code is maintained for updates, improvements, and fixes.

Some functionality is not available on the server. We need to keep in mind to verify and secure that part of the code.

## How to run

After installing all dependencies:

    npm install

We need to make a production build:

    npm run build

After the build is done, we can run a new Express server:

    npm run ssr
   
And visit application url:

    http://localhost:3000



## SEO

At this point, there is one code to maintain. So every SEO improvement inside the app will be transferred to SSR and will be picked up by search engine robots.

Next step in this app would be to add all titles, headers, alt and meta tags to it.