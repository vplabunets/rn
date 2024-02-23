# Welcome to Coffee Shop mobile app repository!

This guide will help you set up and run the project on your local machine. Our app allows users to browse our coffee
selection, place orders, and more.

## Main Technologies

- React Native
- Expo
- Firebase
- Redux Toolkit
- React Navigation

## Installation

Before you begin, ensure you have the following installed on your system:

- Node.js and npm (or yarn)
- Expo CLI
- A code editor (e.g., Visual Studio Code)

### Steps:

1. Clone the repository:

2. Navigate to the project directory:

3. Install dependencies:

   ```bash
   npm install or yarn install
   ```

4. Set up Firebase account:

## Running the Project

To run the project locally, follow these steps:

1. Start the Expo development server:

   ```bash
   npm start yarn start
   ```

2. Open the Expo Go app on your mobile device.

3. Scan the QR code displayed in the terminal or Expo DevTools with your device's camera.

4. Wait for the app to load on your device.

## Screens and Navigation

### Public screens: Login and Registration

- User has access to Login or Registration screens during opening of App .
- User can signup using Registration screen using service Firebase
- User can signin using Registration screen using service Firebase

![Image 1](/src/assets/auth.gif) ![Image 2](/src/assets/auth2.gif) ![Image 3](/src/assets/auth3.gif)

### Private Screens:

- Once logged in, you'll have access to the Home screen.
- The Home screen displays our coffee selection and allows you to place orders.

#### Home default screen (Nested Screens with products for sale)

- - The Home screen displays our coffee, tea or cake selection and allows you to place orders.

![Image 1](/src/assets/home.gif)

#### Promo Screen:

- Update your profile information and preferences.

![Image 1](/src/assets/promo.gif)

#### Cart Screen:

- Cart with current products.

![Image 1](/src/assets/cart.gif)

#### Orders History Screen:

- View your past orders and order details.

![Image 1](/src/assets/orders.gif)

#### Profile:

- Update your profile information and preferences.

![Image 1](/src/assets/profile.gif)
