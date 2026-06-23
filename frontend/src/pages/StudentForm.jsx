import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function StudentForm() {
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    age: "",
    school: "",
    className: "",
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      await API.post("/students", student);

      alert("Student Registered Successfully");

      navigate("/reading");
    } catch (error) {
      console.error(error);

      alert("Registration Failed");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Student Registration</h1>

      <input
        type="text"
        name="name"
        placeholder="Student Name"
        value={student.name}
        onChange={handleChange}
      />
      <br />
      <br />

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={student.age}
        onChange={handleChange}
      />
      <br />
      <br />

      <input
        type="text"
        name="school"
        placeholder="School Name"
        value={student.school}
        onChange={handleChange}
      />
      <br />
      <br />

      <input
        type="text"
        name="className"
        placeholder="Class"
        value={student.className}
        onChange={handleChange}
      />
      <br />
      <br />

      <button onClick={handleSubmit}>
        Start Assessment
      </button>
    </div>
  );
}

export default StudentForm;