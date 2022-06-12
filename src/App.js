import React, { useState, useEffect } from "react"
import HttpClient from "./HttpClient"
import Like from "./components/Like"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

const App = () => {
  const [apod, setApod] = useState({})

  useEffect(() => {
    HttpClient.getApod().then(apodData => {
      setApod(apodData.data)
    })
  }, [])

  return (
    <div className="App">
      <div className="row">
        <NavBar />
      </div>

      <div className="container mt-5">
        {apod && (
          <div className="row">
            <div className='col-sm'>
              <img className="mt-5 border img-thumbnail border-white border-3 shadow-lg p-2 bg-white rounded" src={apod.url} width="700" alt='Title' />
              <div className="mt-2 mb-5"> &copy; All rights reserved by {apod.copyright}</div>
              <div><Like /></div>
            </div>

            <div className='col-sm'>
              <div className='m-3'>
                <h3 className='display-5'><span>{apod.title}</span></h3>
                <p className="display-7">Taken on: {apod.date} by {apod.copyright} </p>
                <br></br>
                <p className='lead text-justify'>{apod.explanation}</p>
              </div>

            </div>
          </div>
        )}
      </div>
      <div><Footer /></div>
    </div>

  )
}

export default App