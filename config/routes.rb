Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  resources :employees
  resources :restaurants
  resources :reviews

  post "/signup", to: "employees#create"
  post "/login", to: "sessions#create"
  get "/me", to: "employees#show"
  delete "/logout", to: "sessions#destroy"
  post "/review", to: "reviews#create"
  get "/reviews/:id", to: "reviews#show"
  get "/reviews_rest/:id", to: "reviews#show_rest"
  get "/reviews/5/:id", to: "reviews#last_five"
  get "/reviews/:id/:filter", to: "reviews#filter_reviews"
  patch "/review/:id", to: "reviews#update"
  delete "/review/:id", to: "reviews#destroy"
  post "/restaurants", to: "restaurants#create"
end
