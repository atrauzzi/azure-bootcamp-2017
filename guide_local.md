## Docker & Azure App Service
### Azure Global Bootcamp 2017
#### [Winnipeg, Manitoba, Canada](https://global.azurebootcamp.net/locations/canada-winnipeg/)

Presented by [Alexander Trauzzi](http://twitter.com/Omega_)

### Local Guide
At any time in the presentation, if you're not sure what step we're on, let me know!

The first thing is to get an understanding of how docker works.  Following that, we need to make sure we've prepared everything so that we can send it all up to Azure.

Don't worry, I'll be explaining the commands along the way.

#### Step 1
To install Docker, follow the link that corresponds to your platform:

 - [Linux](https://docs.docker.com/engine/installation/)
 - [Windows](https://docs.docker.com/docker-for-windows/install/) - [requires Windows 10 Pro or Enterprise for Hyper-V](https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/reference/hyper-v-requirements)
 - [macOS](https://docs.docker.com/docker-for-mac/install/)

#### Step 2
Grab the project files in one of two ways:

 - The first is to check out the project repository using git:
   ```
   git clone git@github.com:atrauzzi/azure-bootcamp-2017.git
   ```
 - The second way is to [download a snapshot of the project from github](https://github.com/atrauzzi/azure-bootcamp-2017/archive/master.zip).

#### Step 3
Create the file `public/bootcamp-2017-webapp.env.json` and place the following in it:

```
{
    "GOOGLE_MAPS_API_KEY": "GOOGLE_MAPS_API_KEY_HERE",
    "GOOGLE_MAPS_CENTER_LAT": 49.8537377,
    "GOOGLE_MAPS_CENTER_LON": -97.2923061
}
```

#### Step 4
Build the container on your machine using this command:

```
docker build --tag azure-bootcamp-2017 .
```

#### Step 5
Run the built container on your machine by going:

```
docker run --rm --name azure-bootcamp-2017-server --publish 2112:80 azure-bootcamp-2017 server
```

Once running, [you can open the site up in your browser](http://localhost:2112).

It won't be too exciting, because we haven't run any drones yet!

#### Step 6
You can start a drone by opening a new terminal and running a new container with the same image.  This time however, you'll pass some special parameters:

```
docker run --rm --name azure-bootcamp-2017-drone --link azure-bootcamp-2017-server:server azure-bootcamp-2017 drone
```

---

That's all for this part of the demo!  [Head over to the next set of steps to continue](./guide_azure_registry.md).
