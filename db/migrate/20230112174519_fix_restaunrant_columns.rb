class FixRestaunrantColumns < ActiveRecord::Migration[6.1]
  def change
    remove_column :restaurants, :password_digest, :email
  end
end
