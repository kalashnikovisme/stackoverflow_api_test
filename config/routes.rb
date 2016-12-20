require 'api_constraints'

Rails.application.routes.draw do
  mount GrapeSwaggerRails::Engine => '/swagger'

  root to: 'web/welcome#index'
  namespace :api do
    scope module: :v1, constraints: ApiConstraints.new(version: 1, default: :true) do
      resources :posts, only: :index
    end
  end
end
