import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Alert from './components/layout/Alert';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';
import NotFound from './pages/NotFound';
import {GithubProvider} from './context/github/GithubContext'
import {AlertProvider} from './context/alert/AlertContext'

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          
          <div class="flex flex-col min-h-screen justify-between bg-secondary">
            <Navbar />
            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/user/*' element={<User />} />
                <Route path='/noutfound' element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
        </AlertProvider>
    </GithubProvider>  
    
  );
}

export default App;
