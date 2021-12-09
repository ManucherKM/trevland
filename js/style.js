let noActive = document.querySelectorAll('.event');

noActive.forEach((element, index, mas)=>{
    element.addEventListener('click', () => {
        var mainCard = {
            img: element.children[0].src,
            title: element.children[1].children[0].innerHTML,
            text: element.children[1].children[1].innerHTML,
            e_mail: element.children[1].children[2].innerHTML
        };
        cangCard(mainCard)
        element.classList.add('.nature');
    });
})

function cangCard(element) {
    let Home = document.querySelector('.Main_home').children;
    Home[0].src = element.img;
    Home[1].innerHTML = element.title;
    Home[2].innerHTML = element.text;
    Home[3].innerHTML = element.e_mail;
    if (Home[3].innerText === '@thomasalva_adison') {
        Home[2].innerText = 'Какой-то текст описания 1й кнопки 111111111111111111111111111111111111111111111 \n11111111111111111111111111111111111111111111'
    } else if (Home[3].innerText === '@adem_smith') {
        Home[2].innerText = 'Какой-то текст описания 2й кнопки 222222222222222222222222222222222222222 \n222222222222222222222222222222222222222'
    } else if (Home[3].innerText === '@jhon7leew') {
        Home[2].innerText = 'Какой-то текст описания 3й кнопки 33333333333333333333333333333333 \n3333333333333333333333333333333333'
    } else {
        console.log('Ошибка')
    }
};



