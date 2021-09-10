class User < ApplicationRecord
  has_many :appointments
  has_many :doctors, through: :appointments

  validates :first_name, :last_name, :email,  :password, presence: true


  def full_name
    "#{self.first_name} #{self.last_name}"
  end
end

