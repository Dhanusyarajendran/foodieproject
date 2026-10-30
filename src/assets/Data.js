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
import PancakeStack from './pancakeStack.png';
import ClassicOmelette from './classicOmelette.png';
import AvocadoToast from './AvocadoToast.png';
import VegSandwich from './VegSandwich.png';
import ChickenCaesarSalad from './ChickenCaesarSalad.png';
import ClubSandwich from './ClubSandwich.png';
import PaneerRiceBowl from './PaneerRiceBowl.png';
import GrilledChickenSteak from './GrilledChickenSteak.png';
import ButterChicken from './ButterChicken.png';
import VegQuesadilla from './VegQuesadilla.png';
import ChickenBurrito from './ChickenBurrito.png';
import NachosSupreme from './NachosSupreme.png';
import MexicanRiceBowl from './MexicanRiceBowl.png';
import MargheritaPizza from './MargheritaPizza.png';
import ChickenLasagna from './ChickenLasagna.png';
import GarlicBread from './GarlicBread.png';
import PenneArrabbiata from './PenneArrabbiata.png';
import ChocolateBrownie from './ChocolateBrownie.png';
import StrawberryCheesecake from './Strawberry Cheesecake.png';
import ChocolateLavaCake from './ChocolateLavaCake.png';
import VanillaIceCream from './VanillaIceCream.png';
import MangoSmoothie from './MangoSmoothie.png';
import ColdCoffee from './ColdCoffee.png';
import FreshLimeJuice from './FreshLimeJuice.png';
import FrenchToast from './FrenchToast.png';
import VeggieWrap from './VeggieWrap.png';
import GrilledChickenRice from './GrilledChickenRice.png';
import VegFriedRice from './VegFriedRice.png';
import ChickenBiryani from './ChickenBiryani.png';
import PaneerButterMasala from './PaneerButterMasala.png';
import ChickenTacos from './ChickenTacos.png';
import WhiteSaucePasta from './WhiteSaucePasta.png';
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

//for menu in homepage

export const dummyMenuData = {

    Breakfast: [
        {
            id: 'breakfast-1',
            name: 'Pancake Stack',
            price: '149',
            rating: 4.5,
            image: PancakeStack,
            description: 'Fluffy pancakes served with fresh strawberries and maple syrup.'
        },
        {
            id: 'breakfast-2',
            name: 'Classic Omelette',
            price: '99',
            rating: 4.3,
            image: ClassicOmelette,
            description: 'A fluffy egg omelette with onions, tomatoes, and herbs.'
        },
        {
            id: 'breakfast-3',
            name: 'Avocado Toast',
            price: '179',
            rating: 4.6,
            image: AvocadoToast,
            description: 'Toasted bread topped with creamy avocado and fresh herbs.'
        },
        {
            id: 'breakfast-4',
            name: 'French Toast',
            price: '129',
            rating: 4.4,
            image: FrenchToast,
            description: 'Golden bread slices dipped in egg batter and served with honey.'
        },
        {
            id: 'breakfast-5',
            name: 'Veg Sandwich',
            price: '89',
            rating: 4.2,
            image: VegSandwich,
            description: 'Fresh vegetable sandwich with cheese and mint chutney.'
        }
    ],

    Lunch: [
        {
            id: 'lunch-1',
            name: 'Chicken Caesar Salad',
            price: '199',
            rating: 4.4,
            image: ChickenCaesarSalad,
            description: 'Crisp romaine with grilled chicken, parmesan, and Caesar dressing.'
        },
        {
            id: 'lunch-2',
            name: 'Club Sandwich',
            price: '150',
            rating: 4.3,
            image: ClubSandwich,
            description: 'Triple-decker sandwich with turkey, bacon, and fresh veggies.'
        },
        {
            id: 'lunch-3',
            name: 'Veggie Wrap',
            price: '109',
            rating: 4.2,
            image: VeggieWrap,
            description: 'A wrap filled with seasonal vegetables and hummus.'
        },
        {
            id: 'lunch-4',
            name: 'Grilled Chicken Rice',
            price: '229',
            rating: 4.6,
            image: GrilledChickenRice,
            description: 'Juicy grilled chicken served with seasoned rice and vegetables.'
        },
        {
            id: 'lunch-5',
            name: 'Paneer Rice Bowl',
            price: '179',
            rating: 4.5,
            image: PaneerRiceBowl,
            description: 'Soft paneer cubes served with flavorful rice and fresh salad.'
        }
    ],

    Dinner: [
        {
            id: 'dinner-1',
            name: 'Grilled Chicken Steak',
            price: '299',
            rating: 4.7,
            image: GrilledChickenSteak,
            description: 'Tender grilled chicken steak served with mashed potatoes.'
        },
        {
            id: 'dinner-2',
            name: 'Butter Chicken',
            price: '249',
            rating: 4.6,
            image: ButterChicken,
            description: 'Creamy tomato-based chicken curry with aromatic Indian spices.'
        },
        {
            id: 'dinner-3',
            name: 'Veg Fried Rice',
            price: '149',
            rating: 4.3,
            image: VegFriedRice,
            description: 'Wok-fried rice tossed with fresh vegetables and sauces.'
        },
        {
            id: 'dinner-4',
            name: 'Chicken Biryani',
            price: '229',
            rating: 4.8,
            image: ChickenBiryani,
            description: 'Fragrant basmati rice cooked with spiced chicken and herbs.'
        },
        {
            id: 'dinner-5',
            name: 'Paneer Butter Masala',
            price: '199',
            rating: 4.5,
            image: PaneerButterMasala,
            description: 'Soft paneer cubes in a rich and creamy tomato gravy.'
        }
    ],

    Mexican: [
        {
            id: 'mexican-1',
            name: 'Chicken Tacos',
            price: '189',
            rating: 4.6,
            image: ChickenTacos,
            description: 'Soft tacos filled with spicy chicken, lettuce, and salsa.'
        },
        {
            id: 'mexican-2',
            name: 'Veg Quesadilla',
            price: '159',
            rating: 4.4,
            image: VegQuesadilla,
            description: 'Crispy tortillas stuffed with cheese and fresh vegetables.'
        },
        {
            id: 'mexican-3',
            name: 'Chicken Burrito',
            price: '219',
            rating: 4.7,
            image: ChickenBurrito,
            description: 'A tortilla wrap filled with chicken, rice, beans, and salsa.'
        },
        {
            id: 'mexican-4',
            name: 'Nachos Supreme',
            price: '169',
            rating: 4.5,
            image: NachosSupreme,
            description: 'Crunchy nachos topped with cheese, jalapenos, and salsa.'
        },
        {
            id: 'mexican-5',
            name: 'Mexican Rice Bowl',
            price: '179',
            rating: 4.3,
            image: MexicanRiceBowl,
            description: 'Mexican-style rice served with beans, corn, and fresh salsa.'
        }
    ],

    Italian: [
        {
            id: 'italian-1',
            name: 'Margherita Pizza',
            price: '249',
            rating: 4.7,
            image: MargheritaPizza,
            description: 'Classic pizza topped with mozzarella cheese and fresh basil.'
        },
        {
            id: 'italian-2',
            name: 'White Sauce Pasta',
            price: '199',
            rating: 4.5,
            image: WhiteSaucePasta,
            description: 'Creamy pasta prepared with white sauce, herbs, and cheese.'
        },
        {
            id: 'italian-3',
            name: 'Chicken Lasagna',
            price: '279',
            rating: 4.6,
            image: ChickenLasagna,
            description: 'Layers of pasta with chicken, cheese, and tomato sauce.'
        },
        {
            id: 'italian-4',
            name: 'Garlic Bread',
            price: '99',
            rating: 4.3,
            image: GarlicBread,
            description: 'Toasted bread with garlic butter and Italian herbs.'
        },
        {
            id: 'italian-5',
            name: 'Penne Arrabbiata',
            price: '189',
            rating: 4.4,
            image: PenneArrabbiata,
            description: 'Penne pasta tossed in a spicy tomato and garlic sauce.'
        }
    ],

    Desserts: [
        {
            id: 'dessert-1',
            name: 'Chocolate Brownie',
            price: '119',
            rating: 4.7,
            image: ChocolateBrownie,
            description: 'Rich and fudgy chocolate brownie with a soft center.'
        },
        {
            id: 'dessert-2',
            name: 'Strawberry Cheesecake',
            price: '179',
            rating: 4.8,
            image: StrawberryCheesecake,
            description: 'Creamy cheesecake topped with fresh strawberry sauce.'
        },
        {
            id: 'dessert-3',
            name: 'Chocolate Lava Cake',
            price: '149',
            rating: 4.9,
            image: ChocolateLavaCake,
            description: 'Warm chocolate cake with a delicious melted chocolate center.'
        },
        {
            id: 'dessert-4',
            name: 'Vanilla Ice Cream',
            price: '79',
            rating: 4.4,
            image: VanillaIceCream,
            description: 'Smooth and creamy vanilla ice cream.'
        },
        {
            id: 'dessert-5',
            name: 'Gulab Jamun',
            price: '89',
            rating: 4.6,
            image: gulabJamun,
            description: 'Soft milk dumplings soaked in warm sugar syrup.'
        }
    ],

    Drinks: [
        {
            id: 'drink-1',
            name: 'Mango Smoothie',
            price: '129',
            rating: 4.6,
            image: MangoSmoothie,
            description: 'Fresh mango blended with milk for a creamy smoothie.'
        },
        {
            id: 'drink-2',
            name: 'Cold Coffee',
            price: '119',
            rating: 4.5,
            image: ColdCoffee,
            description: 'Chilled coffee blended with milk and chocolate.'
        },
        {
            id: 'drink-3',
            name: 'Fresh Lime Juice',
            price: '59',
            rating: 4.3,
            image: FreshLimeJuice,
            description: 'Refreshing lime juice with a hint of mint.'
        },
        {
            id: 'drink-4',
            name: 'Strawberry Milkshake',
            price: '139',
            rating: 4.7,
            image: MangoSmoothie,
            description: 'Creamy milkshake blended with fresh strawberries.'
        },
        
    ]

};