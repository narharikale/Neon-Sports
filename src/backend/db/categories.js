import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */


export const categories = [
  {
    _id: uuid(),
    categoryName: "Men",
    image:'/assets/man1.jpg'
  },
  {
    _id: uuid(),
    categoryName: "Women",
    image:'/assets/women1.jpg'
  },
  {
    _id: uuid(),
    categoryName: "Kids",
    image:'/assets/kid1.jpg'
  },
];
