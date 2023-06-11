# The Odin Project Ruby Projects
This repository contains my solutions for my solutions to The Odin Project's Ruby projects. (N.B. - If there are projects which are more extensive, or which I want to highlight on my portfolio, I will host them in their own repositories and add a link to them here.)

## Caesar Cipher
A program that implements a Caesar cipher on a given string (part of The Odin Project Ruby path)

I have included some basic error handling (raising a TypeError if either argument is not in the expected format), although I am sure as I learn more about Ruby I'll find a better way to do that. My focus working on this program was to try and think in a Ruby kind of way, embracing the unique features of the language - maintaining human readability, using if/unless depending on whether I'm looking for a true or false response, using in-line conditionals where possible. I'm sure there are many more ways I can adapt this program to be more "rubyrific", and there's a good chance I'll pop back to make those changes down the line!

### To Do
- [ ] Modify to accept files
- [ ] Modify to return file
- [ ] Enable bidirectional cipher (offset by negative or positive)

## Substring
A program that, given a string and a dictionary, returns how many times each dictionary entry appears in the string (case insensitive).

Uses the String.scan method to search for all matches of a word to the string, and add one to the dictionary entry for that word for each match.
