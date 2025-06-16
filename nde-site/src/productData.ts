import mcCandle from "../src/assets/productImages/minecraftCandles.png"
import lighters from "../src/assets/productImages/fiveFlagLighters.jpg"
import scooter from "../src/assets/productImages/scooter.jpg"
import blueyRings from "../src/assets/productImages/blueyRings.jpg"
import wonderWafers from "../src/assets/productImages/wonderWafers.jpg"
import mcRings from "../src/assets/productImages/minecraftRings.jpg"

export const SELLER_ID = 'A70YSWS818V8C';

type ProductType = {
  title: string;
  price: string;
  image: string;
  rating: number;
  asin: string;
};

export const products:ProductType[] = [
  {
    title: "Minecraft Birthday Cake Candles | 6 Birthday Candles for Cake Decorations, Red & Green Striped Candles, Cake Toppers for Minecraft Party",
    price: "$9.05",
    image: mcCandle,
    rating: 4.5,
    asin: "B0CXFC2BCR"
  },
  {
    title: "Five Flags Windproof Torch Lighter 5,10,15,20,25,50,100 Pieces! (5)",
    price: "$9.98",
    image: lighters,
    rating: 4.0,
    asin: "B08KXYK62M"
  },
  {
    title: '800W/2000W e Scooter for Adults Electric Scooter with Seat 10" Off Road Pneumatic Tires Long Range Motorized e-Scooter,28-35MPH,30-35Miles Range eScooter,Fast Foldable Eletric Scooters for men',
    price: '$480',
    image: scooter,
    rating: 4.1,
    asin: 'B0CSD1ZJMT'
  },
  {
    title: 'DecoPac Bluey So Much Fun Rings, 24 Cupcake Decorations Featuring Bluey, Bingo, Bandit, and Chilli, 3D Food Safe Cake Toppers – 24 Pack',
    price: '$12.05',
    image: blueyRings,
    rating: 4.8,
    asin: 'B0CC2BS6CL',
  },
  {
    title: 'Wonder Wafers - Diamond-Ultra Scented Car Air Fresheners - Individually Wrapped (15 Per Pack) (New Leather)',
    price: '$13.00',
    image: wonderWafers,
    rating: 4.1,
    asin: 'B0CV63TXNX',
  },
  {
    title: 'DecoPac Minecraft Lush Finds Rings, Cupcake Decorations Featuring Creeper, Alex, Steve and Axolotl! Multicolored 3D Food Safe Cake Toppers – 24 Pack',
    price: '$11.67',
    image: mcRings,
    rating: 4.8,
    asin: 'B0C43XW1DM',
  },
];

  // {
  //   title: ,
  //   price: ,
  //   image: ,
  //   rating: ,
  //   asin: ,
  // },
