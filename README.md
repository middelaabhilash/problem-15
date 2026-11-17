# Problem 15

This project is a small Node.js exercise about handling HTTP requests and persisting incoming data.

## What this project does

The app starts a local HTTP server that:
- accepts only `POST` requests
- reads the request body
- appends the body to `data.txt`
- logs the current file contents
- responds with `Data received`

The server is defined in `index.js`, and it is started from `server.js`.

## Important files

- `index.js` — HTTP server logic
- `server.js` — starts the server on port `3000`
- `data.txt` — stores the appended request payloads
- `upload_project.js` — helper script used to zip the project and submit it to the platform
- `package.json` — project configuration and scripts

## How to run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

3. Send a POST request to the server:
   ```bash
   curl -X POST http://localhost:3000 -d "hello from the server"
   ```

4. Check `data.txt` to see the payload that was appended.

## What the challenge is about

The goal is to understand a very basic server behavior:
- reject unsupported methods (`GET`, `PUT`, etc.) with `405`
- read incoming data correctly
- write data to a file without losing earlier content
- keep the app simple and focused on request handling

This is a beginner-friendly exercise in Node.js networking and file I/O.

## Notes

- The server listens on port `3000`.
- `data.txt` is appended to, not overwritten.
- The app currently stores raw request data as a string and writes it directly to the file.

If you are reading this project for the first time, the main thing to understand is that the server is meant to collect incoming POST data and persist it locally.
