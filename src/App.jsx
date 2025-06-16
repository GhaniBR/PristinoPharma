import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CareerPage from "./components/Career";
import JobDetailPage from "./components/JobDescription";
import Form from "./components/Form";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AllJobsPage from "./components/AllJobPostings";
import Footer from "./components/Footer";
import Blog from "./components/Blogs";
import ArticlePage from "./components/ArticlePage";
import About from "./components/About";
import Team from "./components/Team";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/all-jobs" element={<AllJobsPage />} />
        <Route path="/jobs/:jobId" element={<JobDetailPage />} />
        <Route path="/jobs/:jobId/apply" element={<Form />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
