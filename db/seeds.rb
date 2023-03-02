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

# rests = Restaurant.create!([{
#   name: "El Zafiro",
#   phone: "3522456789",
#   address: "4578 NE 2nd Ave",
#   foodtype: "Mexican",
# },
# {
#   name: "Momoyaki",
#   phone: "3522412389",
#   address: "1267 SW 31th PL",
#   foodtype: "Vietnamese",
# },
# {
#   name: "Gainesville Roadhouse",
#   phone: "3522234389",
#   address: "1222 NW 4TH AVE",
#   foodtype: "Southern",
# },
# {
#   name: "Ravioli's Garden",
#   phone: "3522234389",
#   address: "1189 NW 81ST ST",
#   foodtype: "Italian",
# },
# {
#   name: "The Top",
#   phone: "3522870956",
#   address: "8976 SW Arched Rd",
#   foodtype: "American",
# }

# ])

# employees = Employee.create!([
#   {
#     fullname: "Daniel Escalona",
#     phone: "3522189809",
#     address: "4923 NW 18TH PL",
#     email: "daniel07escalona@gmail.com",
#     password: "123456"
#   },
#   {
#     fullname: "Jose Leon",
#     phone: "3527654809",
#     address: "4923 NW 18TH PL",
#     email: "joseleon@gmail.com",
#     password: "123456"
#   },
#   {
#     fullname: "Alejandra Zepeda",
#     phone: "2670978778",
#     address: "9087 SW 52ND ST",
#     email: "alezep@hotmail.com",
#     password: "123456"
#   },
#   {
#     fullname: "Pedro Zepeda",
#     phone: "8765674532",
#     address: "7654 SW Archer Rd",
#     email: "pedrozep@gmail.com",
#     password: "123456"
#   },
#   {
#     fullname: "Marianela Martinez",
#     phone: "6369980956",
#     address: "4000 NW 51ST ST",
#     email: "marianelamartinez@outlook.com",
#     password: "123456"
#   },
#   {
#     fullname: "Jose Escalona",
#     phone: "3523286745",
#     address: "768 NE 1ST AVE",
#     email: "joseleonardo@gmail.com",
#     password: "123456"
#   }
# ])

# Review.create!([
#   {
#     employee_id: employees[0].id,
#     restaurant_id: rests[0].id,
#     comments: "What an amazing experience!",
#     rate: 5
#   },
#   {
#     employee_id: employees[0].id,
#     restaurant_id: rests[1].id,
#     comments: "Service was great but food was meh",
#     rate: 3
#   },
#   {
#     employee_id: employees[0].id,
#     restaurant_id: rests[3].id,
#     comments: "Mostly a great place, but the wait time is a little too high",
#     rate: 4
#   },
#   {
#     employee_id: employees[0].id,
#     restaurant_id: rests[4].id,
#     comments: "Never coming back to this place. Everything was awful",
#     rate: 1
#   },
#   {
#     employee_id: employees[1].id,
#     restaurant_id: rests[0].id,
#     comments: "Food was great, but service was not attentive enough",
#     rate: 3
#   },
#   {
#     employee_id: employees[1].id,
#     restaurant_id: rests[2].id,
#     comments: "All of the food was delicious! Highly recommended",
#     rate: 5
#   },
#   {
#     employee_id: employees[1].id,
#     restaurant_id: rests[4].id,
#     comments: "I found multiple hairs on my food, so this wasn't good",
#     rate: 2
#   },
#   {
#     employee_id: employees[2].id,
#     restaurant_id: rests[0].id,
#     comments: "Best Mexican restaurant in town!",
#     rate: 5
#   },
#   {
#     employee_id: employees[2].id,
#     restaurant_id: rests[1].id,
#     comments: "Nothing compares to this place! Favorite restaurant",
#     rate: 5
#   },
#   {
#     employee_id: employees[2].id,
#     restaurant_id: rests[2].id,
#     comments: "I love the steaks in here!",
#     rate: 4
#   },
#   {
#     employee_id: employees[2].id,
#     restaurant_id: rests[3].id,
#     comments: "Decent pasta but too expensive",
#     rate: 3
#   },
#   {
#     employee_id: employees[3].id,
#     restaurant_id: rests[0].id,
#     comments: "This is an okay mexican restaurant",
#     rate: 3
#   },
#   {
#     employee_id: employees[3].id,
#     restaurant_id: rests[4].id,
#     comments: "Best burgers in the country",
#     rate: 5
#   },
#   {
#     employee_id: employees[3].id,
#     restaurant_id: rests[3].id,
#     comments: "Lasagna here is unbeateable",
#     rate: 4
#   },
#   {
#     employee_id: employees[3].id,
#     restaurant_id: rests[1].id,
#     comments: "Best asian restaurant in town",
#     rate: 4
#   },
#   {
#     employee_id: employees[3].id,
#     restaurant_id: rests[2].id,
#     comments: "Okay place for steaks",
#     rate: 2
#   },
#   {
#     employee_id: employees[4].id,
#     restaurant_id: rests[0].id,
#     comments: "Amazing al pastor tacos, the rest is decent",
#     rate: 4
#   },
#   {
#     employee_id: employees[4].id,
#     restaurant_id: rests[1].id,
#     comments: "Great atmosphere and service",
#     rate: 4
#   },
#   {
#     employee_id: employees[4].id,
#     restaurant_id: rests[2].id,
#     comments: "Best drinks in town! Amazing prices as well",
#     rate: 5
#   },
#   {
#     employee_id: employees[4].id,
#     restaurant_id: rests[3].id,
#     comments: "I can make better pasta at home than this place",
#     rate: 2
#   },
#   {
#     employee_id: employees[4].id,
#     restaurant_id: rests[4].id,
#     comments: "Burgers here seem a little unhealthy, but I cannot deny the amazing flavor",
#     rate: 4
#   },
#   {
#     employee_id: employees[5].id,
#     restaurant_id: rests[0].id,
#     comments: "Their happy hour is unbeatable",
#     rate: 5
#   },
#   {
#     employee_id: employees[5].id,
#     restaurant_id: rests[1].id,
#     comments: "Had a bad experience with management, not coming back",
#     rate: 2
#   },
#   {
#     employee_id: employees[5].id,
#     restaurant_id: rests[2].id,
#     comments: "Wait time is always too high, it is not worth it",
#     rate: 2
#   },
#   {
#     employee_id: employees[5].id,
#     restaurant_id: rests[3].id,
#     comments: "People that come to this place are for some reason always too loud. Bad atmosphere",
#     rate: 3
#   },
#   {
#     employee_id: employees[5].id,
#     restaurant_id: rests[4].id,
#     comments: "The buns are always torn apart. Do not come to this place",
#     rate: 1
#   }
# ])

