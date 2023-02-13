class EmployeesController < ApplicationController
  skip_before_action :authorized, only: [:create, :index, :most_reviews]
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
    render json: employees, status: :created
  end

  def most_reviews
    employees = Employee.all
    copy = employees.map(&:clone)
    x = 2
    mostreviewer = 0
    emplo = {}
    top2 = []
    while x > 0
    
      count = 0
      
      copy.each do |emp|
        if emp.reviews.count > count
          count = emp.reviews.count
          emplo = emp
        end

      end

      top2 << emplo
      copy.delete(emplo)
      x=x-1

  
    end
    render json: top2
  end

  private

    def employee_params
      params.permit(:email, :password, :fullname, :phone, :address)
    end

    def render_unprocessable_entity(invalid)
      render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end
