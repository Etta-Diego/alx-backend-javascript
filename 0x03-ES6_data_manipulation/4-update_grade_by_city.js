/**
 * Retrieves the an array of students for a specific city with their new grade
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @param {*} city - The city of students.
 * @param {{
 *   studentId: Number,
 *   grade: Number,
 * }[]} newGrades - The new grades to be given to a student.
 * @author Onyinyechi Ikediego <https://github.com/Etta-Diego>
 * @returns array of objects
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
 const defaultGrade = { grade: 'N/A' }; 
 
 if (students instanceof Array) {
   return students
     .filter((student) => student.location === city)
     .map((student) => ({
       id: student.id,
       firstName: student.firstName,
       location: student.location,
       grade: (newGrades
         .filter((grade) => grade.studentId === student.id)              .pop() || defaultGrade).grade,
     }));
  }
  return [];
}
