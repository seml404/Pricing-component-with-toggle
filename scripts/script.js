"use strict";




const btn = document.querySelector(".header__button"),
    prices = document.querySelectorAll(".card__price"),
    annualPrices = [
        199.99,
        249.99,
        399.99
    ],
    mothlyPrices = [
        19.99,
        24.99,
        39.99
    ],
    buttonCard = document.querySelectorAll(".card__button"),
    mainButtonCard = document.querySelector(".middle .card__button");


function changeBtn(obj) {
    obj.classList.toggle("btn_on");
}

function togglePrice(obj, prices, optionsAnnual, optionsMonthly) {
    if (obj.classList.contains("btn_on")) {
        for (let i = 0; i < prices.length; i++) {
            prices[i].innerHTML = `$ ${optionsMonthly[i]}`;
        }
    } else {
        for (let i = 0; i < prices.length; i++) {
            prices[i].innerHTML = `$ ${optionsAnnual[i]}`;

        }
    }
}

function amendStyle(obj) {
    if (!obj.classList.contains("btn_on")) {
        buttonCard.forEach((el) => {
            el.style.border = "2px solid #6879da";
            el.style.background = "linear-gradient(to left, #abb4f3, #6879da)";
            el.style.color = '#ffffff';
        });
        mainButtonCard.style.background = '#ffffff';
        mainButtonCard.style.border = "2px solid #6879da";
        mainButtonCard.style.color = "#6879da";
    } else {
        buttonCard.forEach((el) => {
            el.style.border = "2px solid #6879da";
            el.style.background = '#ffffff';
            el.style.color = "#6879da";
        });
        mainButtonCard.style.background = "linear-gradient(to left, #abb4f3, #6879da)";
        mainButtonCard.style.color = "#ffffff";
        mainButtonCard.style.border = "2px solid #ffffff";
    }
}
btn.addEventListener("click", (e) => {
    changeBtn(e.target);
    togglePrice(e.target, prices, annualPrices, mothlyPrices);
    amendStyle(e.target);
});