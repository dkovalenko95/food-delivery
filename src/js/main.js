'use strict';

import tabs from'./modules/tabs';
import timer from'./modules/timer';
import slider from'./modules/slider';
import cards from'./modules/cards';
import forms from'./modules/forms';
import modal from'./modules/modal';
import calc from'./modules/calc';

const { data } = require("browserslist");

window.addEventListener('DOMContentLoaded', () => {
    tabs();
    timer();
    slider();
    cards();
    forms();
    modal();
    calc();
});