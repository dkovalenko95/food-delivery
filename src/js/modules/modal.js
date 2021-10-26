function openModal(modalSelector, modalTimerId) {
    const modalWindow = document.querySelector(modalSelector);

    modalWindow.classList.add('show', 'fade');
    modalWindow.classList.remove('hide');
    // Либо вариант с toggle - но тогда назначить класс в верстке

    document.body.style.overflow = 'hidden'; /* фиксация страницы, что бы не было прокрутки во время открытого модального окна */

    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
    
    // NEED SOLUTION
    // window.removeEventListener('scroll', showModalScroll); 
    /* если мы во время просмотра сайта нажали кнопку вызова модального окна, то после этого события или после события setTimeout(), при прокрутке до конца сайта, модальное окно больше не вызывалось. Таким образом, модальное окно до конца прокрутки сайта, не вызовется, если было событие по таймеру или по клику. */
}

function closeModal(modalSelector) {
    const modalWindow = document.querySelector(modalSelector);
    modalWindow.classList.add('hide');
    modalWindow.classList.remove('show');
    // Либо вариант с toggle - но тогда назначить класс в верстке
    document.body.style.overflow = ''; /* браузер ставит значение по дефолту */
}


function modal(triggerSelector, modalSelector, modalTimerId) {
    const modalBtn = document.querySelectorAll(triggerSelector);         
    const modalWindow = document.querySelector(modalSelector);
    
    modalBtn.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
        // в обработчиках, при передаче коллбэк ф-ции - она сразу не вызыв. ---> ее нужно объявить (в этом моменте исп. стрелочную ф-цию)
    });


    // используем делегирование событий для закрытия окна благодарности
    modalWindow.addEventListener('click', (event) => {
        if (event.target === modalWindow || event.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    
    function showModalScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId);
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
}

export default modal;
export {openModal};
export {closeModal};