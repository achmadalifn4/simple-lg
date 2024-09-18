const { ping, traceroute, whoisLookup } = require('../src/networkTools');

test('ping should return a response containing "bytes from"', () => {
  const result = ping('example.com');
  expect(result).toContain('bytes from');
});

test('traceroute should return a response containing "traceroute to"', () => {
  const result = traceroute('example.com');
  expect(result).toContain('traceroute to');
});

test('whoisLookup should return a response containing "Domain Name"', () => {
  const result = whoisLookup('example.com');
  expect(result).toContain('Domain Name');
});
