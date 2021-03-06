require 'json'
require 'sinatra/base'
require 'sinatra/streaming'
require 'net/http'
require 'java'

require 'pdfkit'

require 'net/smtp'
require 'mailfactory'
require 'base64'
require 'rubygems'

# std_out = File.new("./log/stdout.log","a")
# $stdout.reopen(std_out)

puts 'insde demo/validate_wrapper'

PDFKit.configure do |config|
  config.wkhtmltopdf = 'D:/wkhtmltopdf/bin/wkhtmltopdf.exe' if Gem.win_platform?
end

class Demo < Sinatra::Base
  helpers Sinatra::Streaming

  puts 'begin demo-->validate_wrapper'
  set :root, File.dirname(__FILE__)
  puts :root
  set :environment, :development
  
  get "/" do
    puts "first"
    puts "pwd = "
    puts Dir.pwd
    redirect '/demo/index.html'
    
  end

  get "/config" do
    puts "inside /config"
    content_type 'application/json'
    puts "pwd = "
    puts Dir.pwd

    # get the name of the directory that the sinatra file is in
    war_name = File.basename(File.dirname(__FILE__))

    if Gem.win_platform?
      puts "inside Gem.win_platform"
      war_name = File.dirname(__FILE__).split('/')[-2]
      return File.read("Z:/mrt/#{war_name}.config.json")
    else
      puts "before demo.config.json"
      #return File.read("#{war_name}.config.json")
      return File.read("demo.config.json")
    end
  end

  post "/send_summary" do
    summary = params[:summary]
    email = params[:email]
    name = params[:name]
    phone = params[:phone]
    company = params[:company]
    if Gem.win_platform?
      File.open("Z:/mrt/emails.csv", 'a') {|f|
        f.write("#{name},#{email},#{phone},#{company}\n")
      }
    else
      File.open("./emails.csv", 'a') {|f|
        f.write("#{name},#{email},#{phone},#{company}\n")
      }
    end
    r = File.dirname(__FILE__)
    r = File.expand_path("..", Dir.pwd) if Gem.win_platform?
    # TODO Add saving email
    html = erb :summary, :locals => {:r => r}

    pdf = PDFKit.new(html)

    mail = MailFactory.new()
    mail.to = "\"#{name}\" <" + email + ">"
    mail.from = '"Worldview" <worldview@globaldataconsortium.com>'
    mail.subject = 'Worldview results'
    mail.text = <<-TEXT
Dear #{name},
  Thank you for speaking with us at IRCE 2014! The attached PDF is a sample report from GDC's Worldview platform.

  Worldview helps eCommerce and internet retail companies decrease fraud, misdelivery, and customer service expenses, while expanding international revenue opportunities.

  We've aggregated a global network of specialty in-country data providers onto a single web service to ensure best available data quality for address validation and identity management, as well as local context for harnessing that data. Customers can access the platform via a one-to-many API or white labeled manual review tool.

  If you'd like to learn more about how Worldview can help your organization, please contact Ted Baxa at 1-888-949-4389, ext. 205 or email Ted@globaldataconsortium.com.
    TEXT
    mail.html = <<-HTML
    <table style="border:1px solid #e3e3e4;width:800px" cellpadding="0" border="0" cellspacing="0">
    <tbody>
     <tr>
      <td><img height="94" alt="logo" width="200" src="http://globaldataconsortium.com/worldview/wp-content/uploads/2013/01/Worldview-Logo-v3.1small200px.png" border="0"></td>
     </tr>
     <tr>
      <td style="background-color:#f2f2f2">&nbsp;</td>
     </tr>
     <tr>
      <td style="padding:20px">
       <table style="width:100%" cellpadding="0" border="0" cellspacing="0">
        <tbody>
         <tr>
          <td style="color:#353f48;font-weight:normal;font-size:12px;font-family:Arial,Helvetica,sans-serif;line-height:20px">
      <p style="color:#ff9900;font-weight:bold;font-size:12pt;font-family:Arial,Helvetica,sans-serif;line-height:20px">Dear #{name},</p>

<p>The attached PDF is the report you requested from GDC's Worldview platform.</p>

<p>Worldview helps eCommerce and internet retail companies decrease fraud, misdelivery, and customer service expenses, while expanding international revenue opportunities.</p>

<p>We've aggregated a global network of specialty in-country data providers onto a single web service to ensure best available data quality for address validation and identity management, as well as local context for harnessing that data. Customers can access the platform via a one-to-many API or white labeled manual review tool.</p>

<p>If you'd like to learn more about how Worldview can help your organization, please contact sales at 1-888-949-4389, ext. 205 or email <a href="mailto:sales@globaldataconsortium.com" target="_top">Ted@globaldataconsortium.com.</a></p>
      </td>
         </tr>
         <tr>
          <td style="color:#353f48;font-weight:normal;font-size:12px;font-family:Arial,Helvetica,sans-serif;line-height:20px"></td>
         </tr>
        </tbody>
       </table> </td>
     </tr>
     <tr>
      <td>&nbsp;</td>
     </tr>
     <tr>
      <td style="color:#353f48;font-weight:normal;font-size:12px;font-family:Arial,Helvetica,sans-serif;line-height:20px;padding-bottom:50px">This message is automatically generated by Worldview platform.</td>
     </tr>
     <tr>
      <td style="background-color:#f2f2f2;color:#353f48;font-weight:normal;font-size:12px;font-family:Arial,Helvetica,sans-serif;line-height:20px" align="center" valign="middle">Brought to you by <a href="http://www.globaldataconsortium.com/" target="_blank">Global Data Consortium</a></td>
     </tr>
    </tbody>
   </table>
HTML
    if Gem.win_platform?
      File.open('Z:/mrt/Worldview_Summary_Report.pdf', 'a') do |f1|

      end
      file = pdf.to_file('Z:/mrt/Worldview_Summary_Report.pdf')
    else
      file = pdf.to_file('Worldview Summary Report.pdf')
    end
    mail.attach(file, 'application/pdf')
    #    mail.attach("/some/other/file")

    # smtp = Net::SMTP.new 'smtp.1and1.com', 25
    # #smtp.enable_starttls
    # smtp.start('globaldataconsortium.com', 'worldview@globaldataconsortium.com', 'gdc12345!', :login) { | smtp|
    #   smtp.send_message(mail.to_s(), 'worldview@globaldataconsortium.com', email, 'sales@globaldataconsortium.com', 'justinlgrimes@gmail.com')
    # }

    smtp = Net::SMTP.new 'in-v3.mailjet.com', 25
    #smtp.enable_starttls
    smtp.start('globaldataconsortium.com', '90c18e76ca2b443a27a6f527c4d36ecd', 'bbd5c4abc32c1ef54659680f9d26657a', :login) { | smtp|
      smtp.send_message(mail.to_s(), 'worldview@globaldataconsortium.com', email, 'chfoley1@gmail.com', 'sardeenz@gmail.com')
    }

  end
  
  post "/pdf" do
    content_type 'application/pdf'
    summary = params[:summary]
    r = File.dirname(__FILE__)
    r = File.expand_path("..", Dir.pwd) if Gem.win_platform?
    # TODO Add saving email
    html = erb :summary, :locals => {:r => r}
    pdf = PDFKit.new(html)
    response.write pdf.to_pdf
  end

  
  run! if app_file == $0
end
