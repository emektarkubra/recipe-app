# Recipe-App + React

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-4.4.5-orange)
![React-DOM](https://img.shields.io/badge/React--DOM-18.2.0-red)
![Axios](https://img.shields.io/badge/Axios-1.5.0-yellow)
![React-Icons](https://img.shields.io/badge/React--Icons-4.11.0-green)
![React-Router-Dom](https://img.shields.io/badge/React--Router--Dom-6.16.0-orange)
![UUID](https://img.shields.io/badge/UUID-9.0.1-blueviolet)

"This repository contains the source code for the Delicious World, a food discovery application. The application offers various features, including sign up and sign in, recipe search based on refrigerator ingredients, daily recipe recommendations, and favoriting. Explore these codes to customize your own culinary experience and make cooking more enjoyable!"

> "The app is not responsive"

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [RecipeAPI](#recipeapi)
- [Installation](#installation)
- [Usage](#usage)
- [User](#user)
- [Build](#build)
- [Technologies](#technologies)
- [Contributing](#contributing)

## Demo

<img width = "700px" src="https://github.com/emektarkubra/recipe-app/assets/124355274/85ff82c7-1b1b-48b1-b5d8-401f7a86adca"/>


<img width = "700px" src="https://github.com/emektarkubra/recipe-app/assets/124355274/28f01938-6834-4128-b01e-750a0fe89c5a"/>


## Features

- **Delicious World:** This application offers a comprehensive culinary experience, helping you explore the world of food and savor sweet flavors. It provides a personalized user experience with registration and login options.

- **Recipes Based on Refrigerator Ingredients:** You can search for recipes based on the ingredients you have in your refrigerator. By entering the ingredients you have on hand, you can discover custom recipes in seconds.

- **Daily Recipe Recommendations:** It offers new and exciting recipes every day. It provides fantastic suggestions to diversify your menu and enrich your cooking experience.

- **Adding to Favorites:** You can easily access your favorite recipes by adding them to your favorites. By saving your favorite recipes, you can create a personal cookbook.

- **Json-Server:** Fake REST API has been created

Delicious World simplifies cooking, personalizes your culinary experience, and helps you discover new flavors every day. Start your flavor journey today!"

## RecipeAPI

The Recipe API that returns information about recipes, their ingredients, equipments, instructions, price, nutritional Information, summaries and images etc.

the main url of this API:
https://api.spoonacular.com/recipes

### Endpoints

- For endpoints, should check this site:
  https://spoonacular.com/food-api

> Once you have your API key, you have to put it in the request URL for every request you make like so ?apiKey=YOUR-API-KEY. Or alternatively, you can put the API key in the request header as x-api-key.

## Installation

1. Clone the repository:

```javascript
git clone https://github.com/emektarkubra/recipe-app.git
cd recipe-app
```

2. Install dependencies:

```
npm install
```

## Usage

1. Before run the app, add the following information to the .env file in the root directory:

```javascript
VITE_RECIPE_API_KEY = REPLACE_YOUR_API_KEY
VITE_RECIPE_API_URL = https://api.spoonacular.com/recipes
VITE_USER_API_URL = http://localhost:3001
```

2. Run the app locally:

```
npm run dev
```

The app will be accessible at `http://localhost:3000`.

3. To launch JSON Server with the JSON file you've created, run the following command:

```
json-server --watch db.json --port 3001
```

Once launch server, will be accessible at `http://localhost:3001/users`

## User

To start using the app without sign up, login by entering the following user information:

```javascript
username: "admin"
password: 12345
```

## Build

Create a production build:

```
npm run build
```

## Technologies

- Vite: A fast and minimalistic development build tool.
- React.js: A JavaScript library for building user interfaces.
- React-DOM: Provides DOM-specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements.
- React-Router-Dom: A library that simplifies navigation and URL management in React apps, enabling smooth transitions between different sections or pages within a single-page application.
- Axios: Fetching data from the Cat API.
- React Icons: A library of popular icon packs for React.
- UUID: A library for generating unique IDs.

## Contributing

Contributions are welcome! If you encounter issues or have suggestions for improvements, feel free to open an issue or create a pull request.

## Show your support

If you find this project interesting, consider giving it a ⭐️ to show your support.
