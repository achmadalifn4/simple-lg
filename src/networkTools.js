const { execFileSync } = require('child_process');

function ping(host) {
  try {
    return execFileSync('/usr/bin/ping', ['-c', '4', host]).toString();
  } catch (error) {
    return 'Skillmu masih ampas dek';
  }
}

function traceroute(host) {
  try {
    return execFileSync('/usr/bin/traceroute', [host]).toString();
  } catch (error) {
    return 'Skillmu masih ampas dek';
  }
}

function whoisLookup(domain) {
  try {
    return execFileSync('/usr/bin/whois', [domain]).toString();
  } catch (error) {
    return 'Skillmu masih ampas dek';
  }
}

module.exports = { ping, traceroute, whoisLookup };
