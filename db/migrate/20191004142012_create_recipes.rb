class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :email
      t.integer :drinkid

      t.timestamps
    end
  end
end
