class RemoveColumns < ActiveRecord::Migration[6.1]
  def change
    remove_columns :employees, :role, :admin
  end
end
