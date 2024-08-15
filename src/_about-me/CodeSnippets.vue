<script setup>

import { ref } from "vue";
import Snippet from "./Snippet.vue";

const data = [
  {
    code: `   void fetchData() async
  {
    // Making a GET request to a public API
    final response = await http.get(Uri.parse('https://jsonplaceholder.typicode.com/posts'));

    // Parsing the JSON response
    if (response.statusCode == 200) {
      List<dynamic> data = json.decode(response.body);
      print(data[0]); // Printing the first item in the list
    } else {
      throw Exception('Failed to load data');
    }
  }`,
    details:
      "This Flutter code snippet demonstrates how to fetch data from an API using the http package. The fetchData function makes a GET request and parses the JSON response.",
  },
  {
    code: `  import React, { useState } from 'react';

  function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Toggling dark mode by setting a state variable
    const toggleDarkMode = () => {
      setIsDarkMode(prevMode => !prevMode);
      document.body.style.backgroundColor = isDarkMode ? '#fff' : '#333';
    };

    return (
      <button onClick={toggleDarkMode} style={{ color: isDarkMode ? '#fff' : '#000' }}>
        Toggle Dark Mode
      </button>
    );
  }

  export default DarkModeToggle;`,
    details:
      "This ReactJS snippet provides a simple dark mode toggle button. The `toggleDarkMode` function switches between light and dark modes by updating the background color and button text color.",
  },
  {
    code: `
    function debounce(func, delay) {
      let timeoutId;
  
      // Returning a debounced function
      return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
      };
    }

    // Example usage: Debouncing a search input
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', debounce((event) => {
      console.log('Searching:', event.target.value);
    }, 500));`,
    details:
      "This JavaScript snippet demonstrates a debouncing function, which limits the rate at which a function can be executed. It's useful for handling events like key presses or window resizing.",
  },
  {
    code: `
    const express = require('express');
    const app = express();
    const port = 3000;

    // Defining a route that responds with "Hello, World!"
    app.get('/', (req, res) => {
      res.send('Hello, World!');
    });

    // Starting the server on port 3000
    app.listen(port, () => {
      console.log("Server is running on http://localhost:\${port}\");
    });
    `,
    details:
      "This Node.js snippet sets up a basic Express server that listens on port 3000. When a user visits the root URL, the server responds with \"Hello, World!\".",
  },
];

const divRef = ref();

function scrollToDetails(detailBoxRef, index) {
  if (index !== 4) {
    divRef.value.scrollTo({
      top: detailBoxRef.value.offsetTop - 100,
      behavior: "smooth",
    });
  } else {
    setTimeout(() => {
      divRef.value.scrollTo({
        top: detailBoxRef.value.offsetTop,
        behavior: "smooth",
      });
    }, 700);
  }
}

</script>

<template>

  <div 
    class="relative lg:col-span-4 flex flex-col lg:px-3 py-4"
  >
    <div
      ref="divRef"
      class="w-full h-full lg:absolute top-0 left-0 overflow-y-auto pt-6 pb-12"
    >
      <p class="text-[#607B96] pl-6">
        // Code snippets showcase:
      </p>
      <Snippet
        :key="ele"
        v-for="(ele, ind) in data"
        :index="ind"
        :codeText="ele.code"
        :details="ele.details"
        :scrollOnOpen="scrollToDetails"
      />
    </div>
  </div>
  
</template>
