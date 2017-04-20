## Docker & Azure App Service
### Azure Global Bootcamp 2017
#### [Winnipeg, Manitoba, Canada](https://global.azurebootcamp.net/locations/canada-winnipeg/)

Presented by [Alexander Trauzzi](http://twitter.com/Omega_)

### Azure Registry Guide
At any time in the presentation, if you're not sure what step we're on, let me know!

So now that we've had a look at what docker is like and how it works, let's try running the exact same images we built on Azure!

When creating resources, use the region `West US` when prompted.

#### Step 1
We need to set up a new resource on Azure so that we have somewhere to hold our images.  This resource type is known as a [container registry](https://azure.microsoft.com/en-ca/services/container-registry/).  While Docker offers their own registry service, Microsoft also offers one that is billed and managed from Azure.

Go into Azure and perform the following tasks:

 - [Create an Azure Container Registry](https://portal.azure.com/#create/Microsoft.ContainerRegistry)
   - Give it a personal, unique name
   - Say _yes_ to enable the admin user
   - You can either use an existing storage account, or create a new one
   - Once created, go to the container service and make a note of the _login server_, admin _username_ and one of the two _passwords_. You'll need them for the next step.

#### Step 2
Authenticate to your Azure Container Registry using the `docker` command:
```
docker login [ADMIN_SERVER] -u [USERNAME] -p [PASSWORD]
```

#### Step 3
Tag the local image we built earlier:
```
docker tag azure-bootcamp-2017 [ADMIN_SERVER]/azure-bootcamp-2017
```

Tagging the image in this way helps docker know where to send the image when we push it.

#### Step 4
Ask docker to push the image:
```
docker push [ADMIN_SERVER]/azure-bootcamp-2017
```

As you can see, it infers the registry the image must be sent to based how the image was tagged.

Give this step the time it needs to complete and then take a look at the list of images in your container registry!

---

That's all for this part of the demo!  [Head over to the next set of steps to continue](./guide_azure_app_service.md).
