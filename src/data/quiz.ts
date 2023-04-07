export const QUIZ = [
  {
    id: '1',
    title: 'Utilizando Estados',
    level: 1,
    questions: [
      {
        title: 'Os Hooks são uma forma de trabalharmos com funções no React em vez de classes. useState e useEffect são exemplos de hooks bem utilizados. Porém, ainda não é possível criar nossos próprios hooks.',
        alternatives: [
          'Verdadeiro',
          'Falso'
        ],
        correct: 0
      },
      {
        title: 'A imutabilidade no React é muito importante porque se mutarmos diretamente o valor de um estado em vez de substituí-lo por um novo valor, não ocorre corretamente uma nova renderização do seu componente.',
        alternatives: [
          'Verdadeiro',
          'Falso'
        ],
        correct: 0
      },
      {
        title: 'Sobre a renderização no React, assinale a alternativa incorreta:',
        alternatives: [
          'Há dois casos comuns em que um componente React é renderizado: a renderização inicial do componente e atualizações de estado.',
          'As re-renderizações normalmente não recriam todos os componentes como a renderização inicial',
          'Uma atualização de um estado de um componente pai pode ocasionar a re-renderização de um componente filho (aninhado).',
          'O React não segue um fluxo definido ao renderizar uma tela, podendo variar bastante as etapas do processo.'
        ],
        correct: 0  
      },
    ]
  },
  {
    id: '2',
    title: 'Utilizando Typescript',
    level: 2,
    questions: [
      {
        title: "Que tipo de atribuição é esta variável, `const fullName: string = 'Dylan Israel';`?",
        alternatives: [
          'Explicita',
          'Implícita'
        ],
        correct: 0
      },
      {
        title: "Qual é o tipo de `const exemplo = ['Dylan']`?",
        alternatives: [
          'unknown[]',
          'string',
          'string[]',
          'any[]'
        ],
        correct: 2
      },
      {
        title: "keyof pode ser usado com assinaturas de índice para extrair o tipo de índice.",
        alternatives: [
          'Verdadeiro',
          'False',
        ],
        correct: 0
      },
    ]
  },
  {
    id: '3',
    title: 'React Navigation',
    level: 2,
    questions: [
      {
        title: 'Qual a melhor descrição para identificar o Stack Navigator?',
        alternatives: [
          'Adiciona um menu fixo na parte inferior do dispositivo, facilitando o acesso a telas utilizadas com mais frequência.',
          'Ao abrir uma nova tela, essa nova tela é colocada no topo da pilha de navegação e ao voltar telas, as mesmas são removidas dessa pilha.',
          'Adiciona um menu lateral, ocupando toda a altura do dispositivo. No primeiro momento esse menu fica escondido e você consegue abrir o menu arrastando a tela.'
        ],
        correct: 1
      },
      {
        title: 'Ao “tipar” as rotas, você tem a vantagem de no momento da navegação saber se uma rota recebe parâmetros ou não e qual o formato dos parâmetros.',
        alternatives: [
          'Verdadeiro.',
          'Falso'
        ],
        correct: 0
      },
      {
        title: 'Sobre o NavigationContainer é correto afirmar.',
        alternatives: [
          'O NavigationContainer é o componente no qual criamos uma rota na aplicação, passando para ele as propriedades "name" e "component".',
          'O NavigationContainer  é um “hook” exportado de dentro do  react navigation que nos permite acessar funções como o "navigate" e o "goBack".',
          'O NavigationContainer é um contexto que compartilha com nossa aplicação, todas as rotas e propriedades de navegação.'
        ],
        correct: 2
      },
    ]
  },
  {
    id: '4',
    title: 'Styled Components',
    level: 3,
    questions: [
      {
        title: 'CSS-in-JS é a estratégia de estilo pela qual o JavaScript é usado para estilizar componentes.',
        alternatives: [
          'Verdadeiro',
          'Falso'
        ],
        correct: 0
      },
      {
        title: 'Assinale abaixo a alternativa que não corresponde a uma característica do Styled Components.',
        alternatives: [
          'Realizar a importação default do styled e  e utilizá-lo para criar os componentes (ex.: styled.View).',
          'É possível tanto criar componentes estilizados predefinidos com o "styled." quanto repassar componentes personalizados para ele por styled().',
          'A forma de estilizar os componentes se assemelha bastante ao que utilizamos quando trabalhamos diretamente com CSS (letras minúsculas, separadas por hífen e com ponto e vírgula ao final).',
          'É possível personalizar apenas as estilizações dos componentes (prop style) via styled, ou seja, não é possível configurar outras propriedades/atributos do componente.'
        ],
        correct: 1
      },
      {
        title: 'Com o Styled Components é possível isolar a estrutura do componente da sua estilização.',
        alternatives: [
          'Verdadeiro',
          'Falso'
        ],
        correct: 0
      },
    ]
  },
  {
    id: '5',
    title: 'Local Storage',
    level: 2,
    questions: [
      {
        title: 'Qual dos seguintes métodos salva informações no AsyncStorage?',
        alternatives: [
          'AsyncStorage.removeItem',
          'AsyncStorage.setItem',
          'AsyncStorage.getItem'
        ],
        correct: 1
      },
      {
        title: 'O que melhor descreve o PropDrilling?',
        alternatives: [
          'Estratégia onde você repassa propriedades entre componentes até você chegar no componente desejado.',
          'Estratégia onde você salva informações localmente no dispositivo (storage) e acessar quando precisar.',
          'Estratégia onde você compartilha informações entre componentes através de contextos (Context API).'
        ],
        correct: 1
      },
      {
        title: 'Qual a maneira correta de salvar objetos no AsyncStorage?',
        alternatives: [
          "await AsyncStorage.setItem('@app:key', { id: 1, name: 'Item 1' });",
          "await AsyncStorage.getItem('@app:key', JSON.stringify({ id: 1, name: 'Item 1' }));",
          "await AsyncStorage.setItem('@app:key', JSON.stringify({ id: 1, name: 'Item 1' }));"
        ],
        correct: 2
      },
    ]
  },
  {
    id: '6',
    title: 'React Native',
    level: 1,
    questions: [
      {
        title: 'Assinale a alternativa correta sobre React Native:',
        alternatives: [
          'React Native é um framework Javascript baseado no React capaz de criar aplicações apenas para Android e iOS.',
          'Diferentemente do React, o React Native é construído totalmente pela comunidade e não tem nenhuma relação com o Facebook.',
          'Com o React Native você consegue manter quase toda a sua aplicação pelo Javascript e manipular código nativo caso necessário.',
          'Apesar do destaque do ReactJS na Web, o React Native não é muito utilizado atualmente no mercado de trabalho da área mobile.'
        ],
        correct: 2
      },
      {
        title: 'Assinale a alternativa incorreta sobre React Native CLI e Expo',
        alternatives: [
          'Tanto com React Native CLI quanto com Expo é possível criar aplicações para iOS e Android.',
          'React Native CLI é a maneira mais "crua" de se criar um projeto React Native. Já o Expo traz mais funcionalidades em cima dessa base, por exemplo o Expo Go.',
          'Com o Expo é possível testar aplicações iOS pelo Expo Go caso você tenha um dispositivo físico iOS mesmo que não tenha um sistema macOS, o que não é possível pela React Native CLI.',
          'A documentação oficial do React Native recomenda apenas a React Native CLI, nem chegando a mencionar o Expo.'
        ],
        correct: 3
      },
      {
        title: 'Sobre o Expo, assinale a alternativa correta:',
        alternatives: [
          'Expo tem dois caminhos tradicionais ao criar um projeto: Managed Workflow e Bare Workflow.',
          'Managed Workflow é a maneira de criar projetos onde desde o início você tem acesso ao seu código nativo.',
          'Com o Bare Workflow você não pode utilizar em nenhum momento o Expo Go.',
          'A configuração do ambiente React Native para Managed Workflow é mais complexa do que para Bare Workflow'
        ],
        correct: 3
      },
      {
        title: 'Sobre componentização em React Native, escolha a alternativa incorreta:',
        alternatives: [
          'Componentizar é uma forma de reaproveitar trechos de código em vários locais do seu código.',
          'Uma das vantagens da componentização é simplificar um componente muito complexo em múltiplos componentes menores, facilitando assim na manutenção do código.',
          'Apesar de ajudar no reaproveitamento e simplificação do código, componentizar reduz a produtividade e legibilidade do projeto.',
          'Nenhuma está correta.'
        ],
        correct: 3
      },
    ]
  },
];