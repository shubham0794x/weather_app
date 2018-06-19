class CitiesList extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			value: "",
			cities: ""
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)

	}

	componentWillReceiveProps(nextProps) {
	    console.log(nextProps)
	}

	checkCity(cityName){

    	const {cities} = this.props

    	const citiesTitles = cities.map(city=> city.title)
    	
    	if(citiesTitles.some(elem=> elem.toLowerCase() == cityName.toLowerCase())){
    		return true
    	}
    	else{
    		return false
    	}
    } 

	handleChange(event) {

    	this.setState({value: event.target.value})

  	}

	handleSubmit(e) {
	    
		console.log(this.props.cities)

	    event.preventDefault()
	    
	    const {value} = this.state
	    
	    if((value=="")||this.checkCity(value)){
	    	alert("city is empty")
	    }  
	    else{
	    	fetch("/cities",{
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Accepts': 'application/json'        			
                },
                method: "POST",
                body: JSON.stringify({"city":{"title": value}})
            })
			.then(res => console.log(res.body))
			.then(data => console.log( JSON.stringify( data ) ));						
	    }
    }


  	render () {

  			
    	return (

	    	<div>
	    		<h1>Weather Report</h1>
	    		<form >
					<p>
						  Type In Your City :
						<input type="text" value={this.state.value} onChange={this.handleChange} />
					</p>
					<input type="button" value="Submit" onClick={this.handleSubmit}/>
				</form>
					
				<City {...this.props} />
	    	</div>
	    )
  	}
}