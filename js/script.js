// Copyright (c) 2023 Hewett All rights reserved
//
// Created by: Santiago Hewett
// Created on: May 2023
// This file contains the JS functions for index.html
"use strict"

function chickenButton() {
  
 //Declare the value for tax and discount
  const TAX_RATE = 1.13;
  
  const DISCOUNT = 0.07;

  const SAUCEPRICE = 0.04;

  //What the user ordered 
  let bucketChoice = document.getElementById('user-buckets').value;
  
  let sauceChoice = document.getElementById('user-sauce').value;
  
  let drinkChoice = document.getElementById('user-drink').value;
  
  let friesChoice = document.getElementById('user-fries').value;

   //The price of each based on what user ordered

  let bucketPrice = "";

  let drinkPrice = "";

  let friesPrice = "";

  //Get the user input for amount of main, sides and sauce
  let userMain = parseInt(document.getElementById("user-main").value);
  
  let sauceAmount = parseInt(document.getElementById("sauce-amount").value);
  
  let userSideDrink = parseInt(document.getElementById("user-side-drink").value);
  
  let userSideFries = parseInt(document.getElementById("user-side-fries").value);

   //if statements for the value of bucket
  if (bucketChoice == "4pcs bucket"){
    bucketPrice = 7.99;
  }
  else if (bucketChoice == "6pcs bucket"){
    bucketPrice = 10.99;
  }
  else if (bucketChoice == "10pcs bucket"){
    bucketPrice = 14.99
  }
  else{
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
  
 //Use calculation 
  let subTotal = (bucketPrice * userMain) + (SAUCEPRICE * sauceAmount) + (drinkPrice * userSideDrink) + (friesPrice * userSideFries);
  let total = subTotal * TAX_RATE;
  let discountTotal = total - (total * DISCOUNT);

  
 //Display information back to user 
  if (subTotal > 0){
    document.getElementById('order').innerHTML = 'Your order is ' + userMain + ' bucket(s) of ' + bucketChoice + ', ' + userSideDrink + ' ' + drinkChoice + '(s), ' + userSideFries + ' ' + friesChoice + ', '  + sauceAmount + ' ' + sauceChoice + ' sauce(s).'
  document.getElementById('userMoneySpent').innerHTML = 'The subtotal of your order is $' + subTotal.toFixed(2) + '.'
  document.getElementById('moneyTaxed').innerHTML = 'The total amount this order will cost you is $ ' + total.toFixed(2) + '.'
  document.getElementById('discountedMoney').innerHTML = 'The amount of money this will cost you with the discount is $ ' + discountTotal.toFixed(2) + '.'
  }
  else {
    document.getElementById('order').innerHTML = ''
    document.getElementById('userMoneySpent').innerHTML = 'Please enter a valid order'
      document.getElementById('moneyTaxed').innerHTML = ''
  document.getElementById('discountedMoney').innerHTML = ''
    
  }
}