import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Men",
  },
  {
    _id: uuid(),
    categoryName: "Women",
  },
  {
    _id: uuid(),
    categoryName: "Kids",
  },
];
