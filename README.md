### Simple Weather App 

[![forthebadge](http://forthebadge.com/images/badges/made-with-ruby.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)

[![Gem Version](https://badge.fury.io/rb/colorls.svg)](https://badge.fury.io/rb/colorls)
[![Build Status](https://travis-ci.org/athityakumar/colorls.svg?branch=master)](https://travis-ci.org/athityakumar/colorls)

    A simple weather app to display the current weather in a given location to the user.
    Uses : Open Weather Map JSON API (http://openweathermap.org/API) to get real weather data.
    
    
# System dependencies

* Ruby 2.3.4
* Rails 5.1.6
* sqlite3
* materialize-sass
    
# Installation and Developement


1. Install Ruby (preferably, version > 2.3.4)
   Install Rails (preferably, version >5.1.6)
 
2. Bundle Install : `To install all the dependencies`

3. Database Configuration:
               ```  rm -f db/*.sqlite3   ```
              ```   rake db:create       ```
             ```    RAILS_ENV=development rake db:migrate  ```
                     
4. To start the rails server 
     In Cloud9 IDE :  rails s -b $IP -p $PORT
     In Linux:     :  rails s

5. To Get the Weather report of any City:
        Enter the city
        Refresh the localhost server page to load the result


# Improvement Point if I had more Time

    Host the App in Heroku live server
    Try to run the case where city could not be found
    
    

     
         


