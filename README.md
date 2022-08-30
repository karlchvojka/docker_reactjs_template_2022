# Dockerized ReactJS Template 2022

This is a CRA Alternative to be used to bootstrap new projects.

The application has been pre-configured for a dev based Docker image.

## Requirements
Make sure you are running the following:  
Node v18.7.0+  
Npm v8.15.0+  
Docker 20.10.17+

## Packages installed and configured
As this is a template, only the basics are installed:

- ReactJS v18.2.0
- Webpack v5.74.0
- Babel v7.18.10

## Getting started
Fork repo into a directory, and cd into it.

___
## ReactJS commands
___

### Installing
Run `npm install`

### Starting the app
Run `npm start`

This will start the app, via webpack, open your default browser, and serve it to [http://localhost:9500](http://localhost:9500)

### Building the app
Run `npm run build`
___
## Docker Commands:
___

### Build Docker Image
Run `docker build -f Dockerfile.dev -t <image name/tag name> .`

### Run Docker Image within container
Run `docker run -d -p [host_port]:[container_port] karlchvojka/react_template_2022`