DROP TABLE IF EXISTS  purchased;
DROP TABLE IF EXISTS  users;
DROP TABLE IF EXISTS  courses;



CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
	rol VARCHAR(50)   
);

CREATE TABLE courses (
    course_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price INTEGER NOT NULL,
	user_id INT REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE purchased (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    course_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
);

select * from courses;
select * from purchased;
select * from users;