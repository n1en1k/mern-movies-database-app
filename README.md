# mern-movies-database-app

MERN Movies database app

server:
npm install
nodemon index.js

client:
npm install
npm start

## Plans

### sql

movies db

    movie table
        movieid INT AI NN PK
        name VARCHAR(255) NN
        did INT NN FOREIGN KEY director table id cascade on update & delete
        year INT NN

    director table
        directorid INT AI NN PK
        name VARCHAR(255) NN
        img VARCHAR(255)
        born DATE NN

    actor table
        actorid INT AI NN PK
        name VARCHAR(255) NN
        img VARCHAR(255)
        born DATE NN

    starring table
        starringid INT AI NN PK
        mid INT NN FOREIGN KEY movie table id cascade on update & delete
        aid INT NN FOREIGN KEY actor table id cascade on update & delete

### content on pages

    /
        navbar
            / link
            add movie link
        list movies (with pagination) - offer update / delete
            sql query will be joined to get both director and actor data

    add movie
        back-button
        form (select fields for director and actor [multiple, add new when one selected])
            sql queries to get list of directora and actors
        links to add director and actors if not listed

    update movie
        back-button
        form (with existing data)
            sql query will be joined to get both director and actor data
        links to add director and actors if not listed
