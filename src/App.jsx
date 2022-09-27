import React , { useState } from 'react'
import './App.css'
import  Body  from './components/Body/Body'
import Navbar from './components/Navbar/Navbar'

const powered_logo='https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png'
const URL = 'https://google-search3.p.rapidapi.com/api/v1/';
const options = {
	method: 'GET',
	headers: {
		'X-User-Agent': 'desktop',
		'X-Proxy-Location': 'EU',
		'X-RapidAPI-Key': '3224681278mshdf603cd43fde3cbp13a2f6jsnf3ec618192c1',
		'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
	}
};

function App() {
  const [category,setCategory] = useState(()=>'search');
  const [data,setData] = useState(()=>[]);
  const [query,setQuery] = useState(()=>'elon+musk');
  const [isLoading,setIsLoading] = useState(()=>true);

  React.useMemo(async ()=>{
    setIsLoading(true);
    const data = await await fetch(URL+`${category}/q=${query}`,options)
                              .then(res => res.json())
                              .then(data => data)
                              .catch(err => console.log(err));

    console.log(data);
    setData(data);
    setIsLoading(false);
  },[category,query]);

  return (
    <div className="App">
     <Navbar 
          setIsLoading={setIsLoading}
          setCategory={setCategory}
          setQuery={setQuery}/>

     <Body category={category} 
            data={data}
            isLoading={isLoading} />

     <footer>
      Powered By  <img src={powered_logo} />
     </footer>
    </div>
  )
}

export default App
