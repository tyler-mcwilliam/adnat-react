require 'test_helper'

class OrganisationsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get organisations_show_url
    assert_response :success
  end

end
