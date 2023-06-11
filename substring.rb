def substrings(str, dictionary)
  unless str.is_a?(String) || str.is_a?(Array)
    raise TypeError,
      "Can only search for substrings in a string or array."
  end

  if str.is_a?(Array) && str.any? { |word| !(word.is_a?(String)) }
    raise TypeError,
      "All array items must be strings."
  end

  unless dictionary.is_a?(Array) || dictionary.is_a?(String)
    raise TypeError,
      "Please only use an array or string for your dictionary"
  end

  substrings_found = Hash.new(0)
  str = str.dup.join if str.is_a?(Array)
  str = str.downcase

  dictionary = dictionary.dup.split if dictionary.is_a?(String)

  dictionary.each do |word|
    word = word.downcase.sub(/\p{P}$/, '')
    str.scan(word) { |word| substrings_found[word] += 1 }
  end

  substrings_found
end
