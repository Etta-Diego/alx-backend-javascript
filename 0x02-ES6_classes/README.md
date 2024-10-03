
0x02. ES6 Classes
This directory contains JavaScript files for learning and practicing ES6 classes. Here's a simple description of each file and its purpose:

Files and their purposes:
0-classroom.js: Defines a ClassRoom class that takes maxStudentsSize as an argument and assigns it to the property _maxStudentsSize. This class is used to set up classrooms with a maximum number of students.

1-make_classrooms.js: Uses the ClassRoom class to create an array of 3 classroom objects with specific sizes (19, 20, and 34 students) and returns it. It helps with initializing classrooms.

2-hbtn_course.js: Implements a HolbertonCourse class with attributes: name, length, and students. It has getter and setter methods to validate and manage these attributes.

3-currency.js: Defines a Currency class with attributes: name and code. It includes a method called displayFullCurrency that returns the currency details in the format name (code).

4-pricing.js: Contains a Pricing class that holds amount and currency attributes. It also has a method to display the price in a full format and a static method to convert the price based on a given conversion rate.

5-building.js: Introduces an abstract Building class with the attribute sqft (square feet). It requires any class extending it to implement the evacuationWarningMessage method, otherwise, it throws an error.

6-sky_high.js: A SkyHighBuilding class that extends the Building class. It adds a floors attribute and overrides the evacuationWarningMessage method to include the number of floors.

7-airport.js: Defines an Airport class with attributes name and code. It overrides the default toString method to return the airport code when converting the object to a string.

8-hbtn_class.js: Implements a HolbertonClass class with attributes size and location. When cast to a number, it returns the size, and when cast to a string, it returns the location.

9-hoisting.js: Contains code demonstrating the use of hoisting in JavaScript with classes. The goal is to fix the provided code to ensure it works correctly when creating instances of HolbertonClass and StudentHolberton.

10-car.js: Defines a Car class with attributes brand, motor, and color. It also includes a method cloneCar to return a new object of the same class (using ES6 symbols).
