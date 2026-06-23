import { useState } from "react";
import { useNavigate } from "react-router-dom";

function StudentForm() {
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

  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px" }}>
      <h1>Student Registration</h1>

      <input
        type="text"
        name="name"
        placeholder="Student Name"
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="number"
        name="age"
        placeholder="Age"
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="text"
        name="school"
        placeholder="School Name"
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="text"
        name="className"
        placeholder="Class"
        onChange={handleChange}
      />
      <br /><br />

      <button onClick={() => navigate("/reading")}>
    Start Assessment
    </button>
    </div>
  );
}

export default StudentForm;