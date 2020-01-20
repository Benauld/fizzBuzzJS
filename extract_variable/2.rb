def tell_browser_type(browser)
  if(browser.type == "Safari")
    browser_text = " the Safari browser."
  else
    browser_text = " a non-Safari browser."
  end
  puts "You are using: #{browser_text}"
end
