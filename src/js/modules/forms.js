function forms() {
    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так. Попробуйте позже...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });




    // postData - отвечает за постинг данных, их отправку на сервер 
    
    // здесь асинхронный код - async/await позволяет правильно работать с асинхронными запросами/функциями
    const postData = async (url, data) => {
        const result = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });

        return await result.json();
    };




    // bindPostData - отвечает за привязку постинга
    function bindPostData(form) {
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
            
            // Приобразование formData в json
            // entries - метод, возвращает массив сообственных перечисляемых свойств указаного объекта
            // fromEntries - метод, обратный к entries. Возвращает объект
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            
            // старый вариант
            // const object = {};
            // formData.forEach(function(value, key) {
            //     object[key] = value;
            // });



            postData('http://localhost:3000/requests', json)
            // .then(data => data.text())
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

    // SHOW THANKS MODAL

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
    // fetch('http://localhost:3000/menu')
    //     .then(data => data.json())
    //     .then(result => console.log(result));

    
    // fetch('https://jsonplaceholder.typicode.com/posts/', {
    //     method: "POST",
    //     body: JSON.stringify({name: 'Alex'}),
    //     headers: {
    //         'Content-type': 'application/json'
    //     }
    // })
    //     .then(response => response.json())
    //     .then(json => console.log(json));
}

export default forms;