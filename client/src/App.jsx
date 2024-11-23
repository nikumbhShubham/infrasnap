import { useState, useEffect } from 'react'
import Navbar from "./sections/Navbar"


import About from './Sections/About'
import Features from './Sections/Features'
import Footer from './Sections/Footer'

import VideoLoader from './Sections/VideoLoader';
import LoadingScreen from './Sections/LoadingScreen';
import CustomCursor from './Components/CustomCursor'
import SignIn from './Sections/SignIn'
import SignUp from './Sections/SignUp'


function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main >
      {/* <Hero onLoad={() => setIsLoading(false)} isLoading={isLoading} />
      {isLoading ? null : (
        <>
          <Navbar />
          <About/>
          <Features/>
          <Footer/>
        </>
      )} */}
      {/* <VideoLoader/> */}
      <CustomCursor/>
      {/* {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <Navbar />
          <VideoLoader/>
          <About />
          <Features />
          <Footer />
        </>
      )} */}
      <SignUp/> 
         {/* <SignIn/> */}
    </main>
  )
}

export default App