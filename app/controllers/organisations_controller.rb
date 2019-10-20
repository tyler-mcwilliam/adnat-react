class OrganisationsController < ApplicationController
  def index
    organisations = Organisation.all
    render json: organisations # see Message.as_json method
  end

  def show
    if params[:id].blank?
      redirect_to organisation_path(Organisation.first.name)
    else
      @organisation = Organisation.find_by(name: params[:id])
    end
  end

  def create
    organisation = Organisation.new
    organisation.name = params[:name]
    organisation.hourly_rate = params[:hourlyRate]
    organisation.save
    render json: organisation # see Organisation.as_json method
  end
end
