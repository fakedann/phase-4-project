class Review < ApplicationRecord
  include Rails.application.routes.url_helpers
  belongs_to :employee
  belongs_to :restaurant
  has_one_attached :image

  validates :employee_id, :restaurant_id, :comments, :rate, presence: true
  validates :comments, format: {with: /[a-zA-Z]/}
  validates :comments, length: { maximum: 100}
end
