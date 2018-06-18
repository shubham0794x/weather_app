Rails.application.routes.draw do
 get 'main_page/cities'
  resources :cities
  root 'cities#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
