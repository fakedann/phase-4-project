class Review < ApplicationRecord
  belongs_to :employee
  belongs_to :restaurant

  validates :empl_id, :rest_id, :comments, :rate, presence: true
  validates :comments, length: { maximum: 100}
end
