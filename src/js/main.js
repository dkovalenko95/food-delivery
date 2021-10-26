'use strict';

const { data } = require("browserslist");

window.addEventListener('DOMContentLoaded', () => {

    const tabs = require('./modules/tabs');
    const timer = require('./modules/timer');
    const slider = require('./modules/slider');
    const cards = require('./modules/cards');
    const forms = require('./modules/forms');
    const modal = require('./modules/modal');
    const calc = require('./modules/calc');

    tabs();
    timer();
    slider();
    cards();
    forms();
    modal();
    calc();

});