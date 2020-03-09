const assertEqual = require(`../assertEqual`);

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Cohort", "Cohort"); // pass
assertEqual("burgers", "fries"); // fail
assertEqual(10, 10); // pass
assertEqual(100, 34); // fail