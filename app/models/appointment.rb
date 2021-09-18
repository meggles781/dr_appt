class Appointment < ApplicationRecord
  belongs_to :user
  belongs_to :doctor

  validates :appt_date, :appt_time, :duration, presence: true

end
