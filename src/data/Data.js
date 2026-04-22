export const data = [
  { 
    id: 1, 
    title: "ORDERS", 
    desc: "See what sells and what doesn't. Analyze trend, set prices, and spot opportunities. Data that actually helps you make decisions.", 
    img: "cat-leftfitures.png" 
  },
  { 
    id: 2, 
    title: "SALES", 
    desc: "Take orders online or in person. Organize them by date, customer, or type. Print labels, track progress, and deliver on time.", 
    img: "cat.midfitures.png" 
  },
  { 
    id: 3, 
    title: "AUTOMATIC STOCK MANAGEMENT", 
    desc: "Track inventory in real time as orders come in.", 
    img: "cat.rightfitures.png" 
  }
];

export const pricing = [
  {
    id: 1,
    name: "STANDARD",
    price: "19.99",
    features: ["Fitur A", "Fitur B", "Fitur C"]
  },
  {
    id: 2,
    name: "MEDIUM",
    price: "29.99",
    features: ["Fitur A", "Fitur B", "Fitur C"]
  },
  {
    id: 3,
    name: "FULL",
    price: "39.99",
    features: ["Fitur A", "Fitur B", "Fitur C"]
  }
];

import cake1 from '../assets/images/cake1.png';
import cake2 from '../assets/images/cake2.png';
import catDekatPapan from '../assets/images/catdekatpapan.png';
import catTengah from '../assets/images/cattengah.png';
import papanTulis from '../assets/images/papantulis.png';
import stikerRight from '../assets/images/stikerright.png';
import threeCat from '../assets/images/threecat.png';
import windowImg from '../assets/images/window.png';
import catLeft from '../assets/images/cat-leftfitures.png';
import catMid from '../assets/images/cat-leftfitures.png';

export const featuresData = [
  {
    id: 1,
    title: "INPUT YOUR PRODUCTS & INGREDIENTS",
    description: "Input your products, finished goods, and ingredients for tracking.",
    images: [cake1, papanTulis, catDekatPapan] 
  },
  {
    id: 2,
    title: "COMPATIBLE WITH AUTOMATED RETAILING",
    description: "Track your vending machines/other automated sales",
    images: [threeCat, windowImg]
  },
  {
    id: 3,
    title: "AUTOMATIC STOCK MANAGEMENT",
    description: "Real-time automatic inventory tracking as orders come in",
    images: [catTengah, cake2, stikerRight]
  }
];

export const reviewsData = [
  {
    id: 1,
    name: "James",
    role: "Owner Santo's Bakery",
    text: "This system cut my inventory time by three hours a week. I stopped guessing and started knowing.",
    img: catLeft
  },
  {
    id: 2,
    name: "Jayson",
    role: "Chen's Cake Studio",
    text: "This system cut my inventory time by three hours a week. i stopped guessing and started knowing",
    img: catDekatPapan
  },
  {
    id: 3,
    name: "Ricky",
    role: "Rossi's Artisan Bakery",
    text: "No more lost orders. No more surprises. Everything runs clean, and i sleep better at night",
    img: catMid
  }
]