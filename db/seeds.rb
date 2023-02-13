# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Restaurant.destroy_all
Employee.destroy_all
Review.destroy_all

Restaurant.create!([{
  name: "El Zafiro",
  phone: "3522456789",
  address: "4578 NE 2nd Ave",
  foodtype: "Mexican",
},
{
  name: "Momoyaki",
  phone: "3522412389",
  address: "1267 SW 31th PL",
  foodtype: "Vietnamese",
},
{
  name: "Gainesville Roadhouse",
  phone: "3522234389",
  address: "1222 NW 4TH AVE",
  foodtype: "Southern",
}

])

rest1 = Restaurant.first
rest2 = Restaurant.second
rest3 = Restaurant.third

# e1 = Employee.create!(fullname: "Ricardo Lopez", email: "ricardolopez@gmail.com", address: "1222 NW 4TH AVE", phone: "3527862456", password: "123456")
# e2 = Employee.create!(fullname: "Jack Harlow", email: "jackharlow@gmail.com", address: "8976 SW 4TH AVE", phone: "3527875456", password: "123456")
# e3 = Employee.create!(fullname: "Jose Martinez", email: "josemartinez@gmail.com", address: "1222 NW 12TH AVE", phone: "3527862456", password: "123456")
# e4 = Employee.create!(fullname: "Annalise Bourn", email: "annalisebourn@gmail.com", address: "8900 NE 4TH AVE", phone: "3527862456", password: "123456")
# e5 = Employee.create!(fullname: "Jose Leon", email: "joseleon@gmail.com", address: "4000 NW 4TH AVE", phone: "3527862456", password: "123456")
# e5 = Employee.create!(fullname: "Ben", email: "benmanager@gmail.com", address: "1244 SW 4TH AVE", phone: "3527862456", password: "123456")

# r1 = Review.create!(employee_id: e1.id, restaurant_id: rest1.id, rate: 4, comments: "Awesome experience!")
# r2 = Review.create!(employee_id: e1.id, restaurant_id: rest1.id, rate: 2, comments: "okay experience")
# r3 = Review.create!(employee_id: e3.id, restaurant_id: rest2.id, rate: 5, comments: "best place ever")
# r4 = Review.create!(employee_id: e4.id, restaurant_id: rest3.id, rate: 1, comments: "horrible")

