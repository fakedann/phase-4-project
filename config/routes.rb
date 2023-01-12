Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  resources :employees
  resources :restaurants

  post "/signup", to: "employees#create"
  post "/login", to: "sessions#create"
  get "/me", to: "employees#show"
  delete "/logout", to: "sessions#destroy"
end
