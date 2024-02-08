const publicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2a1dttjCODGWo9dIALqX
6PAsZtJ7EZgX2AKxQEfFiSeb3H3gWk74CvexzmFWlgs5aGC+UmnoeMPaUk5i9O4S
s4d8+qPKxlAOGBmfMeAiYBDAZ7aNfLwTQAAuGQ9e0woSL6gkvVnTCH8MbEaI1Erf
7eQFRB9QDAhmtHK7oQrD0Q3e1GJV8SFNPs+1jdgZ4GLuHAGSFqKBjUTLdYhCjw3e
iDsKkfUhZs51eBd512ijrZqyeCocF9Npmu9TzxXfpuegXtqKFy82DB6r8wMFEZ1U
1ysP/cRgWCxcCjNaaTrw71FB9dNAu8BzoVHgN+MXJcxE4gveZzG53qXfdOwHTw5k
OQIDAQAB
-----END PUBLIC KEY-----`;

export default function handler(req, res) {
  // Envie apenas a chave pública no JSON de resposta
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    public_key: publicKey
  });
}
