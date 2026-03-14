# Atividade: Explorando Objetos e Protótipos em JavaScript

## Desafio 1: A Natureza do Objeto e o Paradoxo do const
**O que é um objeto literal?** É uma lista de pares chave-valor envolta por chaves `{}`. É a forma mais direta de criar um objeto em JS sem precisar de classes.

**Reflexão sobre o const:** O `const` impede a **reatribuição** da variável (você não pode fazer `obj = {}` novamente). No entanto, o objeto em si é mutável; as propriedades internas residem na memória heap, e o `const` apenas protege o "ponteiro" para esse endereço de memória, não o conteúdo dele.

## Desafio 2: Padrões de Criação
**Diferença:** A **Função Construtora** usa a palavra-chave `new` e o `this` para ligar propriedades à nova instância. A **Função Fábrica (Factory)** é uma função comum que retorna um novo objeto explicitamente.

**Reflexão sobre Factory vs This:** A Factory evita problemas de escopo do `this`. Em funções construtoras, se você esquecer o `new` ou usar o `this` dentro de um callback anônimo, o contexto pode se perder (apontando para o `global` ou `undefined`). A Factory é mais segura por não depender do contexto de execução do `this`.

## Desafio 3: Controle de Acesso
**Getters e Setters:** Servem para interceptar o acesso (get) ou a modificação (set) de uma propriedade, permitindo validações ou cálculos antes de retornar/salvar o dado.

**Seal vs Freeze:**
- `Object.seal()`: Impede adicionar ou excluir propriedades, mas permite **alterar** os valores das propriedades existentes.
- `Object.freeze()`: É mais restritivo. Impede adição, exclusão e **qualquer alteração** de valor. Torna o objeto imutável.

## Desafio 4: A Verdadeira Herança
**O que é __proto__?** É uma propriedade "mística" (internal slot) que todo objeto possui, apontando para o protótipo do qual ele herda membros. É o elo da cadeia de protótipos.

## Desafio 5: O Trânsito de Dados
**Regras do JSON:** 1. Chaves devem estar entre aspas duplas.
2. Não aceita funções, undefined ou comentários.
3. Strings devem usar aspas duplas.

**Reflexão sobre Funções no JSON:** A função desaparece no `JSON.stringify()`. Isso ocorre porque o JSON é um formato de **dados** puramente textual. APIs REST transportam estado/informação, não comportamento (lógica de execução), garantindo que diferentes linguagens (Python, Java, PHP) possam ler os dados sem precisar executar código JS.