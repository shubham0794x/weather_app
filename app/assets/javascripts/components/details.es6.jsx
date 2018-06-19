class Details extends React.Component {

  	render () {
  		var url = ""
  		const d  = this.props.details
    	if(d["weather"]){
    		url = "http://openweathermap.org/img/w/" + d["weather"][0].icon + ".png"
    	}
    	else{
    		console.log("api error")
    	}
    	return(

    	<div>
	    	Conditions JSON : 

	    	{JSON.stringify(this.props.details)}
	    	<img src = {url} /> 
	    	
	    </div> 	
    	)
	    
  	}
}


