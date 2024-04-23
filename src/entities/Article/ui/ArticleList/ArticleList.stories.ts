import type { Meta, StoryObj } from "@storybook/react";
import ArticleList from "./ArticleList";
import { Article, ArticleView } from "entities/Article/model/types/article";

const article = {
  id: 9,
  title: "Руководство по JavaScript",
  subtitle: "Особенности языка и стандарты",
  img: "https://apprand.com/wp-naughtycontent/uploads/2015/08/maxresdefault.jpg",
  views: 0,
  created_at: "2024-04-22T11:36:46.704Z",
  updated_at: "2024-04-22T11:36:46.704Z",
  author: {
    id: 1,
    username: "neecsman",
    firstname: "Никита",
    lastname: "Колесников",
    gender: "male",
    email: "nikappleid@yandex.ru",
    password: "$2b$10$KBLfXtx7Ywz5bPGnYsZM2ei4RwjsVdbFm6r0rWjFZywSspRk7KiAu",
    currency: "RUB",
    country: "Россия",
    city: "Москва",
    avatar:
      "https://sun1-16.userapi.com/s/v1/ig2/hAR2CYE6ofvtRmkzAl76-slcxdpVHtJo_k44pv3ARZrTE6swODlXQ_YTtFx24uQ7L106g8OkyftKxtvjmaVdAc4O.jpg?size=200x200&quality=96&crop=129,226,1240,1240&ava=1",
  },
  tags: [
    {
      id: 1,
      type: "IT",
    },
  ],
  blocks: [
    {
      id: 32,
      type: "TEXT",
      title: "Общие сведения о JavaScript",
      paragraphs: [
        {
          id: 9,
          text: "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
        },
        {
          id: 10,
          text: "JavaScript — это один из самых популярных языков программирования в мире. Он, созданный более 20 лет назад, прошёл в своём развитии огромный путь. JavaScript задумывался как скриптовый язык для браузеров. В самом начале он обладал куда более скромными возможностями, чем сейчас. Его, в основном, использовали для создания несложных анимаций, вроде выпадающих меню, о нём знали как о части технологии Dynamic HTML (DHTML, динамический HTML).",
        },
      ],
    },
    {
      id: 33,
      type: "TEXT",
      title: "Основные характеристики JavaScript",
      paragraphs: [
        {
          id: 12,
          text: "Динамический. В отличие от статических языков программирования, динамические языки способны, во время выполнения программы, выполнять действия, которые статические языки выполняют во время компиляции программ. У такого подхода есть свои плюсы и минусы, но он даёт в распоряжение разработчика такие мощные возможности, как динамическая типизация, позднее связывание, рефлексия, функциональное программирование, изменение объектов во время выполнения программы, замыкания и многое другое.",
        },
        {
          id: 13,
          text: "Слабо типизированный. В отличие от языков с сильной типизацией, языки со слабой типизацией не принуждают программиста, например, использовать в неких ситуациях объекты определённых типов, выполняя, при необходимости, неявные преобразования типов. Это даёт больше гибкости, но JS-программы не являются типобезопасными, из-за этого усложняются задачи проверки типов (на решение этой проблемы направлены TypeScript и Flow)",
        },
        {
          id: 15,
          text: "Интерпретируемый. Широко распространено мнение, в соответствии с которым JavaScript является интерпретируемым языком программирования, что означает, что программы, написанные на нём, не нуждаются в компиляции перед выполнением. JS в этом плане противопоставляют таким языкам, как C, Java, Go. На практике же браузеры, для повышения производительности программ, выполняют компиляцию JS-кода перед его выполнением. Этот шаг, однако, прозрачен для программиста, он не требует от него дополнительных усилий.",
        },
        {
          id: 14,
          text: "Динамически типизированный. Типы переменных при JS-разработке задавать необязательно. В одну и ту же переменную можно, например, сначала записать строку, а потом — целое число.",
        },
        {
          id: 11,
          text: "Высокоуровневый. Он даёт программисту абстракции, которые позволяют не обращать внимание на особенности аппаратного обеспечения, на котором выполняются JavaScript-программы. Язык автоматически управляет памятью, используя сборщик мусора. Разработчик, в результате, может сосредоточиться на решении стоящих перед ним задач, не отвлекаясь на низкоуровневые механизмы (хотя, надо отметить, это не отменяет необходимости в рациональном использовании памяти). Язык предлагает мощные и удобные средства для работы с данными различных типов.",
        },
      ],
    },
    {
      id: 34,
      type: "CODE",
      code: "<!DOCTYPE html><html> &nbsp;<body>&nbsp;&nbsp;&nbsp;<p id='hello'></p>&nbsp;&nbsp;&nbsp;<script>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;document.getElementById('hello').innerHTML = 'Hello, world!';&nbsp;&nbsp;&nbsp;</script>&nbsp;</body></html>",
    },
    {
      id: 35,
      type: "TEXT",
      title: "JavaScript и стандарты",
      paragraphs: [
        {
          id: 16,
          text: "ECMAScript, или ES, это название стандарта, которым руководствуются разработчики JavaScript-движков, то есть — тех сред, где выполняются JS-программы. Различные стандарты вводят в язык новые возможности, говоря о которых нередко упоминают наименование стандартов в сокращённой форме, например — ES6. ES6 — это то же самое, что и ES2015, только в первом случае число означает номер версии стандарта (6), а во втором — год принятия стандарта (2015).",
        },
      ],
    },
    {
      id: 36,
      type: "IMAGE",
      title: "Изображение № 1",
      src: "https://habrastorage.org/r/w1560/getpro/habr/post_images/282/564/2d0/2825642d0e8b41dc4042b54d0898049a.png",
    },
  ],
  comments: [],
};

const meta = {
  title: "shared/ArticleList",
  component: ArticleList,
  parameters: {},
} satisfies Meta<typeof ArticleList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const RowList: Story = {
  args: {
    articles: [
      article as Article,
      article as Article,
      article as Article,
      article as Article,
      article as Article,
      article as Article,
    ],
    view: ArticleView.ROW,
  },
};

export const GridList: Story = {
  args: {
    articles: [
      article as Article,
      article as Article,
      article as Article,
      article as Article,
      article as Article,
      article as Article,
    ],
    view: ArticleView.GRID,
  },
};
