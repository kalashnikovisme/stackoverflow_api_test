require 'api_constraints'

Rails.application.routes.draw do
  root to: 'web/welcome#index'
  namespace :api do
    scope module: :v1, constraints: ApiConstraints.new(version: 1) do
      resources :posts
    end
  end
end
