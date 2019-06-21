require 'rapid_api'

RapidAPI.config(
  project: ENV['PROJECT_NAME'],
  api_key: ENV['API_KEY']
)