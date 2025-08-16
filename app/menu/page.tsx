import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MenuPage() {
  // Menu categories and items
  const menuCategories = [
    {
      id: "lunch-combo",
      name: "Lunch Combo",
      description: "Available daily from 11:00 AM to 3:00 PM",
      items: [
        {
          name: "Veggie Lunch Combo",
          description: "Steamed rice, butter naan, daal tadka, and 2 seasonal veggies.",
          price: "$10.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Rice & Raita Lunch Combo",
          description: "Steamed rice, raita, daal tadka, and 2 veggie sides.",
          price: "$10.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Aloo Kulcha Lunch Combo",
          description: "Stuffed potato kulcha, raita, and 2 veggie dishes.",
          price: "$11.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Butter Chicken Lunch Combo",
          description: "Steamed rice, butter naan, creamy butter chicken, and 2 veggie sides.",
          price: "$12.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Chicken Tikka Lunch Combo",
          description: "Steamed rice, butter naan, chicken tikka, and 2 veggies.",
          price: "$12.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Paneer Tikka Lunch Combo",
          description: "Steamed rice, butter naan, paneer tikka, and 2 veggies.",
          price: "$12.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Chicken Curry Lunch Combo",
          description: "Steamed rice, butter naan, house chicken curry, and 2 veggie sides.",
          price: "$12.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Goat Curry Lunch Combo",
          description: "Steamed rice, butter naan, house goat curry, and 2 veggies.",
          price: "$14.99",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    {
      id: "street-food",
      name: "Street Food",
      description: "Authentic Indian street food favorites",
      items: [
        {
          name: "Samosa",
          description: "Crispy pastries stuffed with spiced potatoes and peas.",
          price: "$5.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Pav Bhaji",
          description: "A Mumbai street food classic—spiced veggie mash served with buttery bread.",
          price: "$10.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Samosa Chat",
          description: "Crispy samosas topped with yogurt, chutneys, and spices.",
          price: "$7.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Pani Puri",
          description: "Crispy puris filled with spiced water, tamarind, and chickpeas.",
          price: "$7.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Dahi Puri",
          description: "Crispy puris filled with yogurt, chutneys, and spices—a burst of flavor.",
          price: "$7.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Chaat Papdi",
          description: "Crispy wafers topped with spiced chickpeas, yogurt, and tangy chutneys.",
          price: "$8.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Bombay Bhel",
          description: "A tangy and crunchy street snack with puffed rice, veggies, and chutneys.",
          price: "$8.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Chhola Bhatura",
          description: "A spicy chickpea curry served with fluffy fried bread.",
          price: "$13.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Masala House Special Chaat Platter",
          description: "An assortment of our finest chaats, bursting with flavor.",
          price: "$15.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Bombay Veg Sandwich",
          description: "Grilled sandwich packed with spiced veggies and tangy chutneys.",
          price: "$9.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Chicken Sandwich",
          description: "Grilled chicken with fresh veggies in a soft, toasted bun.",
          price: "$12.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Paneer Sandwich",
          description: "Grilled sandwich stuffed with spiced paneer and veggies.",
          price: "$11.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Veg Kathi Roll",
          description: "Spiced veggies rolled in soft flatbread with tangy chutneys.",
          price: "$10.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Chicken Kathi Roll",
          description: "Spiced chicken wrapped in soft flatbread with chutneys.",
          price: "$12.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Paneer Kathi Roll",
          description: "Spiced paneer wrapped in soft flatbread with chutneys.",
          price: "$11.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Indori Poha",
          description: "Fluffy flattened rice cooked with spices, peanuts, and topped with sev.",
          price: "$8.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Crab Sandwich",
          description: "Fresh crab meat layered with veggies in a toasted bun.",
          price: "$13.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Oreo Ice Cream Pani Puri",
          description: "A fusion dessert—crispy puris filled with Oreo ice cream.",
          price: "$9.99",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    {
      id: "appetizers",
      name: "Appetizers",
      description: "Start your meal with these delicious options",
      items: [
        {
          name: "Crispy Honey Chicken",
          description: "Crispy chicken glazed in a sweet and tangy honey sauce.",
          price: "$12.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Chicken 65",
          description: "Spicy, crispy fried chicken infused with bold South Indian flavors.",
          price: "$12.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Crab Cake",
          description: "Golden-fried crab patties served with a tangy dip.",
          price: "$11.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Veg Momo",
          description: "Steamed or fried dumplings stuffed with spiced veggies.",
          price: "$10.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Chicken Momo",
          description: "Juicy chicken dumplings served with a spicy dipping sauce.",
          price: "$11.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Fish 65",
          description: "Crispy fried fish chunks coated in a bold, spicy batter.",
          price: "$13.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Paneer Pakora",
          description: "Crispy fried paneer fritters, a perfect snack.",
          price: "$8.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Chicken Pakora",
          description: "Crispy, spiced chicken fritters—a perfect appetizer.",
          price: "$12.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Veg Pakora",
          description: "Crispy fritters made with mixed vegetables and spices.",
          price: "$7.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Mirchi Bhajji",
          description: "Spiced green chilies dipped in batter and fried to golden perfection.",
          price: "$8.99",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    {
      id: "biryani",
      name: "Biryani",
      description: "Fragrant rice dishes cooked with spices and your choice of protein",
      items: [
        {
          name: "Chicken Dum Biryani",
          description: "Aromatic rice and chicken slow-cooked with spices in the Hyderabadi style.",
          price: "$14.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Masala House Special Goat Biryani",
          description: "Tender goat meat layered with fragrant rice and bold spices.",
          price: "$16.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Masala House Special Chicken Biryani",
          description: "Our chef's signature biryani with aromatic spices and tender chicken.",
          price: "$14.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Mughlai Egg Biryani",
          description: "A royal biryani with spiced eggs, nuts, and saffron-infused rice.",
          price: "$12.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Mughlai Paneer Biryani",
          description: "A regal biryani with paneer, nuts, and fragrant, saffron-infused rice.",
          price: "$14.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Masala House Special Lamb Biryani",
          description: "Juicy lamb and aromatic rice cooked to perfection.",
          price: "$16.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Masala House Special Fire Chicken Biryani",
          description: "A spicy twist on our chicken biryani for those who like it hot.",
          price: "$14.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Fried Chicken Biryani",
          description: "Aromatic rice layered with crispy fried chicken and spices.",
          price: "$14.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Veg Biryani",
          description: "Aromatic rice layered with spiced mixed vegetables.",
          price: "$12.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Egg Biryani",
          description: "Fragrant basmati rice layered with spiced eggs and aromatic herbs.",
          price: "$12.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Paneer Biryani",
          description: "Aromatic rice layered with spiced paneer and herbs.",
          price: "$14.99",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    {
      id: "entree",
      name: "Entree",
      description: "Main course dishes to satisfy your cravings",
      items: [
        {
          name: "Butter Chicken",
          description: "Tender chicken in a creamy, buttery tomato sauce.",
          price: "$14.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Chicken Tikka Masala",
          description: "Chargrilled chicken simmered in a creamy tomato sauce.",
          price: "$14.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Lamb Vindaloo",
          description: "A spicy Goat curry with tender lamb and bold vinegar notes.",
          price: "$16.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Saag Chicken",
          description: "Tender chicken simmered in a rich spinach curry.",
          price: "$14.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Dal Makhani",
          description: "Creamy black lentils simmered in rich butter and spices.",
          price: "$13.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Dal Muradabad",
          description: "A unique, flavorful lentil preparation from the city of Muradabad.",
          price: "$11.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Haraa Paneer",
          description: "Paneer cubes cooked in a vibrant green spinach and herb sauce.",
          price: "$13.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Bhuna Gosht",
          description: "Slow-cooked goat or lamb in a thick, flavorful masala.",
          price: "$16.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Tawa Lamb",
          description: "Spiced lamb stir-fried on a hot griddle for intense flavor.",
          price: "$16.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Shahi Paneer",
          description: "Paneer cubes in a rich, creamy tomato and cashew sauce.",
          price: "$13.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Kashmiri Rogan Josh",
          description: "Succulent lamb curry with rich Kashmiri spices.",
          price: "$16.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Yellow Daal Tadka",
          description: "Lentils tempered with ghee, garlic, and spices—simple and delicious.",
          price: "$12.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Masala House Special Chicken Curry",
          description: "A house favorite, chicken simmered in a flavorful, rich curry.",
          price: "$14.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Scallop Coconut Korma",
          description: "Tender scallops in a creamy coconut-based curry.",
          price: "$13.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Bhindi Masala",
          description: "Tender okra stir-fried with onions, tomatoes, and spices.",
          price: "$12.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Chana Masala",
          description: "Flavorful chickpeas cooked in a rich tomato-onion masala.",
          price: "$12.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Aloo Gobi",
          description: "A classic mix of potatoes and cauliflower cooked in aromatic spices.",
          price: "$11.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Mix Veggies",
          description: "A colorful medley of seasonal vegetables sautéed in spices.",
          price: "$11.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Mutter Paneer",
          description: "A creamy tomato curry with peas and soft paneer cubes.",
          price: "$13.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Masala House Special Egg Curry",
          description: "Eggs simmered in a spiced onion-tomato curry—a comforting classic.",
          price: "$12.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Paneer Tikka Masala",
          description: "Grilled paneer cooked in a creamy, spiced tomato gravy.",
          price: "$13.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Baigan Bharta",
          description: "Smoky roasted eggplant mashed and cooked with spices.",
          price: "$12.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Masala House Special Shrimp Curry",
          description: "Jumbo shrimp in a creamy, spiced curry sauce.",
          price: "$14.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Masala House Special Fish Curry",
          description: "Delicate fish cooked in a robust, flavorful curry sauce.",
          price: "$15.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Navrattan Korma",
          description: "A rich, creamy curry with nine varieties of vegetables and nuts.",
          price: "$12.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Paneer Bhurji",
          description: "Crumbled paneer sautéed with onions, tomatoes, and spices.",
          price: "$13.99",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    {
      id: "tandoor",
      name: "Tandoor",
      description: "Marinated and cooked in our traditional clay oven",
      items: [
        {
          name: "Malai Chicken Tikka",
          description: "Chicken marinated in creamy yogurt and grilled to juicy perfection.",
          price: "$15.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Tandoori Chicken Tikka",
          description: "Juicy chicken skewers marinated in tandoori spices.",
          price: "$15.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Jumbo Shrimps",
          description: "Large, juicy shrimp cooked in your choice of flavorful preparation.",
          price: "$15.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Paneer Tikka",
          description: "Marinated paneer cubes grilled to smoky perfection.",
          price: "$14.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Tandoori Lamb Tikka",
          description: "Tender lamb skewers grilled in traditional tandoor.",
          price: "$16.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Soya Chaap",
          description: "Soy-based skewers marinated and cooked in flavorful spices.",
          price: "$11.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Tandoori Chicken - Half",
          description: "Half a chicken, marinated and grilled with bold spices.",
          price: "$14.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Tandoori Chicken - Full",
          description: "Whole chicken marinated and grilled to smoky perfection.",
          price: "$22.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Hariyali Paneer Tikka",
          description: "Grilled paneer marinated in a spiced mint-coriander blend.",
          price: "$14.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Hariyali Chicken Tikka",
          description: "Chicken marinated in a mint-coriander paste, grilled to perfection.",
          price: "$15.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Chicken Tikka",
          description: "Marinated chicken cooked in a tandoor, smoky and tender.",
          price: "$14.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Aloo Kulcha",
          description: "Soft, stuffed bread with spiced mashed potatoes, perfect with curries.",
          price: "$4.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Lamb Tikka",
          description: "Juicy, spiced lamb skewers cooked in a tandoor.",
          price: "$16.99",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    {
      id: "thali",
      name: "Thali",
      description: "Complete meal platters with a variety of dishes",
      items: [
        {
          name: "Veg Thali",
          description: "A wholesome vegetarian platter with curries, rice, and sides.",
          price: "$16.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Chicken Thali",
          description: "A wholesome platter featuring chicken curry, rice, bread, and sides.",
          price: "$18.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Paneer Thali",
          description: "A complete vegetarian platter featuring paneer curry, rice, and sides.",
          price: "$17.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Lamb/Goat Thali",
          description: "A complete platter with lamb/goat curry, rice, bread, and sides.",
          price: "$19.99",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    {
      id: "indo-chinese",
      name: "Indo Chinese",
      description: "Fusion dishes combining Indian and Chinese flavors",
      items: [
        {
          name: "Paneer Chilli",
          description: "Crispy paneer tossed in a tangy Indo-Chinese chili sauce.",
          price: "$11.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Gobi Manchurian",
          description: "Crispy cauliflower florets in a tangy Indo-Chinese sauce.",
          price: "$9.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Veg Chowmein",
          description: "Stir-fried noodles tossed with fresh vegetables and savory sauces.",
          price: "$11.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Chicken Chowmein",
          description: "Stir-fried noodles with tender chicken, veggies, and savory sauces.",
          price: "$12.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Egg Chowmein",
          description: "Savory stir-fried noodles tossed with eggs and fresh veggies.",
          price: "$11.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Veg Fried Rice",
          description: "Classic fried rice loaded with fresh vegetables.",
          price: "$11.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Chicken Fried Rice",
          description: "Classic fried rice tossed with tender chicken and veggies.",
          price: "$12.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Egg Fried Rice",
          description: "Classic fried rice with scrambled eggs and flavorful seasonings.",
          price: "$11.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Chicken Chilli",
          description: "A tangy, spicy Indo-Chinese stir-fry with peppers and onions.",
          price: "$12.99",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    {
      id: "sides",
      name: "Sides",
      description: "Perfect additions to your meal",
      items: [
        {
          name: "Salad",
          description: "A fresh, healthy mix of seasonal greens and vegetables.",
          price: "$6.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Plain Naan",
          description: "Soft, pillowy flatbread baked to perfection.",
          price: "$2.49",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Garlic Naan",
          description: "Soft naan infused with fresh garlic and herbs.",
          price: "$3.49",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Butter Naan",
          description: "Soft, buttery flatbread—your perfect curry companion.",
          price: "$2.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Basmati Rice",
          description: "Fragrant, fluffy, and perfect as a side or base for any curry.",
          price: "$2.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Raita",
          description: "Cool, creamy yogurt mixed with cucumbers and spices.",
          price: "$3.49",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Mango Chutney",
          description: "Sweet and tangy chutney made from fresh mangoes.",
          price: "$1.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Jira Rice",
          description: "Aromatic basmati rice flavored with roasted cumin seeds.",
          price: "$3.49",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Papadum",
          description: "Crispy, wafer-thin lentil crackers, lightly spiced.",
          price: "$2.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Cheese Naan",
          description: "Stuffed with gooey cheese, this naan is a cheesy delight.",
          price: "$3.49",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Onion Naan",
          description: "Soft naan stuffed with caramelized onions and spices.",
          price: "$2.49",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Chilli Naan",
          description: "Soft naan infused with a spicy chili kick.",
          price: "$3.49",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Kashmiri Naan",
          description: "Stuffed naan with nuts and dried fruits for a touch of sweetness.",
          price: "$3.49",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    {
      id: "desserts",
      name: "Desserts",
      description: "Sweet treats to end your meal",
      items: [
        {
          name: "Gulab Jamun",
          description: "Soft, syrup-soaked milk dumplings with a hint of cardamom.",
          price: "$3.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Kheer",
          description: "Creamy rice pudding flavored with cardamom and garnished with nuts.",
          price: "$3.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Gajar Halwa",
          description: "Sweet, rich carrot pudding with ghee and cardamom.",
          price: "$4.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Rasmalai",
          description: "Soft paneer dumplings soaked in sweetened, flavored milk.",
          price: "$4.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Srikhand",
          description: "A thick, creamy yogurt dessert infused with saffron and cardamom.",
          price: "$4.99",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    {
      id: "drinks",
      name: "Drinks",
      description: "Refreshing beverages to complement your meal",
      items: [
        {
          name: "Regular Chai",
          description: "A simple, satisfying cup of Indian-style tea.",
          price: "$1.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Masala House Special Chai",
          description: "Our signature spiced tea brewed with love and tradition.",
          price: "$2.49",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Hot Green Tea",
          description: "A warm, refreshing cup of antioxidant-rich green tea.",
          price: "$1.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Hot Black Tea",
          description: "A simple, soothing cup of freshly brewed black tea.",
          price: "$1.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Iced Tea",
          description: "Chilled tea with a splash of lemon, perfect for hot days.",
          price: "$1.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Mango Lassi",
          description: "A sweet and creamy yogurt drink with ripe mangoes.",
          price: "$3.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Salted Lassi",
          description: "Chilled yogurt drink with a savory, salty twist.",
          price: "$3.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Virgin Mojito",
          description: "A refreshing blend of lime, mint, and soda.",
          price: "$6.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Cardamom Sensation",
          description: "A refreshing drink with the warm notes of cardamom.",
          price: "$6.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Pineapple Mint Sparkle",
          description: "A refreshing drink with pineapple, mint, and fizzy soda.",
          price: "$6.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Guava Spark",
          description: "A refreshing blend of guava juice and fizzy soda.",
          price: "$6.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Masala Soda",
          description: "A fizzy, tangy Indian soda with a hint of spice.",
          price: "$5.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Soda (Coke/Sprite)",
          description: "Classic refreshing sodas.",
          price: "$2.49",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Regular Lemonda",
          description: "Classic, refreshing lemonade with just the right sweetness.",
          price: "$4.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Strawberry Lemonda",
          description: "A refreshing lemonade with a sweet strawberry twist.",
          price: "$5.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Raspberry Lemonade",
          description: "A sweet and tangy lemonade with a burst of raspberry flavor.",
          price: "$5.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Vanilla Shake",
          description: "A classic shake made with creamy vanilla ice cream.",
          price: "$5.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Oreo Shake",
          description: "A creamy, indulgent shake blended with Oreo cookies.",
          price: "$5.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Mango Shake",
          description: "Thick and refreshing mango smoothie.",
          price: "$5.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Chocolate Shake",
          description: "Rich, creamy shake made with decadent chocolate.",
          price: "$5.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Masala Chhass",
          description: "Chilled spiced buttermilk for a refreshing, tangy kick.",
          price: "$4.99",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative h-[30vh] bg-black">
        <Image
          src="/placeholder.svg?height=400&width=1600"
          fill
          alt="Menu header"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Our Menu</h1>
        </div>
      </div>

      {/* Back to home */}
      <div className="container mt-6">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      {/* Menu Content */}
      <div className="container py-12">
        <Tabs defaultValue="lunch-combo" className="w-full">
          <TabsList className="w-full justify-start mb-8 overflow-x-auto flex-nowrap">
            {menuCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-lg px-6">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {menuCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold">{category.name}</h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {category.items.map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-lg border">
                    <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                      <Image src={item.image || "/placeholder.svg"} fill alt={item.name} className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <span className="text-amber-500 font-medium">{item.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Daily Buffet Highlight */}
      <div className="bg-amber-50 py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Daily Lunch Buffet</h2>
              <p className="text-lg mb-4">
                Enjoy our extensive lunch buffet featuring over 20 items including appetizers, main courses, and
                desserts.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-amber-500 mr-2">✓</span>
                  Available 7 days a week
                </li>
                <li className="flex items-center">
                  <span className="text-amber-500 mr-2">✓</span>
                  11:00 AM to 3:00 PM
                </li>
                <li className="flex items-center">
                  <span className="text-amber-500 mr-2">✓</span>
                  $18.99 per person
                </li>
                <li className="flex items-center">
                  <span className="text-amber-500 mr-2">✓</span>
                  Fresh naan bread served at your table
                </li>
              </ul>
              <Button className="bg-amber-500 hover:bg-amber-600 text-white">Reserve a Table</Button>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=300&width=500" fill alt="Buffet spread" className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Dietary Information */}
      <div className="container py-8 border-t">
        <h2 className="text-2xl font-semibold mb-4">Dietary Information</h2>
        <p className="text-muted-foreground mb-6">
          We are committed to accommodating our guests with allergies and dietary restrictions. Please inform your
          server of any special requirements, and our chefs will be happy to modify dishes when possible.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Vegetarian Options", icon: "🥗" },
            { label: "Gluten-Free Options", icon: "🌾" },
            { label: "Vegan Options", icon: "🌱" },
            { label: "Nut-Free Options", icon: "🥜" },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2 p-3 rounded-md bg-muted">
              <span className="text-2xl">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reservation CTA */}
      <div className="bg-zinc-900 text-white py-12 mt-12">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Experience Our Menu?</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Reserve your table now and enjoy our culinary creations in a warm and elegant atmosphere.
          </p>
          <Button className="bg-amber-500 hover:bg-amber-600 text-white border-0">Make a Reservation</Button>
        </div>
      </div>
    </div>
  )
}

