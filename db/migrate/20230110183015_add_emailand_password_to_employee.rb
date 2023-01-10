class AddEmailandPasswordToEmployee < ActiveRecord::Migration[6.1]
  def change
    add_column :employees, :email, :string
    add_column :employees, :password, :string
  end
end
