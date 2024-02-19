

# Pre setup

### for having two different directories owned by two different users:

```bash
chown 10000:10000 one

chown 10000:10000 two

chmod -R go-rx one two

docker-compose up -d
```
