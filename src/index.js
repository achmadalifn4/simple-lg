const express = require('express');
const { ping, traceroute, whoisLookup } = require('./networkTools');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <h1>ID Networkers Looking Glass Tool</h1>
    <form method="post" action="/execute">
      <label for="input">Enter Host/Domain:</label>
      <input type="text" name="input" required>
      <select name="action">
        <option value="ping">Ping</option>
        <option value="traceroute">Traceroute</option>
        <option value="whois">Whois</option>
      </select>
      <button type="submit">Execute</button>
    </form>
  `);
});

app.post('/execute', (req, res) => {
  const { action, input } = req.body;
  let result = '';

  switch (action) {
    case 'ping':
      result = ping(input);
      break;
    case 'traceroute':
      result = traceroute(input);
      break;
    case 'whois':
      result = whoisLookup(input);
      break;
    default:
      result = 'Invalid action.';
  }

  res.send(`<pre>${result}</pre>`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
