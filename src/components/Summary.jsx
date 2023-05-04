import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Summary = () => {
  const myState = useSelector((state) => state.addsongs)
  console.log("summary", myState)
  const [username, setusername] = useState("")
  const [showname, setshowname] = useState(myState.show.name)
  const [isSaved, setisSaved] = useState(false)
  const [isCleared, setisCleared] = useState(false)

  const saveData = () => {
    //saving username to sesstion storage
    sessionStorage.setItem("name", username);
    sessionStorage.setItem("show", showname);

    setisSaved(true);
    setTimeout(() => {
      setisSaved(false);
    }, 2000);

  };

  const getSessionData = () => {
    //fetching username from sesstion storage
    let name = sessionStorage.getItem("name")
    let show = sessionStorage.getItem("show")
    return [ "Name : ",name," ,Show : ", show ]
    
  };

  const clearSessionData = () => {
    //Removing username from sesstion storage
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("show");

    setisCleared(true);
    setTimeout(() => {
      setisCleared(false);
    }, 2000);
  };


  return (
    <div className='p-3'>
      <div>
        <h1><i>Summary of {myState && myState.show.name}</i> ...</h1><br />
        <p>{myState && myState.show.summary.substring(3, myState.show.summary.length - 4)}</p></div>




      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Book A Movie Ticket
      </button>


      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Book A Movie Ticket</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group py-2">
                  <label htmlFor="exampleInputEmail1"><h5>Summary:</h5></label>
                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={myState.show.summary.substring(3, myState.show.summary.length - 4)} disabled />

                </div>
                <div className="form-group py-2">
                  <label htmlFor="exampleInputEmail1"><h5>Movie Name:</h5></label>
                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={myState.show.name} disabled />

                </div>
                <div className="form-group py-2">
                  <label htmlFor="exampleInputEmail1"><h5>Rating:</h5></label>
                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={myState.show.rating.average} disabled />

                </div>
                <div className="form-group py-2">
                  <label htmlFor="exampleInputPassword1"><h5>Name:</h5></label>
                  <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter your Name -"
                    value={username}
                    onChange={({ target }) => {
                      setusername(target.value)
                      
                    }}/>
                  
                </div>

                
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button onClick={saveData} className="btn btn-primary">{isSaved ? 'Saved!' : 'SUBMIT'}</button>
            </div>
          </div>
        </div>
      </div>


      <h3 className="inrow">
        <br/><p className="label">
          <strong>Saved Data:</strong> <br/><br/>{getSessionData()}
        </p><br/>

        <button onClick={clearSessionData} className="btn btn-primary">
          {isCleared ? 'Removed!' : 'Clear'}
        </button>
      </h3>

    </div>
  )
}

export default Summary