class Api::V1::ShiftsController < ApplicationController
  before_action :set_organisation

  def index
    shifts = []
    shifts = Shift.all.where(organisation_id: @organisation.id) unless @organisation.nil?
    render json: shifts # see Shift.as_json method
  end

  def create
    shift = @organisation.shifts.build(
      start: params[:start],
      finish: params[:finish],
      break_length: params[:break_length]
    )
    shift.user = current_user
    shift.save
    render json: shift # see Shift.as_json method
  end

  private

  def set_organisation
    @organisation = Organisation.find_by(name: params[:organisation_id])
  end
end
