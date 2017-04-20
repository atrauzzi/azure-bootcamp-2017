## Docker & Azure App Service
### Azure Global Bootcamp 2017
#### [Winnipeg, Manitoba, Canada](https://global.azurebootcamp.net/locations/canada-winnipeg/)

Presented by [Alexander Trauzzi](http://twitter.com/Omega_)

### Azure App Service Guide
At any time in the presentation, if you're not sure what step we're on, let me know!

By now you should have an image pushed up to your own private Azure Container registry.  What we're going to work on now is starting the server and then some drones.  

As before, when creating resources, use the region `West US` when prompted.

#### Step 1
To manage everything for us, we're going to use the [Linux version of Azure App Service](https://docs.microsoft.com/en-us/azure/app-service/app-service-linux-readme).

_(although still in preview, it's quite stable, and easy to use)_

 - [Create a Linux Web App](https://portal.azure.com/#create/Microsoft.AppSvcLinux)
   - Give it a personal, unique name that ends with `server`
   - Create a new service plan, specifying a region and name
   - Select _Configure Container_ and supply the following for the values
     - _Image and Optional Tag_ - `[ADMIN_SERVER]/azure-bootcamp-2017`
     - _Server URL_ - `https://[ADMIN_SERVER]`
     - _Login Username_ - `[USERNAME]`
     - _Login Password_ - `[PASSWORD]`
     - _Startup File_ - `server`
   
Similar to before, give Azure a few moments to provision and configure your new App Service instance.

#### Step 2
Just like when we were running it locally, if you visit the site, you should be greeted by an empty google map.  What we'd like to do now is get some drones calling our server!

Go back to your resource group and let's add another Linux App Service instance with the same configuration that we used from _Step 1_, except this time, we'll set _Startup File_ to `drone`.

You can reuse your existing Linux App Service Plan for the new instance.

#### Step 3
Our drone should be up and running.  Drones don't publish any kind of web interface, so there won't be anything to check there.

We do however have to configure one small detail and that's to tell it which server to report to.

We can do this by configuring an environment variable `MASTER_HOST` in our drone App Service instance.  Bring it up in your Azure portal and click _Application Settings_.  Create a new _App Setting_ called `MASTER_HOST` with a value of the hostname of your server (the same one you go to in your browser to view it).

Once you've saved that, click _Overview_ in the menu and then click the `Restart` button at the top to cycle the service.