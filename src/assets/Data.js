import herosection from './herosection.png';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';
import kabab from './kabab.png';
import chickenTikka from './chickenTikka.png';
import chickenChargha from './chickenChargha.png';
import desiChowmein from './desiChowmein.png';
import paneerTikka from './paneerTikka.png';
import masalaDosa from './masalaDosa.png';
import palakPaneer from './palakpaneer.png';
import gulabJamun from './gulabJamun.png';
import {  FaBolt,FaRegClock, FaCalendarCheck, FaFire} from 'react-icons/fa';

import video from './video.mp4';

export const bannerAssests = {
	banner: herosection,
	orbitImages: [image1, image2, image3, image4],
	video: video
}


// SPECIAL MENU
export const cardData = [
  {
    id: 1,
    title: 'Kebab',
    rating: 4.5,
    hearts: 105,
    description: 'Juicy grilled meat with authentic spices',
    price:40,
    image: kabab
    
  },
  {
    id: 2,
    title: 'Chicken Tikka',
    rating: 5.0,
    hearts: 155,
    description: 'Tender chicken marinated in sauce',
    price : 140,
    image:chickenTikka
  },
  {
    id: 3,
    title: 'Desi Chowmein',
    rating: 4.2,
    hearts: 85,
    description: 'Spicy Asian noodles with a local twist',
    price : 60,
    image: desiChowmein
  },
  {
    id: 4,
    title: 'Chicken Chargha',
    rating: 4.8,
    hearts: 285,
    description: 'Crispy golden fried whole chicken',
    price : 200,
    image: chickenChargha
  },
];

//aditional data
export const additionalData = [
  {
    id: 5,
    title: 'Paneer Tikka',
    rating: 4.8,
    hearts: 210,
    description: 'Cottage cheese marinated in spices',
    image: paneerTikka
  },
  {
    id: 6,
    title: 'Masala Dosa',
    rating: 4.5,
    hearts: 165,
    description: 'Crispy rice crepe with potato filling',
    image: masalaDosa
  },
  {
    id: 7,
    title: 'Palak Paneer',
    rating: 4.7,
    hearts: 190,
    description: 'Spinach curry with cottage cheese',
    image: palakPaneer
  },
  {
    id: 8,
    title: 'Gulab Jamun',
    rating: 4.9,
    hearts: 275,
    description: 'Golden dumplings in rose syrup',
    image: gulabJamun,
  },
];

//for homeabout 
export const aboutfeature = [
    {
        icon: FaBolt,
        title: "Instant Ordering",
        text: "Seamless digital experience",
        color: "from-amber-400 to-orange-500"
    },
    {
        icon: FaRegClock,
        title: "Always Open",
        text: "24/7 premium service",
        color: "from-rose-400 to-pink-600"
    },
    {
        icon: FaCalendarCheck,
        title: "Exclusive Booking",
        text: "Priority reservations",
        color: "from-emerald-400 to-cyan-600"
    },
    {
        icon: FaFire,
        title: "Signature Dishes",
        text: "Chef's special creations",
        color: "from-purple-400 to-indigo-600"
    }
];