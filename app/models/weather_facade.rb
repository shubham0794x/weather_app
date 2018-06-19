require 'httparty'

class WeatherFacade

	  include HTTParty

	  base_uri 'openweathermap.org/data'

	  # method for fetchin current weather
	  # maybe add method for another day weather

	  def self.get_current(city)
	  	begin
	  		res = get("http://openweathermap.org/data/2.5/weather?q=#{city}&appid=b6907d289e10d714a6e88b30761fae22")
	  	rescue StandardError => boom
  			puts "Error while GETting" + boom
		end
	  	conditions = res
	  	
	  	return conditions

	  end

end