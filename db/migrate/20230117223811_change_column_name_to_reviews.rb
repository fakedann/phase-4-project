class ChangeColumnNameToReviews < ActiveRecord::Migration[6.1]
  def change
    rename_column :reviews, :empl_id, :employee_id
    rename_column :reviews, :rest_id, :restaurant_id
  end
end
