import React from 'react'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Blog from './Blog'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Resume from './Resume'

export default function RouterPage() {
  return (
    <div>
      <Router>
<Routes>
<Route exact path="/" element={<Home />}></Route>
<Route exact path="/about" element={<About />}></Route>
<Route exact path="/blog" element={<Blog />}></Route>
<Route exact path="/contact" element={<Contact />}></Route>
<Route exact path="/portfolio" element={<Portfolio />}></Route>
<Route exact path="/resume" element={<Resume />}></Route>

{/* <Route path='/contact' exact component={Contact}/> */}
</Routes>

      </Router>
    </div>
  )
}
