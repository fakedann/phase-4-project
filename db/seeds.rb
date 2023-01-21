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
  email: "elzafiro@gmail.com",
},
{
  name: "Momoyaki",
  phone: "3522412389",
  address: "1267 SW 31th PL",
  foodtype: "Vietnamese",
  email: "momoyaki@gmail.com",
},
{
  name: "Gainesville Roadhouse",
  phone: "3522234389",
  address: "1222 NW 4TH AVE",
  foodtype: "Southern",
  email: "momoyaki@gmail.com",
}

])