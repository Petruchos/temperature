<template>
  <div class="home">
    <h1>Students</h1>
    <form @submit.prevent="addStudent">
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" v-model="newStudent.firstName" required>
      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" v-model="newStudent.lastName" required>
      <label for="age">Age:</label>
      <input type="number" id="age" v-model.number="newStudent.age" required>
      <button type="submit">Add Student</button>
    </form>
    <button v-if="students.length == 0" @click="getStudents">Get Students</button>
    <table v-if="students.length > 0">
      <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(student, index) in students" :key="index">
        <td>{{ student.firstName }}</td>
        <td>{{ student.lastName }}</td>
        <td>{{ student.age }}</td>
      </tr>
      </tbody>
    </table>
    <p v-else>No students available</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { StudentDTO } from "@/StudentService";
import StudentService from "@/StudentService";

@Component
export default class HomeView extends Vue {
  private students: StudentDTO[] = [];
  private newStudent: StudentDTO = { firstName: '', lastName: '', age: 0 };

  async getStudents() {
    this.students = await StudentService.getStudents();
  }

  async addStudent() {
      await StudentService.addStudent(this.newStudent);
      this.newStudent = { firstName: '', lastName: '', age: 0 };
      await this.getStudents();

  }
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #652b2b;
  text-align: left;
  padding: 8px;
}

th {
  background-color: #224f6c;
}
</style>
