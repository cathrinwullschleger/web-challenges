import { createServer } from "node:http";

export const server = createServer((request, response) => {
  if (request.url === "/api/fish/1") {
    response.end("Shrimp");
    response.statusCode = 200;
  } else if (request.url === "/api/fish/2") {
    response.end("Anemonefish");
    response.statusCode = 200;
  } else {
    response.end("Bot found");
    response.statusCode = 404;
  }
});
