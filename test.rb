require "active_support/core_ext/hash/conversions"
require 'json'
require 'sinatra'
require 'net/http'

# curl -X POST -H "Content-Type: application/json" -d '{"address":{"addressLine1":"500 N. Duke St.","postalCode":"27701"}, "credentials":{"username":"test","password":"testpwd12345!","tenant":"test"}}' http://localhost:4567/test

require "rexml/document"
file = File.new( "test.xml" )
doc = REXML::Document.new file

print doc

my_json = "{\"test\":\"b\"}"
my_xml = JSON.parse(my_json).to_xml(:root => :my_root)

set :public_folder, 'public'

get "/" do
  redirect '/index.html'
end

soap_hash = Hash.from_xml(File.read('test.xml'))
before do
  if request.request_method == 'OPTIONS'
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "POST"
    response.headers["Access-Control-Allow-Methods"] = "GET"
    response.headers["Access-Control-Allow-Headers"] = "Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept"

    halt 200
  end
  response.headers["Access-Control-Allow-Origin"] = "*"
end
post '/validate' do
  content_type :json
  @json = JSON.parse(request.body.read)
  puts @json

  file = File.new( "test.xml" )
  doc = REXML::Document.new file
  url = URI.parse('http://worldview.globaldataconsortium.com:8080/wvservice-4.0.1/validate')

  # Address
  doc.get_elements("//address/addressLine1").first.text = @json['input']['address']['addressLine1']
  doc.get_elements("//address/addressLine10").first.text = @json['input']['address']['addressLine10']
  doc.get_elements("//address/addressLine2").first.text = @json['input']['address']['addressLine2']
  doc.get_elements("//address/addressLine3").first.text = @json['input']['address']['addressLine3']
  doc.get_elements("//address/addressLine4").first.text = @json['input']['address']['addressLine4']
  doc.get_elements("//address/addressLine5").first.text = @json['input']['address']['addressLine5']
  doc.get_elements("//address/addressLine6").first.text = @json['input']['address']['addressLine6']
  doc.get_elements("//address/addressLine7").first.text = @json['input']['address']['addressLine7']
  doc.get_elements("//address/addressLine8").first.text = @json['input']['address']['addressLine8']
  doc.get_elements("//address/addressLine9").first.text = @json['input']['address']['addressLine9']
  doc.get_elements("//address/codes/options").first.text = @json['input']['address']['codes']['options']
  doc.get_elements("//address/countryCode").first.text = @json['input']['address']['countryCode']
  doc.get_elements("//address/countryName").first.text = @json['input']['address']['countryName']
  doc.get_elements("//address/countryCode").first.text = @json['input']['address']['countryCode']
  doc.get_elements("//address/department").first.text = @json['input']['address']['department']
  doc.get_elements("//address/eggCode").first.text = @json['input']['address']['eggCode']
  doc.get_elements("//address/hausCode").first.text = @json['input']['address']['hausCode']
  doc.get_elements("//address/houseNumber").first.text = @json['input']['address']['houseNumber']
  doc.get_elements("//address/houseNumberAddition").first.text = @json['input']['address']['houseNumberAddition']
  doc.get_elements("//address/lacsIndicator").first.text = @json['input']['address']['lacsIndicator']
  doc.get_elements("//address/locality").first.text = @json['input']['address']['locality']
  doc.get_elements("//address/municipalityCode").first.text = @json['input']['address']['municipalityCode']
  doc.get_elements("//address/name").first.text = @json['input']['address']['name']
  doc.get_elements("//address/organization").first.text = @json['input']['address']['organization']
  doc.get_elements("//address/postBox").first.text = @json['input']['address']['postBox']
  doc.get_elements("//address/postTown").first.text = @json['input']['address']['postTown']
  doc.get_elements("//address/postalCode").first.text = @json['input']['address']['postalCode']
  doc.get_elements("//address/premise").first.text = @json['input']['address']['premise']
  doc.get_elements("//address/province").first.text = @json['input']['address']['province']
  doc.get_elements("//address/subDistrict").first.text = @json['input']['address']['subDistrict']

  # Email
  doc.get_elements("//email/addressee").first.text = @json['input']['email']['addressee']
#  doc.get_elements("//email/codes").first.text = @json['input']['email']['codes']
  doc.get_elements("//email/countryCode").first.text = @json['input']['email']['countryCode']
  doc.get_elements("//email/domain").first.text = @json['input']['email']['domain']
  doc.get_elements("//email/full_email_address").first.text = @json['input']['email']['full_email_address']
  doc.get_elements("//email/top_level").first.text = @json['input']['email']['top_level']

  # Identity
  doc.get_elements("//identity/businessid").first.text = @json['input']['identity']['businessid']
#  doc.get_elements("//identity/codes").first.text = @json['input']['identity']['codes']
  doc.get_elements("//identity/completename").first.text = @json['input']['identity']['completename']
  doc.get_elements("//identity/contact_type").first.text = @json['input']['identity']['contact_type']
  doc.get_elements("//identity/countryCode").first.text = @json['input']['identity']['countryCode']
  doc.get_elements("//identity/dob").first.text = @json['input']['identity']['dob']
  doc.get_elements("//identity/formofaddress").first.text = @json['input']['identity']['formofaddress']
  doc.get_elements("//identity/function").first.text = @json['input']['identity']['function']
  doc.get_elements("//identity/gender").first.text = @json['input']['identity']['gender']
  doc.get_elements("//identity/givenfullname").first.text = @json['input']['identity']['givenfullname']
  doc.get_elements("//identity/givennameinitials").first.text = @json['input']['identity']['givennameinitials']
  doc.get_elements("//identity/indicator").first.text = @json['input']['identity']['indicator']
  doc.get_elements("//identity/name_qualified").first.text = @json['input']['identity']['name_qualified']
  doc.get_elements("//identity/nationalid").first.text = @json['input']['identity']['nationalid']
  doc.get_elements("//identity/nationality").first.text = @json['input']['identity']['nationality']
  doc.get_elements("//identity/organization_name").first.text = @json['input']['identity']['organization_name']
  doc.get_elements("//identity/qualification_int_first").first.text = @json['input']['identity']['qualification_int_first']
  doc.get_elements("//identity/qualification_int_second").first.text = @json['input']['identity']['qualification_int_second']
  doc.get_elements("//identity/qualification_suceeding").first.text = @json['input']['identity']['qualification_suceeding']
  doc.get_elements("//identity/qualificationpreceding").first.text = @json['input']['identity']['qualificationpreceding']
  doc.get_elements("//identity/surname_first").first.text = @json['input']['identity']['surname_first']
  doc.get_elements("//identity/surname_prefix_first").first.text = @json['input']['identity']['surname_prefix_first']
  doc.get_elements("//identity/surname_prefix_second").first.text = @json['input']['identity']['surname_prefix_second']

  # Phone
  doc.get_elements("//phone/area_code").first.text = @json['input']['phone']['area_code']
  doc.get_elements("//phone/calling_code").first.text = @json['input']['phone']['calling_code']
  doc.get_elements("//phone/calling_from").first.text = @json['input']['phone']['calling_from']
#  doc.get_elements("//phone/codes").first.text = @json['input']['phone']['codes']
  doc.get_elements("//phone/countryCode").first.text = @json['input']['phone']['countryCode']
  doc.get_elements("//phone/formatted_international").first.text = @json['input']['phone']['formatted_international']
  doc.get_elements("//phone/line_type").first.text = @json['input']['phone']['line_type']
  doc.get_elements("//phone/name").first.text = @json['input']['phone']['name']
  doc.get_elements("//phone/number").first.text = @json['input']['phone']['number']
  doc.get_elements("//phone/phone_number").first.text = @json['input']['phone']['phone_number']
  doc.get_elements("//phone/trunk").first.text = @json['input']['phone']['trunk']
  
  # Credentials
  doc.get_elements("//credentials/username").first.text = @json['input']['credentials']['username']
  doc.get_elements("//credentials/password").first.text = @json['input']['credentials']['password']
  doc.get_elements("//credentials/tenant").first.text = @json['input']['credentials']['tenant']
  
  
  request = Net::HTTP::Post.new(url.path)
  request.body = doc.to_s
  puts doc.to_s
  request["Content-Type"] = "text/xml"
  
  response = Net::HTTP.start(url.host, url.port) {|http| http.request(request)}

  soap_xml_response = Hash.from_xml(response.body)
  soap_xml_response.to_json
end

post '/test' do
  content_type :json
  @json = JSON.parse(request.body.read)
  puts @json
  request.body.rewind
  request_payload = JSON.parse request.body.read
  request_payload.to_json
end
