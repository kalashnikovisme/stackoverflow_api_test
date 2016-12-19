class Api::V1::PostsController < ApplicationController
  def index
    render json: [ { title: :fuck, url: :fucking } ].to_json
  end
end
