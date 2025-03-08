import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./Pages/AdminDashboard";
import UserManagement from "./Pages/UserManagment";
import ParentDashboard from "./Pages/ParentDashboard";
import ChatPage from "./Pages/ChatPage";
import TeacherDashboard from "./Pages/TeacherDashboard";
import StudentPerformance from "./Components/StudentPerformance";
import Assignments from "./Components/Assignments";
import Announcement from "./Components/Announcement";
import FeesPayments from "./Components/FeesPayments";
import Report from "./Pages/Report";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/User_Managment" element={<UserManagement />} />
        <Route path="/parent" element={<ParentDashboard />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path='/student-performance' element={<StudentPerformance />} />
        <Route path="/assignment" element={<Assignments />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path='/fees' element={<FeesPayments />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </Router>
  );
}

export default App;
