import { useTranslation } from "react-i18next";
import { classNames } from "helpers";
import style from "./Articles.module.scss";
import { Article, ArticleList } from "entities/Article";
import { useSelector } from "react-redux";

interface ArticlesProps {
  className?: string;
}

const article = {
  id: 8,
  title: "Руководство по JavaScript",
  subtitle: "Особенности языка и стандарты",
  img: "https://apprand.com/wp-naughtycontent/uploads/2015/08/maxresdefault.jpg",
  views: 0,
  created_at: "2024-03-29T07:54:07.447Z",
  updated_at: "2024-03-29T07:54:07.447Z",
  tags: [
    {
      id: 1,
      type: "IT",
    },
  ],
  blocks: [
    {
      id: 27,
      type: "TEXT",
      title: "Общие сведения о JavaScript",
      paragraphs: [
        {
          id: 1,
          text: "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
        },
        {
          id: 2,
          text: "JavaScript — это один из самых популярных языков программирования в мире. Он, созданный более 20 лет назад, прошёл в своём развитии огромный путь. JavaScript задумывался как скриптовый язык для браузеров. В самом начале он обладал куда более скромными возможностями, чем сейчас. Его, в основном, использовали для создания несложных анимаций, вроде выпадающих меню, о нём знали как о части технологии Dynamic HTML (DHTML, динамический HTML).",
        },
      ],
    },
    {
      id: 28,
      type: "TEXT",
      title: "Основные характеристики JavaScript",
      paragraphs: [
        {
          id: 4,
          text: "Динамический. В отличие от статических языков программирования, динамические языки способны, во время выполнения программы, выполнять действия, которые статические языки выполняют во время компиляции программ. У такого подхода есть свои плюсы и минусы, но он даёт в распоряжение разработчика такие мощные возможности, как динамическая типизация, позднее связывание, рефлексия, функциональное программирование, изменение объектов во время выполнения программы, замыкания и многое другое.",
        },
        {
          id: 6,
          text: "Динамически типизированный. Типы переменных при JS-разработке задавать необязательно. В одну и ту же переменную можно, например, сначала записать строку, а потом — целое число.",
        },
        {
          id: 7,
          text: "Интерпретируемый. Широко распространено мнение, в соответствии с которым JavaScript является интерпретируемым языком программирования, что означает, что программы, написанные на нём, не нуждаются в компиляции перед выполнением. JS в этом плане противопоставляют таким языкам, как C, Java, Go. На практике же браузеры, для повышения производительности программ, выполняют компиляцию JS-кода перед его выполнением. Этот шаг, однако, прозрачен для программиста, он не требует от него дополнительных усилий.",
        },
        {
          id: 8,
          text: "Слабо типизированный. В отличие от языков с сильной типизацией, языки со слабой типизацией не принуждают программиста, например, использовать в неких ситуациях объекты определённых типов, выполняя, при необходимости, неявные преобразования типов. Это даёт больше гибкости, но JS-программы не являются типобезопасными, из-за этого усложняются задачи проверки типов (на решение этой проблемы направлены TypeScript и Flow)",
        },
        {
          id: 3,
          text: "Высокоуровневый. Он даёт программисту абстракции, которые позволяют не обращать внимание на особенности аппаратного обеспечения, на котором выполняются JavaScript-программы. Язык автоматически управляет памятью, используя сборщик мусора. Разработчик, в результате, может сосредоточиться на решении стоящих перед ним задач, не отвлекаясь на низкоуровневые механизмы (хотя, надо отметить, это не отменяет необходимости в рациональном использовании памяти). Язык предлагает мощные и удобные средства для работы с данными различных типов.",
        },
      ],
    },
    {
      id: 29,
      type: "CODE",
      code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id='hello'></p>\n    <script>\n      document.getElementById('hello').innerHTML = 'Hello, world!';\n      </script>\n  </body>\n</html>",
    },
    {
      id: 30,
      type: "TEXT",
      title: "JavaScript и стандарты",
      paragraphs: [
        {
          id: 5,
          text: "ECMAScript, или ES, это название стандарта, которым руководствуются разработчики JavaScript-движков, то есть — тех сред, где выполняются JS-программы. Различные стандарты вводят в язык новые возможности, говоря о которых нередко упоминают наименование стандартов в сокращённой форме, например — ES6. ES6 — это то же самое, что и ES2015, только в первом случае число означает номер версии стандарта (6), а во втором — год принятия стандарта (2015).",
        },
      ],
    },
    {
      id: 31,
      type: "IMAGE",
      title: "Изображение № 1",
      src: "https://habrastorage.org/r/w1560/getpro/habr/post_images/282/564/2d0/2825642d0e8b41dc4042b54d0898049a.png",
    },
  ],
  comments: [
    {
      id: 1,
      text: "Отличная статья! Все подробно описано, приятно читать, спасибо!",
      created_at: "2024-03-29T11:57:18.871Z",
      updated_at: "2024-03-29T11:57:18.871Z",
      user: {
        id: 1,
        username: "neecsman",
        firstname: "Никита",
        lastname: "Колесников",
        gender: "male",
        email: "nikappleid@yandex.ru",
        password:
          "$2b$10$KBLfXtx7Ywz5bPGnYsZM2ei4RwjsVdbFm6r0rWjFZywSspRk7KiAu",
        currency: "RUB",
        country: "Россия",
        city: "Москва",
        avatar:
          "https://sun1-16.userapi.com/s/v1/ig2/hAR2CYE6ofvtRmkzAl76-slcxdpVHtJo_k44pv3ARZrTE6swODlXQ_YTtFx24uQ7L106g8OkyftKxtvjmaVdAc4O.jpg?size=200x200&quality=96&crop=129,226,1240,1240&ava=1",
      },
    },
    {
      id: 2,
      text: "Немного сумбурно, но в целом можно понять. Хотелось бы больше примеров с кодом! Спасибо!",
      created_at: "2024-04-04T11:12:38.159Z",
      updated_at: "2024-04-04T11:12:38.159Z",
      user: {
        id: 2,
        username: "acuaman",
        firstname: "Максим",
        lastname: "Соколов",
        gender: "male",
        email: "example@mail.ru",
        password:
          "$2b$10$6AVhQw6CVveHouiyoWckkOJOCWicv.uJCevoN13bv02.sJkNfmwVa",
        currency: "RUB",
        country: "Россия",
        city: "Москва",
        avatar:
          "https://static.tildacdn.com/tild3937-3039-4633-b266-656631353331/Rectangle_77.jpg",
      },
    },
    {
      id: 5,
      text: "Получилось оставить коммент",
      created_at: "2024-04-05T10:04:56.474Z",
      updated_at: "2024-04-05T10:04:56.474Z",
      user: {
        id: 1,
        username: "neecsman",
        firstname: "Никита",
        lastname: "Колесников",
        gender: "male",
        email: "nikappleid@yandex.ru",
        password:
          "$2b$10$KBLfXtx7Ywz5bPGnYsZM2ei4RwjsVdbFm6r0rWjFZywSspRk7KiAu",
        currency: "RUB",
        country: "Россия",
        city: "Москва",
        avatar:
          "https://sun1-16.userapi.com/s/v1/ig2/hAR2CYE6ofvtRmkzAl76-slcxdpVHtJo_k44pv3ARZrTE6swODlXQ_YTtFx24uQ7L106g8OkyftKxtvjmaVdAc4O.jpg?size=200x200&quality=96&crop=129,226,1240,1240&ava=1",
      },
    },
    {
      id: 4,
      text: "Привет",
      created_at: "2024-04-05T10:04:46.083Z",
      updated_at: "2024-04-05T10:04:46.083Z",
      user: {
        id: 1,
        username: "neecsman",
        firstname: "Никита",
        lastname: "Колесников",
        gender: "male",
        email: "nikappleid@yandex.ru",
        password:
          "$2b$10$KBLfXtx7Ywz5bPGnYsZM2ei4RwjsVdbFm6r0rWjFZywSspRk7KiAu",
        currency: "RUB",
        country: "Россия",
        city: "Москва",
        avatar:
          "https://sun1-16.userapi.com/s/v1/ig2/hAR2CYE6ofvtRmkzAl76-slcxdpVHtJo_k44pv3ARZrTE6swODlXQ_YTtFx24uQ7L106g8OkyftKxtvjmaVdAc4O.jpg?size=200x200&quality=96&crop=129,226,1240,1240&ava=1",
      },
    },
    {
      id: 3,
      text: "ASd",
      created_at: "2024-04-05T09:22:46.090Z",
      updated_at: "2024-04-05T09:22:46.090Z",
      user: {
        id: 2,
        username: "acuaman",
        firstname: "Максим",
        lastname: "Соколов",
        gender: "male",
        email: "example@mail.ru",
        password:
          "$2b$10$6AVhQw6CVveHouiyoWckkOJOCWicv.uJCevoN13bv02.sJkNfmwVa",
        currency: "RUB",
        country: "Россия",
        city: "Москва",
        avatar:
          "https://static.tildacdn.com/tild3937-3039-4633-b266-656631353331/Rectangle_77.jpg",
      },
    },
    {
      id: 6,
      text: "Надо разобраться с сортировкой\n\n\nДа?",
      created_at: "2024-04-05T10:05:08.423Z",
      updated_at: "2024-04-05T10:05:08.423Z",
      user: {
        id: 1,
        username: "neecsman",
        firstname: "Никита",
        lastname: "Колесников",
        gender: "male",
        email: "nikappleid@yandex.ru",
        password:
          "$2b$10$KBLfXtx7Ywz5bPGnYsZM2ei4RwjsVdbFm6r0rWjFZywSspRk7KiAu",
        currency: "RUB",
        country: "Россия",
        city: "Москва",
        avatar:
          "https://sun1-16.userapi.com/s/v1/ig2/hAR2CYE6ofvtRmkzAl76-slcxdpVHtJo_k44pv3ARZrTE6swODlXQ_YTtFx24uQ7L106g8OkyftKxtvjmaVdAc4O.jpg?size=200x200&quality=96&crop=129,226,1240,1240&ava=1",
      },
    },
  ],
};

const Articles: React.FC<ArticlesProps> = ({ className }) => {
  const { t } = useTranslation();
  // const articles = useSelector(getArticlesData);
  return (
    <div className={classNames(style.articles, {}, [className])}>
      <ArticleList articles={[article as any]} />
    </div>
  );
};
export default Articles;
