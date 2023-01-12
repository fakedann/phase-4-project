class FixRestaurantTypeName < ActiveRecord::Migration[6.1]
  def change
    rename_column :restaurants, :type, :foodtype
  end
end
