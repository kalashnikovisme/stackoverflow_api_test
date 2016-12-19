class Api::V1::PostsController < ApplicationController
  def index
    # I should use here delayed job, but creating websocket app is not required condition of task
    results = JSON.parse ::Stackoverflow::SearchApiWrapper.search params[:query]
    render json: results["items"].map { |h| h.slice('title', 'link') }
  end
end
