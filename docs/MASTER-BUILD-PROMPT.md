# PROMPT MESTRE — LISTA DE COMPRAS

Crie do zero uma aplicação web completa, funcional, responsiva e mobile-first para uso INTERNO de um operador que organiza compras para casas de hospedagem/aluguel por temporada.

## 1. NATUREZA DO PROJETO

Isto é uma FERRAMENTA DE TRABALHO INTERNA, não um website para apresentação.

Não criar:
- logo;
- slogan;
- hero/landing page;
- marketing;
- “sobre nós”;
- depoimentos;
- dashboard decorativo;
- gráficos/KPIs;
- informações institucionais;
- animações desnecessárias;
- elementos que não tenham função no fluxo de trabalho.

Não deixar a interface “cheia”. O operador abre a ferramenta para trabalhar, não para admirar a ferramenta.

Usar interface neutra, compacta, rápida, clara e profissional. Cada elemento visível deve servir para criar, consultar, editar, duplicar, imprimir ou organizar listas, clientes, casas, bases ou catálogo.

Não inventar módulos.

## 2. OBJETIVO

Permitir:
1. cadastrar clientes;
2. cadastrar casas;
3. criar listas de compras independentes;
4. criar quantidade ilimitada de listas-base;
5. montar listas por categorias, produtos, unidades e quantidades;
6. adicionar produtos/categorias personalizados;
7. manter histórico;
8. editar, duplicar e excluir listas;
9. imprimir/gerar PDF;
10. opcionalmente anexar imagens completas de cardápios.

NÃO é ERP, estoque, restaurante, e-commerce ou sistema de pedidos.

Não usar preços, estoque, fornecedores, saldo, baixa de estoque, custo ou cálculo automático por hóspedes.

## 3. NAVEGAÇÃO

Somente o necessário:
- Início
- Nova lista
- Listas
- Clientes
- Casas
- Listas-base
- Catálogo
- Documentos/Impressões

A tela inicial deve ser simples:
- botão + Nova lista de compras;
- listas recentes com cliente, casa, período e itens;
- atalhos essenciais.

Não criar dashboard cheio de informações.

## 4. CLIENTES

Campos:
- Nome
- WhatsApp/contato
- Observações

Permitir criar cliente durante a criação da lista.

## 5. CASAS

Campos:
- Nome
- Endereço
- Capacidade máxima
- Observações

Capacidade é apenas informativa. Nunca calcular quantidades automaticamente por capacidade.

## 6. LISTAS-BASE

Não limitar a três bases.

Permitir criar, editar, duplicar e excluir quantidade ilimitada de bases.

Cada base possui:
- nome;
- categorias;
- produtos;
- unidades;
- quantidades;
- observações.

Ao criar uma lista:
- escolher qualquer base existente; ou
- começar vazia.

Ao usar uma base, COPIAR seus dados para a nova lista.

Depois da cópia:
- alterar a lista não altera a base;
- alterar a base não altera listas antigas;
- duplicar uma lista cria outra independente.

## 7. NOVA LISTA

### Identificação
- Cliente / Novo cliente
- Casa / Nova casa
- Check-in
- Check-out
- Observações

### Base
- selecionar base;
- ou começar vazia;
- mostrar pequena prévia de categorias/produtos.

### Montagem

Mostrar cliente, casa, capacidade e período.

Permitir:
- busca;
- filtro por categoria;
- catálogo.

Cada produto deve ser manipulado DIRETAMENTE na linha, sem modal obrigatório:

Arroz | [Pacote ▼] | [− 2 +]

Regras:
- começa em 0;
- acima de 0 entra na lista;
- voltando a 0 sai;
- unidade e quantidade ficam na própria linha;
- unidades devem ser coerentes.

Unidades possíveis: Unidade, Pacote, Fardo, Garrafa, Lata, Caixa, Dúzia, Quilo, Litro etc.

Exemplos:
- Arroz: pacote/fardo
- Detergente: unidade/caixa
- Água: garrafa/fardo/caixa
- Cerveja: lata/garrafa/fardo/caixa
- Ovos: dúzia
- Carnes: quilo

Em cada categoria:
+ Adicionar produto

Produto personalizado:
- nome;
- unidade;
- quantidade.

Ele pertence somente àquela lista e não entra automaticamente no catálogo global.

Na lista:
+ Adicionar categoria/área

Categoria personalizada pertence somente àquela lista.

No celular manter acesso fácil a:
**Ver lista atual — X itens**

## 8. CATÁLOGO GLOBAL

Categorias fixas:
1. Produtos de limpeza
2. Higiene e amenities
3. Mantimentos
4. Carnes
5. Peixes e frutos do mar
6. Hortifruti
7. Café da manhã
8. Bebidas
9. Padaria e lanches
10. Confeitaria e sobremesas
11. Cozinha / consumíveis
12. Descartáveis
13. Lavanderia
14. Churrasco
15. Pet

Não criar Piscina ou Manutenção como categorias fixas.

### Produtos

**Produtos de limpeza:** Água sanitária; Álcool líquido; Álcool perfumado; Desengordurante; Desinfetante; Detergente; Limpa-alumínio; Limpa-cerâmica; Limpa-vidros; Limpador multiuso; Limpador de banheiro; Lustra-móveis; Removedor; Sabão em barra; Sabão líquido; Saponáceo; Tira-manchas; Esponja; Esponja de aço; Flanela; Luvas de limpeza; Pano de chão; Pano multiuso; Pano para vidro; Rodo; Vassoura; Aromatizador de ambiente; Desodorizador sanitário; Pastilha sanitária.

**Higiene e amenities:** Álcool em gel; Algodão; Cotonete; Creme dental; Escova dental; Fio dental; Lenço de papel; Papel higiênico; Sabonete; Sabonete líquido; Shampoo; Condicionador; Hidratante corporal; Absorvente; Sacos para lixo de banheiro.

**Mantimentos:** Açúcar; Arroz; Café; Farinha de mandioca; Farinha de trigo; Feijão; Fubá; Macarrão; Sal; Óleo; Azeite; Vinagre; Ketchup; Maionese; Mostarda; Molho de pimenta; Molho de tomate; Extrato de tomate; Molho inglês; Alho; Cebola; Caldo/tempero culinário; Orégano; Pimenta-do-reino; Sal grosso; Temperos diversos; Amido de milho; Aveia; Biscoitos; Farofa pronta; Fermento; Leite de coco; Leite condensado; Creme de leite; Gelatina.

**Carnes:** Alcatra; Bacon; Bife bovino; Carne de panela; Carne moída; Carne seca; Contra-filé; Costela bovina; Filé mignon; Linguiça; Patinho; Pernil suíno; Bisteca suína; Costelinha suína; Lombo suíno; Frango; Filé de frango; Peito de frango; Sobrecoxa de frango; Asa de frango.

**Peixes e frutos do mar:** Camarão; Filé de peixe; Peixe inteiro; Lula; Polvo; Salmão; Mexilhão; Outros frutos do mar.

**Hortifruti:** Abóbora; Abobrinha; Aipim; Alface; Batata; Batata-doce; Berinjela; Beterraba; Brócolis; Cenoura; Chuchu; Couve; Couve-flor; Pepino; Pimentão; Rúcula; Tomate; Alho; Cebola; Cheiro-verde; Coentro; Salsa; Cebolinha; Limão; Abacaxi; Banana; Laranja; Maçã; Mamão; Manga; Melancia; Melão; Morango; Uva.

**Café da manhã:** Bisnaguinha; Croissant; Pão de forma; Pão de queijo; Pão francês; Pão integral; Torradas; Geleia; Margarina; Manteiga; Mel; Muçarela; Presunto; Queijo minas; Queijo prato; Requeijão; Ovos; Bolo de cenoura; Bolo de chocolate; Abacaxi; Banana; Laranja; Mamão; Manga; Melancia; Melão; Morango; Uva; Aveia; Granola; Iogurte natural; Leite; Café; Matte; Suco natural.

**Bebidas:** Água mineral; Água com gás; Água de coco; Café; Chá; Leite; Matte; Polpa de fruta; Refrigerante; Suco; Cerveja; Espumante; Vinho; Destilados.

**Padaria e lanches:** Cachorro-quente; Hambúrguer; Massa de pastel; Massa de pizza; Pão de hambúrguer; Pão de queijo; Pão francês; Pão de forma; Presunto; Queijo; Salsicha.

**Confeitaria e sobremesas:** Biscoito; Cacau em pó; Chocolate; Chocolate em pó; Coco ralado; Cream cheese; Creme de leite; Doce de leite; Gelatina; Leite condensado; Sorvete; Chocolate granulado; Frutas; Ovos; Farinha de trigo; Açúcar.

**Cozinha / consumíveis:** Filme plástico; Papel-alumínio; Papel-manteiga; Papel-toalha; Filtro de café; Sacos para alimentos; Sacos tipo zip; Guardanapos; Palitos de dente; Espetos; Esponjas; Detergente.

**Descartáveis:** Copo descartável; Prato descartável; Talher descartável; Guardanapo; Marmita descartável; Tampa para marmita; Canudo; Embalagem para alimentos; Saco para alimentos; Copo para café.

**Lavanderia:** Sabão em pó; Sabão líquido; Amaciante; Alvejante; Tira-manchas; Sabão em barra; Sacos para roupa.

**Churrasco:** Carvão; Sal grosso; Acendedor; Espetos; Papel-alumínio; Farofa; Molho barbecue; Molho de alho; Vinagrete; Linguiça; Carnes para churrasco; Pão de alho.

**Pet:** Ração; Tapete higiênico; Sacos para dejetos; Petiscos; Areia sanitária.

## 9. REVISÃO E SALVAMENTO

Antes de salvar mostrar:
- cliente;
- contato;
- casa;
- capacidade;
- período;
- categorias;
- produtos;
- quantidades;
- unidades;
- observações.

Salvar lista.

Depois:
- Abrir
- Editar
- Duplicar
- PDF/Imprimir
- Oferecer cardápio

## 10. CARDÁPIO — APRESENTAÇÃO, NÃO PEDIDO

Após salvar:

**Oferecer cardápio?**
- Não
- Sim

Se Sim:

**Qual cardápio deseja oferecer?**
- Café da manhã
- Almoço
- Lanche da tarde
- Sobremesas

Permitir selecionar um, vários ou todos.

Cada opção corresponde a uma IMAGEM COMPLETA e independente.

Se selecionar Café + Almoço, anexar as duas imagens completas.

O cliente somente visualiza as imagens e informa ao operador o que deseja por conversa externa.

NÃO criar:
- seleção individual de pratos;
- carrinho;
- pedido;
- quantidades de pratos;
- preços;
- checkout;
- disponibilidade;
- cálculo de ingredientes;
- vínculo prato → compras.

O cardápio nunca altera a lista.

## 11. ARTES DOS CARDÁPIOS

Criar 4 artes visuais completas:
1. Café da manhã
2. Almoço
3. Lanche da tarde
4. Sobremesas

Elas devem:
- ser imagens prontas para compartilhar por WhatsApp;
- funcionar bem em tela de celular;
- usar o conteúdo exato abaixo;
- manter o mesmo padrão visual entre as quatro;
- ter boa legibilidade;
- ter aparência gastronômica profissional;
- usar fotografias gastronômicas representativas, sem precisar de uma foto para cada prato;
- não parecer anúncio publicitário;
- não parecer banco de imagens genérico;
- não ter preços;
- não inventar pratos;
- não alterar nomes;
- não adicionar informações que não estejam especificadas.

As fotos devem ser coerentes com os pratos representados e manter iluminação, composição e estilo consistentes entre as quatro artes.

### Café da manhã
**Pães e panificados:** Bisnaguinhas; Croissant; Pão de forma; Pão de queijo; Pão francês; Pão integral; Torradas.
**Frios e acompanhamentos:** Geleia; Margarina; Manteiga; Mel; Muçarela; Presunto; Queijo minas; Queijo prato; Requeijão.
**Ovos:** Omelete; Ovos fritos; Ovos mexidos.
**Bolos e doces:** Bolo de cenoura com cobertura de chocolate; Bolo de chocolate.
**Frutas:** Abacaxi; Banana; Laranja; Mamão; Manga; Melancia; Melão; Morango; Uva.
**Cereais e laticínios:** Aveia; Granola; Iogurte natural; Leite.
**Bebidas:** Café; Leite; Matte; Suco natural.

### Almoço
**Carnes bovinas:** Bife acebolado; Bife com fritas; Carne assada; Carne de panela; Carne seca com aipim; Costela com batata; Estrogonofe de carne; Filé mignon; Filé mignon ao molho madeira; Rabada com agrião; Rocambole de carne moída recheada.
**Frango:** Estrogonofe de frango; Filé de frango à parmegiana; Frango assado; Frango com creme de milho; Frango grelhado; Fricassê de frango; Galinha ensopada; Sobrecoxa assada com batata.
**Suínos:** Bisteca suína acebolada; Costelinha suína ao molho barbecue; Costelinha suína assada; Lombo suíno assado; Pernil assado.
**Peixes:** Filé de peixe à milanesa; Filé de peixe com creme de alho-poró; Filé de peixe grelhado; Peixe assado com batatas; Peixe frito; Peixada.
**Frutos do mar:** Bobó de camarão; Camarão ao alho e óleo; Camarão na moranga; Moqueca de camarão; Polvo à lagareiro; Salmão.
**Pratos tradicionais:** Baião de dois; Dobradinha; Feijoada; Galinhada; Mocotó; Vaca atolada.
**Massas:** Canelone; Lasanha à bolonhesa; Lasanha de camarão; Lasanha de frango; Massas à bolonhesa; Massas ao molho branco; Massas com camarão; Nhoque ao molho; Rondelli de presunto e queijo.
**Risotos:** Risoto de camarão; Risoto de carne-seca; Risoto de quatro queijos; Risoto de frango.
**Acompanhamentos:** Aipim frito; Arroz à grega; Arroz branco; Batata frita; Batata rústica; Farofa; Feijão; Legumes salteados; Purê de batata; Salada de maionese; Salada verde; Vinagrete.

### Lanche da tarde
**Sanduíches:** Misto quente; Sanduíche de carne desfiada; Sanduíche de frango com queijo; Sanduíche de presunto e queijo; Sanduíche natural de atum; Sanduíche natural de frango.
**Lanches:** Cachorro-quente; Cheeseburger; Hambúrguer; X-bacon.
**Tortas e quiches:** Empadão; Quiche; Torta de carne; Torta salgada de frango.
**Salgados:** Bolinha de queijo; Coxinha; Enroladinho de presunto e queijo; Kibe; Pastel de carne; Pastel de frango; Pastel de queijo; Risole.
**Outras:** Pão de queijo; Pizza; Tapioca.

### Sobremesas
**Clássicas:** Cheesecake; Mousse de chocolate; Mousse de limão; Mousse de maracujá; Pudim; Romeu e Julieta.
**Chocolate:** Brigadeirão; Brownie com sorvete; Palha Italiana; Torta de chocolate.
**Tortas:** Banoffee; Torta de coco; Torta de limão; Torta de chocolate.
**Sobremesas de travessa:** Bombom na travessa; Pavê de chocolate; Pavê de morango.

## 12. HISTÓRICO

Cada lista:
- cliente;
- contato;
- casa;
- período;
- data de criação;
- quantidade de itens.

Ações:
- abrir;
- editar;
- duplicar;
- excluir;
- PDF/Imprimir.

## 13. PDF/IMPRESSÃO

Ordem:
1. lista de compras;
2. depois as imagens completas dos cardápios selecionados.

Lista:
- título;
- cliente;
- contato;
- casa;
- capacidade;
- entrada;
- saída;
- data;
- categorias;
- produto;
- quantidade;
- unidade;
- checkbox visual;
- observações.

Sem preços.

## 14. PERSISTÊNCIA

A aplicação precisa funcionar de verdade.

Dados não podem desaparecer ao navegar.

Usar persistência simples e confiável para V1, preferencialmente localStorage ou equivalente se não houver necessidade de backend.

Não adicionar autenticação, pagamentos ou serviços externos sem necessidade.

## 15. QUALIDADE

Antes de concluir, testar:
- cliente;
- casa;
- múltiplas bases;
- base → nova lista independente;
- lista vazia;
- +/−;
- unidades;
- produto personalizado;
- categoria personalizada;
- edição;
- duplicação;
- exclusão;
- histórico;
- PDF/impressão;
- cardápio Não;
- cardápio Sim;
- 1, 2 e 4 cardápios;
- imagens completas corretas;
- ausência de seleção individual de pratos;
- ausência de preços;
- ausência de estoque;
- ausência de cálculo automático por capacidade;
- responsividade mobile/desktop;
- build/lint/testes disponíveis.

Corrigir erros antes de considerar concluído.

## 16. ENTREGA

Entregar o projeto completo, funcional e organizado.

Não deixar os fluxos principais como mock visual.

Executar validações disponíveis.

Ao final informar:
- o que foi implementado;
- testes executados;
- resultado do build;
- pendências, se houver.

Quando houver dúvida, escolher a solução mais simples que preserve exatamente esta especificação.

Não inventar funcionalidades.