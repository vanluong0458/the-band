/* PHẦN MODEL BUY TICKETS */
const model = document.querySelector('.js-model')
const modelBuyTickets = document.querySelector('.buy-tickets')
const btnBuys = document.querySelectorAll('.js-buy-btn')
const btnCloses = document.querySelectorAll('.js-close-btn')

// Hàm hiện model pay tickets
function showModelBuyTickets() {
    model.classList.add('open')
}

// Hàm đóng model pay tickets
function hideModel_buy_tickets() {
    model.classList.remove('open')
}

for (const btnBuy of btnBuys) {
    btnBuy.addEventListener('click', showModelBuyTickets)
}

for (const btnClose of btnCloses) {
    btnClose.addEventListener('click', hideModel_buy_tickets)
}

// Kích chuột ra ngoài để thoát model pay tickets
model.addEventListener('click', hideModel_buy_tickets)
modelBuyTickets.addEventListener('click', function (event) {
    event.stopPropagation()
})

/* PHẦN MOBILE HEADER */
var header = document.getElementById('header')
var menuIcon = document.getElementById('mobile-menu-btn')
var headertHeight = header.clientHeight;
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

// Bật/Tắt menu
menuIcon.onclick = function () {
    var isClosed = header.clientHeight === headertHeight;
    if(isClosed) {
        header.style.height = 'auto';
    }
    else {
        header.style.height = null;
    }
}

// Tắt menu khi chọn menuItem
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function (event) {
        var isParrentSubnav = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParrentSubnav) {
            event.preventDefault();
        }
        else {
            header.style.height = null;
        }
    }
}