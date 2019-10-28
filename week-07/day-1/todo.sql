DROP TABLE IF EXISTS doing;
DROP TABLE IF EXISTS done;
DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS todo;
DROP TABLE IF EXISTS review;


CREATE TABLE doing(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  task_id INT NOT NULL
);

CREATE TABLE done(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  task_id INT NOT NULL
);

CREATE TABLE review(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  task_id INT NOT NULL
);

CREATE TABLE tasks(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  status enum('todo','doing','review','done') NOT NULL,
  description tinytext NOT NULL
);

CREATE TABLE todo(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  task_id INT NOT NULL
);


INSERT INTO doing
VALUES
  (1, 3),
  (2, 4);

INSERT INTO done
VALUES
  (1, 6);

INSERT INTO review
VALUES
  (1, 5);

INSERT INTO tasks
VALUES
  (1, 'todo', 'complete older missing tasks'),
  (2, 'todo', 'work on the wanderer'),
  (3, 'doing', 'work on sql exercises'),
  (4, 'doing', 'check on tomorrows material'),
  (5, 'review', 'finish the gallery'),
  (6, 'done', 'redo exam examples');

INSERT INTO todo
VALUES
  (1, 1),
  (2, 2);