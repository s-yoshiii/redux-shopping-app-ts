import { CartItems } from "./types/cartItem";

const cartItems: CartItems[] = [
  {
    id: 1,
    title: "Next.js入門講座",
    price: 12000,
    img: "https://placehold.jp/3d4070/ffffff/600x400.png",
    amount: 1,
  },
  {
    id: 2,
    title: "MERNスタックで本格的なSNSアプリ構築講座",
    price: 24000,
    img: "https://placehold.jp/3e704d/ffffff/600x400.png",
    amount: 1,
  },
  {
    id: 3,
    title: "GraphQLとApollo入門講座",
    price: 8900,
    img: "https://placehold.jp/da07be/ffffff/600x400.png",
    amount: 1,
  },
  {
    id: 4,
    title: "Three.jsでモダンウェブサイト構築講座",
    price: 14000,
    img: "https://placehold.jp/3d4070/ffffff/600x400.png",
    amount: 1,
  },
];

export default cartItems;
