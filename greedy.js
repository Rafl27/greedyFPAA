function planejarCardapio(dias, pratos, orcamento) {
    //Utilizando sort para ordenar os pratos em ordem crescente.
    pratos.sort((a, b) => a[0] - b[0]);

    let cardapio = []; //Este array armazena os pratos que trarão um maior lucro.
    let lucroTotal = 0; //Lucro total do cardápio.

    //Loop onde verificamos o cardápio para cada dia.
    for (let dia = 1; dia <= dias; dia++) {
        let lucroMaximo = 0; //LM possível para o dia atual
        let pratoEscolhido = -1; //-1 indica que nenhum prato foi escolhido até o momento, durante as verificações, se o prato não possuir lucro e custo melhores, ele permanecerá como -1, e nenhum prato será selecionado e o cardápio irá receber o valor 0.

        //Greedy
        //Loop para escolher o prato com maior lucro possível dentro do orçamento disponível.
        for (let i = 0; i < pratos.length; i++) {
            let custo = pratos[i][0]; // i = índice do prato, 0 = custo do prato
            let lucro = pratos[i][1] * Math.pow(0.5, pratos[i][2] - 1); //considerando o número de vezes que o prato já foi feito, calculamos o lucro.

            //Verifica se o prato pode ser escolhido e se o lucro é maior que o máximo lucro encontrado até agora.
            if (custo <= orcamento && lucro > lucroMaximo) {
                //Alteramos o valor do lucro máximo para o atual.
                lucroMaximo = lucro;
                //Escolhemos um prato e podemos seguir para a próxima verificação.
                pratoEscolhido = i;
            }
        }

        //Foi possível escolher um prato para hoje?
        if (pratoEscolhido !== -1) {
            orcamento -= pratos[pratoEscolhido][0]; // Subtrai o custo do prato escolhido do orçamento.
            lucroTotal += lucroMaximo; // Adiciona o máximo lucro possível ao lucro total.
            cardapio.push(pratoEscolhido); //Finalmente, adicionamos um prato ao cardápio.
        } else {
            cardapio.push(0); //Como mencionado anteriormente, se -1 inserimos como 0 no cardápio.
        }
    }

    // Imprime o lucro total e o cardápio
    console.log(lucroTotal.toFixed(1));
    console.log(cardapio.join(','));
}
