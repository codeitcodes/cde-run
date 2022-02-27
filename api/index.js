
export default function handler(request, response) {
  response.status(200).send('<h1 style="font-family:system-ui">' + request.query + '</h1>');
}
