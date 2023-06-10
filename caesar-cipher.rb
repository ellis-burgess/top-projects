def caesar_cipher(str, offset)
  offset = offset % 26 if offset > 26
  i = 0
  lowers = 97..122
  uppers = 65..90

  loop do
    val = str.getbyte(i)

    if lowers === val || uppers === val
      new_val = val + offset
      unless lowers === new_val || uppers === new_val
        new_val -= 26
      end
      str.setbyte(i, new_val)
    end

    i += 1
    break if i == str.length
  end

  puts str
end
