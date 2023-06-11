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

-------Modelagem do paradigma guloso.-------