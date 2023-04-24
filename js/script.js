// Copyright (c) 2023 Santiago Hewett All rights reserved
//
// Created by: Santiago Hewett
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function tells the user if it is hot or cold
 */
function enterClicked() {  

  // declaring age to go see movie variable
  let ageToGoSeeMovie = "";
  
  // Collecting user age 
  let age = parseFloat(document.getElementById('age').value);
  
  //Display if user can watch r rated movies
  if (age >= 18) {
    ageToGoSeeMovie = "You can go see any movie you want by yourself."
  }

    // Display if user can watch PG or PG-13 movies
  else if (age >= 13) { 
    ageToGoSeeMovie = "You can't watch R rated movies by yourself, but you can watch anything else (PG, PG-13 or G)." 
  }

    // Display if user can watch G rated movies
  else if (age >= 5) { 
    ageToGoSeeMovie = "You can't watch R, PG-13 or PG rated movies by yourself, but you can watch G rated movies." 
  }

    // Display is user can't watch any movie by themselves
  else if (age >= 0) { 
    ageToGoSeeMovie = "You can't watch any movie by yourself, please enter a valid age." 
  }

    // Display if user entered a non valid age
  else {
    ageToGoSeeMovie = "Please enter a valid age."
  }
  
  // Display results back to user
  document.getElementById('result').innerHTML = ageToGoSeeMovie
}