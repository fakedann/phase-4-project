class EmployeesController < ApplicationController
  skip_before_action :authorized, only: [:create, :index]
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  wrap_parameters format: []

  def create
    employee = Employee.create!(employee_params)
    session[:employee_id] = employee.id
    render json: employee, status: :created
  end

  def show
    current_employee = Employee.find(session[:employee_id])
    render json: current_employee
  end

  def index
    employees = Employee.all
    render json: employees, include: [:reviews], status: :created
  end

  

  private

    def employee_params
      params.permit(:email, :password, :fullname, :phone, :address)
    end

    def render_unprocessable_entity(invalid)
      render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end
