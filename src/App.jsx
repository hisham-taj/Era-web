import AppLayout from './pages/AppLayout'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        
      </Routes>
    </Router>
  );
}

export default App;
