class City extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			boolProp:true
		}

	}

	propsLog(){
		console.log(this.props.weather)
	}

  	render () {
  		
  		
  		const {cities,weather} = this.props

  		const renderedWeather = weather.map(w=>
  			w[1] && <li><div key={weather.indexOf(w)}>City : {w[0]} ; Temperature is : {w[1]["temp"].toString()} ; Conditions : {w[2][0]["description"]  }
  				<a href={"/cities/"+w[3]}>  Details</a></div></li>)
  		
  		const cityLinks = renderedWeather.map(city=> 
  			<li key = {renderedWeather.indexOf(city)}> {city} </li> )

	    return (

	    	<div>

	    		<h3>Current Weather</h3>

	    		<ul>{renderedWeather}</ul>

	    	</div>

	    	)
  	}
}