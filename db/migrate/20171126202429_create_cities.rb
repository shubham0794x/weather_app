class CreateCities < ActiveRecord::Migration[5.1]
  def change
    create_table :cities do |t|
      t.string :title
      t.float :temperature
      t.float :wind
      t.float :humidity
      t.timestamps
    end
  end
end
