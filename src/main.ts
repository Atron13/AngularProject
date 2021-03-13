import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule) //start entry point of the angular project and compile the application using  the jit 
  .catch(err => console.error(err));                //compiler and bootstrap the application root module (AppModule) to run in the browser

//every angular project has atleast one module and one component

//polyfill.ts : is used to fill the gap between the feature of javascript that angular need and the feature supported by the current browser
//style.css : is used to provide the custom style to our application
//test.ts : is used to set our testing environment

//angular.json : is used as the configration file for the angular cli project not required everytime
//editorconfig.json : is used as the configration of editor setting
//gitignore : is used for storing the repository in github and exclude certain file form them
//karma.conf.js : is used as the configration of karma which is the test runner for javascript code

//package.json : is used to store the version detail, name as well as the dependencies that are used in the project when the thried party libaries are used they are add in this file
  //dependencies used by the project and third party dependencies if any
  //devdependencies used for developing purpose and not the running the project
  //script part is uesd when the npm start command is used it execute what is stored in the script
//protrator.config.js : is used of rrunnign end to end test not used evertime
//tsconfig.json : is used as the configration file for the typescript conpiler in complex project not used everytime
//tslint.json : is used as the configration of tslint it is the static analysis tool for the typescript code for readability, maintanability and functionability of typescript code


//executing
//webpack compiling : is build automation tool that take script and style sheet and combine them in bundle and minimise them for optimization
//main.bundle.js : are all source script of our application
//styles.bundle.js : are all style sheet of our application
//vender.bundle.js : are the third party libaries
//in index.html we dont have to provide any reference to our style sheet or file it is done at runtime by webpack

//hmr (hot module replacement) : is used for auto change when source file is modified webpack automatically refresh the browser
