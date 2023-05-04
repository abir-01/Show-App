import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import FeaturedList from './FeaturedList';
import './featured.css'

const Featured = () => {
    const [shows, setshows] = useState([])
   

    useEffect(() => {
        axios.get("https://api.tvmaze.com/search/shows?q=all")
            .then((res) => {
                setshows(res.data)
                
            })
        .catch(err=>console.log(err))
    }, [])


    return (
        <>
            <div className="p-4">
                <h1 style={{ opacity: '0.7' }}>All Shows <hr /></h1>
                <div className="d-flex flex-wrap songs">
                    {shows.map((show) => (
                        <FeaturedList show={show} key={show.show.id} />
                        
                    ))
                    }
                    

                </div>
            </div>
        </>
    )
}

export default Featured