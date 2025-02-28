import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [blogs, setBlogs] = useState([])
  const [data, setData] = useState({})
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])

  useEffect(() => {
    // fetch('http://localhost:5000')
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //     setData(data)
    //   })

    const getData = async () => {
      const url = process.env.DATA_URL || 'http://api_c:4000'
      const response = await fetch(url)
      const data = await response.json()
      console.log(data);
      setData(data)
    }
    getData()
  }, [])




  return (
    <div className="App">
      <header className="App-header">
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <h1>all blogssssss</h1>
        <h1>dfdfdfdf:{process.env.DATA_URL || 'http://api_c:4000'}</h1>
        <h1>dfdfdfdf:{process.env.NODE_ENV || 'NODE_ENV'}</h1>

        {blogs && blogs.map(blog => (
          <div key={blog.id}>{blog.title}</div>
        ))}
      </header>
    </div>
  );
}

export default App;
