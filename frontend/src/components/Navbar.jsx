function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 50px",
        background: "#2563eb",
        color: "white",
      }}
    >
      <h2>NeuroLearn AI</h2>

      <div>
        <span style={{ marginRight: "20px" }}>Home</span>
        <span style={{ marginRight: "20px" }}>Assessment</span>
        <span>Dashboard</span>
      </div>
    </nav>
  );
}

export default Navbar;