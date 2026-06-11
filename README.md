# e-PlantShopping 🌱

## Project Overview

e-PlantShopping is a React-based front-end web application that allows users to browse a collection of plants, add them to a shopping cart, manage quantities, and view the total cost of selected items. The project demonstrates the use of React components, state management, Redux Toolkit, routing, and responsive user interface design.

## Features

### Home Page

* Attractive landing page for the plant store.
* Introduction to the company and its mission.
* "Get Started" button to navigate to the product page.

### Product Listing

* Display plants categorized into different groups.
* Show plant image, name, and price.
* Add products to the shopping cart.

### Shopping Cart

* View all selected products.
* Increase or decrease item quantities.
* Remove items from the cart.
* Display total number of items.
* Display total cart value.

### Navigation Bar

* Navigate between pages.
* Cart icon showing the total quantity of selected items.

## Technologies Used

* React.js
* Redux Toolkit
* React Router DOM
* JavaScript (ES6+)
* HTML5
* CSS3

## Project Structure

```text
src/
│
├── components/
│   ├── AboutUs.jsx
│   ├── ProductList.jsx
│   ├── CartItem.jsx
│
├── redux/
│   └── CartSlice.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/e-plantShopping.git
```

2. Navigate to the project folder:

```bash
cd e-plantShopping
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

## Learning Objectives

This project demonstrates:

* React component creation and composition
* State management using Redux Toolkit
* React Router navigation
* Cart functionality implementation
* Dynamic UI updates
* Responsive web design principles

## Future Enhancements

* User authentication
* Product search and filtering
* Wishlist functionality
* Online payment integration
* Backend API integration

## Author

Developed as part of the **Developing Front-End Apps with React** course on Coursera.

## License

This project is developed for educational purposes only.
