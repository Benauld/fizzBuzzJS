class Mail
  def initialize(email, fancy = false)
    @email = email
    @fancy = fancy
  end

  def send_message
    mail_connect = "http://mixmax.com"
    api_key = "f20506xx808c"
    body_text = "Welcome to MyProduct"

    if fancy
      body_text << ", fancy person!"
    end

    MailServer.connect(mail_connect, api_key: api_key ).send_message({ to: @email, body: body_text })
  end
end
