
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!


CREATE TABLE "admin" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


CREATE TABLE "images" (
    "id" SERIAL PRIMARY KEY,
    "image" VARCHAR (150) NOT NULL,
    "description" VARCHAR(1000) NOT NULL
);


CREATE TABLE "orders" (
    "id" SERIAL PRIMARY KEY,
    "firstname" VARCHAR (80) UNIQUE NOT NULL,
    "lastname" VARCHAR (1000) NOT NULL,
    "address" VARCHAR(1000) NOT NULL,
    "city" VARCHAR(1000) NOT NULL,
    "state" VARCHAR(1000) NOT NULL,
    "zipcode" int NOT NULL,
    "country" VARCHAR(1000) NOT NULL,
    "email" VARCHAR(1000) NOT NULL,
    "ipaddress" VARCHAR(1000) NOT NULL,
    "timestamp" timestamp,
    "donation" boolean
);


CREATE TABLE "donations" (
"id" SERIAL PRIMARY KEY,
"firstname" VARCHAR(300) NOT NULL,
"lastname" VARCHAR(300) NOT NULL,
"email" VARCHAR(300) NOT NULL,
"donationamount" int
);


INSERT INTO "images" ("image", "description")
VALUES ('group.jpg','Naile and friends with head massagers');

INSERT INTO "images" ("image", "description")
VALUES ('IMG_2.jpg','Ready to give away some MindWisk');