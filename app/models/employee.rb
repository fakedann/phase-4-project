class Employee < ApplicationRecord
  has_secure_password

  validates :email, :password, :fullname, :phone, :address, :role, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6}
end
