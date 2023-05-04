import React from 'react'
import showimg from '../assets/show.jpg'
import { useDispatch} from 'react-redux'
import { addsongs } from '../actions/index'
import {Link} from 'react-router-dom'

const FeaturedList = ({ show }) => {
    const dispatch = useDispatch();

    const handleOnClick = () => {
       
        dispatch(addsongs(show))
    }

    return (
        <div className="flex justify-center p-2 mx-auto" >

            <div className="card" style={{ width: "16rem", border: 'none', textAlign: 'center' }}>
                <img src={show.show.image? show.show.image.medium:showimg} className="card-img-top" alt="..." />
                <div className="card-body">
                    <a href={show.show.officialSite ? show.show.officialSite : "abc"} target = 'blank' style={{ textDecoration: 'none', color: 'black' }}><h4 className="mx-auto">{show.show.name.substring(0, 20)}</h4></a>

                    <Link to='/summary' onClick= { handleOnClick }><h4>Summary !</h4></Link>
                    
                </div>

            </div>
        </div>
    )
}

export default FeaturedList