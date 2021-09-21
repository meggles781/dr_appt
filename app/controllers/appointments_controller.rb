class AppointmentsController < ApplicationController
  before_action :set_doctor
  def index
    
    @appointments = User.appointments
    render component: 'Appointments',props: {user: @user, appointment: @appointments}
   
  end

  def new
    @appopintment = @user.appointment.newparams([id])
   render component: 'Appointment', props: { users:@user, appointment: @appointment}
  end

  def create
    @appointment = users.appointmetns.new(appointment_params)
    if @appointment.save
      redirect_to_user_path
    else
      render component: 'AppointmentNew', props: { user: @user, appointment: @appointment }
    end
  end


      def update
        @appointment = @user.appointment.find (params[:id])
        if @appointment.update(appointmetn_params)
          redirect_to_appointment_path
        else
          render component: 'AppointmentEdit' , props: {patient: @patient, appointment: @appointment }
        end 
      end

      def show 
        @appointment = @user.appointment.find(params[:id])
        render conponents:'Appointment' ,props: { patient: @patient, appointment: @appointment }
      end
    


  def destroy
    @user.appointments.find(params[:id]).destroy
  redirect_to_appointment_path
  end

 private
   def set_user
    @user = user.fin(params[;user_id])
   end  
end
