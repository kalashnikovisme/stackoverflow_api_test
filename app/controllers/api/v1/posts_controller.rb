class Api::V1::PostsController < ApplicationController
  def index
    results = JSON.parse ::Stackoverflow::SearchApiWrapper.search params[:query]
    render json: results["items"].map { |h| h.slice('title', 'link') }
  end
end
