class RestaurantsController < ApplicationController
  skip_before_action :authorized, only: [:index, :highest]
 
  def index
    rests = Restaurant.all
    render json: rests, include: [:employees], status: :created
  end


  def create
    restaurant = Restaurant.create!(restaurant_params)
    render json: restaurant, status: :created
  end

  def highest
    rests = Restaurant.all
    max = rests.max_by(5) { |rest| rest.reviews.average(:rate)}

    arr = max.map do |obj|
      avg = {average: obj.reviews.average(:rate).to_f.round(2)}
      results = obj.attributes.merge(avg)
    end


    render json: arr, status: :created
  end




  private

    def restaurant_params
      params.permit(:name, :foodtype, :phone, :address)
    end

    def render_not_found_response
      render json: { error: "Couldn't locate the user or restaurant" }, status: :not_found
    end

    def render_unprocessable_entity(invalid)
      render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end
