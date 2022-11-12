let data = [
  {
    name: `npx tailwindcss init`,
    comment: `//Creates initial tailwind.config.js file. Inside it, in the CONTENT parameter's array we add the path to our file/s and we can use "*.html" to indicate ALL html files inside the directory. We also add an input.css file with @tailwind base; @tailwind component; and @tailwind utilities; written inside it.`,
  },
  {
    name: `npx tailwindcss -i ./pathToInput.cssFile -o ./pathWhereWeWant/style.css/toBe`,
    comment: `//Compiles a style.css file in the specified location. Can be rerun to update changes. This style.css should be referenced in the HTML now.`,
  },
];

export default data;
