import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Nav from './Component/navigation';
import Resume from './Pages/Resume';
import Testimonials from './Pages/Testimonials';

function App() {
  return ( 
    <div className=''>
     
           <div >
            <BrowserRouter>
            <Nav className='p-4 bg-gray-800 text-white '/>
              <Routes>

                <Route path ='/'  element= {<Home />} />
                <Route path ='about'  element= {<About />} />
                <Route path ='portfolio'  element= {<Portfolio />} />
                <Route path = 'testimonials'  element = {<Testimonials />} />
                <Route path ='contact'  element= {<Contact />} />
                <Route path = 'resume' element = {<Resume/>}/>
              </Routes>
              
            </BrowserRouter>
           

            </div>
         
            
    </div>
  );
}

export default App;