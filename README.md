# Veggie Box

Veggie Box is a meal subscription service designed to make healthy eating easy and convenient. We offer a variety of 31 menu options for you to choose from and build your own VeggieBox. Once you've made your selection, we take care of the rest! We send you all the necessary ingredients along with step-by-step cooking instructions. Veggie Box is not just about providing meals, but also about saving you precious time and helping you make healthier choices. The application for this service is primarily written in JavaScript (90.5%), with styles in SCSS (8.7%), and some HTML (0.8%).

## How VeggieBox Works

**Step 1**: From our list of 31 menus, you can choose the ones you like the most and create your VeggieBox. We take care of the rest! Everything so that you only have to worry about cooking.

**Step 2**: We send you everything! All the necessary ingredients, spices... everything, along with the nutritional value and calories, suggested step-by-step instructions, videos... Everything!

**Step 3**: You've chosen the healthiest option! And now you have more time for yourself. You've saved 2 hours of supermarket shopping, 30 minutes of searching for options, and 40 minutes of waiting in lines. Enjoy 😁!

---

![Gif of working App](https://res.cloudinary.com/ferjen/image/upload/v1674531275/portfolio/projects/gif/VeggieBox_hk61er.gif)

---

## Project Structure

The project structure is organized as follows:

- `src`: Source files for the project.
  - `components`: Contains React components that make up the application. This includes `Alert`, `Cart`, `Favorites`, `Home`, `Items`, `Navigation`, `Spinner`.
  - `data`: Contains data files like `global.json` that provides content for various components in different languages.
  - `style`: Contains SCSS stylesheets organized into different modules: `abstract`, `base`, `components`, `pages`, `vendors`, `style.scss`.
  - `utils`: Utility functions used across the application.
  - `VeggieBoxApp.jsx`: Main application component.
  - `main.jsx`: Entry point of the application.
- `package.json`: Lists the package dependencies for the project.
- `.eslintrc.cjs`, `.gitignore`, `vite.config.js`: Configuration files for various tools.

## Scripts

The `package.json` file contains several scripts for development and building:

- `dev`: Runs the application in development mode.
- `build`: Builds the application for production.
- `lint`: Lints the source files.
- `preview`: Previews the built application.

## Dependencies

The application has several dependencies listed in `package.json`, including React, Bootstrap, Firebase, and Swiper among others.

## Author

This project is developed and maintained by ferJen.
