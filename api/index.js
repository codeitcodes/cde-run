
export default function handler(request, response) {
  
  //const html = '<h1 style="font-family:system-ui">' + request.query + '</h1>';
  
  response.status(200).send(request.query);
  
}
