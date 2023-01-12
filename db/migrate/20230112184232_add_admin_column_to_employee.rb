class AddAdminColumnToEmployee < ActiveRecord::Migration[6.1]
  def change
    add_column :employees, :admin, :string
  end
end
