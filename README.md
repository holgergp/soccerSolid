# halbton-solid
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/holgergp/soccerSolid)
![Node.js CI](https://github.com/holgergp/soccerSolid/workflows/Node.js%20CI/badge.svg)
[![soccer-solid](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/bsbvqw/main&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/bsbvqw/runs)
[![Netlify Status](https://api.netlify.com/api/v1/badges/d77f6260-ad18-4cc9-bdc6-8de5841121cd/deploy-status)](https://app.netlify.com/sites/soccer-solid/deploys)

This is an attempt to implement the soccer-app in [solidjs](https://www.solidjs.com/).

You can find the current main branch deployed [here](https://soccer-solid.netlify.app/)

This is based on the solidjs app template which docs you can find below:

The backend for this repo was done using [Darklang](https://darklang.com/). For now it consists of [this](https://holgergp.builtwithdark.com/league-table) api call.

## Usage

Those templates dependencies are maintained via [pnpm](https://pnpm.io) via `pnpm up -Lri`.

This is the reason you see a `pnpm-lock.yaml`. That being said, any package manager will work. This file can be safely be removed once you clone a template.

```bash
$ npm install # or pnpm install or yarn install
```

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `npm dev` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)
