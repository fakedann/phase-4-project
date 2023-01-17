class Review < ApplicationRecord

  validates :empl_id, :rest_id, :comments, :rate, presence: true
  validates :comments, length: { maximum: 100}
end
