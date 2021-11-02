CREATE DATABASE BlogRepo

CREATE TABLE BlogPosts(
    post_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);