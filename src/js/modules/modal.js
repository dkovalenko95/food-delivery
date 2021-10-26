function modal() {
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
}

module.exports = modal;