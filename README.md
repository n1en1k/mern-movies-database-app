# mern-movies-database-app

MERN Movies database app

## Plans

# movie-database-app

### sql

movies db

    movie table
        id INT AI NN PK
        name VARCHAR(255) NN
        year INT NN

    director table
        id INT AI NN PK
        name VARCHAR(255) NN

    actor table
        id INT AI NN PK
        name VARCHAR(255) NN

    starring table
        id INT AI NN PK
        mid INT NN FOREIGN KEY movie table id cascade on update & delete
        aid INT NN FOREIGN KEY actor table id cascade on update & delete

    directed table
        id INT AI NN PK
        mid INT NN FOREIGN KEY movie table id cascade on update & delete
        did INT NN FOREIGN KEY director table id cascade on update & delete

### content

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
