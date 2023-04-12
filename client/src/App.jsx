import React from 'react'
import { BrowserRouter,Link, Route,Routes} from 'react-router-dom';
import {logo} from "./assets";
import {Home,CreatePost} from "./pages";
const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
      {/* w-full is window full width ,flex makes it a flex container, justify between is justfying space inbetween , items-center jsutifiy items 
      center, px-8 -> padding left and right 1rem ,border-b	-> border-bottom-width: 1px; #e6ebf4 is color set to border */}
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain"/>
      </Link>
      <Link to="/create-post" className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'>Create</Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
      <footer className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4] place-content-end '>
      <a href='https://github.com/kumaresh-rgb/FINAL-YEAR'><p className='text-right hover:text-[#BDCDD6] '>Made by Kumaresh</p></a>
      
    </footer>
    </BrowserRouter>
    
  )
}

export default App
