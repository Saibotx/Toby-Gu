import React from "react";
import { extractCritical } from "emotion-server";
import { renderToString } from "react-dom/server";

// Read the docs at https://github.com/nozzle/react-static/blob/master/README.md to learn more!
export default {
  // siteRoot: "http://tobygu.com/",
  paths: {
    src: "src", // The source directory. Must include an index.js entry file.
    dist: "docs", // The production output directory.
    devDist: "dist", // The development scratch directory.
    public: "public" // The public directory (files copied to dist during build)
  },
  getRoutes: async ({ dev }) => [
    {
      path: "",
      component: "src/pages/Home"
    },
    {
      path: "engineer",
      component: "src/pages/Work"
    },
    {
      path: "photographer",
      component: "src/pages/Photography"
    },
    // A route with data
    // {
    //   path: "portfolio",
    //   component: "src/containers/Portfolio",
    //   getData: async () => ({
    //     portfolio
    //   })
    // }
  ],
  Document: class CustomHtml extends React.Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props;
      // const script1 = "window.child_process = require('child_process')";
      let extractedComp = extractCritical(renderToString(children));
      return (
        <Html lang="en-US">
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link
              href="data:image/x-icon;base64,AAABAAEAEBAAAAAAAABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAP8AAAAAAAAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/////1////9f////X////1////9f////UAAAD/AAAA/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////9f////X////1////9f////X////1////9f////X////1AAAA/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAA//////UAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA//////X////1AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAD/////9QAAAP/////1AAAA//////8AAAD//////wAAAP8AAAD/////9f////UAAAD/AAAAAAAAAAAAAAAAAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP//////AAAA/wAAAP/////1////9QAAAP8AAAAAAAAAAAAAAP///////////wAAAP8AAAD/////////////////AAAA/wAAAP8AAAD/////9QAAAP/////1AAAA/wAAAAAAAAD//////////////////////wAAAP//////////////////////////9QAAAP8AAAD/////9QAAAP8AAAD///////////8AAAD/AAAA/////////////////wAAAP8AAAD//////wAAAP8AAAD/////9f////UAAAD/AAAA//////8AAAD/AAAA/wAAAP//////AAAA/wAAAP8AAAD/AAAA///////////1////9f////UAAAD/AAAAAAAAAAAAAAD/////////////////////////////////////////////////////9f////UAAAD/AAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////////X////1AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAIH/AAAAPwAAAA8AAAAHAACAAwAAgAEAAIAAAACAAAAAAAAAAAABAACAAwAAgAMAAMAHAAD//wAA//8AAA=="
              rel="icon"
              type="image/x-icon"
            />
            <title>Toby Gu</title>
            <meta
              name="description"
              content="Toby Gu - Senior Software Engineer, Designer, Front End Lead Developer. Photographer, Entrepreneur & Traveller"
            />
            <meta property="og:title" content="Toby Gu"/>
            <meta property="og:image" content="https://instagram.fsnc1-1.fna.fbcdn.net/vp/7dbcb722211942948e69d139644ce6b7/5B3F184A/t51.2885-19/s320x320/27892524_148576692477522_3328026375050231808_n.jpg"/>
            <meta property="image" content="https://instagram.fsnc1-1.fna.fbcdn.net/vp/7dbcb722211942948e69d139644ce6b7/5B3F184A/t51.2885-19/s320x320/27892524_148576692477522_3328026375050231808_n.jpg"/>
            {renderMeta.styleTags}
            {/* <script dangerouslySetInnerHTML={{ __html: script1 }} /> */}
            <style type="text/css">{extractedComp.css}</style>
          </Head>
          <Body style={{ margin: 0 }}>{children}</Body>
        </Html>
      );
    }
  }
};

// import axios from 'axios'
//
// export default {
//   getSiteData: () => ({
//     title: 'React Static',
//   }),
//   getRoutes: async () => {
//     const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
//     return [
//       {
//         path: '/',
//         component: 'src/containers/Home',
//       },
//       {
//         path: '/about',
//         component: 'src/containers/About',
//       },
//       {
//         path: '/blog',
//         component: 'src/containers/Blog',
//         getData: () => ({
//           posts,
//         }),
//         children: posts.map(post => ({
//           path: `/post/${post.id}`,
//           component: 'src/containers/Post',
//           getData: () => ({
//             post,
//           }),
//         })),
//       },
//       {
//         is404: true,
//         component: 'src/containers/404',
//       },
//     ]
//   },
// }
