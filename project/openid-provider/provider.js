const express = require('express');
const app = express();

app.get('/.well-known/openid-configuration', (req, res) => {
  res.json({
    issuer: "http://openid-provider:8000",
    authorization_endpoint: "http://openid-provider:8000/auth",
    token_endpoint: "http://openid-provider:8000/token",
    userinfo_endpoint: "http://openid-provider:8000/userinfo"
  });
});

app.listen(8000, () => {
  console.log('OpenID Provider running on port 8000');
});
