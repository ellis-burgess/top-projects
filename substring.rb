def substrings(str, dictionary)
  unless str.is_a?(String) || str.is_a?(Array)
    raise TypeError,
      "Invalid type. Please use a string or an array."
  end

  if str.is_a?(Array) && str.any? { |word| !(word.is_a?(String)) }
    raise TypeError,
      "All array items must be strings."
  end

  unless dictionary.is_a?(Array)
    raise TypeError,
      "Please only use an array for your dictionary"
  end

  substrings_found = Hash.new(0)
  str = str.dup.join if str.is_a?(Array)
  str = str.downcase
  dictionary.each do |word|
    word = word.downcase
    str.scan(word) { |word| substrings_found[word] += 1 }
  end
  substrings_found
end
