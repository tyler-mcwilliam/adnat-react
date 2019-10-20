class Api::V1::OrganisationsController < ApplicationController
  def index
    organisations = Organisation.all
    render json: organisations # see Message.as_json method
  end

  def create
    organisation = Organisation.new(params)
    organisation.save
    render json: organisation # see Organisation.as_json method
  end
end
