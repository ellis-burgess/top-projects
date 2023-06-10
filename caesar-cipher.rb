def caesar_cipher(str, offset)
  offset = offset % 26 if offset > 26
  i = 0
  lowers = 97..122
  uppers = 65..90

  loop do
    val = str.getbyte(i)
    break if !(val)

    if lowers === val || uppers === val
      new_val = val + offset
      new_val -= 26 unless lowers === new_val || uppers === new_val
      str.setbyte(i, new_val)
    end

    i += 1
  end

  puts str
end
