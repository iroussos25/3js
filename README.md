# Interactive 3D Storefront

An interactive 3D product visualization built with Three.js and WebGL. Features custom shader work, smooth camera controls, and a client/server architecture for asset management.

**[Live Demo](https://3js-swart-theta.vercel.app/)**

---

## What it does

Renders a 3D product environment in the browser where users can rotate, zoom, and interact with objects in real time. Built to explore what's possible with WebGL for product visualization and interactive storefronts.

## Architecture

The project uses a client/server split:

- **Client:** Three.js scene with custom materials, lighting, and camera controls. Targets 60fps on mobile devices.
- **Server:** Asset serving and API layer for product data.

## Key technical details

- Three.js scene graph with custom geometry and materials
- WebGL rendering pipeline with performance optimization for mobile
- Interactive camera controls (orbit, zoom, pan)
- Client/server architecture with separated concerns
- Responsive canvas that adapts to viewport changes

## Run locally
```bash
git clone https://github.com/iroussos25/3js.git
cd 3js

# Start the server
cd server
npm install
npm start

# In a new terminal, start the client
cd client
npm install
npm start
```

## Tech stack

JavaScript, Three.js, WebGL, HTML5, CSS3, Node.js

## Why I built this

I wanted to understand 3D rendering fundamentals at the WebGL level rather than just using pre-built components. This project was an exercise in working with scene graphs, custom shaders, and rendering performance constraints.

## Contact

Giannis Roussos - [giannisroussos.com](https://giannisroussos.com) | [LinkedIn](https://linkedin.com/in/giannisr) | grcodes@outlook.com
