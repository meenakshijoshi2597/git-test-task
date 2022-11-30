const http = require('http')
var agent = new http.Agent({});
const PORT = process.env.PORT || 3000
const options = {
  host: 'google.com',
  port: 80,
  path: '/',
  method: 'GET',
  agent: agent,
};
const server = http.createServer((req, res) => {
  if (req.url === '/') return respondHello(req, res)

  res.end()
})
// Requesting details via http server module
const req = http.request(options, (res) => {
  console.log("Headers: ", res.headers);
});

function respondHello (req, res) {
  res.end(JSON.stringify({ msg: 'hello' }))
}

server.listen(PORT)
console.log(`Server listening on port ${PORT}`)

if (require.main !== module) module.exports = server
