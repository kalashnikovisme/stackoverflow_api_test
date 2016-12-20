Configus.build Rails.env do
  env :production do
    host 'stackoverflow.herokuapp.com'
    http 'https'
  end

  env :development, parent: :production do
    host 'localhost:3000'
    http 'http'
  end

  env :test, parent: :development
end
