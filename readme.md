# JavaScript Notes Repository

This repository is a collection of JavaScript notes where I store my insights about the programming language and related concepts. Here, you'll find useful and organized information to learn and review JavaScript.

## Functionality

Each `.js` file can be executed automatically with `nodemon`, which simplifies the development and testing process.

## Environment Setup

To facilitate automatic execution of JavaScript files whenever they are saved, this project uses `nodemon` as a development dependency.

## Installation

First, clone the repository:

```bash
git clone https://github.com/yesid-martinez/javascript-notes.git

cd javascript-notes
```

Then, install the dependencies:

```bash
npm install
```

## Usage

To run a Node.js file, use the following command:

```bash
node file.js
```

To automatically run the `file.js` file every time it is saved, use the following command:

```bash
npm run dev
```
`Note: nodemon is recommended for development to automatically restart your application whenever you make changes. It is not intended for "production" use.`

For executing the application or specific scripts, use node directly:

```bash
node index.js
```

## Project Structure

`dom.js`, `eventos.js`, and `localstorage.js` have complementary HTML code snippets commented in `app.html.`

The `eventos.js` and `dom.js` files should also be connected to their respective CSS files in `eventos/style.css` and `dom/style.css` respectively.

### Adding `nodemon` to the Project

In addition to modifying the README.md, ensure you have added `nodemon` as a development dependency and updated the `package.json` file with the necessary scripts. Here is an example of the `package.json` file:

```json
{
  "name": "javascript-notes-repository",
  "version": "1.0.0",
  "description": "Collection of JavaScript notes.",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "dependencies": {},
  "devDependencies": {
    "nodemon": "^2.0.15"
  }
}
```

## How to Contribute

Your contributions are welcome! If you would like to contribute to this repository, simply make a pull request with your proposed changes. I appreciate any contributions to improve this repository.

## Contact

If you have any questions or suggestions regarding my notes, you can contact me via email: [martinezy.dev@gmail.com](mailto:martinezy.dev@gmail.com)
