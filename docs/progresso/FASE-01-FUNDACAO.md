# Progresso — Lista de Compras

## Fase atual
**Fase 01 — Fundação e implementação inicial**

**Data:** 23/09/2026  
**Repositório:** `eemmaanuelg-dot/Lista-de-compras`  
**Branch:** `main`

## Ponto de partida
O projeto foi inicialmente planejado e documentado, incluindo a especificação funcional, UX final e o prompt mestre de construção.

A tentativa de concluir a implementação pelo Lovable não gerou a sincronização esperada com o GitHub. Por isso, a decisão atual é continuar a construção diretamente no repositório, usando o GitHub como **fonte de verdade** do projeto.

## O que já foi feito
- Estrutura inicial React + TypeScript + Vite.
- Interface operacional responsiva/mobile-first.
- Navegação principal da ferramenta.
- Catálogo global com as 15 categorias definidas.
- Estrutura inicial de clientes e casas.
- Estrutura inicial de listas.
- Seleção de listas-base.
- Persistência local inicial.
- Histórico inicial de listas.
- Impressão inicial.
- Workflow do GitHub Actions para validação de build.
- Documentação principal consolidada no `docs/MASTER-BUILD-PROMPT.md`.

## Regras que permanecem como fonte de verdade
- A ferramenta é **interna e operacional**, não um site institucional.
- Sem logo, slogan, marketing ou excesso de informações.
- Listas-base são ilimitadas e criadas/editadas pelo usuário.
- Cada lista de cliente é independente da base utilizada.
- Capacidade da casa é apenas informativa; não existe cálculo automático de quantidade.
- Não existe controle de estoque.
- Não existem preços.
- Produtos podem ser adicionados diretamente com unidade + quantidade.
- Produtos e categorias personalizados podem existir somente na lista em que foram criados.
- O cardápio é opcional e funciona como material de apresentação por imagens completas.
- O sistema não permite que o cliente selecione pratos individualmente, não possui carrinho e não transforma cardápio em pedido.

## O que ainda falta implementar/validar
1. Criação de cliente e casa diretamente durante o fluxo de nova lista.
2. Edição completa das listas-base, incluindo produtos, unidades e quantidades.
3. Contagem/preview de categorias e itens ao escolher uma base.
4. Produtos personalizados.
5. Categorias/áreas personalizadas.
6. Etapa de revisão antes de salvar.
7. Tela completa da lista salva.
8. Editar, duplicar e excluir listas.
9. Fluxo completo de oferta de cardápio.
10. Quatro artes completas dos cardápios:
   - Café da manhã
   - Almoço
   - Lanche da tarde
   - Sobremesas
11. Inclusão das imagens selecionadas junto à lista na impressão/PDF.
12. Fluxo completo de impressão/PDF.
13. Validação funcional completa.
14. Teste de responsividade mobile.
15. Build, lint/testes e correção de erros antes de considerar qualquer fase concluída.

## Próximo passo exato
Antes de avançar nas funcionalidades, revisar o estado atual do código no GitHub, incluindo:
- `src/App.tsx`
- `src/types.ts`
- `src/data.ts`
- `src/main.tsx`
- `src/styles.css`
- `package.json`
- workflow do GitHub Actions

Depois disso, corrigir a fundação e continuar a implementação por etapas, validando cada etapa no GitHub.

## Observação importante
`docs/PROJECT-SPEC.md` é uma especificação anterior e possui pontos que foram posteriormente alterados. Quando houver conflito, a referência atual é o `docs/MASTER-BUILD-PROMPT.md` e as decisões mais recentes registradas nesta documentação.

**Status:** Fundação em andamento — **não concluída/validada ainda**.
