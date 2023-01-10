class CreateEmployees < ActiveRecord::Migration[6.1]
  def change
    create_table :employees do |t|
      t.string :fullname
      t.integer :phone
      t.string :address
      t.string :role

      t.timestamps
    end
  end
end
