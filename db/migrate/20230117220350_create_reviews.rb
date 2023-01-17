class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :empl_id
      t.integer :rest_id
      t.string :comments
      t.integer :rate

      t.timestamps
    end
  end
end
