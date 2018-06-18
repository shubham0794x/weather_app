class CitiesController < ApplicationController
	skip_before_action :verify_authenticity_token

	def index	
		citiesWeather = [] 	
    	@cities = City.all   	
    	@cities.each do |city|
    		begin 	
	    		result = WeatherFacade.get_current(city.title)
	    		@arr = []
	    		@main = result["main"]
	    		@weather = result["weather"]
	    		@cityName = result["name"]
	    		@arr.push(@cityName,@main,@weather)
	    		@arr.push(city.id)
	    		citiesWeather.push(@arr)
	    	rescue StandardError => boom
  				print "Error while accessing API" + boom
			end
    	end	
    	@weather = citiesWeather 	
  	end	

	def show		  
   		@city = City.find(params[:id])
   		#fetch details about current city
   		#maybe add some additional funcs, like tomorrow
   		begin
   			res = WeatherFacade.get_current(@city.title)
   			@detailedWeather = res
   		rescue StandardError => boom
   			puts "API Error"
   		end
  	end

	def new

	end
		
	def create
	 	
	 	@city = City.new(title:params["city"]["title"])
	 	
	 	puts params
	 	respond_to do |format|

	 		if @city.save
	 			format.json { render json: {}, status: :created, message: @city }
	 			format.html { render :template => 'cities/index' }
	 		end
	 	end
  		
	end

	def destroy
	    @city = City.find(params[:id])
	    @city.destroy
	 
	    redirect_to cities_path
  	end

	private
		def cities_params
	    	params.require(:city).permit(:title)
	  	end

end
