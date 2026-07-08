import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentForm from "./pages/StudentForm";
import ReadingAssessment from "./pages/ReadingAssessment";
import Home from "./pages/Home";
import Assessment from "./pages/Assessment";
import Result from "./pages/Result";
import Dashboard from "./pages/Dashboard";
import WritingAssessment from "./pages/WritingAssessment";
import Processing from "./pages/Processing";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/result" element={<Result />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<StudentForm />} />
            <Route
          path="/reading"
          element={<ReadingAssessment />}
          />

          <Route
        path="/writing"
        element={<WritingAssessment />}
      />

      <Route path="/writing" element={<WritingAssessment />} />
      <Route path="/result" element={<Result />} />
      <Route path="/assessment" element={<StudentForm />} />

      <Route path="/reading" element={<ReadingAssessment />} />

      <Route path="/writing" element={<WritingAssessment />} />
      <Route path="/processing" element={<Processing />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;