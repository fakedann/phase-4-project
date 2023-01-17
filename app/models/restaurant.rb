class Restaurant < ApplicationRecord
  has_many :reviews
  has_many :employees, through: :reviews
end
