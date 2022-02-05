# RESTful API with Node.js
## Built using Babel, Express

## Installation and running

The project depends on a rapid-api imdb service that must be accessible, you can change the connection details in the
`config/env/development.js` and `config/env/test.js` for the testing database.

1. Clone this repository
2. `cd` into the cloned copy and run `npm install`
3. Run `npx gulp nodemon`
4. In a browser window doing a `GET` to `http://localhost:6340/api/movies`
5. In a browser window doing a `GET` to `http://localhost:6340/api/movies/search/:someText`
6. In a browser window doing a `GET` to `http://localhost:6340/api/movies/title/find/:someText`
7. In a browser window doing a `GET` to `http://localhost:6340/api/movies/get-top-rated-tv-shows`
8. In a browser window doing a `GET` to `http://localhost:6340/api/movies/details/:id`
9. In a browser window doing a `GET` to `http://localhost:6340/api/movies/reviews/:id`
10. In a browser window doing a `GET` to `http://localhost:6340/api/movies/casts/:id`
11. In a browser window doing a `GET` to `http://localhost:6340/api/movies/character/:movieId/:characterId`
12. In a browser window doing a `GET` to `http://localhost:6340/api/movies/user-reviews/:id`

## Unit testing

To run unit tests simply run `gulp mocha`.
