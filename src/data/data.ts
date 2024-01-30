import { Item } from '@/types/types';

export const coffeeItemsData1: Item[] = [
  {
    id: 1,
    title: 'Cappuccino',
    description: 'with Chocolate',
    feature: 'standard',
    price: 4.5,
    rating: 4.8,
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Cappuccino_at_Sightglass_Coffee.jpg/2560px-Cappuccino_at_Sightglass_Coffee.jpg',
    fullDescription:
      'A classic Italian coffee drink that is traditionally prepared with equal parts double espresso, steamed milk, and milk foam. The addition of chocolate syrup or cocoa powder gives it a rich and indulgent flavor. Cappuccino is known for its creamy texture and delicate balance of coffee and milk.',
    calories: 120,
    composition: 'Espresso, steamed milk, milk foam, chocolate syrup/cocoa powder',
  },
  {
    id: 2,
    title: 'Espresso',
    description: 'Strong and short',
    feature: 'standard',
    price: 3.5,
    rating: 4.5,
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg',
    fullDescription:
      'Espresso is a concentrated form of coffee made by forcing hot water through finely-ground coffee beans. It has a strong and robust flavor with a smooth and velvety texture. Despite its small size, espresso packs a powerful punch of caffeine.',
    calories: 5,
    composition: 'Finely-ground coffee beans, hot water',
  },
  {
    id: 3,
    title: 'Latte',
    description: 'Creamy and smooth',
    feature: 'standard',
    price: 5.0,
    rating: 4.7,
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Latte_macchiato.jpg',
    fullDescription:
      'Latte, short for caffè latte, is a coffee drink made with espresso and steamed milk. It has a creamy texture and a slightly sweet flavor. Latte is often topped with a thin layer of milk foam for added richness.',
    calories: 180,
    composition: 'Espresso, steamed milk',
  },
  {
    id: 4,
    title: 'Americano',
    description: 'Diluted espresso',
    feature: 'standard',
    price: 3.8,
    rating: 4.2,
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Espresso_Americano.jpeg/2560px-Espresso_Americano.jpeg',
    fullDescription:
      'Americano is a coffee drink made by diluting espresso with hot water, giving it a similar strength to drip coffee but with a different flavor profile. It has a bold and robust taste with a slightly bitter finish. Americano is often enjoyed black but can be customized with milk or sweeteners.',
    calories: 10,
    composition: 'Espresso, hot water',
  },
];

export const coffeeItemsData2: Item[] = [
  {
    id: 5,
    title: 'Mocha',
    description: 'With chocolate',
    feature: 'new',
    price: 4.7,
    rating: 4.6,
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Mocaccino-Coffee.jpg',
    fullDescription:
      'Mocha is a delightful coffee beverage that combines espresso with steamed milk and chocolate syrup or cocoa powder. It has a rich and indulgent flavor with a perfect balance of sweetness and bitterness. Mocha is often topped with whipped cream for an extra decadent touch.',
    calories: 250,
    composition: 'Espresso, steamed milk, chocolate syrup/cocoa powder, whipped cream',
  },
  {
    id: 6,
    title: 'Macchiato',
    description: 'Espresso with a dash of milk',
    feature: 'standard',
    price: 4.0,
    rating: 4.4,
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/2014_0508_Caffe_macchiato.jpg/1280px-2014_0508_Caffe_macchiato.jpg',
    fullDescription:
      'Macchiato, also known as caffè macchiato, is an espresso-based coffee drink with a small amount of milk or milk foam added. It has a bold and intense flavor of espresso with just a hint of creaminess from the milk. Macchiato is perfect for those who enjoy strong coffee with a touch of milk.',
    calories: 20,
    composition: 'Espresso, a dash of milk/milk foam',
  },
  {
    id: 7,
    title: 'Affogato',
    description: 'Espresso poured over ice cream',
    feature: 'standard',
    price: 6.0,
    rating: 4.9,
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Vinoteca%2C_Smithfield%2C_London_%284485849609%29.jpg/2560px-Vinoteca%2C_Smithfield%2C_London_%284485849609%29.jpg',
    fullDescription:
      'Affogato is a delightful Italian dessert that combines hot espresso with cold vanilla ice cream. It creates a perfect contrast of temperature and texture, with the rich and bold espresso melting the creamy ice cream. Affogato is a simple yet luxurious treat that is sure to satisfy any coffee lover.',
    calories: 300,
    composition: 'Espresso, vanilla ice cream',
  },
  {
    id: 8,
    title: 'Flat White',
    description: 'Microfoam and espresso',
    feature: 'standard',
    price: 5.5,
    rating: 4.8,
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Flat_white_coffee_with_pretty_feather_pattern.jpg/1280px-Flat_white_coffee_with_pretty_feather_pattern.jpg',
    fullDescription:
      'Flat White is a popular espresso-based coffee drink originating from Australia. It is made with a double shot of espresso and velvety steamed milk, creating a smooth and creamy texture. The milk is steamed to create a microfoam that blends seamlessly with the rich espresso, resulting in a balanced and satisfying flavor profile.',
    calories: 150,
    composition: 'Espresso, steamed milk',
  },
  {
    id: 9,
    title: 'Turkish Coffee',
    description: 'Strong and unfiltered',
    feature: 'standard',
    price: 4.2,
    rating: 4.0,
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Cup_of_coffee_%28Serbian_cuisine%2C_Grand_kava%29.jpg/2560px-Cup_of_coffee_%28Serbian_cuisine%2C_Grand_kava%29.jpg',
    fullDescription:
      'Turkish coffee, also known as Greek coffee or Arabic coffee, is a traditional method of brewing coffee that originated in the Middle East. It is made by boiling finely ground coffee beans with water and sugar in a special pot called a cezve or ibrik. The coffee is typically served unfiltered, resulting in a strong and robust flavor with a thick and frothy texture.',
    calories: 100,
    composition: 'Finely-ground coffee beans, water, sugar',
  },
  {
    id: 10,
    title: 'Iced Coffee',
    description: 'Chilled and refreshing',
    feature: 'new',
    price: 4.0,
    rating: 4.5,
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Blue_Bottle%2C_Kyoto_Style_Ice_Coffee_%285909775445%29.jpg/1920px-Blue_Bottle%2C_Kyoto_Style_Ice_Coffee_%285909775445%29.jpg',
    fullDescription: 'Iced Coffee is a refreshing beverage made',
    calories: 100,
    composition: 'Finely-ground coffee beans, water, sugar',
  },
];

export const teaItemsData: Item[] = [
  {
    id: 1,
    title: 'Green Tea',
    description: 'Light and refreshing',
    feature: 'standard',
    price: 2.5,
    rating: 4.2,
    url: 'https://images.unsplash.com/photo-1498481548071-4d439c62cd6e?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fullDescription:
      'Green tea is a type of tea that is made from Camellia sinensis leaves and buds that have not undergone the same withering and oxidation process used to make oolong teas and black teas. Green tea originated in China, but its production and manufacture have spread to other countries in East Asia.',
    calories: 0,
    composition: 'Camellia sinensis leaves, water',
  },
  {
    id: 2,
    title: 'Black Tea',
    description: 'Rich and bold',
    feature: 'standard',
    price: 3.0,
    rating: 4.5,
    url: 'https://images.unsplash.com/photo-1562547256-2c5ee93b60b7?q=80&w=2682&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fullDescription:
      'Black tea is a type of tea that is more oxidized than oolong, green, and white teas. It is generally stronger in flavor than other teas and contains more caffeine. Black tea is made from the leaves of the Camellia sinensis plant, the same plant used to make green tea and oolong tea.',
    calories: 2,
    composition: 'Camellia sinensis leaves, water',
  },
  {
    id: 3,
    title: 'Chamomile Tea',
    description: 'Calming and soothing',
    feature: 'standard',
    price: 2.8,
    rating: 4.7,
    url: 'https://images.unsplash.com/photo-1467164616789-ce7ae65ab4c9?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fullDescription:
      'Chamomile tea is a popular beverage that is known for its calming and soothing properties. It is made from the dried flowers of the chamomile plant, which is a member of the Asteraceae family. Chamomile tea has a light and floral flavor with subtle hints of apple and honey.',
    calories: 2,
    composition: 'Dried chamomile flowers, water',
  },
  {
    id: 4,
    title: 'Oolong Tea',
    description: 'Partially oxidized',
    feature: 'standard',
    price: 3.0,
    rating: 4.3,
    url: 'https://images.unsplash.com/photo-1567922045116-2a00fae2ed03?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fullDescription:
      'Oolong tea is a traditional Chinese tea that is partially oxidized, placing it somewhere between green tea and black tea in terms of oxidation and color. It is often described as having a fruity and fragrant flavor, with a smooth and mellow finish. Oolong tea is known for its numerous health benefits, including aiding in weight loss and improving heart health.',
    calories: 2,
    composition: 'Camellia sinensis leaves, water',
  },
  {
    id: 5,
    title: 'Earl Grey',
    description: 'Black tea with bergamot flavor',
    feature: 'new',
    price: 4.0,
    rating: 4.8,
    url: 'https://images.unsplash.com/photo-1563911892317-47551470aed8?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fullDescription:
      'Earl Grey tea is a black tea blend flavored with oil of bergamot, a citrus fruit. It is named after Charles Grey, the 2nd Earl Grey, British Prime Minister in the 1830s. Earl Grey tea is traditionally made from black tea leaves, but variations such as green or oolong tea are also available.',
    calories: 2,
    composition: 'Black tea leaves, bergamot flavoring, water',
  },
  {
    id: 6,
    title: 'Peppermint Tea',
    description: 'Refreshing and minty',
    feature: 'standard',
    price: 2.7,
    rating: 4.6,
    url: 'https://images.unsplash.com/photo-1596507275836-bc5fe58bfd08?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fullDescription:
      'Peppermint tea is a popular herbal tea that is made from the leaves of the peppermint plant, Mentha piperita. It has a refreshing and invigorating flavor with a cooling sensation. Peppermint tea is caffeine-free and is often used to aid digestion, relieve headaches, and freshen breath.',
    calories: 2,
    composition: 'Peppermint leaves, water',
  },
  {
    id: 7,
    title: 'Jasmine Tea',
    description: 'Scented with jasmine flowers',
    feature: 'standard',
    price: 3.2,
    rating: 4.5,
    url: 'https://images.unsplash.com/photo-1630558206910-de9c9958d6ee?q=80&w=2374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fullDescription:
      'Jasmine tea is a scented tea that is made by infusing green tea leaves with jasmine flowers. It has a delicate and floral aroma with a subtle sweetness. Jasmine tea is often enjoyed for its calming effects and is believed to have various health benefits, including reducing stress and improving digestion.',
    calories: 2,
    composition: 'Green tea leaves, jasmine flowers, water',
  },
  {
    id: 8,
    title: 'White Tea',
    description: 'Least processed tea',
    feature: 'standard',
    price: 3.5,
    rating: 4.4,
    url: 'https://images.unsplash.com/photo-1611781983421-b0d99ee5fcab?q=80&w=1823&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fullDescription:
      'White tea is a delicate and subtle tea that is made from the young leaves and buds of the Camellia sinensis plant. It is the least processed of all tea types, undergoing minimal oxidation and processing. White tea has a mild flavor with sweet and floral notes, making it a popular choice among tea enthusiasts.',
    calories: 1,
    composition: 'Camellia sinensis leaves, water',
  },
  {
    id: 9,
    title: 'Rooibos Tea',
    description: 'Caffeine-free and fruity',
    feature: 'standard',
    price: 3.0,
    rating: 4.0,
    url: 'https://images.unsplash.com/photo-1597916374805-77c812a72447?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fullDescription:
      'Rooibos tea, also known as red tea or bush tea, is a caffeine-free herbal tea that is made from the leaves of the Aspalathus linearis plant, which is native to South Africa. Rooibos tea has a naturally sweet and fruity flavor with a slightly nutty undertone. It is rich in antioxidants and is often enjoyed for its numerous health benefits.',
    calories: 0,
    composition: 'Rooibos leaves, water',
  },
  {
    id: 10,
    title: 'Iced Tea',
    description: 'Chilled and sweetened',
    feature: 'new',
    price: 3.0,
    rating: 4.2,
    url: 'https://images.unsplash.com/photo-1599390720183-fdacb8216b90?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fullDescription:
      'Iced tea is a refreshing beverage made by steeping tea leaves in cold water and then serving the drink over ice. It is often sweetened with sugar or flavored with lemon or other fruits. Iced tea is popular during hot weather and is enjoyed for its cooling and hydrating properties.',
    calories: 20,
    composition: 'Tea leaves, water, ice, sweetener (optional)',
  },
];

export const cakeItemsData: Item[] = [
  {
    id: 1,
    title: 'Chocolate Cake',
    description: 'Rich and decadent chocolate cake',
    feature: 'standard',
    price: 5.0, // Increased price for cakes
    rating: 4.5,
    url: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fullDescription:
      "Indulge in the rich and decadent flavor of our chocolate cake. Made with the finest cocoa powder and premium ingredients, this cake is sure to satisfy your sweet cravings. Whether it's for a special occasion or a simple treat, our chocolate cake is a delightful choice for any dessert lover.",
    calories: 350,
    composition: 'Flour, sugar, cocoa powder, butter, eggs, milk, vanilla extract',
  },
  {
    id: 2,
    title: 'Strawberry Cake',
    description: 'Delicious strawberry shortcake',
    feature: 'standard',
    price: 6.0, // Increased price for cakes
    rating: 4.7,
    url: 'https://images.unsplash.com/photo-1558234469-50fc184d1cc9?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fullDescription:
      'Experience the delightful taste of fresh strawberries in every bite of our strawberry cake. Made with layers of moist sponge cake and filled with sweet strawberry compote, this dessert is perfect for any celebration or as a sweet treat for yourself. Indulge in the fruity goodness of our strawberry cake today!',
    calories: 280,
    composition: 'Flour, sugar, butter, eggs, milk, vanilla extract, strawberries',
  },
  {
    id: 3,
    title: 'Red Velvet Cake',
    description: 'Classic red velvet cake with cream cheese frosting',
    feature: 'standard',
    price: 7.0, // Increased price for cakes
    rating: 4.8,
    url: 'https://images.unsplash.com/photo-1614707269211-474b2510b3ad?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fullDescription:
      'Treat yourself to the luxurious taste of our classic red velvet cake. With its moist and velvety texture and rich cocoa flavor, this cake is sure to impress. Topped with smooth and creamy cream cheese frosting, our red velvet cake is perfect for any special occasion or as a decadent dessert anytime.',
    calories: 320,
    composition:
      'Flour, sugar, cocoa powder, butter, eggs, buttermilk, vinegar, vanilla extract, red food coloring, cream cheese, powdered sugar',
  },
  {
    id: 4,
    title: 'Carrot Cake',
    description: 'Moist carrot cake with cream cheese frosting',
    feature: 'standard',
    price: 6.5, // Increased price for cakes
    rating: 4.6,
    url: 'https://images.unsplash.com/photo-1594741920744-0a7f4a65817a?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fullDescription:
      'Indulge in the moist and flavorful taste of our carrot cake. Made with freshly grated carrots and a blend of warm spices, this cake is bursting with flavor. Topped with smooth and tangy cream cheese frosting, our carrot cake is the perfect balance of sweetness and spice.',
    calories: 290,
    composition: 'Flour, sugar, carrots, vegetable oil, eggs, cinnamon, nutmeg, walnuts, cream cheese, powdered sugar',
  },
  {
    id: 5,
    title: 'Vanilla Cake',
    description: 'Classic vanilla cake with buttercream frosting',
    feature: 'new',
    price: 5.5, // Increased price for cakes
    rating: 4.9,
    url: 'https://images.unsplash.com/photo-1536599524557-5f784dd53282?q=80&w=2304&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fullDescription:
      'Enjoy the timeless taste of our classic vanilla cake. Made with real vanilla beans and premium ingredients, this cake is light, fluffy, and full of flavor. Finished with smooth and creamy buttercream frosting, our vanilla cake is a delightful treat for any occasion.',
    calories: 250,
    composition: 'Flour, sugar, butter, eggs, milk, vanilla bean, baking powder, salt, powdered sugar',
  },
  {
    id: 6,
    title: 'Blueberry Cake',
    description: 'Refreshing lemon blueberry cake',
    feature: 'standard',
    price: 7.5, // Increased price for cakes
    rating: 4.7,
    url: 'https://images.unsplash.com/photo-1567327613485-fbc7bf196198?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fullDescription:
      "Indulge in the bright and fruity flavors of our lemon blueberry cake. Made with fresh blueberries and zesty lemon zest, this cake is bursting with flavor. The moist and tender crumb pairs perfectly with the tangy lemon glaze, creating a refreshing and delightful dessert that's perfect for any occasion.",
    calories: 280,
    composition: 'Flour, sugar, butter, eggs, milk, lemon zest, blueberries, baking powder, salt, powdered sugar',
  },
  {
    id: 7,
    title: 'Marble Cake',
    description: 'Classic marble cake with swirls of chocolate and vanilla',
    feature: 'standard',
    price: 6.0, // Increased price for cakes
    rating: 4.5,
    url: 'https://images.unsplash.com/photo-1606702670929-51ef9685a656?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fullDescription:
      'Satisfy your sweet tooth with our classic marble cake. Swirled with ribbons of rich chocolate and smooth vanilla, this cake is a timeless favorite. With its moist and tender crumb, our marble cake is perfect for any occasion, from birthdays to family gatherings. Treat yourself to a slice of nostalgia with our marble cake today!',
    calories: 300,
    composition: 'Flour, sugar, butter, eggs, milk, cocoa powder, vanilla extract, baking powder, salt',
  },
  {
    id: 8,
    title: 'Coconut Cake',
    description: 'Fluffy coconut cake with coconut cream frosting',
    feature: 'standard',
    price: 8.0, // Increased price for cakes
    rating: 4.8,
    url: 'https://images.unsplash.com/photo-1622278326114-159fdbd7f36b?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fullDescription:
      'Transport yourself to a tropical paradise with our fluffy coconut cake. Made with shredded coconut and coconut milk, this cake is moist, tender, and bursting with coconut flavor. Topped with luscious coconut cream frosting and toasted coconut flakes, our coconut cake is a decadent treat that will leave you craving more.',
    calories: 320,
    composition:
      'Flour, sugar, shredded coconut, butter, eggs, coconut milk, vanilla extract, baking powder, salt, cream of coconut',
  },
  {
    id: 9,
    title: 'Pumpkin Cake',
    description: 'Spiced pumpkin cake with cream cheese frosting',
    feature: 'standard',
    price: 7.5, // Increased price for cakes
    rating: 4.4,
    url: 'https://images.unsplash.com/photo-1702745100328-fe7a353d11e9?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fullDescription:
      'Embrace the flavors of fall with our spiced pumpkin cake. Made with real pumpkin puree and a blend of warm spices like cinnamon, nutmeg, and cloves, this cake is the epitome of comfort food. Topped with smooth and tangy cream cheese frosting, our pumpkin cake is perfect for autumn gatherings and holiday celebrations.',
    calories: 290,
    composition:
      'Flour, sugar, pumpkin puree, vegetable oil, eggs, cinnamon, nutmeg, cloves, baking powder, salt, cream cheese, powdered sugar',
  },
  {
    id: 10,
    title: 'Mango Cake',
    description: 'Exotic mango and coconut-flavored cake',
    feature: 'new',
    price: 8.5, // Increased price for cakes
    rating: 4.6,
    url: 'https://images.unsplash.com/photo-1549876919-88b8fa42ac7e?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fullDescription:
      'Experience a taste of the tropics with our exotic mango cake. Made with fresh mango puree and coconut milk, this cake is bursting with tropical flavor. The moist and tender crumb is infused with the essence of ripe mangoes, while the coconut cream frosting adds a touch of creamy indulgence. Treat yourself to a slice of paradise with our mango cake today!',
    calories: 280,
    composition: 'Flour, sugar, mango puree, coconut milk, butter, eggs, baking powder, salt, powdered sugar',
  },
];

export const promo = [
  { id: 1, image: require('../assets/promotion/muffins.jpg') },
  { id: 2, image: require('../assets/promotion/cake.jpg') },
  { id: 3, image: require('../assets/promotion/coffee-house-sale.jpeg') },
  { id: 4, image: require('../assets/promotion/bubble-milk-tea.png') },
  { id: 5, image: require('../assets/promotion/free-drink.jpg') },
  { id: 6, image: require('../assets/promotion/herbal-tea.jpg') },
  { id: 7, image: require('../assets/promotion/special-offer.jpg') },
];
