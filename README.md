# FPS Room with Vite + React-Fiber

This project demonstrates how to create a cubic room with first-person shooter controls using Vite, React, React-Fiber, three.drei, and @react-three/rapier. The room has different colored walls for easy movement visibility, and collisions are implemented.

Install dependencies:

Code kopieren
npm install
Run the project:

npm run dev
Project Structure
index.html: The main HTML file.
src/: The source directory.
components/: Directory containing React components.
Room.jsx: Defines the cubic room with colored walls and collision detection.
FirstPersonControls.jsx: Implements first-person controls for moving within the room.
App.jsx: Main application file that integrates the room and controls.
main.jsx: Entry point for the React application.
index.css: Global styles.
Dependencies
three: JavaScript 3D library.
@react-three/fiber: React renderer for three.js.
@react-three/drei: Useful helpers for react-three-fiber.
@react-three/rapier: Physics library for react-three-fiber.
Usage
Use W, A, S, D keys to move.
Use Space key to jump.