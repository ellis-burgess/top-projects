def caesar_cipher(str, offset)
  unless str.respond_to? :get_byte
    raise TypeError,
      "cannot encode object of type #{ str.class }"
  end

  unless offset.is_a?(Integer)
    raise TypeError,
      "Can only use integer for a caesar cipher"
    end

  offset = offset % 26
  i = 0
  lowers = 97..122
  uppers = 65..90
  str = str.dup

  loop do
    val = str.getbyte(i)
    break unless val

    if lowers === val || uppers === val
      new_val = val + offset
      new_val -= 26 unless lowers === new_val || uppers === new_val
      str.setbyte(i, new_val)
    end

    i += 1
  end

  puts str
end
