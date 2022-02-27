
export default function handler(request, response) {
  //' + request.query + '
  
  response.status(200).send('<h1 style="font-family:system-ui">Hello world!</h1>');
}
