Q1
Find the titles of all movies directed by Steven Spielberg.
```
SELECT title FROM movie
WHERE director = "Steven Spielberg";
```

Q2
Find all years that have a movie that received a rating of 4 or 5, and sort them in increasing order.
```
SELECT DISTINCT year FROM movie
INNER JOIN rating ON (movie.mID = rating.mID)
WHERE stars BETWEEN 4 AND 5 ORDER BY year ASC;
```

Q3
Find the titles of all movies that have no ratings.
```
SELECT title FROM movie
LEFT JOIN rating ON (movie.mID = rating.mID)
WHERE stars IS NULL;
```

Q4
Some reviewers didn't provide a date with their rating. Find the names of all reviewers who have ratings with a NULL value for the date.
```
SELECT name FROM reviewer
LEFT JOIN rating ON (reviewer.rID = rating.rID)
WHERE ratingDate IS NULL;
```

Q5
Write a query to return the ratings data in a more readable format: reviewer name, movie title, stars, and ratingDate. Also, sort the data, first by reviewer name, then by movie title, and lastly by number of stars.
```
SELECT name, title, stars, ratingDate
FROM reviewer, movie, rating
WHERE (reviewer.rID = rating.rID AND movie.mID = rating.mID)
ORDER BY name, title, stars;
```

Extras

Q1
Find the names of all reviewers who rated Gone with the Wind.
```
SELECT DISTINCT name FROM reviewer
INNER JOIN rating, movie ON (reviewer.rID = rating.rID AND rating.mID = movie.mID)
WHERE title LIKE "Gone with the Wind";
```

Q2
For any rating where the reviewer is the same as the director of the movie, return the reviewer name, movie title, and number of stars.
```
SELECT name, title, stars FROM reviewer, movie, rating
WHERE (movie.director = reviewer.name and reviewer.rID = rating.rID and movie.mID = rating.mID);
```