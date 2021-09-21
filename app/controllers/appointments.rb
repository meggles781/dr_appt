def new
  @users = User.all - @doctor.users
  @appointment = @doctor.appointments.new
end