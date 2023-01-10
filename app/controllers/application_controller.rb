class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authorized

  def authorized
    return render json: {errors: ["Not Authorized"]}, status: :unauthorized unless session.include? :employee_id
  end
end
