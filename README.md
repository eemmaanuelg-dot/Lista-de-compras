# Lista de Compras — Hospedagens

Sistema web simples, responsivo e funcional para criação e organização de listas de compras para casas de hospedagem, com opção de anexar um cardápio complementar ao documento enviado ao cliente.

> **Status:** planejamento/definição funcional. A implementação ainda não começou.

## Conceito

A **Lista de Compras** é a parte principal e sempre será gerada. O **Cardápio** é um serviço complementar, opcional, que pode ser anexado depois da lista quando contratado.

O sistema não é um sistema de estoque, não controla saldo de produtos e não calcula automaticamente o consumo pela capacidade da casa.

## Regras principais

- Cada lista de cliente é totalmente independente.
- Não existe estoque, saldo, mínimo de estoque ou baixa de produtos.
- Casas possuem capacidade máxima de hóspedes apenas como informação de contexto.
- Quantidades não são calculadas automaticamente pela capacidade.
- Produtos possuem unidade/pacote e a unidade/quantidade pode ser ajustada na lista.
- O catálogo global será amplo, mas cada lista final conterá somente o necessário.
- Um produto personalizado pode ser criado somente para uma lista.
- Uma área/categoria personalizada também pode ser criada somente para uma lista.
- Personalizações de uma lista não alteram o catálogo global.
- A lista pode começar vazia ou ser criada a partir de uma das três bases.
- Nenhum preço será exibido no sistema ou no cardápio.
- Valores comerciais serão tratados posteriormente por orçamento e notas.

## Modelos-base

Existem exatamente três modelos permanentes:

1. **Lista 1 — Base 10 pessoas**
2. **Lista 2 — Base 15 pessoas**
3. **Lista 3 — Base 20 pessoas**

Os conteúdos e quantidades dessas bases serão definidos manualmente pelo responsável pelo sistema.

Ao criar uma lista de cliente, uma base é copiada para uma nova lista independente. Alterações na lista do cliente nunca alteram a base original.

Também existe a opção **Começar vazia** para casos diferentes.

## Cardápio

Na criação da lista:

**Oferecer cardápio?**
- Não
- Sim

Se **Não**, o documento contém somente a lista de compras.

Se **Sim**, aparecem as refeições que podem ser oferecidas:
- Café da manhã
- Almoço
- Lanche da tarde
- Sobremesas

O usuário seleciona as refeições que deseja oferecer. O sistema não seleciona pratos individualmente e não liga pratos automaticamente aos produtos da lista.

As refeições selecionadas são enviadas como **catálogos completos** depois da lista de compras.

### Ordem do documento

1. Lista de compras
2. Cardápio, somente se contratado

O cardápio é um serviço complementar e não deve parecer parte da lista de compras.

## Direção visual e de produto

- Painel simples, prático e funcional.
- Mobile-first/responsivo.
- Visual profissional, limpo e sem aparência de sistema genérico/“AI”.
- Listas finais curtas e organizadas.
- Catálogo amplo com busca e categorias para não exibir centenas de produtos de uma vez.
- Produtos agrupados por categorias.
- Itens da lista com quantidade e unidade.
- Impressão/PDF organizado, com checklist por item.
- Cardápio visualmente organizado e separado da lista.

## Estado atual do conteúdo

O cardápio está em fase de refinamento. O princípio já está definido: **simples, bonito, bem feito e executável para uma casa de hóspedes em Búzios** — não um buffet de hotel, não uma pousada gastronômica e não um restaurante caseiro genérico.

O conteúdo detalhado e as decisões pendentes ficam em [docs/PROJECT-SPEC.md](docs/PROJECT-SPEC.md).

## Próxima etapa

Finalizar o conteúdo dos quatro cardápios e, em seguida, definir as três listas-base e o catálogo de produtos antes de iniciar a implementação.

