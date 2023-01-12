class CreateRestaurants < ActiveRecord::Migration[6.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :phone
      t.string :address
      t.string :type
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end
