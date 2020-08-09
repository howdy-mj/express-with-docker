# 명령어

```
# build docker image
$ docker build -t <your username>/node-web-app .

# run dokcer image
$ docker run -p 49160:8080 -d <your username>/node-web-app

# Get container ID
$ docker ps

# Print app output
$ docker logs <container id>

# Example
Running on http://localhost:8080

# Enter the container
$ docker exec -it <container id> /bin/bash
```

참조: https://nodejs.org/fr/docs/guides/nodejs-docker-webapp/