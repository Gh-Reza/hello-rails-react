require 'test_helper'

class Api::V1::RandomControllerTest < ActionDispatch::IntegrationTest
  test 'should get random_greeting' do
    get api_v1_random_random_greeting_url
    assert_response :success
  end
end
