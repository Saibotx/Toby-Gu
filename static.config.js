import React from "react";
// Though this file is optional, there are SO MANY COOL THINGS you can do here.
// Read the docs at https://github.com/nozzle/react-static/blob/master/README.md to learn more!
export default {
  // siteRoot: "https://saibotx.github.io/anata-react-static/",
  paths: {
    src: 'src', // The source directory. Must include an index.js entry file.
    dist: 'docs', // The production output directory.
    devDist: 'dist', // The development scratch directory.
    public: 'public', // The public directory (files copied to dist during build)
  },
  Document: class CustomHtml extends React.Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props;
      // const script1 = "window.child_process = require('child_process')";
      // const script2 =
      //   "window.lazySizesConfig = window.lazySizesConfig || {}; window.lazySizesConfig.loadMode = 1"
      return (
        <Html lang="en-US">
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <title>Toby Gu</title>
            <meta name="description" content="Toby Gu - Senior Software Engineer, Designer, Front End Lead Developer. Photographer, Entrepreneur & world Traveller"/>
            {renderMeta.styleTags}
            {/* <script dangerouslySetInnerHTML={{ __html: script1 }} /> */}
            {/* <script dangerouslySetInnerHTML={{ __html: script2 }} /> */}
            {/* <script async defer src="https://apis.google.com/js/api.js" /> */}
            {/* <script src="https://www.paypalobjects.com/api/checkout.js" /> */}
          </Head>
          <Body style={{margin:0}}>{children}</Body>
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
