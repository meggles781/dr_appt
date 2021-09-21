class Appointment < ApplicationRecord
  belongs_to :user
  belongs_to :doctor

  validates :appt_date, :appt_time, :duration, presence: true
  

  def new
    @users = User.all - @doctor.users
    @appointment = @doctor.appointments.new
  end
end
