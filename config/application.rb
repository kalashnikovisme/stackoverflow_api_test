require File.expand_path('../boot', __FILE__)

require 'rails/all'
require 'sprockets/railtie'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module StackoverflowApiTest
  class Application < Rails::Application
    config.autoload_paths += Dir[
      "#{config.root}/lib/**/"
    ]
    config.active_record.raise_in_transactional_callbacks = true
    config.generators do |g|
      g.template_engine :haml
      g.stylesheets false
      g.javascripts false
      g.helper false
    end
  end
end
