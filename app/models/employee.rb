class Employee < ApplicationRecord
  has_secure_password
  has_many :reviews
  has_many :restaurants, through: :reviews

  validates :email, :password, :fullname, :phone, :address, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6}
end
