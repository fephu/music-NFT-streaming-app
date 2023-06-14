import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import DetailPage from './pages/DetailPage/DetailPage';
import DetailMusic from './pages/DetailMusic/DetailMusic';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path='/DetailAuthor' element={<DetailPage />}/>
          <Route path='/DetailMusic' element={<DetailMusic />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
