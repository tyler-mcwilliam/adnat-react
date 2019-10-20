class AddUserRefToShifts < ActiveRecord::Migration[6.0]
  def change
    add_reference :shifts, :user, null: false, foreign_key: true
  end
end
