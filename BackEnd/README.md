# Project-2

## Description

An app for collectors and hobbyists to organize their memorablia and keep track of what they own.

## Application Link
https://animated-pony-a34044.netlify.app/

## Overview
The back-end of this application uses mongoDB to handle API data,and express to handle CRUD functionality. Dependencies include: 
 - axios 
 - express 
 - dotenv 
 - mongoose 
 - cors
 - react
# Controllers
CollectionController - handles the collections and retrieves the data necessary to show the collections and items inside each of them.

ItemController - handles the items inside each collection and allows the user to add, delete, or change what is in each collection.

# Schemas
Collection - The building block of the project. Displays the name and image of the collection, and handles the items within through the Item sub schema.

Item - The sub schema of Collection and frame for the items inside of a collection.

## MVC architecture (BackEnd)
![2022-03-22 (2)](https://user-images.githubusercontent.com/97875763/160957415-b3bd529e-2af5-4285-933b-5a99356fc8d4.png)

## MVP Stories

- As a user, I would like to view my collection inventory.
- As a user, I would like to add to or delete my collections.
- As a user, I would like to update or make changes to my collection.
- As a user, I would like to add to the amount inside each collection.
- As a user, I would like to make a new collection.


