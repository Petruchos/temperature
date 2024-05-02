export interface StudentDTO {
    firstName: string;
    lastName: string;
    age: number;
}

export class StudentService {

    private students: Array<StudentDTO> = [
        {
            firstName: "Vasya",
            lastName: "Pupkin",
            age: 20
        },
        {
            firstName: "Ivan",
            lastName: "Ivanov",
            age: 18
        },
        {
            firstName: "Grzegorz",
            lastName: "Brzęczyszczykiewicz",
            age: 30
        }
    ]

    getStudents(): Array<StudentDTO> {
        return this.students;
    }

    addStudent(student: StudentDTO){
        this.students.push(student);
    }

}

export default new StudentService();
