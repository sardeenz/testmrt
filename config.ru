require './demo/validate_wrapper'
require './json/validate_wrapper'

map('/demo') do
  run Demo
end
map('/json') do
  run Sinatra::Application
end

