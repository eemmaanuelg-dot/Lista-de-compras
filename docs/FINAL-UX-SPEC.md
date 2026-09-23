# Especificação final de UX — Lista de Compras

## Objetivo
Aplicação web responsiva, simples e rápida para criar listas de compras independentes para casas de hospedagem. A lista de compras é o núcleo; o cardápio é opcional e vem depois no documento.

## Navegação principal
- Início
- Nova lista
- Listas
- Clientes
- Casas
- Listas-base
- Catálogo
- Documentos/Impressões
- Configurações

## Tela inicial
Dashboard limpo e mobile-first:
- título Lista de Compras;
- botão destacado **+ Nova lista de compras**;
- listas recentes com cliente, casa, período e quantidade de itens;
- ações rápidas Abrir, Duplicar e PDF;
- atalhos para Clientes, Casas, Listas-base e Catálogo.

Não usar gráficos, estoque, preços ou métricas desnecessárias.

## Fluxo Nova Lista
### Etapa 1 — Identificação
- Cliente: selecionar ou **+ Novo cliente**
- Casa: selecionar ou **+ Nova casa**
- Data de entrada
- Data de saída
- Observações

### Etapa 2 — Base
- Selecionar qualquer lista-base criada pelo operador; ou
- Começar vazia.

As listas-base são ilimitadas, criadas manualmente e independentes. Exemplos: Base 10 pessoas, Base 15 pessoas, Base 20 pessoas. Não são criadas automaticamente e não existe cálculo por capacidade.

Ao usar uma base, seus itens são copiados para a lista do cliente. Alterações não afetam a base.

### Etapa 3 — Montagem
No topo mostrar:
- cliente;
- casa;
- período;
- capacidade da casa, quando cadastrada.

Depois:
- busca;
- categorias;
- produtos.

Cada produto deve permitir edição direta na própria linha, sem modal obrigatório:

`Produto | [Unidade ▼] | [− 0 +]`

Exemplos:
- Arroz | [Pacote ▼] | [− 2 +]
- Água | [Fardo ▼] | [− 2 +]
- Cerveja | [Lata ▼] | [− 12 +]

Ao aumentar de 0, o item entra na lista. Ao voltar a 0, sai.

As opções de unidade são específicas para cada produto e podem incluir unidade, pacote, fardo, garrafa, lata, caixa, dúzia etc.

Em cada categoria:
- **+ Adicionar produto**

Na lista inteira:
- **+ Adicionar categoria/área**

Produtos e categorias personalizados ficam somente naquela lista.

No celular, disponibilizar acesso persistente a **Ver lista atual**, com contador de itens.

## Revisão
Mostrar:
- cliente;
- casa;
- período;
- categorias;
- itens;
- quantidades/unidades;
- observações.

Depois perguntar:

**Oferecer cardápio?**
- Não
- Sim

Se Sim, permitir marcar:
- Café da manhã
- Almoço
- Lanche da tarde
- Sobremesas

Não selecionar pratos individualmente. A refeição selecionada gera o catálogo completo daquela refeição no documento.

## Salvamento
Botão principal: **Salvar lista**.

Após salvar:
- Abrir
- Editar
- Duplicar
- Gerar PDF/Imprimir

## Histórico
Cada lista deve mostrar:
- cliente;
- contato;
- casa;
- período;
- data de criação;
- quantidade de itens.

Ações: abrir, editar, duplicar, excluir e PDF.

## Cardápio — apresentação ao cliente
O cardápio não é uma ferramenta de pedido ou seleção de pratos. Ele é material de apresentação.

Ao finalizar uma lista, perguntar:

**Oferecer cardápio?**
- Não
- Sim

Se Sim, mostrar:
**Qual cardápio deseja oferecer?**
- Café da manhã
- Almoço
- Lanche da tarde
- Sobremesas

Pode selecionar um, vários ou todos.

Cada opção corresponde a uma imagem completa do respectivo cardápio. O cliente recebe a imagem inteira, visualiza as opções e informa ao operador o que deseja por comunicação externa ao sistema.

O sistema não deve permitir seleção individual de pratos, quantidades, preços ou pedidos.

As imagens são independentes da lista de compras e não alteram seus itens.

## PDF/Impressão
Ordem obrigatória:
1. Lista de compras
2. Imagens completas dos cardápios selecionados, se o operador escolheu oferecer cardápio

Cabeçalho da lista:
- cliente;
- contato;
- casa;
- capacidade;
- entrada;
- saída;
- data da lista.

Itens agrupados por categoria, com produto, quantidade, unidade e checklist visual.

Depois das compras, inserir as imagens completas dos cardápios selecionados, mantendo cada cardápio como uma apresentação visual independente.

Sem preços.

## Catálogo oficial inicial
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

Piscina e Manutenção não são categorias fixas. Qualquer necessidade fora do catálogo é adicionada manualmente à lista.

## Restrições
- Sem estoque.
- Sem preço.
- Sem cálculo automático por hóspedes.
- Sem cálculo de ingredientes.
- Sem integração prato → compras.
- Sem seleção individual de pratos.
- Sem pedido de pratos dentro do sistema.
- Sem vínculo automático entre prato e ingrediente.
- Sem funcionalidades não solicitadas.

## Prioridade técnica
Primeiro implementar o núcleo funcional e persistência confiável. Depois validar criação, edição, duplicação, bases, produtos personalizados, cardápio e impressão. Só após os fluxos principais estarem funcionando acrescentar refinamentos visuais.
