/**
 * Retrieves an array of students in a given location.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @param {String} city - The location.
 * @author Onyinyechi Ikediego <https://github.com/Etta-Diego>
 * @returns an array of students in a given location.
 */
export default function getStudentsByLocation(students, city) {
	if (students instanceof Array) {
		return students.filter((student) => student.location === city);
	}

	return [];
}
