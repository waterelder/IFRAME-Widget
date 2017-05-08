# Template for IFRAME widget 

### [DEMO](https://stormy-escarpment-82619.herokuapp.com/test.html)
The Project consists of two parts:
1. The script that creates a iframe and manage it on the client page; 
2. The React App that render in iframe;

### How add the widget on the client webiste:

1. Host project;


2. Add this into the `<head>` tag on a client website:

```html
<script src="%URL_TO_WEBSERVER%/widget.js"></script>`
```
3. Add this into the `<body>` tag a on client website:
```html
   <div id="SMS_Widget"> 
         <script type="text/javascript">
             new Widget().init();
         </script>
     </div>
```

### Setup

```
$ git clone git@github.com:EvercodeLab/Widget-prototype.git
$ yarn install
$ yarn start  //starts compile-watch-serve a React app
$ yarn start-client  //!!important!!need to be run in the another instance of terminal. starts watch-compile the widget script/ TODO: Unite in one command
```
A test page for the plugin: [http://localhost:3000/test.html](http://localhost:3000/test.html)

##### Optionaly:
For support the Flow syntax and a higlight you need to tune your IDE: 

For JetBrains products:
File->Settings->Languages & Frameworks-> JavaScript

'JavaScript language version' set: 'Flow' 

'Flow executable' set: %PROJECT_PATH%/node_modules/.bin/flow

### Build

```
$yarn build
$yarn build-client  
```
The test page for plugin: [http://localhost:3000/test.html] [http://localhost:3000/test.html]

##### Optionaly:
To run this staff:
```
$ npm install -g serve
/%PROJECT_FOLDER%$ serve build

```


### The script: 
##### Source:
/client_src/widget.js


### The React App:
A Toolbelt:

+ [React](https://facebook.github.io/react/)
+ [Redux](http://redux.js.org/)
+ [Flow](https://flowtype.org/)
+ [Semantic-ui](https://semantic-ui.com/)
+ [ES6](http://es6-features.org/)
+ [Babel](https://babeljs.io/)
+ [WebPack](https://webpack.github.io/)
+ [create-react-app boilerplate](https://github.com/facebookincubator/create-react-app)


### Structure:

/build - compiled/builded sources   
/client_src - the client plugin sources  
/flow-typed - Flow library definition files    
/public - static stuff  
/src - react app sources  

For more information: [link](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#folder-structure)