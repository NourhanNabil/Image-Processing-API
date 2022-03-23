# Image Processing API
### Project #1 - Full Stack Development Nanodegree by Udacity
Image processing API, uses query parameters to serve resize images.
In order to get an image you need to provide the imageName, and also the wanted width **and** height via url query parameters. 
If one param is missing, you get an information about the missing parameter.

## NODEJS SETUP
```bash
 npm init
# Type in your terminal too create package.json
```
## PRETTIER & ESLINT SETUP
```bash
npm i --save-dev prettier
npm i --save-dev eslint
npm i --save-dev eslint-config-prettier
npm i --save-dev eslint-plugin-prettier
npm i --save-dev @typescript-eslint/eslint-plugin
npm i --save-dev @typescript-eslint/parser
# Type in your terminal to install those packages as dev-dependences
# create files in the same place with package.json .prettierrc .eslintrc.js
```
## PRETTIER & ESLINT CONFIGURATION
```bash
"lint": "eslint src/*.ts ",
"lint:f": "eslint src/*.ts --fix",
"prettier": "prettier --config .prettierrc 'src/**/*.ts' --write",
# Type in package.json under scripts
```

## TYPESCRIPT SETUP
```bash
 npm i typescript # save to dependencies
 npm i typescript --save-dev # save to devDependencies
 npm i ts-node --save-dev # save to devDependencies
 # in Package.json 
"scripts": {
    "build": "npx tsc"
  },
 # create tsconfig.json file and configure it 
```

## JASMINE SETUP
```bash
# For unit testing 
 npm i jasmine  # save to dependencies
 npm i jasmine-spec-reporter # save to dependencies
npm i --save-dev @types/jasmine # save to devDependencies
 # in Package.json 
"scripts": {
   "jasmine": "jasmine",
   "test": "npm run build && npm run jasmine",
  },
 # create jasmine.json file and configure it 
```
## ENDPOINT TESTING SETUP
```bash
npm i supertest  # save to dependencies
npm i --save-dev @types/supertest.  # save to devDependencies
# import SuperTest in the spec file.
```

## SERVER SETUP
```bash
npm i express  # save to dependencies
npm i --save-dev @types/express  # save to devDependencies
npm i --save-dev nodemon  # save to devDependencies
"scripts": {
    "start": "nodemon src/index.ts",
  },
```
## FOR IMAGE RESIZING 
```bash
#Sharp package will be installed 
npm i sharp  # save to dependencies
npm i --save-dev @types/sharp  # save to devDependencies
```
## ENDPOINT API
#### API path
`/images`

#### Query Parameters
Parameters are added to the url. First parameter is added by question mark `?` followed by the name of the parameter followed by the equal sign `=` and the value.
Any other parameter then is added by an ampersand `&`.

Example Url with parameters:
`http://localhost:3000/images?imageName=fjord&width=200&height=100`

### Available parameters

| Parameters |  |  |
| ------------------ | ------------------ |  ------------------ |
| imageName | any image name listed below | required|
| width | set any image width | optional |
| height | set any image height | optional |

### Available imageName
- encenadaport
- fjord
- icelandwaterfall
- palmtunnel
- santamonica

