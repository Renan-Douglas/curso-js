function carregar() {

    var msg = document.getElementById('msg');
    var img = document.getElementById('img');
    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = `<u>Agora sao ${hora} horas.</u>`;

    if (hora >= 0 && hora < 12) {

        img.src = 'manha.png';
        document.body.style.background = '#4d7ca6';
        msg.style.color = '#4d7ca6';

    } else if (hora >= 12 && hora <= 18) {

        img.src = 'tarde.png';
        document.body.style.background = '#cedb2c';
        msg.style.color = '#cedb2c';

    } else {

        img.src = 'noite.png';
        document.body.style.background = '#452a39';
        msg.style.color = '#452a39';

    }

}