require 'logger'

log_file = File.new(File.expand_path("../../reference.log", __FILE__), 'a+')
#log_file = File.new(File.expand_path("Z:/json/#{time}reference.log", __FILE__), 'a+')
log_file.sync = true

LOGGER = Logger.new(log_file, 'montly')
LOGGER.level = Logger::INFO

