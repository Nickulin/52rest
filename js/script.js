"use strict";

const inputRub = document.querySelector("#rub");
const inputUsd = document.querySelector("#usd");

inputRub.addEventListener("input", ()=>{ // "change" при уходе из фокуса можно место input
    const request = new XMLHttpRequest(); //XMLHttpRequest - НЕАКТУАЛЕН для общения с сервером без перезагрузки.

    // request.open(method, url, async, login, pass);// собирает настройки для запроса, method ="get or post", async -no use, login, pass-parol
    request.open("GET", 'js/current.json');// js/current.json относительно html
    request.setRequestHeader("Content-type", 'application/json; charset=utf-8'); //setRequestHeader что именно передаем
    request.send();// запускаем, send(body) используем в POST

    // request.addEventListener('readystatechange', () =>{// readystatechange отслеживает готов ли сайт в данный момент
    //     if(request.readyState === 4 && request.status ===200){
    //         console.log(request.response);// выведет current.JSON
    //         const data = JSON.parse(request.response);
    //         inputUsd.value = (+ inputRub.value / data.current.usd).toFixed(2);// toFixed -2 знака после точки
    //     }else{
    //         inputUsd.value = "что то пошло не так";
    //     }
    // });
    request.addEventListener('load', () =>{// отслеживает load
        if(request.readyState === 4 && request.status ===200){
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+ inputRub.value / data.current.usd).toFixed(2);// toFixed -2 знака после точки
        }else{
            inputUsd.value = "что то пошло не так";
        }
    });

    // status - 404 not found
    // statusText - текстовое описание ответа от сервера
    // response - ответ
    // readyState - текущее состояние объекта
});
// inputRub.addEventListener("change");// при изменении значения
