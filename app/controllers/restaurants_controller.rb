class RestaurantsController < ApplicationController
  skip_before_action :authorized, only: [:index]
 
  def index
    rests = Restaurant.all
    render json: rests, only: [:email], status: :created
  end
end
