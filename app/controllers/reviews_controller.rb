class ReviewsController < ApplicationController
  # skip_before_action :authorized, only: [:index, :show]
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  wrap_parameters format: []

  def create
    review = Review.create!(review_params)
    render json: review, include: [:restaurant] status: :created
  end

  def index
    reviews = Review.all
    render json: reviews.last(8), include: [:restaurant, :employee], status: :created
  end

  def show
    reviews = Review.where(employee_id: params[:id])
    render json: reviews, include: [:restaurant, :employee], status: :created
  end

  def last_five
    reviews = Review.where(employee_id: params[:id])
    render json: reviews.last(5), include: :restaurant, status: :created
  end

  def update
    review = Review.find_by(id: params[:id])
    if review
      review.update!(rate: params[:rate], comments: params[:comments])
      render json: review, include: [:restaurant, :employee], status: :created
    else
      render json: {error: "Review not found"}, status: :not_found
    end
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
