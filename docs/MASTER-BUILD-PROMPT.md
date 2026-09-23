# PROMPT MESTRE — SISTEMA LISTA DE COMPRAS

Crie do zero uma aplicação web responsiva, mobile-first, profissional, simples e funcional chamada **Lista de Compras**.

## CONTEXTO

O sistema será usado por um operador que organiza compras para casas de hospedagem/aluguel por temporada, com referência de uso em Búzios/RJ.

O sistema NÃO é ERP, NÃO é estoque, NÃO é restaurante, NÃO é sistema de pedidos e NÃO deve tentar resolver problemas que não foram solicitados.

O objetivo é:
1. cadastrar clientes e casas;
2. criar listas de compras independentes;
3. usar listas-base criadas manualmente;
4. montar compras por categorias, produtos, unidades e quantidades;
5. manter histórico das listas;
6. gerar/imprimir a lista;
7. opcionalmente oferecer ao cliente imagens completas de cardápios selecionados.

Não usar preços, estoque, saldo, custo, fornecedor, baixa de estoque, cálculo automático por hóspedes ou integração automática entre cardápio e compras.

## PRINCÍPIO FUNDAMENTAL

Cada lista de cliente é independente.

Quando uma lista-base for usada, seus itens são COPIADOS para a nova lista. Depois disso:
- editar a lista não altera a base;
- editar a base não altera listas antigas;
- duplicar uma lista cria outra lista independente.

Não calcular automaticamente quantidades com base na capacidade da casa.

---

# NAVEGAÇÃO

Menu:
- Início
- Nova lista
- Listas
- Clientes
- Casas
- Listas-base
- Catálogo
- Documentos/Impressões
- Configurações, se realmente necessário

Não criar dashboards com gráficos, KPIs, estoque ou métricas desnecessárias.

---

# TELA INICIAL

Visual limpo, profissional, mobile-first.

Título:
**Lista de Compras**

Subtítulo:
**Organização de compras para hospedagens**

Botão principal:
**+ NOVA LISTA DE COMPRAS**

Mostrar listas recentes em cards com:
- cliente;
- casa;
- período;
- quantidade de itens.

Ações:
- Abrir
- Duplicar
- PDF/Imprimir

Atalhos:
- Clientes
- Casas
- Listas-base
- Catálogo

---

# CLIENTES

Cadastro manual:
- Nome
- WhatsApp/contato
- Observações

Permitir criar novo cliente durante o fluxo de nova lista.

---

# CASAS

Cadastro manual:
- Nome da casa
- Endereço
- Capacidade máxima de hóspedes
- Observações/informações básicas

A capacidade é apenas informação da casa. Não deve gerar quantidades automaticamente.

---

# LISTAS-BASE

IMPORTANTE: NÃO criar exatamente três bases fixas.

O operador pode criar quantidade ILIMITADA de listas-base.

Exemplos:
- Base 10 pessoas
- Base 15 pessoas
- Base 20 pessoas
- Base Fim de Semana
- Base Casa X

Cada base é configurada manualmente com:
- nome;
- categorias;
- produtos;
- unidades;
- quantidades;
- observações.

A base pode ser editada, duplicada e excluída.

Ao criar uma lista de cliente:
- escolher qualquer base existente; OU
- começar vazia.

---

# NOVA LISTA

## Etapa 1 — Identificação

Campos:
- Cliente: selecionar ou + Novo cliente
- Casa: selecionar ou + Nova casa
- Data de entrada/check-in
- Data de saída/check-out
- Observações

## Etapa 2 — Base

Opções:
- escolher uma lista-base existente;
- começar vazia.

Mostrar uma pequena prévia da base:
- quantidade de categorias;
- quantidade de produtos.

## Etapa 3 — Montagem

No topo:
- cliente;
- casa;
- capacidade;
- período.

Depois:
- busca de produtos;
- filtro por categoria;
- catálogo.

Cada produto deve ser editável DIRETAMENTE na própria linha, sem exigir modal para adicionar.

Exemplo visual:

Arroz | [Pacote ▼] | [− 2 +]

Água | [Fardo ▼] | [− 2 +]

Cerveja | [Lata ▼] | [− 12 +]

Regras:
- quantidade inicial 0;
- ao aumentar de 0, produto entra na lista;
- ao voltar a 0, produto sai da lista;
- unidade e quantidade ficam na própria linha;
- unidades devem ser coerentes com o produto;
- não criar dezenas de produtos duplicados apenas por tamanho/marca.

Unidades possíveis:
- Unidade
- Pacote
- Fardo
- Garrafa
- Lata
- Caixa
- Dúzia
- Quilo
- Litro
- etc., conforme fizer sentido.

Exemplos:
- Arroz: pacote/fardo
- Detergente: unidade/caixa
- Água: garrafa/fardo/caixa
- Cerveja: lata/garrafa/fardo/caixa
- Ovos: dúzia
- Carnes: quilo

Em cada categoria:
**+ ADICIONAR PRODUTO**

O produto personalizado deve conter:
- nome;
- unidade;
- quantidade.

Produto personalizado pertence SOMENTE àquela lista. Não entra automaticamente no catálogo global.

Na lista inteira:
**+ ADICIONAR CATEGORIA/ÁREA**

Categorias personalizadas pertencem somente àquela lista.

No celular, manter acesso persistente:
**Ver lista atual — X itens**

---

# CATÁLOGO GLOBAL

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

NÃO criar Piscina ou Manutenção como categorias fixas.

Se forem necessárias, o operador cria uma categoria personalizada dentro da lista.

## PRODUTOS DO CATÁLOGO

### Produtos de limpeza
Água sanitária; Álcool líquido; Álcool perfumado; Desengordurante; Desinfetante; Detergente; Limpa-alumínio; Limpa-cerâmica; Limpa-vidros; Limpador multiuso; Limpador de banheiro; Lustra-móveis; Removedor; Sabão em barra; Sabão líquido; Saponáceo; Tira-manchas; Esponja; Esponja de aço; Flanela; Luvas de limpeza; Pano de chão; Pano multiuso; Pano para vidro; Rodo; Vassoura; Aromatizador de ambiente; Desodorizador sanitário; Pastilha sanitária.

### Higiene e amenities
Álcool em gel; Algodão; Cotonete; Creme dental; Escova dental; Fio dental; Lenço de papel; Papel higiênico; Sabonete; Sabonete líquido; Shampoo; Condicionador; Hidratante corporal; Absorvente; Sacos para lixo de banheiro.

### Mantimentos
Açúcar; Arroz; Café; Farinha de mandioca; Farinha de trigo; Feijão; Fubá; Macarrão; Sal; Óleo; Azeite; Vinagre; Ketchup; Maionese; Mostarda; Molho de pimenta; Molho de tomate; Extrato de tomate; Molho inglês; Alho; Cebola; Caldo/tempero culinário; Orégano; Pimenta-do-reino; Sal grosso; Temperos diversos; Amido de milho; Aveia; Biscoitos; Farofa pronta; Fermento; Leite de coco; Leite condensado; Creme de leite; Gelatina.

### Carnes
Alcatra; Bacon; Bife bovino; Carne de panela; Carne moída; Carne seca; Contra-filé; Costela bovina; Filé mignon; Linguiça; Patinho; Pernil suíno; Bisteca suína; Costelinha suína; Lombo suíno; Frango; Filé de frango; Peito de frango; Sobrecoxa de frango; Asa de frango.

### Peixes e frutos do mar
Camarão; Filé de peixe; Peixe inteiro; Lula; Polvo; Salmão; Mexilhão; Outros frutos do mar.

### Hortifruti
Abóbora; Abobrinha; Aipim; Alface; Batata; Batata-doce; Berinjela; Beterraba; Brócolis; Cenoura; Chuchu; Couve; Couve-flor; Pepino; Pimentão; Rúcula; Tomate; Alho; Cebola; Cheiro-verde; Coentro; Salsa; Cebolinha; Limão; Abacaxi; Banana; Laranja; Maçã; Mamão; Manga; Melancia; Melão; Morango; Uva.

### Café da manhã
Bisnaguinha; Croissant; Pão de forma; Pão de queijo; Pão francês; Pão integral; Torradas; Geleia; Margarina; Manteiga; Mel; Muçarela; Presunto; Queijo minas; Queijo prato; Requeijão; Ovos; Bolo de cenoura; Bolo de chocolate; Abacaxi; Banana; Laranja; Mamão; Manga; Melancia; Melão; Morango; Uva; Aveia; Granola; Iogurte natural; Leite; Café; Matte; Suco natural.

### Bebidas
Água mineral; Água com gás; Água de coco; Café; Chá; Leite; Matte; Polpa de fruta; Refrigerante; Suco; Cerveja; Espumante; Vinho; Destilados.

### Padaria e lanches
Cachorro-quente; Hambúrguer; Massa de pastel; Massa de pizza; Pão de hambúrguer; Pão de queijo; Pão francês; Pão de forma; Presunto; Queijo; Salsicha.

### Confeitaria e sobremesas
Biscoito; Cacau em pó; Chocolate; Chocolate em pó; Coco ralado; Cream cheese; Creme de leite; Doce de leite; Gelatina; Leite condensado; Sorvete; Chocolate granulado; Frutas; Ovos; Farinha de trigo; Açúcar.

### Cozinha / consumíveis
Filme plástico; Papel-alumínio; Papel-manteiga; Papel-toalha; Filtro de café; Sacos para alimentos; Sacos tipo zip; Guardanapos; Palitos de dente; Espetos; Esponjas; Detergente.

### Descartáveis
Copo descartável; Prato descartável; Talher descartável; Guardanapo; Marmita descartável; Tampa para marmita; Canudo; Embalagem para alimentos; Saco para alimentos; Copo para café.

### Lavanderia
Sabão em pó; Sabão líquido; Amaciante; Alvejante; Tira-manchas; Sabão em barra; Sacos para roupa.

### Churrasco
Carvão; Sal grosso; Acendedor; Espetos; Papel-alumínio; Farofa; Molho barbecue; Molho de alho; Vinagrete; Linguiça; Carnes para churrasco; Pão de alho.

### Pet
Ração; Tapete higiênico; Sacos para dejetos; Petiscos; Areia sanitária.

---

# REVISÃO E SALVAMENTO

Antes de salvar, mostrar:
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

Botão:
**SALVAR LISTA**

Depois de salvar:
**Lista criada!**

Ações:
- Abrir
- Editar
- Duplicar
- Gerar PDF/Imprimir
- Oferecer cardápio

---

# CARDÁPIO — REGRA DEFINITIVA

O cardápio é SOMENTE material de apresentação.

Ele NÃO é um sistema de pedidos.

Depois de finalizar a lista, perguntar:

**Oferecer cardápio?**
- Não
- Sim

Se Sim:

**Qual cardápio deseja oferecer?**

Permitir selecionar:
- Café da manhã
- Almoço
- Lanche da tarde
- Sobremesas

Pode selecionar um, vários ou todos.

IMPORTANTE:
Cada opção selecionada corresponde a uma IMAGEM COMPLETA do respectivo cardápio.

Exemplo:
Se selecionar Café da manhã + Almoço:
- anexar a imagem completa do cardápio Café da manhã;
- anexar a imagem completa do cardápio Almoço.

O cliente recebe a lista juntamente com essas imagens.

O cliente NÃO escolhe pratos dentro do sistema.

O cliente apenas visualiza o cardápio e conversa diretamente com o operador para informar o que deseja.

NÃO criar:
- seleção de pratos;
- carrinho;
- pedido;
- quantidade de pratos;
- preços;
- cálculo de ingredientes;
- vínculo prato → compras;
- disponibilidade;
- checkout.

O cardápio não altera a lista de compras.

As quatro imagens devem existir como materiais independentes:
- cardápio Café da manhã
- cardápio Almoço
- cardápio Lanche da tarde
- cardápio Sobremesas

---

# CONTEÚDO DOS CARDÁPIOS

## Café da manhã

### Pães e panificados
Bisnaguinhas; Croissant; Pão de forma; Pão de queijo; Pão francês; Pão integral; Torradas.

### Frios e acompanhamentos
Geleia; Margarina; Manteiga; Mel; Muçarela; Presunto; Queijo minas; Queijo prato; Requeijão.

### Ovos
Omelete; Ovos fritos; Ovos mexidos.

### Bolos e doces
Bolo de cenoura com cobertura de chocolate; Bolo de chocolate.

### Frutas
Abacaxi; Banana; Laranja; Mamão; Manga; Melancia; Melão; Morango; Uva.

### Cereais e laticínios
Aveia; Granola; Iogurte natural; Leite.

### Bebidas
Café; Leite; Matte; Suco natural.

## Almoço

### Carnes bovinas
Bife acebolado; Bife com fritas; Carne assada; Carne de panela; Carne seca com aipim; Costela com batata; Estrogonofe de carne; Filé mignon; Filé mignon ao molho madeira; Rabada com agrião; Rocambole de carne moída recheada.

### Frango
Estrogonofe de frango; Filé de frango à parmegiana; Frango assado; Frango com creme de milho; Frango grelhado; Fricassê de frango; Galinha ensopada; Sobrecoxa assada com batata.

### Suínos
Bisteca suína acebolada; Costelinha suína ao molho barbecue; Costelinha suína assada; Lombo suíno assado; Pernil assado.

### Peixes
Filé de peixe à milanesa; Filé de peixe com creme de alho-poró; Filé de peixe grelhado; Peixe assado com batatas; Peixe frito; Peixada.

### Frutos do mar
Bobó de camarão; Camarão ao alho e óleo; Camarão na moranga; Moqueca de camarão; Polvo à lagareiro; Salmão.

### Pratos tradicionais
Baião de dois; Dobradinha; Feijoada; Galinhada; Mocotó; Vaca atolada.

### Massas
Canelone; Lasanha à bolonhesa; Lasanha de camarão; Lasanha de frango; Massas à bolonhesa; Massas ao molho branco; Massas com camarão; Nhoque ao molho; Rondelli de presunto e queijo.

### Risotos
Risoto de camarão; Risoto de carne-seca; Risoto de quatro queijos; Risoto de frango.

### Acompanhamentos
Aipim frito; Arroz à grega; Arroz branco; Batata frita; Batata rústica; Farofa; Feijão; Legumes salteados; Purê de batata; Salada de maionese; Salada verde; Vinagrete.

## Lanche da tarde

### Sanduíches
Misto quente; Sanduíche de carne desfiada; Sanduíche de frango com queijo; Sanduíche de presunto e queijo; Sanduíche natural de atum; Sanduíche natural de frango.

### Lanches
Cachorro-quente; Cheeseburger; Hambúrguer; X-bacon.

### Tortas e quiches
Empadão; Quiche; Torta de carne; Torta salgada de frango.

### Salgados
Bolinha de queijo; Coxinha; Enroladinho de presunto e queijo; Kibe; Pastel de carne; Pastel de frango; Pastel de queijo; Risole.

### Outras
Pão de queijo; Pizza; Tapioca.

## Sobremesas

### Clássicas
Cheesecake; Mousse de chocolate; Mousse de limão; Mousse de maracujá; Pudim; Romeu e Julieta.

### Chocolate
Brigadeirão; Brownie com sorvete; Palha Italiana; Torta de chocolate.

### Tortas
Banoffee; Torta de coco; Torta de limão; Torta de chocolate.

### Sobremesas de travessa
Bombom na travessa; Pavê de chocolate; Pavê de morango.

---

# HISTÓRICO

Cada lista deve mostrar:
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

Duplicar sempre cria uma lista independente.

---

# DOCUMENTO/PDF

Quando gerar a apresentação da lista:

1. Lista de compras
2. Depois, somente as imagens completas dos cardápios selecionados.

Lista:
- título;
- cliente;
- contato;
- casa;
- capacidade;
- entrada;
- saída;
- data de criação;
- categorias;
- produto;
- quantidade;
- unidade;
- checkbox visual;
- observações.

Sem preços.

As imagens de cardápio devem aparecer completas e visualmente organizadas, sem transformar o conteúdo em uma tela de seleção.

---

# ESTILO VISUAL

Criar algo:
- profissional;
- limpo;
- moderno;
- simples;
- mobile-first;
- rápido;
- fácil de usar;
- sem aparência genérica de projeto de IA;
- sem excesso de cores;
- sem gradientes exagerados;
- sem gráficos desnecessários;
- sem animações que prejudiquem produtividade.

Priorizar excelente experiência no celular, mas funcionar bem no desktop.

Usar boa hierarquia visual, espaçamento, tipografia legível, botões claros e componentes consistentes.

---

# PERSISTÊNCIA

A aplicação precisa realmente funcionar.

Os dados não podem desaparecer ao trocar de tela.

Implementar persistência apropriada para a primeira versão, preferencialmente simples e confiável.

Não adicionar backend, autenticação, pagamentos ou serviços externos se não forem necessários para o funcionamento inicial.

---

# QUALIDADE E VALIDAÇÃO

Antes de considerar concluído:

1. testar criação de cliente;
2. testar criação de casa;
3. testar criação de lista-base;
4. testar várias listas-base;
5. testar criação de lista vazia;
6. testar criação usando base;
7. confirmar que alterações não modificam a base;
8. testar quantidade +/−;
9. testar unidades;
10. testar produtos personalizados;
11. testar categorias personalizadas;
12. testar edição;
13. testar duplicação;
14. testar exclusão;
15. testar histórico;
16. testar impressão/PDF;
17. testar Oferecer cardápio = Não;
18. testar Oferecer cardápio = Sim;
19. testar seleção de um cardápio;
20. testar seleção de dois cardápios;
21. testar seleção dos quatro;
22. confirmar que cada seleção anexa a imagem completa correspondente;
23. confirmar que não existe seleção individual de pratos;
24. confirmar que não existe preço;
25. confirmar que não existe estoque;
26. confirmar que não existe cálculo automático por capacidade;
27. testar responsividade no celular;
28. executar build/lint/testes disponíveis e corrigir erros.

Não declarar o projeto concluído se houver erro funcional ou de build.

---

# REGRAS ABSOLUTAS

Não inventar funcionalidades.

Não transformar o projeto em:
- ERP;
- estoque;
- restaurante;
- e-commerce;
- sistema de pedidos;
- sistema financeiro.

Não adicionar preços.

Não adicionar estoque.

Não adicionar cálculo automático de quantidade.

Não adicionar integração automática entre cardápio e lista.

Não permitir seleção de pratos.

Não criar categorias fixas Piscina ou Manutenção.

Não limitar listas-base a três modelos.

Não alterar a lógica definida neste documento.

Quando houver dúvida, preservar a simplicidade e a lógica deste prompt em vez de inventar uma solução.

## ENTREGA

Crie o projeto completo e funcional.

Organize o código de forma clara e fácil de manter.

Garanta que o repositório fique com todos os arquivos necessários.

Execute as validações disponíveis.

Ao final, informe claramente:
- o que foi implementado;
- quais testes foram executados;
- se o build passou;
- se existe algum ponto pendente.

Não deixe funcionalidades apenas como mock visual: os fluxos principais precisam funcionar de verdade.
