// Copyright (c) 2023 Hewett All rights reserved
//
// Created by: Santiago Hewett
// Created on: May 2023
// This file contains the JS functions for index.html
"use strict"

function chickenButton() {
  
 //Declaring constants for tax and discount and sauce price
  const TAX_RATE = 1.13;
  
  const DISCOUNT = 0.07;

  const SAUCEPRICE = 0.04;

  // Colecting what the user ordered 
  let bucketChoice = document.getElementById('userChicken').value;
  
  let sauceChoice = document.getElementById('userSauce').value;
  
  let drinkChoice = document.getElementById('userDrink').value;
  
  let friesChoice = document.getElementById('userFries').value;

   //The price of each based on what user ordered

  let bucketPrice = "";

  let drinkPrice = "";

  let friesPrice = "";

  //Get the user input for amount of main, sides and sauce
  let userMain = parseInt(document.getElementById("user-main").value);
  
  let sauceAmount = parseInt(document.getElementById("sauce-amount").value);
  
  let userSideDrink = parseInt(document.getElementById("user-side-drink").value);
  
  let userSideFries = parseInt(document.getElementById("user-side-fries").value);

   //if statements for the value of bucket of chicken
  if (bucketChoice == "4pcs bucket") {
    bucketPrice = 7.99;
  }
    
  else if (bucketChoice == "6pcs bucket") {
    bucketPrice = 10.99;
  }
    
  else if (bucketChoice == "10pcs bucket") {
    bucketPrice = 14.99
  }
    
  else {
    bucketPrice = 22.99;
  }

  //if stament for the value of drink
  if (drinkChoice == "Small Drink"){
    drinkPrice = 1.25;
  }
  else if (drinkChoice == "Medium Drink"){
    drinkPrice = 2.00;
  }
  else{
    drinkPrice = 3.00;
  }

   //if stament for the value of fries
  if (friesChoice == "small fries"){
    friesPrice = 2.00;
  }
  else if (friesChoice == "medium fries"){
    friesPrice = 2.75;
  }
  else{
    friesPrice = 3.25;
  }
  
 // Calculation user order 
  let subTotal = (bucketPrice * userMain) + (SAUCEPRICE * sauceAmount) + (drinkPrice * userSideDrink) + (friesPrice * userSideFries);
  let total = subTotal * TAX_RATE;
  let tax = subTotal * 0.13;
  let discountTotal = total - (total * DISCOUNT);

  
 //Display information back to user 
  if (subTotal > 0){
    document.getElementById('order').innerHTML = 'Your order is ' + userMain + ' bucket(s) of ' + bucketChoice + ', ' + userSideDrink + ' ' + drinkChoice + '(s), ' + userSideFries + ' ' + friesChoice + ', '  + sauceAmount + ' ' + sauceChoice + ' sauce(s).'
  document.getElementById('userMoneySpent').innerHTML = 'The subtotal of your order is $' + subTotal.toFixed(2)
  document.getElementById('moneyTaxed').innerHTML = 'Your order will cost you $ ' + total.toFixed(2)
  document.getElementById('tax').innerHTML = 'The tax is  $ ' + tax.toFixed(2)
  document.getElementById('discountedMoney').innerHTML = 'If you had the discount you would only have to pay $ ' + discountTotal.toFixed(2)
  }
  else {
    document.getElementById('order').innerHTML = ''
    document.getElementById('userMoneySpent').innerHTML = 'Please enter a valid order'
      document.getElementById('moneyTaxed').innerHTML = ''
  document.getElementById('discountedMoney').innerHTML = ''
    
  }
}