import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'
import HomePage from './pages/home'
import PostPage from './pages/post'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/heroesua.com' element={<HomePage />} />
                <Route path='/heroesua.com/post' element={<PostPage />} />
            </Routes>
        </Router>
    )
}
export default App