class AppointmentsController < ApplicationController
  def index
    @
  end

  def show
  end

  def new
    @users = User.all - @doctor.users
    @appointment = @doctor.appointments.new
  end

  def edit
  end
end
