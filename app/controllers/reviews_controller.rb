class ReviewsController < ApplicationController
  skip_before_action :authorized, only: [:index, :show]
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  wrap_parameters format: []

  def create
    review = Review.create!(review_params)
    render json: review, status: :created
  end

  def index
    reviews = Review.all
    render json: reviews, status: :created
  end

  def show
    reviews = Review.where(employee_id: params[:id])
    render json: reviews, include: :restaurant, status: :created
  end

  def last_five
    reviews = Review.where(employee_id: params[:id])
    render json: reviews.last(5), include: :restaurant, status: :created
  end


  private

    def review_params
      params.permit(:employee_id, :restaurant_id, :comments, :rate)
    end

    def render_not_found_response
      render json: { error: "Couldn't locate the user or restaurant" }, status: :not_found
    end

    def render_unprocessable_entity(invalid)
      render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
