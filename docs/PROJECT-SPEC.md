# Especificação funcional — Lista de Compras para Hospedagens

## 1. Visão do projeto

Ferramenta web para preparar listas de compras de casas de hospedagem.

A operação trabalha com hospedagens em casas específicas, cada uma com capacidade máxima de hóspedes. A casa já possui seus itens permanentes de uso (louças, talheres, roupa de cama, toalhas, panelas etc.), portanto o sistema não deve tratar esses itens como compras recorrentes de estoque.

O foco é **reposição/compra para uma hospedagem específica**, com uma biblioteca ampla de produtos para seleção.

Não é um ERP, não é um sistema de estoque e não é um sistema de restaurante.

---

## 2. Princípios obrigatórios

### 2.1 Independência das listas

Cada lista de cliente é independente.

Uma lista não:
- baixa produtos de estoque;
- altera outra lista;
- altera uma lista-base;
- cria automaticamente uma nova entrada no catálogo global.

### 2.2 Capacidade da casa

A casa terá uma capacidade máxima de hóspedes.

A capacidade:
- aparece como informação;
- ajuda o operador a escolher uma base;
- não calcula quantidades automaticamente.

Não haverá regra do tipo “10 hóspedes = X unidades”.

### 2.3 Unidades e quantidades

Cada produto poderá possuir uma unidade/pacote adequada, por exemplo:
- unidade;
- pacote;
- garrafa;
- lata;
- caixa;
- dúzia;
- fardo;
- etc.

A unidade pode ser escolhida/ajustada na lista específica.

A quantidade será alterável com controles simples de **– / quantidade / +**.

---

## 3. Modelos-base

Existem exatamente três modelos permanentes:

### Lista 1 — Base 10 pessoas
Modelo criado manualmente pelo responsável.

### Lista 2 — Base 15 pessoas
Modelo criado manualmente pelo responsável.

### Lista 3 — Base 20 pessoas
Modelo criado manualmente pelo responsável.

Esses modelos serão preenchidos posteriormente com os produtos e quantidades reais utilizados na operação.

### Regra de cópia

Ao criar uma lista:
- Começar vazia; ou
- usar Base 10; ou
- usar Base 15; ou
- usar Base 20.

Quando uma base for escolhida, seus itens são copiados para a nova lista.

Depois da cópia:
- a lista é independente;
- editar a lista não altera a base;
- editar a base no futuro não altera listas já criadas.

---

## 4. Dados da lista

Uma lista deverá poder registrar, conforme definido até agora:

- Cliente;
- contato/WhatsApp;
- casa;
- capacidade da casa;
- data de entrada;
- data de saída;
- data de criação da lista;
- itens;
- quantidades;
- unidades;
- observações;
- se oferece cardápio;
- quais refeições do cardápio foram contratadas.

---

## 5. Clientes e casas

O sistema deverá trabalhar com casas de hospedagem específicas.

Uma casa pode ter:
- nome;
- endereço;
- capacidade máxima;
- demais informações básicas necessárias.

A lista relaciona cliente + casa + período da hospedagem.

---

## 6. Catálogo global de produtos

O catálogo será amplo e servirá como biblioteca.

A ideia é ter muitos produtos disponíveis sem obrigar o operador a visualizar tudo ao mesmo tempo.

A navegação deverá utilizar:
- categorias;
- busca;
- produtos mais usados/frequentes;
- seleção do produto;
- unidade;
- quantidade.

Categorias previstas, sujeitas a refinamento final:
- Limpeza;
- Higiene/Amenities;
- Alimentos/Despensa;
- Café da manhã;
- Bebidas;
- Cozinha;
- Descartáveis;
- Piscina/Área externa;
- Manutenção;
- Churrasco;
- Pet;
- Eventos/Extras;
- Outros.

O catálogo final será definido antes da implementação.

---

## 7. Produtos personalizados por lista

Em cada categoria/área da lista deverá existir uma ação do tipo:

**+ Adicionar produto**

Exemplos:
- + Adicionar produto de limpeza
- + Adicionar alimento
- + Adicionar bebida

O produto personalizado:
- pertence somente àquela lista;
- não entra automaticamente no catálogo global;
- pode ter nome, unidade e quantidade.

Também deverá ser possível:

**+ Adicionar área/categoria**

Isso permite criar uma área específica somente para aquela lista, por exemplo:
- Piscina;
- Churrasco;
- Pet;
- Evento;
- qualquer outra necessidade do cliente.

Itens personalizados poderão ser identificados visualmente como **Personalizado** no documento final.

---

## 8. Histórico

O sistema deverá manter o histórico das listas criadas.

A visualização deverá mostrar, no mínimo:
- cliente;
- contato;
- casa;
- período da hospedagem;
- data de criação;
- quantidade de itens.

Ações previstas:
- abrir;
- editar;
- duplicar;
- excluir;
- imprimir/gerar PDF.

Duplicar cria uma nova lista independente.

---

## 9. Impressão/PDF da lista

A lista de compras deve ser o primeiro conteúdo do documento.

Informações:
- título;
- cliente;
- contato;
- casa;
- capacidade;
- entrada;
- saída;
- data da lista.

Depois, itens agrupados por categoria.

Cada item deve mostrar:
- produto;
- quantidade;
- unidade;
- indicação visual de checklist.

Ao final da lista:
- observações.

Se houver cardápio contratado, ele vem **depois da lista de compras**.

---

# 10. Cardápio — regra definitiva

O cardápio é um **serviço complementar**.

A lista de compras sempre existe.

Na criação da lista:

## Oferecer cardápio?

### Não
Nenhum cardápio é incluído.

### Sim
Aparecem:

- Café da manhã
- Almoço
- Lanche da tarde
- Sobremesas

O operador marca uma ou mais refeições.

### Regra fundamental

O operador **não escolhe pratos individualmente dentro da lista**.

Exemplo:

Se marcar:
- Café da manhã;
- Almoço;
- Sobremesas;

o documento terá:
1. Lista de compras;
2. Cardápio completo de Café da manhã;
3. Cardápio completo de Almoço;
4. Cardápio completo de Sobremesas.

O cliente recebe o catálogo para conversar/escolher com o responsável.

Não existe, na V1:
- seleção automática de pratos;
- cálculo de ingredientes;
- ligação entre prato e lista de compras;
- inclusão automática de ingredientes;
- preço.

---

# 11. Regra comercial

Não exibir:
- preço de produto;
- preço de prato;
- preço de serviço;
- valor antecipado.

A operação comercial será feita por:
- orçamento;
- notas;
- negociação fora da apresentação do cardápio.

---

# 12. Direção do cardápio

O cardápio deve ser:

- simples;
- bonito;
- bem feito;
- familiar;
- executável;
- adequado para uma casa de hóspedes em Búzios.

Não deve parecer:
- buffet de hotel;
- cardápio de restaurante popular;
- restaurante caseiro genérico;
- restaurante gastronômico de luxo.

A referência é o cardápio original fornecido pelo responsável: pratos conhecidos, alguns pratos especiais, mas sem variedade artificial.

As categorias são organizadas de maneira lógica e, dentro das categorias, os pratos ficam em **ordem alfabética** para facilitar a leitura.

---

# 13. Cardápio — Café da manhã (prévia atual)

## Pães e panificados
- Pão francês
- Pão de forma
- Pão integral
- Pão de queijo
- Croissant
- Torradas
- Bisnaguinhas

## Frios e acompanhamentos
- Presunto
- Muçarela
- Queijo prato
- Queijo minas
- Requeijão
- Manteiga
- Margarina
- Geleia
- Mel

## Ovos
- Ovos mexidos
- Ovos fritos
- Omelete

## Bolos e doces
- Bolo de cenoura com cobertura de chocolate
- Bolo de chocolate

## Frutas
- Abacaxi
- Banana
- Laranja
- Mamão
- Manga
- Melancia
- Melão
- Morango
- Uva

## Cereais e laticínios
- Aveia
- Granola
- Iogurte natural
- Leite

## Bebidas
- Café
- Leite
- Matte
- Suco natural

### Removidos do café da manhã por decisão
- Pão caseiro
- Pão de leite
- Pão de milho
- Omelete recheado
- Ovos com bacon
- Salsicha ao molho
- Linguiça acebolada
- Demais bolos além de bolo de cenoura com chocolate e bolo de chocolate
- Salada de frutas
- Iogurte de frutas
- Cereais
- Leite achocolatado
- Coalhada
- Opções brasileiras como tapioca/cuscuz/pão na chapa

---

# 14. Cardápio — Almoço (prévia atual)

## Carnes bovinas
- Bife com fritas
- Bife acebolado
- Carne assada
- Carne de panela
- Carne seca com aipim
- Costela com batata
- Estrogonofe de carne
- Filé mignon
- Filé mignon ao molho madeira
- Rabada com agrião
- Rocambole de carne moída recheada

## Frango
- Frango à parmegiana
- Frango assado
- Frango com creme de milho
- Frango grelhado
- Fricassê de frango
- Galinha ensopada
- Estrogonofe de frango
- Sobrecoxa assada com batata

## Suínos
- Bisteca suína acebolada
- Costelinha suína ao molho barbecue
- Costelinha suína assada
- Lombo suíno assado
- Pernil assado

## Peixes
- Filé de peixe à milanesa
- Filé de peixe com creme de alho-poró
- Filé de peixe grelhado
- Peixe assado com batatas
- Peixe frito
- Peixada

## Frutos do mar
- Bobó de camarão
- Camarão ao alho e óleo
- Camarão na moranga
- Moqueca de camarão
- Polvo à lagareiro
- Salmão

## Pratos tradicionais
- Baião de dois
- Dobradinha
- Feijoada
- Galinhada
- Mocotó
- Vaca atolada

## Massas
- Canelone
- Lasanha à bolonhesa
- Lasanha de camarão
- Lasanha de frango
- Massas à bolonhesa
- Massas ao molho branco
- Massas com camarão
- Nhoque ao molho
- Rondelli de presunto e queijo

## Risotos
- Risoto de camarão
- Risoto de carne-seca
- Risoto de quatro queijos
- Risoto de frango

## Acompanhamentos
- Aipim frito
- Arroz à grega
- Arroz branco
- Batata frita
- Batata rústica
- Feijão
- Farofa
- Legumes salteados
- Purê de batata
- Salada de maionese
- Salada verde
- Vinagrete

**Observação:** o almoço ainda está em refinamento. A lista acima incorpora as decisões já tomadas, mas ainda poderá receber ajustes antes do fechamento definitivo.

---

# 15. Cardápio — Lanche da tarde (prévia)

## Sanduíches
- Misto quente
- Sanduíche de carne desfiada
- Sanduíche de frango com queijo
- Sanduíche de presunto e queijo
- Sanduíche natural de atum
- Sanduíche natural de frango

## Lanches
- Cachorro-quente
- Cheeseburger
- Hambúrguer
- X-bacon

## Tortas e quiches
- Empadão
- Quiche
- Torta de carne
- Torta salgada de frango

## Salgados
- Bolinha de queijo
- Coxinha
- Enroladinho de presunto e queijo
- Kibe
- Pastel de carne
- Pastel de frango
- Pastel de queijo
- Risole

## Outras opções
- Pão de queijo
- Pizza
- Tapioca

**Status:** ainda em refinamento.

---

# 16. Cardápio — Sobremesas (prévia)

## Clássicas
- Cheesecake
- Mousse de chocolate
- Mousse de limão
- Mousse de maracujá
- Pudim
- Romeu e Julieta

## Chocolate
- Brigadeirão
- Brownie com sorvete
- Palha Italiana
- Torta de chocolate

## Tortas
- Banoffee
- Torta de coco
- Torta de limão
- Torta de chocolate

## Sobremesas de travessa
- Bombom na travessa
- Pavê de chocolate
- Pavê de morango

**Removidos:**
- Manjar de coco
- Categoria “Tradicionais”

**Status:** ainda em refinamento.

---

# 17. Organização visual do PDF

A ordem deve ser:

## LISTA DE COMPRAS
Informações da hospedagem
→ categorias
→ produtos
→ quantidades/unidades
→ observações

**Depois, se contratado:**

# CARDÁPIO
Refeições contratadas
→ categoria da refeição
→ subcategorias
→ opções completas

O cardápio não deve interromper ou misturar-se com a lista de compras.

---

# 18. O que NÃO implementar

Não adicionar por conta própria:
- estoque;
- saldo;
- controle de entrada/saída;
- fornecedores;
- custo dos produtos;
- preço de venda;
- cálculo automático por hóspedes;
- cálculo de ingredientes de pratos;
- seleção automática de pratos;
- integração prato → ingredientes → compras;
- login obrigatório na primeira versão;
- funcionalidades complexas que não foram definidas.

---

# 19. Base técnica do projeto

A implementação ainda será definida.

Diretriz inicial:
- aplicação web;
- responsiva;
- simples;
- funcional;
- inicialmente sem dependência do antigo projeto do Replit;
- GitHub será o repositório oficial do novo projeto;
- começar do zero;
- definir a arquitetura antes de codificar.

A solução inicial pode ser mantida simples, inclusive com persistência local, caso isso seja confirmado na fase técnica. Backend, banco de dados, autenticação e funcionalidades avançadas ficam fora da primeira versão até serem necessários.

---

# 20. Ordem de execução

### Fase 1 — Conteúdo
- finalizar Café da manhã;
- finalizar Almoço;
- finalizar Lanche da tarde;
- finalizar Sobremesas.

### Fase 2 — Catálogo
- definir categorias;
- montar catálogo amplo de produtos;
- definir unidades;
- definir produtos mais utilizados.

### Fase 3 — Modelos
- montar Base 10;
- montar Base 15;
- montar Base 20.

### Fase 4 — UX
- desenhar fluxo de criação da lista;
- clientes/casas;
- histórico;
- personalizações;
- cardápio;
- impressão/PDF.

### Fase 5 — Implementação
- iniciar o código somente depois das definições acima;
- validar cada etapa;
- testar criação, edição, duplicação, impressão e cardápio.

---

## 21. Critério de sucesso da V1

A primeira versão deve permitir que uma pessoa consiga:

1. cadastrar/selecionar cliente e casa;
2. iniciar uma lista vazia ou a partir de Base 10/15/20;
3. ajustar produtos, unidades e quantidades;
4. adicionar produtos personalizados;
5. adicionar áreas personalizadas;
6. registrar observações;
7. escolher se oferece cardápio;
8. selecionar as refeições oferecidas;
9. salvar a lista;
10. visualizar histórico;
11. duplicar/editar uma lista;
12. gerar um documento organizado com a lista primeiro e o cardápio depois, quando contratado.

A prioridade é **simplicidade + funcionalidade + organização**.
