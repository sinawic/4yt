

# Caddy bot detection

- Site Block (example.com): Replace example.com with your actual domain.
- Request Matcher (@blockBots): This matcher checks if the User-Agent header contains curl or wget. You can expand this list to include other bots if necessary.
- Response Action: The line respond @blockBots "Access Denied" 403 will respond with a 403 Forbidden status and the message "Access Denied" whenever a request matches the @blockBots criteria.
- Site Configuration: The root and file_server directives serve your website as usual.
