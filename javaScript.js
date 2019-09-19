function inicia_jogo() {

    //document.querySelectorAll("");
    document.getElementById("t12").innerHTML = "&#9899;";
    document.getElementById("t14").innerHTML = "&#9899;";
    document.getElementById("t16").innerHTML = "&#9899;";
    document.getElementById("t18").innerHTML = "&#9899;";

    document.getElementById("t21").innerHTML = "&#9899;";
    document.getElementById("t23").innerHTML = "&#9899;";
    document.getElementById("t25").innerHTML = "&#9899;";
    document.getElementById("t27").innerHTML = "&#9899;";

    document.getElementById("t32").innerHTML = "&#9899;";
    document.getElementById("t34").innerHTML = "&#9899;";
    document.getElementById("t36").innerHTML = "&#9899;";
    document.getElementById("t38").innerHTML = "&#9899;";

    document.getElementById("t61").innerHTML = "&#9898;";
    document.getElementById("t63").innerHTML = "&#9898;";
    document.getElementById("t65").innerHTML = "&#9898;";
    document.getElementById("t67").innerHTML = "&#9898;";

    document.getElementById("t72").innerHTML = "&#9898;";
    document.getElementById("t74").innerHTML = "&#9898;";
    document.getElementById("t76").innerHTML = "&#9898;";
    document.getElementById("t78").innerHTML = "&#9898;";

    document.getElementById("t81").innerHTML = "&#9898;";
    document.getElementById("t83").innerHTML = "&#9898;";
    document.getElementById("t85").innerHTML = "&#9898;";
    document.getElementById("t87").innerHTML = "&#9898;";

    cria_array();

    function cria_array() {
        var x, y;

        peca = new Array();

        for (x = 1; x <= 8; x++) {

            peca[x] = new Array();

            for (y = 1; y <= 8; y++) {

                peca[x][y] = new Array();
                peca[x][y]['peca'] = false; //defino como falso para as que não começam com peça ficarem nulas
                peca[x][y]['cor'] = false;
            }
        }
        aux = new Array();
        aux['preta'] = new Array();
        aux['preta'] = "&#9899;";
        aux['branca'] = new Array();
        aux['branca'] = "&#9898;";

    }

    //posiciona as pecas pretas
    peca[1][2]['peca'] = "preta";
    peca[1][2]['cor'] = "preto";
    peca[1][4]['peca'] = "preta";
    peca[1][4]['cor'] = "preto";
    peca[1][6]['peca'] = "preta";
    peca[1][6]['cor'] = "preto";
    peca[1][8]['peca'] = "preta";
    peca[1][8]['cor'] = "preto";

    peca[2][1]['peca'] = "preta";
    peca[2][1]['cor'] = "preto";
    peca[2][3]['peca'] = "preta";
    peca[2][3]['cor'] = "preto";
    peca[2][5]['peca'] = "preta";
    peca[2][5]['cor'] = "preto";
    peca[2][7]['peca'] = "preta";
    peca[2][7]['cor'] = "preto";

    peca[3][2]['peca'] = "preta";
    peca[3][2]['cor'] = "preto";
    peca[3][4]['peca'] = "preta";
    peca[3][4]['cor'] = "preto";
    peca[3][6]['peca'] = "preta";
    peca[3][6]['cor'] = "preto";
    peca[3][8]['peca'] = "preta";
    peca[3][8]['cor'] = "preto";

    //posiciona as pecas brancas
    peca[6][1]['peca'] = "branca";
    peca[6][1]['cor'] = "branco";
    peca[6][3]['peca'] = "branca";
    peca[6][3]['cor'] = "branco";
    peca[6][5]['peca'] = "branca";
    peca[6][5]['cor'] = "branco";
    peca[6][7]['peca'] = "branca";
    peca[6][7]['cor'] = "branco";

    peca[7][2]['peca'] = "branca";
    peca[7][2]['cor'] = "branco";
    peca[7][4]['peca'] = "branca";
    peca[7][4]['cor'] = "branco";
    peca[7][6]['peca'] = "branca";
    peca[7][6]['cor'] = "branco";
    peca[7][8]['peca'] = "branca";
    peca[7][8]['cor'] = "branco";

    peca[8][1]['peca'] = "branca";
    peca[8][1]['cor'] = "branco";
    peca[8][3]['peca'] = "branca";
    peca[8][3]['cor'] = "branco";
    peca[8][5]['peca'] = "branca";
    peca[8][5]['cor'] = "branco";
    peca[8][7]['peca'] = "branca";
    peca[8][7]['cor'] = "branco";

    ///array para movimentar as pecas
    movimenta = new Array();

    movimenta['selecionada'] = new Array();
    movimenta['selecionada']['x'] = 0;
    movimenta['selecionada']['y'] = 0;
    movimenta['selecionada']['peca'] = "0";
    movimenta['selecionada']['cor'] = "0";

    movimenta['destino'] = new Array();
    movimenta['destino']['x'] = 0;
    movimenta['destino']['y'] = 0;
    movimenta['destino']['peca'] = "0";
    movimenta['destino']['cor'] = "0";

    ///array para os possiveis movimentos
    possiveis = new Array();
}

function voltaFundo() {
    var i;
    for (i = 0; i < possiveis.length; i++) {
        document.getElementById(possiveis[i]).style.backgroundColor = "";
    }
}

function turno(t) { //altera vez
    if (t == 1) {
        return;
    } else {
        if (vez == "branco") {
            vez = "preto";
        } else {
            vez = "branco";
        }
    }
}

function verifica_possivel(x, y, c) { //faz a verificação se a peça pode ir na div
    var pode = 0;
    var cp;
    var div = "t" + x + y;

    for (cp = 1; cp < c; cp++) {

        if (possiveis[cp] == div) {
            pode++;
        }
        if (pode > 0) {
            return 1;
        }
    }

}

function possiveis_movimentos(t) {
    var x, y;
    var c = 0; //contador pro array possiveis

    x = movimenta['selecionada']['x'];
    y = movimenta['selecionada']['y'];

    document.getElementById('t' + x + y).style.backgroundColor = "#3C9"; //muda cor de fundo da peça
    possiveis[c] = "t" + x + y;
    c++;
    try {
        if (peca[x][y]['peca'] == 'preta') {
            possivel(x + 1, y + 1);
            possivel(x + 1, y - 1);
            if (peca[x - 1][y - 1]['peca'] == 'branca' || peca[x + 1][y + 1]['peca'] == 'damaBranco' ) {//verifica peças nas costa esquerda
                possivel(x - 1, y - 1);
            }
            if (peca[x - 1][y + 1]['peca'] == 'branca' || peca[x + 1][y + 1]['peca'] == 'damaBranco' ) {//verifica peças nas costa direita
                possivel(x - 1, y + 1);
            }

        }
        if (peca[x][y]['peca'] == 'branca') {
            possivel(x - 1, y - 1);
            possivel(x - 1, y + 1);
            if (peca[x + 1][y + 1]['peca'] == 'preta' || peca[x + 1][y + 1]['peca'] == 'damaPreto' ) {//verifica peças nas costa esquerda
                possivel(x + 1, y + 1);
            } else if (peca[x + 1][y - 1]['peca'] == 'preta' || peca[x + 1][y + 1]['peca'] == 'damaPreto' ) {//verifica peças nas costa direita
                possivel(x + 1, y - 1);
            }
        }
        if (peca[x][y]['peca'] == 'damaBranco' || peca[x][y]['peca'] == 'damaPreto') {
            for (i = 1; possivel(x - i, y - i); i++);
            for (i = 1; possivel(x + i, y + i); i++);
            for (i = 1; possivel(x - i, y + i); i++);
            for (i = 1; possivel(x + i, y - i); i++);

        }
    } catch{

    }

    function possivel(px, py) {
        if (px > 0 && px < 9 && py > 0 && py < 9 && peca[px][py]['peca'] != movimenta['selecionada']['peca']) {
            possiveis[c] = "t" + (px) + (py);
            c++;

            if (movimenta['selecionada']['peca'] == "damaBranco" || movimenta['selecionada']['peca'] == "damaPreto") {
                return true;
            }
            if (!peca[px][py]['peca']) {
                return true;
            }
        } else {
            return false;
        }
    }
    return c;
}

function movimentoComer(x, y) {

    movimenta['destino']['x'] = x; //recebe x do destino(segundo clique)
    movimenta['destino']['y'] = y; //recebe y do destino(segundo clique)

    document.getElementById("t" + movimenta['destino']['x'] + "" + movimenta['destino']['y']).innerHTML = ""; //destino fica sem imagem
    peca[movimenta['destino']['x']][movimenta['destino']['y']]['peca'] = false; //peca destino recebe 0
    peca[movimenta['destino']['x']][movimenta['destino']['y']]['cor'] = false; //peca destino recebe 0

}

function movimentoComerDupla(x, y) {
    //verifica casa para poder comer mais de uma peça e cor da peça
    try {
        if (peca[x - 1][y + 1]['peca'] && !peca[x - 2][y + 2]['peca'] && peca[x - 1][y + 1]['cor'] != movimenta['selecionada']['cor']) {
            return 1;//muda o t para 1 para manter o turno
        }
    } catch {

    }
    try {
        if (peca[x - 1][y - 1]['peca'] && !peca[x - 2][y - 2]['peca'] && peca[x - 1][y - 1]['cor'] != movimenta['selecionada']['cor']) {
            return 1;
        }
    } catch {

    }
    try {
        if (peca[x + 1][y - 1]['peca'] && !peca[x + 2][y - 2]['peca'] && peca[x + 1][y - 1]['cor'] != movimenta['selecionada']['cor']) {
            return 1;
        }
    }  catch {

    }
    try {
        if (peca[x + 1][y + 1]['peca'] && !peca[x + 2][y + 2]['peca'] && peca[x + 1][y + 1]['cor'] != movimenta['selecionada']['cor']) {
            return 1;
        }
    } catch {

    }

}

function comePecaDama(x, y) {

    var auxXD = movimenta['destino']['x'];
    var auxYD = movimenta['destino']['y'];
    if (movimenta['selecionada']['x'] < movimenta['destino']['x'] && movimenta['selecionada']['y'] > movimenta['destino']['y']) {// verifica codição da selecionada para destino
        for (y; y < movimenta['selecionada']['y']; y++) { // for para subir e descer verificando se tem peça na div
            if (peca[x][y]['peca']) {
                if (!peca[x + 1][y - 1]['peca'] && peca[x][y]['cor'] != movimenta['selecionada']['cor']) { // verifica se nao tem peça antes ou depois, e se a peça nao é a propria dama
                    if (!peca[x - 1][y + 1]['peca'] || peca[x - 1][y + 1]['peca'] == movimenta['selecionada']['peca']) {
                        movimentoComer(x, y);
                        t = comeDuplaDama(auxXD, auxYD);//se retorna 1 mantem o turno
                        return t;
                    }
                } else {
                    alert("impossivel realizar jogada!");
                    return 2;
                }
            }
            x--;
        }
    } else if (movimenta['selecionada']['x'] < movimenta['destino']['x'] && movimenta['selecionada']['y'] < movimenta['destino']['y']) {
        for (y; y > movimenta['selecionada']['y']; y--) {
            if (peca[x][y]['peca']) {
                if (!peca[x + 1][y + 1]['peca'] && peca[x][y]['cor'] != movimenta['selecionada']['cor']) {
                    if (!peca[x - 1][y - 1]['peca'] || peca[x - 1][y - 1]['peca'] == movimenta['selecionada']['peca']) {
                        movimentoComer(x, y);
                        t = comeDuplaDama(auxXD, auxYD);//se retorna 1 mantem o turno
                        return t;
                    }
                } else {
                    alert("impossivel realizar jogada!");
                    return 2;
                }
            }
            x--;
        }
    } else if (movimenta['selecionada']['x'] > movimenta['destino']['x'] && movimenta['selecionada']['y'] > movimenta['destino']['y']) {
        for (y; y < movimenta['selecionada']['y']; y++) {
            if (peca[x][y]['peca']) {
                if (!peca[x - 1][y - 1]['peca'] && peca[x][y]['cor'] != movimenta['selecionada']['cor']) {
                    if (!peca[x + 1][y + 1]['peca'] || peca[x + 1][y + 1]['peca'] == movimenta['selecionada']['peca']) {
                        movimentoComer(x, y);
                        t = comeDuplaDama(auxXD, auxYD);//se retorna 1 mantem o turno
                        return t;
                    }
                } else {
                    alert("impossivel realizar jogada!");
                    return 2;
                }
            }
            x++;
        }
    } else if (movimenta['selecionada']['x'] > movimenta['destino']['x'] && movimenta['selecionada']['y'] < movimenta['destino']['y']) {
        for (y; y > movimenta['selecionada']['y']; y--) {
            if (peca[x][y]['peca']) {
                if (!peca[x - 1][y + 1]['peca'] && peca[x][y]['cor'] != movimenta['selecionada']['cor']) {
                    if (!peca[x + 1][y - 1]['peca'] || peca[x + 1][y - 1]['peca'] == movimenta['selecionada']['peca']) {
                        movimentoComer(x, y);
                        t = comeDuplaDama(auxXD, auxYD);//se retorna 1 mantem o turno
                        return t;
                    }
                } else {
                    alert("impossivel realizar jogada!");
                    return 2;
                }
            }
            x++;
        }
    }
}

function comeDuplaDama(x, y) {
    //verifica todos os lado da dama para comer mais de uma peça
    try {
        auxX = x; auxY = y;
        //for para subir da posição destino, diminui p X e aumentando Y /
        for (auxX; auxX > 1; auxX--) {
            if (peca[auxX][auxY]['peca'] && peca[auxX][auxY]['cor'] != movimenta['selecionada']['cor']) {//verifica se tem peça e se a peça nao e da cor selecionada
                if (!peca[auxX - 1][auxY + 1]['peca']) {// verifica se nao tem peça atras
                    return 1;// retorna 1 para manter o turno
                }
            }
            auxY++;
        }
    } catch {

    }

    try {
        auxX = x; auxY = y;
        //for para subir da posição destino, diminui p X e diminuindo Y \ 
        for (auxX; auxX > 1; auxX--) {
            if (peca[auxX][auxY]['peca'] && peca[auxX][auxY]['cor'] != movimenta['selecionada']['cor']) {//verifica se tem peça
                if (!peca[auxX - 1][auxY - 1]['peca']) {// verifica se nao tem peça atras
                    return 1;// retorna 1 para manter o turno
                }
            }
            auxY--;
        }
    } catch {

    }

    try {
        auxX = x; auxY = y;
        //for para descer da posição destino, aumenta o X e diminuindo Y /
        for (auxX; auxX < 8; auxX++) {
            if (peca[auxX][auxY]['peca'] && peca[auxX][auxY]['cor'] != movimenta['selecionada']['cor']) {//verifica se tem peça
                if (!peca[auxX + 1][auxY - 1]['peca']) {// verifica se nao tem peça atras
                    return 1;// retorna 1 para manter o turno
                }
            }
            auxY--;
        }
    } catch {

    }

    try {
        auxX = x; auxY = y;
        //for para descer da posição destino, aumenta o X e diminuindo Y \
        for (auxX; auxX < 8; auxX++) {
            if (peca[auxX][auxY]['peca'] && peca[auxX][auxY]['cor'] != movimenta['selecionada']['cor']) {//verifica se tem peça
                if (!peca[auxX + 1][auxY + 1]['peca']) {// verifica se nao tem peça atras
                    return 1;// retorna 1 para manter o turno
                }
            }
            auxY++;
        }
    } catch {

    }

    return;

}

function seleciona(x, y) {

    if ((movimenta['selecionada']['x'] == 0 || peca[x][y]['cor'] == movimenta['selecionada']['cor']) && peca[x][y]['cor'] == vez) {
        var t = 0;
        if (movimenta['selecionada']['x'] != 0) {// verifica se o jogado cliquo em outra peca na mesma vez
            voltaFundo();
        }
        if (peca[x][y]['peca']) { //se tiver uma peca nessa posição

            movimenta['selecionada']['x'] = x; //recebe x selecionado
            movimenta['selecionada']['y'] = y; //recebe y selecionado
            movimenta['selecionada']['peca'] = peca[x][y]['peca']; //recebe a peca selecionada
            movimenta['selecionada']['cor'] = peca[x][y]['cor'];

            cont_possiveis = possiveis_movimentos();

        }
    } else if (verifica_possivel(x, y, cont_possiveis)) {

        if (peca[x][y]['peca'] != movimenta['selecionada']['peca']) {//se tiver uma peça diferente da sua

            movimenta['destino']['x'] = x; //recebe o x do destino(segundo clique)
            movimenta['destino']['y'] = y; //recebe y do destino(segundo clique)
            movimenta['destino']['cor'] = peca[x][y]['cor'];

            if (movimenta['selecionada']['peca'] == "damaBranco" || movimenta['selecionada']['peca'] == "damaPreto") {// verifica se a peça é dama logica para movimentos dama
                if (!peca[x][y]['peca']) {

                    var t = comePecaDama(x, y);

                    if (t == 2) {//se nao puder comer 
                        return;
                    }
                } else {
                    alert("Possui peça!");
                    return;
                }

            }

            if (peca[x][y]['peca']) { //se tiver alguma peca (segundo clique)

                if (movimenta['destino']['x'] == movimenta['selecionada']['x'] - 1 && movimenta['destino']['y'] == movimenta['selecionada']['y'] - 1) { // compara destino com selecionada para comer a peça
                    if (!peca[x - 1][y - 1]['peca']) { // compara para ver se tem peca na proxima casa

                        movimentoComer(x--, y--);
                        t = movimentoComerDupla(x, y);

                    } else {
                        alert("impossivel realizar jogada!");
                        return;
                    }

                } else if (movimenta['destino']['x'] == movimenta['selecionada']['x'] - 1 && movimenta['destino']['y'] == movimenta['selecionada']['y'] + 1) {
                    if (!peca[x - 1][y + 1]['peca']) { // compara para ver se tem peca na proxima casa

                        movimentoComer(x--, y++);
                        t = movimentoComerDupla(x, y);

                    } else {
                        alert("impossivel realizar jogada!");
                        return;
                    }

                } else if (movimenta['destino']['x'] == movimenta['selecionada']['x'] + 1 && movimenta['destino']['y'] == movimenta['selecionada']['y'] + 1) {
                    if (!peca[x + 1][y + 1]['peca']) { // compara para ver se tem peca na proxima casa

                        movimentoComer(x++, y++);
                        t = movimentoComerDupla(x, y);

                    } else {
                        alert("impossivel realizar jogada!");
                        return;
                    }
                } else if (movimenta['destino']['x'] == movimenta['selecionada']['x'] + 1 && movimenta['destino']['y'] == movimenta['selecionada']['y'] - 1) {
                    if (!peca[x + 1][y - 1]['peca']) { // compara para ver se tem peca na proxima casa

                        movimentoComer(x++, y--);
                        t = movimentoComerDupla(x, y);

                    } else {
                        alert("impossivel realizar jogada!");
                        return;
                    }
                }
            }
        }
        //move a peça
        document.getElementById("t" + movimenta['selecionada']['x'] + "" + movimenta['selecionada']['y']).innerHTML = ""; //selcionada fica sem imagem
        document.getElementById("t" + x + "" + y).innerHTML = aux[movimenta['selecionada']['peca']]; //destino recebe a imagem da peça selecionada
        peca[x][y]['peca'] = movimenta['selecionada']['peca']; //posicao destino recebe a peca
        peca[x][y]['cor'] = movimenta['selecionada']['cor'];

        //limpa peça primeiro
        peca[movimenta['selecionada']['x']][movimenta['selecionada']['y']]['peca'] = false; //peca selecionada recebe 0
        peca[movimenta['selecionada']['x']][movimenta['selecionada']['y']]['cor'] = false;

        movimenta['selecionada']['x'] = 0; //selecionada x recebe 0 (pra na proxima ver q é o primeiro movimento)
        movimenta['selecionada']['y'] = 0; //selecionada y recebe 0 (pra na proxima ver q é o primeiro movimento)
        movimenta['selecionada']['peca'] = "0"; //selecionada peca recebe 0 (pra na proxima ver q é o primeiro movimento)
        movimenta['selecionada']['cor'] = "0";

        voltaFundo();
        turno(t);

        if (peca[x][y]['cor'] == "branco" && x == 1 && peca[x][y]['peca'] != 'damaBranco') {//troca de bra ou preta para dama

            peca[x][y]['peca'] = "damaBranco";
            peca[x][y]['cor'] = "branco";
            aux['damaBranco'] = "&#9813;";
            document.getElementById("t" + x + "" + y).innerHTML = "&#9813;";

        } else if (peca[x][y]['cor'] == "preto" && x == 8 && peca[x][y]['peca'] != 'damaPreto') {

            peca[x][y]['peca'] = "damaPreto";
            peca[x][y]['cor'] = "preto";
            aux['damaPreto'] = "&#9819;";
            document.getElementById("t" + x + "" + y).innerHTML = "&#9819;";
        }
    }

}

function escolhecor_incio(cor) {
    document.getElementById('escolhecor-inicio').style.display = 'none';
    document.getElementById('fundo').style.display = 'none';
    vez = cor; //vez de quem jogar

}