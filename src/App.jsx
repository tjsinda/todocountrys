import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Countries from './Country/Countries/Countries';
import Rootlayout from './Rootlayout/Rootlayout';
import Home from './Home/Home';
import Notfound from './Notfound/Notfound';
import Todomain from './Todo/Todomain/Todomain';
import { createContext, useState } from 'react';
import Single from './Country/Single/Single';

export const dataContext = createContext(null)

function App() {

    const [selected, setSelected] = useState(null)

    return (
        <div className="App">
            {/* <Countries /> */}
            <dataContext.Provider value={{ selected, setSelected }} >
                <BrowserRouter>
                    <Routes>
                        <Route path='' element={<Home />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/*' element={<Rootlayout />} >
                            <Route path='' element={<Home />} />
                            <Route path='countries' element={<Countries />} />
                            <Route path='todo' element={<Todomain />} />
                            <Route path='single/:code' element={<Single />} />
                            <Route path='*' element={<Notfound />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </dataContext.Provider>
        </div>
    );
}

export default App;