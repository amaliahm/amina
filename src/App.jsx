import HomeComponent from "./home/home"
import { useState, useEffect } from "react"

function App() {
  const [isPhone, setIsPhone] = useState(false)
  useEffect(() => {
    setIsPhone(window.innerWidth <= 768)
  }, [])
  

  return (
    <>
      <HomeComponent isPhone={isPhone} />
    </>
  )
}

export default App
