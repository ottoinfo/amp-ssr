# AMP Pages

This repo is used to create and test AMP pages using React and Styled components

## Contents

- [Usage](#usage)
- [Packages](#packages)
- [Folder Structure](#folder)

## Usage

Install Node Modules

```
yarn
```

Production Build Files

```
yarn build
```

Start Production Server

```
yarn server
```

Local Build (Watch and Rebuilds Webpack and Node Server) ** HMR not available **

```
yarn dev:webpack
```

```
yarn dev:server
```

Test your AMP Syntax

```
yarn test
```

## Packages

- [React](https://github.com/facebook/react)
- [Styled-Componets](https://github.com/styled-components/styled-components) & [Styled-System](https://github.com/jxnblk/styled-system)
- [React Amp Template](https://github.com/Ariel-Rodriguez/react-amp-template)

## Folder Structure

```
dist
└── pages.js ( Webpack Build File )
middleware
└── amp.js ( Express Routes, uses `dist/pages.js` to display pages )
src
└── apps
│ └── PrintDetail.js
└── components
│ └── *.js
└── metadata
│ └── PrintDetail.js ( <Head /> Info )
└── pages
│ └── PrintDetail.js ( Pulls in App, Metadata and renders a HTML string )
└── ssr
│ └── HTML.js ( Base HTML Doc )
│ └── index.js ( SSR() -> Builds React App and renderToString() )
└── theme.js
└── types.js
tests
└── validatePages ( `yarn test`, checks AMP markup )
```
