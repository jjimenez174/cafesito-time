import cafesitologowords from './cafesitologowords.png'
import basket_icon from './basket_icon.png'
import add_icon from './add_icon.png'
import add_brown_icon from './add_brown_icon.jpeg'
import minus_brown_icon from './minus_brown_icon.png'
import brazil from './Brazil.webp'
import coffee_grinder from './coffee_grinder.jpeg'
import colombia from './colombia.webp'
import costarica from './costarica.webp'
import electric_kettle from './electric_kettle.webp'
import coffee_mug from './coffee_mugs.webp'
import ethiopia from './Ethiopia.webp'
import filtered_coffee from './filtered_coffee.webp'
import guatemala from './guatemala.webp'
import india from './India.webp'
import sumatra from './sumatra.webp'
import coffee_packaging from './coffee_packaging.webp'
import coffee_glass from './coffee_glass.webp'


export const assets = {
    cafesitologowords,
    basket_icon,
    add_icon,
    add_brown_icon,
    minus_brown_icon
}
export const menu_list = [
{
    menu_name: "Coffee",
    menu_image: coffee_packaging
}
]

export const shop_list = [
  {
    _id: "1",
    name: "Brazil Coffee",
    image: brazil,
    price: 30,
    description:"Slow roasted coffee beans from Brazil with a rich bold flavour.",
    category: "Coffee"
},
{
    _id: "2",
    name: "Colombia Coffee",
    image: colombia,
    price: 25,
    description: "Lightly roasted coffee sourced from Colombia.",
    category: "Coffee"
},
{
    _id: "3",
    name: "Costa Rica Coffee",
    image: costarica,
    price: 25,
    description: "Medium roasted coffee beans from the tropics of Costa Rica.",
    category: "Coffee"
},
{
    _id: "4",
    name: "Guatemala Coffee",
    image: guatemala,
    price: 25,
    description: "Rich bold coffee flavour from the depths of Guatemala.",
    category: "Coffee"
},
{
    _id: "5",
    name: "Ethiopia Coffee",
    image: ethiopia,
    price: 30,
    description: "Hearty dark roasted coffee beans from Ethiopia",
    category: "Coffee"
},
{
    _id: "6",
    name: "India Coffee",
    image: india,
    price: 30,
    description: "Spicy coffee from India",
    category: "Coffee"
},
{
    _id: "7",
    name: "Sumatra Coffee",
    image: sumatra,
    price: 30,
    description: "Lightly roasted coffee with a charcoal flavor from Indonesia.",
    category: "Coffee"
},
{
    _id: "8",
    name: "Coffee Grinder",
    image: coffee_grinder,
    price: 80,
    description: "Sleek, modern designed coffee grinder to suit your home.",
    category: "Accessories"
},
{
    _id: "9",
    name: "Filtered Coffee",
    image: filtered_coffee,
    price: 50,
    description: "Coffee filters for a proper drip coffee experience.",
    category: "Accessories"
},
{
    _id: "10",
    name: "Electric Kettle",
    image: electric_kettle,
    price: 120, 
    description: "Electric kettle with a simple design to fit your home.",
    category: "Accessories"
},
{
    _id: "11",
    name: "Coffee Mug",
    image: coffee_mug,
    price: 85, 
    description: "Cute coffee mug to brighten your morning.",
    category: "Accessories"
},
{
    _id: "12",
    name: "Coffee Glass",
    image: coffee_glass,
    price: 65, 
    description: "Fancy, sleek coffee glass to match your modern aesthetic.",
    category: "Accessories"
}
]