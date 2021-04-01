# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

categories = Category.create([{ name: 'Herbs' }, { name: 'Crystals' }, { name: 'Tarot' }, { name: 'Incense and Oils'}, { name: 'Books'}])

categories.each do |c|
    Category.create(name: c)
end

Product.all.each do |p|
    p.update(category: Category.all.sample(1)(0))
end

