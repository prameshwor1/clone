import React from "react"



function Middle(){
	return(
		<div className="Minside">
<section className="tabs">
  <div className="container">
  <div id="tab-1" className="tab-item tab-border">
  <i className="fas fa-door-open fa-3x"></i>
  <p className="hide-sm">Cancel at any time</p>
  </div>
  <div id="tab-2" className="tab-item">
  <i className="fas fa-tablet-alt fa-3x"></i>
  <p className="hide-sm">Watch anywhere</p>
  </div>
  <div id="tab-3" className="tab-item">
  <i className="fas fa-tags fa-3x"></i>
  <p className="hide-sm">Pick your price</p>
  </div>
  </div>
  </section>

<section className="tab-content">
  <div className="container">
			
  <div id="tab-1-content" className="tab-content-item show">
  <div className="tab-1-content-inner">
  <div>
  <p className="text-lg">
  If you decide Netflix isn't for you - no problem. No commitment.Cancel online anytime.
  </p>
  <a href="#" className="btn btn-lg">Watch Free For 30 Days</a>
  </div>
  <img src="https://i.ibb.co/J2xDJV7/tab-content-1.png" alt="no img" />
  </div>
  </div>
  </div>
</section>

</div>
);
}



export default Middle;