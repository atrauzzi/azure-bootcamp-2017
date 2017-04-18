## Docker & Azure App Service
### Azure Global Bootcamp 2017
#### [Winnipeg, Manitoba, Canada](https://global.azurebootcamp.net/locations/canada-winnipeg/)

Presented by [Alexander Trauzzi](http://twitter.com/Omega_)

This presentation offers a quick look at how you can use containers to wrap a simple example application with docker containers.

### Technologies

 - Linux
 - Docker
 - Nodejs
 - TypeScript

### Getting Ready

 - Docker for...
   - [Linux](https://docs.docker.com/engine/installation/)
   - [Windows](https://docs.docker.com/docker-for-windows/install/)
   - [Mac](https://docs.docker.com/docker-for-mac/install/)
 - Docker compose
 - Make sure port 8080 isn't already in use on your laptop if you want to see the map

### Running

If you're looking to run this project locally without any fuss, it's as easy as:

```
docker-compose up
```

### Developing

You can always customize the containerized installation to run the file watcher and code.  But if you're interested in developing without docker,
install nodejs on your system and do:

```
npm install -g yarn
yarn install
```

To run the server and drone, you can start individual instances with:

```
yarn server
yarn drone
```

For the server, if port `80` is already taken on your system, you can set an environment variable named `PORT` to whatever you wish and the server will use that instead.

For drones, they will look for a running `server` instance at `localhost`. You can similarly customize this hostname using `MASTER_HOST`.

### Meta

If you have any questions or are interested in having me present at your event, feel free to reach out!
