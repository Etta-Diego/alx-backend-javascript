# 0x03. ES6 Data Manipulation

## Project Overview

This project focuses on mastering ES6 features in JavaScript, particularly data manipulation techniques using arrays, sets, maps, and typed arrays. You will learn how to effectively utilize functions such as `map`, `filter`, and `reduce` on arrays.

## Learning Objectives

By the end of this project, you should be able to explain the following concepts clearly:

- How to use `map`, `filter`, and `reduce` on arrays
- Understanding typed arrays
- Utilizing Set, Map, and WeakMap data structures


## Files

1. **Basic list of objects**
   - File: `0-get_list_students.js`
   - Description: Returns an array of student objects with attributes `id`, `firstName`, and `location`.

2. **More mapping**
   - File: `1-get_list_student_ids.js`
   - Description: Returns an array of student IDs from a list of objects using the `map` function.

3. **Filter**
   - File: `2-get_students_by_loc.js`
   - Description: Returns an array of students located in a specific city using the `filter` function.

4. **Reduce**
   - File: `3-get_ids_sum.js`
   - Description: Returns the sum of all student IDs using the `reduce` function.

5. **Combine**
   - File: `4-update_grade_by_city.js`
   - Description: Returns an array of students with updated grades for a specific city using `filter` and `map`.

6. **Typed Arrays**
   - File: `5-typed_arrays.js`
   - Description: Creates a new `Int8` typed array and handles values at specific positions.

7. **Set Data Structure**
   - File: `6-set.js`
   - Description: Returns a Set from an array.

8. **More Set Data Structure**
   - File: `7-has_array_values.js`
   - Description: Checks if all elements in an array exist within a given set.

9. **Clean Set**
   - File: `8-clean_set.js`
   - Description: Returns a string of all set values that start with a specific string.

10. **Map Data Structure**
    - File: `9-groceries_list.js`
    - Description: Returns a map of groceries with items and quantities.

11. **More Map Data Structure**
    - File: `10-update_uniq_items.js`
    - Description: Updates the quantity of items in a map where the initial quantity is 1.

12. **Weak Link Data Structure** (Advanced)
    - File: `100-weak.js`
    - Description: Exports a WeakMap instance and tracks the number of times `queryAPI` is called for each endpoint.

## Installation Instructions

1. Install NodeJS 12.11.x:
   ```bash
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y

