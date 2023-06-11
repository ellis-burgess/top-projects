def substrings(str, dictionary)
  substrings_found = Hash.new(0)
  str = str.dup.downcase
  dictionary.each do |word|
    word = word.downcase
    str.scan(word) { |word| substrings_found[word] += 1 }
  end
  substrings_found
end

dictionary = ["BELOW","down","go","going","horn","how","howdy","it","i","low",
  "own","part","partner","sit"]
p substrings("below", dictionary)
# Expect return: { "below" => 1, "low" => 1 }

p substrings("Howdy partner, sit down! How's it going?", dictionary)
# Expected:
# { "down" => 1, "go" => 1, "going" => 1, "how" => 2, "howdy" => 1, "it" => 2,
# "i" => 3, "own" => 1, "part" => 1, "partner" => 1, "sit" => 1 }

##
# Go through str, testing each word in dictionary
# Each time word is in str, words[word] += 1
