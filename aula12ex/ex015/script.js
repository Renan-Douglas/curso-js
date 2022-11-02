function verificar() {
    
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {

        window.alert('[ERRO] Verifique os dados e tente novamente!');

    } else {

        var fsex = document.getElementsByName('radsex');
        var idade = ano -Number(fano.value);

        res.innerHTML = `Idade calculada ${idade}`;

        var genero = '';

        var img = document.createElement('img');
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {

            genero = 'Homem';

            if (idade >= 0 && idade < 10) {

                img.setAttribute('src', 'kidM.png')

            } else if (idade < 21){

                img.setAttribute('src', 'jovM.png')

            } else if (idade < 50) {

                img.setAttribute('src', 'aduM.png')

            } else {

                img.setAttribute('src', 'idoM.png')

            }

        } else if (fsex[1].checked) {

            genero = 'Mulher';

            if (idade >= 0 && idade < 10) {

                img.setAttribute('src', 'kidF.png')

            } else if (idade < 21){

                img.setAttribute('src', 'jovF.png')

            } else if (idade < 50) {

                img.setAttribute('src', 'aduF.png')

            } else {

                img.setAttribute('src', 'idoF.png')

            }

        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;

        res.appendChild(img);

    }

}
