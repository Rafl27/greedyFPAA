//Autores: Glenda Faria, Gabriel Hirano, Rubens Euleutério, Rafael Campos
//Versão: 1.4
//Data: 15/06/2023

-------Descrição da solução-------

-Primeira entrada:

Dias: 2
Pratos: 1
Orçamento: 5
Pratos disponíveis: [[3, 5]]
Resultado:

Lucro total: 5.0
Cardápio: 1,0

O lucro foi de 5.0 e o cardápio para cada dia foi o prato 1 no primeiro dia e nenhum prato no segundo dia. Pois o único prato disponível tem um custo de 3 e um lucro de 5. Então, escolher esse prato no primeiro dia nos dá o melhor lucro, ejá no segundo dia não temos pratos dentro do orçamento.

Segunda entrada:

Dias: 3
Pratos: 5
Orçamento: 20
Pratos disponíveis: [[2, 5], [18, 6], [1, 1], [3, 3], [2, 3]]
Resultado:

Lucro total: 8.5
Cardápio: 5,2,0

Nesse caso o lucro foi 8.5 e cardápio foi o prato 5 no primeiro dia, o prato 2 no segundo dia e nenhum prato no terceiro dia. Diferente do primeira entrada, temos mais pratos disponíveis, o prato 5 tem o melhor custo-benefício para o primeiro dia, o prato 2 tem o melhor custo-benefício para o segundo dia, mais uma vez não temos pratos dentro do orçamento para o terceiro dia.

1. -------Como esse problema pode ser modelado para o paradigma guloso?-------

Precisamos escolher o prato com o maior lucro possível para cada dia, sempre verificando o orçamento disponível.

--COmo um algorítmo guloso pode nos ajudar nesse caso?

Para cada dia, vamos escolher o prato com o maior lucro possível mas que não ultrapasse o orçamento do Alfred.

Assim, como output teremos o conjunto de pratos para cada dia (cardápio), & o lucro total.

Como o algoritmo funciona?

1. Utilizamos o .sort para termos os pratos em ordem crescente de custo.
2. Utilizamos um for loop para passar por cada dia disponível.
3. Lucro máximo é instanciado como 0.
4. A variável para o prato escolhido é instanciada como -1, querendo dizer que nehum prato foi escolhido até o momento.
5. Mais um for loop para todos os pratos que temos.
6. Se o custo do prato for menor ou igual ao orçamento e o lucro desse prato for maior que o lucro máximo atual:
    A. Atualizamos o lucro máximo para o lucro desse prato.
    B. Atualizamos o prato escolhido para esse prato.
7. Se um prato foi escolhido para um dia:
    A. Subtrair o custo desse prato do orçamento disponível.
    B. Adicionar o lucro máximo ao lucro total.
    C. Adicionar o prato escolhido ao cardápio para o dia.
    D. Caso contrário, adicionar 0 ao cardápio para indicar que nenhum prato foi escolhido para o dia.
8. Finalmente, é retornado o lucro total e o cardápio final.


2.O algoritmo guloso não considera uma solução ótima global, mas por meio de escolhas ótimas locais, que aparentam ser as melhores em cada passo, ele consegue achar uma solução rapidamente e muitas das vezes satisfatória.