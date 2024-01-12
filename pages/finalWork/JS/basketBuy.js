const priceBuy = document.getElementById('priceBuy');
const valueProducts = document.getElementById('valueProducts');

const btnInBuyBasket = document.querySelectorAll('.btn__flex-item');

// console.log(priceBuy);
// console.log(valueProducts);
// console.log(btnInBuyBasket);

for(let elem of btnInBuyBasket){
    elem.addEventListener('click', () => {
        valueProducts.textContent = getNumPlusOne (valueProducts.textContent);
        priceBuy.textContent = getSumBuy(priceBuy.textContent, elem.previousElementSibling.textContent);

        // console.log(parseFloat(elem.previousElementSibling.textContent));
    });
}

function getNumPlusOne (valueProducts){
    return Number(valueProducts) + 1
}

function getSumBuy(priceBuy, nowPrice){
    return parseFloat(priceBuy) + parseFloat(nowPrice);
}