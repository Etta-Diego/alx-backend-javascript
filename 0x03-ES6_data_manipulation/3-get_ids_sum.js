/**
 * Retrieves the sum of all the student ids.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @param {String} city - The location.
 * @author Onyinyechi Ikediego <https://github.com/Etta-Diego>
 * @returns the sum of all the student ids
 */

export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce((sum, student) => sum + student.id, 0);
  }
  return 0;
}
