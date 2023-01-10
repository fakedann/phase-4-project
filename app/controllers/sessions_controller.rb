class SessionsController < ApplicationController
  skip_before_action :authorized, only: [:create]
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  def create
    employee = Employee.find_by(email: params[:email])
    if employee&.authenticate(params[:password])
      session[:employee_id] = employee.id
      # byebug
      render json: employee, status: :created
    else
      render json: {errors: ["a kay"]}, status: :unauthorized
    end
  end

  def destroy
    session.delete :employee_id
    head :no_content
  end
end
