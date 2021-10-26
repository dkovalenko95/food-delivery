function timer(id, deadline) {
    
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

    setClock(id, deadline);
}

export default timer;