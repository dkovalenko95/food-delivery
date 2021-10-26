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


const getResource = async (url) => {
    const result = await fetch(url);

    if (!result.ok) {
        throw new Error(`Could not fetch ${url}, status: ${result.status} `);
    }

    return await result.json();
};

export {postData};
export {getResource};