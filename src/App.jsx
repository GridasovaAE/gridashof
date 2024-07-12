import { useEffect, useState } from 'react';
import NavigationSection from "./Sections/NavigationSection";
import './App.css'
import axios from "axios"

function App() {

  const [posts, setPosts] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:3001/posts")
    .then(response => {
      setPosts(response.data);
      console.log(posts);
    })
    .catch(error => {
      console.error("There was an error");
    })
  }, []
)
  

  return (
    <>
     <NavigationSection/>
    </>
  )
}

export default App
