DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS token;
DROP TABLE IF EXISTS user_account;



CREATE TABLE user_account (
    user_id INT GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(30) UNIQUE NOT NULL,
    password CHAR(60) NOT NULL,
    Admin Boolean NOT NULL DEFAULT false,
    date_created_at DATE DEFAULT CURRENT_DATE,
    time_created_at TIME DEFAULT CURRENT_TIME,
    PRIMARY KEY (user_id)
);
CREATE TABLE post (
    post_id INT GENERATED ALWAYS AS IDENTITY,
    title VARCHAR (100) NOT NULL,
    content VARCHAR (500) NOT NULL,
    category VARCHAR (100) NOT NULL,
    post_time TIME DEFAULT CURRENT_TIME,
    post_date DATE DEFAULT CURRENT_DATE,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user_account("user_id"),
    PRIMARY KEY (post_id)
);



CREATE TABLE token (
    token_id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    token CHAR(36) UNIQUE NOT NULL,
    date_created_at DATE DEFAULT CURRENT_DATE,
    time_created_at TIME DEFAULT CURRENT_TIME,
    PRIMARY KEY (token_id),
    FOREIGN KEY (user_id) REFERENCES user_account("user_id")
);

INSERT INTO user_account ( username, password, Admin) VALUES ('tom', 123, true);
INSERT INTO user_account ( username, password, Admin) VALUES ('ajay', 1234, true);

INSERT INTO Post (title, content,category) VALUES ('Hello', 'This is a test ', 'IT');
INSERT INTO Post (title, content,category) VALUES ('TEST','HELLO THE WEATHER IS NICE TODAY','FOOTBALL');