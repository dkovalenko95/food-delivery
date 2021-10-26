'use strict';

import tabs from'./modules/tabs';
import timer from'./modules/timer';
import slider from'./modules/slider';
import cards from'./modules/cards';
import forms from'./modules/forms';
import modal from'./modules/modal';
import calc from'./modules/calc';

import { openModal } from './modules/modal';

const { data } = require("browserslist");

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2021-12-12');
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
        prevArrow: '.offer__slider-prev',
        nextArrow: '.offer__slider-next',
        totalCounter: '#total',
        currentCounter: '#current'
    });
    cards();
    forms('form', modalTimerId);
    modal('[data-modal]', '.modal', modalTimerId);
    calc();
});