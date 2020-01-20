def send_correct_page(browser, window)
  if(browser.type == "Safari" && window.size < "768px")
    browser_text = " the Safari browser"
  else
    browser_text = " a non-Safari browser"
  end
  if(window.size < "768px")
    window_text = "in a small window."
  else
    window_text = "in a big window."
  end
  puts "You are using: #{browser_text} #{window_text}"
end
