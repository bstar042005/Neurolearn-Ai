function Dashboard() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Student Dashboard</h1>

      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          marginTop: "20px",
          borderRadius: "10px",
        }}
      >
        <h2>Student Information</h2>

        <p>Name: Demo Student</p>
        <p>Age: 8 Years</p>
        <p>Class: 3</p>
      </div>

      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          marginTop: "20px",
          borderRadius: "10px",
        }}
      >
        <h2>Assessment Summary</h2>

        <p>Reading Score: 4/5</p>
        <p>Writing Score: 3/5</p>
        <p>Risk Level: Medium</p>
      </div>

      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          marginTop: "20px",
          borderRadius: "10px",
        }}
      >
        <h2>Recommended Exercises</h2>

        <ul>
          <li>Letter Recognition Practice</li>
          <li>b ↔ d Differentiation Exercise</li>
          <li>Word Reading Game</li>
          <li>Pronunciation Training</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;