'use strict';

window.addEventListener('DOMContentLoaded', () => {

    // TABS

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabsContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabsContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabsContent();
    showTabsContent(0);

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabsContent();
                    showTabsContent(i);
                }
            });
        }
    });

    // TIMER

    const deadline = '2021, 09, 15' ;

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()), /* разница в миллисекундах */
              days = Math.floor(t / (1000 * 60 * 60 * 24)), /* Math.floor - округление числа */
              hours = Math.floor((t / (1000 * 60 * 60) % 24)),
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            /* 'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds */ /* - старый синтаксис, до 2015 - ES5 */
            days,
            hours,
            minutes,
            seconds /* - новый синтаксис, ES6 стандарт*/
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = document.querySelector('#days'),
              hours = document.querySelector('#hours'),
              minutes = document.querySelector('#minutes'),
              seconds = document.querySelector('#seconds'),

              timeInterval = setInterval(updateClock, 1000);

        updateClock(); /* запуск функции что бы предотвратить мигание на странице */
        
        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if(t.total <= 0) {
                clearInterval(timeInterval);
            }
            if (t.total < 0) {
                days.innerHTML = '00';
                hours.innerHTML = '00';
                minutes.innerHTML = '00';
                seconds.innerHTML = '00';
            }
        }
    }

    setClock('.timer', deadline);

    // MODAL

    const modalBtn = document.querySelectorAll('[data-modal]'),
          modalClose = document.querySelector('[data-close]'),
          modalWindow = document.querySelector('.modal');
    

    function openModal() {
        modalWindow.classList.add('show', 'fade');
        modalWindow.classList.remove('hide');
        // Либо вариант с toggle - но тогда назначить класс в верстке

        document.body.style.overflow = 'hidden'; /* фиксация страницы, что бы не было прокрутки во время открытого модального окна */
        clearInterval(modalTimerId);

        window.removeEventListener('scroll', showModalScroll); 
        /* если мы во время просмотра сайта нажали кнопку вызова модального окна, то после этого события или после события setTimeout(), при прокрутке до конца сайта, модальное окно больше не вызывалось. Таким образом, модальное окно до конца прокрутки сайта, не вызовется, если было событие по таймеру или по клику. */
    }
    modalBtn.forEach(btn => {
        btn.addEventListener('click', openModal);
    });


    function closeModal() {
        modalWindow.classList.add('hide');
        modalWindow.classList.remove('show');
        // Либо вариант с toggle - но тогда назначить класс в верстке
        document.body.style.overflow = ''; /* браузер ставит значение по дефолту */
    }
    modalClose.addEventListener('click', closeModal);
    // modalClose.addEventListener('click', () => {
    //     modalWindow.style.display = 'none';
    // });
    modalWindow.addEventListener('click', (event) => {
        if (event.target === modalWindow) {
            closeModal();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 6000);

    function showModalScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalScroll);
        }
    }
    /* function showModalScroll () {
        if (window.pageYOffset >= 3800) {
            openModal();
            window.removeEventListener('scroll', showModalScroll);
        }
    } */

    window.addEventListener('scroll', showModalScroll);
    
    // 'Class' usage for Cards

    class MenuCard {
        constructor(src, alt, title, descr, price, perentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes; /* 'Classes' is array */
            this.parent = document.querySelector(perentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        // currency conversion
        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');

            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className)); /* processing of potential additional classes apllied by REST operator */
            }

            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    /* const div = new MenuCard();
    div.render(); */

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container',
        'menu__item',
        'big'
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню "Премиум"',
        'В меню "Премиум" мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        14,
        '.menu .container',
        'menu__item'
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню "Постное" - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        21,
        '.menu .container',
        'menu__item'
    ).render();

    // POST for forms
    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'Loading...',
        success: 'Thanks! We will connect with you soon.',
        failure: 'Something wrong... Try again leter.'
    };

    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); /* отменяем стандартное повидение браузера при событии submit */

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.append(statusMessage);
            
            const req = new XMLHttpRequest();
            req.open('POST', 'server.php');

            /* 2 формата передачи данных: 
            1) через объект FormData
            2) формат JSON */
            // FormData - спец. объект, который позволяет с определенной формы сформировать набор данных которые, например, заполнил пользователь длядальнейшей их обработке на бэк-енд.
            // формируется в формате ключ-значение

            // req.setRequestHeader('Content-type', 'multipart/form-data'); когда используем formData+XMLhttpreq, заголовок устанавливать не нужно, он установ. автоматически.



            // POST with JSON
            req.setRequestHeader('Content-type', 'application/json');

            const formData = new FormData(form);
            // в верстке, в html тэгах, что собирают инф.(input, textarea, option) ВСЕГДА необходим атрибут "name"
            const object = {};
            formData.forEach(function(value, key) {
                object[key] = value;
            });
            const json = JSON.stringify(object); /* превращаем обычный объект в json */

            req.send(json);

            req.addEventListener('load', () => {
                if (req.status === 200) {
                    console.log(req.response);
                    statusMessage.textContent = message.success;
                    form.reset(); /* сброс формы */
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 3000);
                } else {
                    statusMessage.textContent = message.failure;
                }
            }); /* отслеживаем конечную загрузку нашего запроса */

        });
    }
});