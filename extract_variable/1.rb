def send_email_to(user)
  address = user.email.strip
  Mail.new(address).send_message
end
