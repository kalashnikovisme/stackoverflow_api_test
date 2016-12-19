require 'net/http'

module Stackoverflow::SearchApiWrapper
  class << self
    def search(query)
      JSON.parse(request(query))["items"].map do |h| 
        h.slice('title', 'link').merge(created_at: I18n.l(Time.at(h['creation_date']), format: '%d %B %Y'))
      end
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
