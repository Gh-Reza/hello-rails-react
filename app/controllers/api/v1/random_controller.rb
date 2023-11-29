class Api::V1::RandomController < ApplicationController
  def random_greeting
    @greeting = Greeting.order('RANDOM()').first
    render json: @greeting
  end
end
