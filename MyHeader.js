import React from 'react'

function MyHeader(){
return (

    <div className="head"> 

  <header className="case">
  <div className="case-top">
  <img src="img\netflix.png" alt="No logo"/>
  <a href="#" className="btn btn-rounded">Sign In</a>
  </div>
  <div className="case-content">
  <h1>Unlimited movies, TV shows, and more.</h1>
  <p>Watch anywhere. Cancel Anytime</p>
  <p>Ready to watch? Enter your email to create or restart your membership.</p>
  <a href="#" className="btn btn-xl">Watch Free For 30 Days 
  <i className="fas fa-chevron-right btn-icon"></i></a>

  </div>
  </header>

  </div>

);
}

export default MyHeader;