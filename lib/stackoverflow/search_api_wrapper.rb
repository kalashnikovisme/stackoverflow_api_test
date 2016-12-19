require 'net/http'

module Stackoverflow::SearchApiWrapper
  class << self
    def search(query)
      JSON.parse(request(query))["items"].map { |h| h.slice('title', 'link') }
    end

    private

    def request(query)
      url = URI.parse("https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&q=#{query}&site=stackoverflow")
      req = Net::HTTP::Get.new(url.request_uri, 'Content-Type' => 'application/json')
      http = Net::HTTP.new(url.host, url.port)
      http.use_ssl = (url.scheme == "https")
      http.request(req).body
    end
  end
end
