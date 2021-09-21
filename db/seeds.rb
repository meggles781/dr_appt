# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

specialty = ['OBGYN', 'Surgeon', 'Neurosurgeon', 'Cardiologists', 'Dermatologists']

time = ['1PM', '2PM' , '3PM' , '4PM', '5PM', '12PM', '11AM']

duration = [1 , 1.5, 2 , 2.5]
10.times do
  user = User.create(
    first_name: Faker::Name.first_name, 
    last_name:Faker::Name.last_name,
    email: Faker::Internet.email,
    password: "password1"
  )
  10.times do 
  doctor = Doctor.create(
      first_name: Faker::Name.first_name,
       last_name:Faker::Name.last_name,
        specialty: specialty.sample
        )
  Appointment.create(
    appt_date: Faker::Date.between(from: 2.days.ago, to: Date.today),
    appt_time: time.sample,
    duration: duration.sample
  )
  end

end

puts "db seeded"
