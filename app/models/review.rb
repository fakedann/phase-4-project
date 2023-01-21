class Review < ApplicationRecord
  belongs_to :employee
  belongs_to :restaurant

  validates :employee_id, :restaurant_id, :comments, :rate, presence: true
  validates :comments, length: { maximum: 50}
end
