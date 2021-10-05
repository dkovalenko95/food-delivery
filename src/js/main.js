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


    // используем делегирование событий для закрытия окна благодарности
    modalWindow.addEventListener('click', (event) => {
        if (event.target === modalWindow || event.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 50000);

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
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так. Попробуйте позже...'
    };

    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);
            // метод размещения элементов в верстке


            const formData = new FormData(form);
            //в html тэгах, что собирают инф.(input, textarea, option) ВСЕГДА необходим атрибут "name"
            
            const object = {};
            formData.forEach(function(value, key) {
                object[key] = value;
            });
            const json = JSON.stringify(object);

            fetch('server1.php', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
            },
                body: json
            })
            .then(data => data.text())
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove(); 
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });
        });
    }

    // Show Thanks Modal

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div data-close class="modal__close">&times;</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }


    // HOW FETCH WORKS
    // fetch('https://jsonplaceholder.typicode.com/posts/', {
    //     method: "POST",
    //     body: JSON.stringify({name: 'Alex'}),
    //     headers: {
    //         'Content-type': 'application/json'
    //     }
    // })
    //     .then(response => response.json())
    //     .then(json => console.log(json));
});