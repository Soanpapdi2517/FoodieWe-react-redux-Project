const FoodData = [
  {
    id: 1,
    img: "https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5",
    name: "Onion Pizza",
    price: 150,
    desc: "A delicious pizza topped with fresh onions and cheese, offering a sharp, tangy flavor that complements the cheesy goodness.",
    category: ["All","Lunch"],
    rating: 4.5,
    quantity: 0,
  },
  {
    id: 2,
    img: "https://w7.pngwing.com/pngs/339/55/png-transparent-pizza-margherita-italian-cuisine-hot-dog-pizza-cheese-pizza-thumbnail.png",
    name: "Margherita Pizza",
    price: 130,
    desc: "A classic Italian pizza with fresh tomatoes, mozzarella, and basil, delivering an authentic taste with a drizzle of olive oil.",
    category: ["All","Lunch"],
    rating: 4.2,
    quantity: 0,
  },
  {
    id: 3,
    img: "https://w7.pngwing.com/pngs/21/55/png-transparent-pepperoni-pizza-margarita-pizza-margherita-italian-cuisine-tomato-pizza-food-cheese-recipe-thumbnail.png",
    name: "Pepperoni Pizza",
    price: 160,
    desc: "A crispy pizza loaded with spicy pepperoni, melted cheese, and tangy tomato sauce for a bold, satisfying bite.",
    category: ["All","Lunch"],
    rating: 4.6,
    quantity: 0,
  },
  {
    id: 4,
    img: "https://w7.pngwing.com/pngs/569/109/png-transparent-pizza-with-vegetables-and-mushroom-toppings-sicilian-pizza-california-style-pizza-pizza-margherita-vegetarian-cuisine-pizza-food-recipe-gourmet-thumbnail.png",
    name: "Mushroom and Spinach Pizza",
    price: 140,
    desc: "A flavorful pizza topped with fresh mushrooms and spinach, creating a balanced and earthy taste for vegetarians and pizza lovers.",
    category: ["All","Lunch"],
    rating: 4.2,
    quantity: 0,
  },
  {
    id: 5,
    img: "https://w7.pngwing.com/pngs/843/171/png-transparent-pizza-73-restaurant-catupiry-chicken-as-food-pizza-baked-goods-food-recipe-thumbnail.png",
    name: "BBQ Chicken Pizza",
    price: 170,
    desc: "A smoky delight featuring BBQ-marinated chicken, melted cheese, and red onions, mixing sweet and savory flavors",
    category: ["All","Lunch"],
    rating: 4.8,
    quantity: 0,
  },
  {
    id: 6,
    img: "https://w7.pngwing.com/pngs/133/54/png-transparent-pancakes-served-on-plate-banana-pancakes-scrambled-eggs-breakfast-ihop-pancake-food-recipe-eating-thumbnail.png",
    name: "Classic Pancakes",
    price: 80,
    desc: "Fluffy pancakes served with butter and maple syrup, offering a comforting and delicious start to the day.",
    category: ["All","Breakfast"],
    rating: 4.5,
    quantity: 0,
  },
  {
    id: 7,
    img: "https://w7.pngwing.com/pngs/645/475/png-transparent-croissant-bread-croissant-muffin-brunch-bacon-egg-and-cheese-sandwich-bread-croissants-baked-goods-food-baking-thumbnail.png",
    name: "Egg and Bacon Croissant",
    price: 110,
    desc: "Indulge in a buttery croissant filled with scrambled eggs, crispy bacon, and melted cheese. A savory and satisfying breakfast option that's perfect for on-the-go mornings.",
    category: ["All","Breakfast"],
    rating: 4.2,
    quantity: 0,
  },
  {
    id: 8,
    img: "https://w7.pngwing.com/pngs/683/103/png-transparent-frozen-yogurt-parfait-breakfast-yoghurt-fruit-salad-yogurt-frutti-di-bosco-food-breakfast-thumbnail.png",
    name: "Greek Yogurt Parfait",
    price: 95,
    desc: "A refreshing Greek yogurt parfait with berries, honey, and granola, packed with nutrients and flavor.",
    category: ["All","Breakfast"],
    rating: 4.1,
    quantity: 0,
  },
  {
    id: 9,
    img: "https://w7.pngwing.com/pngs/400/603/png-transparent-toast-tostytosty-la-tosteria-menu-food-dish-avocado-toast-food-toast-avocado-toast-thumbnail.png",
    name: "Avocado Toast",
    price: 120,
    desc: "Creamy mashed avocado on toasted whole grain bread, topped with sea salt and red pepper flakes for a nutritious breakfast.",
    category: ["All","Breakfast"],
    rating: 4.6,
    quantity: 0,
  },
  {
    id: 10,
    img: "https://w7.pngwing.com/pngs/20/725/png-transparent-grain-bowl-breakfast-cereal-muesli-corn-flakes-bowl-granola-food-breakfast-recipe-thumbnail.png",
    name: "Fruit and Nut Oatmeal",
    price: 85,
    desc: "A hearty oatmeal bowl with mixed fruits, nuts, and honey, delivering energy and warmth in every bite.",
    category: ["All","Breakfast"],
    rating: 4.5,
    quantity: 0,
  },
  {
    id: 11,
    img: "https://w7.pngwing.com/pngs/875/111/png-transparent-north-fish-seafood-dish-smoked-salmon-restaurant-grilled-fish-hd-soup-food-seafood-thumbnail.png",
    name: "Grilled Salmon",
    price: 190,
    desc: "A perfectly grilled salmon fillet seasoned with herbs and served with roasted vegetables for a nutritious meal.",
    category: ["All","Dinner"],
    rating: 4.5,
    quantity: 0,
  },
  {
    id: 12,
    img: "https://w7.pngwing.com/pngs/756/828/png-transparent-taglierini-carbonara-fettuccine-alfredo-chicken-pasta-chicken-fillet-thumbnail.png",
    name: "Chicken Alfredo Pasta",
    price: 160,
    desc: "Creamy fettuccine Alfredo with tender grilled chicken, combining rich sauce, pasta, and protein for a comforting dish.",
    category: ["All","Dinner"],
    rating: 4.8,
    quantity: 0,
  },
  {
    id: 13,
    img: "https://w7.pngwing.com/pngs/651/721/png-transparent-veggie-burger-vegetable-food-recipe-stir-frying-vegetables-frying-pan-frozen-vegetables-fruit-thumbnail.png",
    name: "Vegetable Stir-Fry",
    price: 130,
    desc: "A medley of stir-fried vegetables in a flavorful sauce, served over steamed rice for a light, nutritious dinner.",
    category: ["All","Dinner"],
    rating: 4.2,
    quantity: 0,
  },
  {
    id: 14,
    img: "https://w7.pngwing.com/pngs/575/331/png-transparent-burrito-taco-bell-mexican-cuisine-chipotle-mexican-grill-menu-thumbnail.png",
    name: "Grilled Chicken Burrito Bowl",
    price: 160,
    desc: "A burrito bowl with grilled chicken, beans, rice, sautéed veggies, and cheese, packed with hearty flavors.",
    category: ["All","Dinner"],
    rating: 4.6,
    quantity: 0,
  },
  {
    id: 15,
    img: "https://w7.pngwing.com/pngs/47/171/png-transparent-chinese-noodles-hot-and-sour-soup-risotto-lomi-lamian-slippery-mushrooms-risotto-dusi-soup-food-recipe-thumbnail.png",
    name: "Mushroom Risotto",
    price: 175,
    desc: "A creamy risotto made with Arborio rice, sautéed mushrooms, and Parmesan, offering a sophisticated, comforting taste.",
    category: ["All","Dinner"],
    rating: 4.5,
    quantity: 0,
  },
  {
    id: 16,
    img: "https://w7.pngwing.com/pngs/47/171/png-transparent-chinese-noodles-hot-and-sour-soup-risotto-lomi-lamian-slippery-mushrooms-risotto-dusi-soup-food-recipe-thumbnail.png",
    name: "Cheese and Crackers Platter",
    price: 120,
    desc: "A selection of artisan cheeses, crispy crackers, and fresh fruits—a delightful snack for sharing or solo indulgence.",
    category: ["All","Snacks"],
    rating: 4.3,
    quantity: 0,
  },
  {
    id: 17,
    img: "https://w7.pngwing.com/pngs/204/32/png-transparent-crispy-fried-chicken-karaage-chicken-nugget-chicken-fingers-buffalo-wing-carrot-chilli-thumbnail.png",
    name: "Crispy Chicken Wings",
    price: 130,
    desc: "Crispy, seasoned chicken wings with a choice of BBQ or buffalo sauce, delivering bold flavors and a satisfying crunch.",
    category: ["All","Snacks"],
    rating: 4.4,
    quantity: 0,
  },
  {
    id: 18,
    img: "https://w7.pngwing.com/pngs/816/163/png-transparent-grilled-skewered-meat-bakery-paneer-tikka-indian-cuisine-vegetarian-cuisine-cake-food-baking-cake-decorating-thumbnail.png",
    name: "Paneer Tikka Skewers",
    price: 130,
    desc: "A fresh fruit smoothie blend with bananas, berries, and yogurt, offering a refreshing and nutritious drink.",
    category: ["All","Snacks"],
    rating: 4.9,
    quantity: 0,
  },
  {
    id: 19,
    img: "https://w7.pngwing.com/pngs/356/675/png-transparent-falafel-lebanese-cuisine-take-out-mediterranean-cuisine-hummus-bed-miscellaneous-furniture-food-thumbnail.png",
    name: "Hummus and Veggie Platter",
    price: 90,
    desc: "A classic cheeseburger with a juicy beef patty, melted cheese, lettuce, and tomatoes, delivering a satisfying bite.",
    category: ["All","Snacks"],
    rating: 4.4,
    quantity: 0,
  },
  {
    id: 20,
    img: "https://w7.pngwing.com/pngs/435/847/png-transparent-pincho-canape-skewer-fruit-others-thumbnail.png",
    name: "Fruit Skewers",
    price: 70,
    desc: "A rich chocolate brownie with a soft, fudgy center, perfect for a sweet and indulgent treat.",
    category: ["All","Snacks"],
    rating: 4.8,
    quantity: 0,

  },
];
export default FoodData;
