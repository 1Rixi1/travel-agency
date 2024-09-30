import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "Вестминстерский мост",
    city: "Лондон",
    distance: 300,
    address: "Вестминстерский мост, Лондон",
    price: 99,
    maxGroupSize: 10,
    desc: "это описание",
    reviews: [
      {
        name: "Джон Доу",
        rating: 4.6,
      },
      {
        name: "Крис Браун Доу",
        rating: 4.6,
      },
      {
        name: "Дэниел Метти",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Бали, Индонезия",
    city: "Индонезия",
    distance: 400,
    address: "Бали, Индонезия",
    price: 99,
    maxGroupSize: 8,
    desc: "это описание",
    reviews: [
      {
        name: "Джон Доу",
        rating: 4.6,
      },
      {
        name: "Крис Браун Доу",
        rating: 4.6,
      },
      {
        name: "Дэниел Метти",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Заснеженные горы, Таиланд",
    city: "Таиланд",
    distance: 500,
    address: "Заснеженные горы, Таиланд",
    price: 99,
    maxGroupSize: 8,
    desc: "это описание",
    reviews: [
      {
        name: "Джон Доу",
        rating: 4.6,
      },
      {
        name: "Крис Браун Доу",
        rating: 4.6,
      },
      {
        name: "Дэниел Метти",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Красивый рассвет, Таиланд",
    city: "Таиланд",
    distance: 500,
    address: "Красивый рассвет, Таиланд",
    price: 99,
    maxGroupSize: 8,
    desc: "это описание",
    reviews: [
      {
        name: "Джон Доу",
        rating: 4.6,
      },
      {
        name: "Крис Браун Доу",
        rating: 4.6,
      },
      {
        name: "Дэниел Метти",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Нуса Пенида, Бали, Индонезия",
    city: "Индонезия",
    distance: 500,
    address: "Нуса Пенида, Бали, Индонезия",
    price: 99,
    maxGroupSize: 8,
    desc: "это описание",
    reviews: [
      {
        name: "Дэниел Метти",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Весна цветущей сакуры",
    city: "Япония",
    distance: 500,
    address: "Цветущие сады, Япония",
    price: 99,
    maxGroupSize: 8,
    desc: "это описание",
    reviews: [
      {
        name: "Джон Доу",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Хольмен Лофотен",
    city: "Франция",
    distance: 500,
    address: "Хольмен, Лофотен, Франция",
    price: 99,
    maxGroupSize: 8,
    desc: "это описание",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Заснеженные горы, Таиланд",
    city: "Таиланд",
    distance: 500,
    address: "Заснеженные горы, Таиланд",
    price: 99,
    maxGroupSize: 8,
    desc: "это описание",
    reviews: [
      {
        name: "Джон Доу",
        rating: 4.6,
      },

      {
        name: "Дэниел Метти",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
];


export default tours;
