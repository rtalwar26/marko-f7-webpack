// Import Vue
// import Vue from 'vue';

// Import Framework7
// import Framework7 from 'framework7/framework7-lite.esm.bundle.js';


import 'framework7/css/framework7.bundle.css';


require('../css/icons.css');
require('../css/app.scss');


const Main = require('../components/app/index.marko');


Main.renderSync({}).replace(document.getElementById('app'));
