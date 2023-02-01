class DeleteEmailFromRestaurant < ActiveRecord::Migration[6.1]
  def change
    remove_column :restaurants, :email
  end
end
