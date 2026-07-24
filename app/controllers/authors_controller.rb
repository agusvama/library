class AuthorsController < ApplicationController
  def index
    @authors = Author.all
  end

  def subscribe
    render json: {
      success: true
    }
  end
end
