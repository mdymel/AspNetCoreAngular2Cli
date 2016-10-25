Blog: https://devblog.dymel.pl/2016/10/25/angular2-cli-with-aspnet-core-application-tutorial/

Seed project demonstrating a setup of an application using ASP.NET Core for backend and Angular2 for frontend, using Angular CLI tool to create and manage builds. 

# To Debug
1. Run command prompt, enter /src/Frontend/src directory and execute `npm start`. This will start webpack dev server and direct `/api` calls to backend application. 
1. Start Backend application from VisualStudio

# To build 
1. Run `npm build` from command prompt in /src/Frontend/src directory. This will build the angular application and copy it to wwwroot directory in backend application
1. Publish Backend application from VisualStudio or use the dotnet cli. 