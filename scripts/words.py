import re
import html
import os.path
import os

# Searches all subtitle files
for file in os.listdir("subtitles"):
  lines = open('subtitles/%s' %(file)).readlines()
  print('Current file:', file)

  # Removes XML syntax and the first 15 and last 4 lines from the file, since
  # those don't contain any important information (for us)
  important_lines = [l[54:-5] for l in lines[15:-3]]
  important_lines = [l.replace('</span>', '') for l in important_lines]
  important_lines = [l.replace('<span style="s1">', '') for l in important_lines]
  important_lines = [l.replace('<span style="s2">', '') for l in important_lines]
  important_lines = [l.replace('<span style="s3">', '') for l in important_lines]
  important_lines = [l.replace('<span style="s4">', '') for l in important_lines]

  # Creates a list of words
  word_list = []
  for line in important_lines:
    word_list.extend(line.split(' '))

  # Removes any special characters and turn into lowercase
  word_list = [html.unescape(w) for w in word_list]
  word_list = [re.sub( r'\W', '', w) for w in word_list]
  word_list = [w.lower() for w in word_list]


  # Creates an object with all the words and their respective count
  word_object = {}
  for w in word_list:
    try:
      word_object[w] += 1
    except KeyError:
      word_object[w] = 1

  # Moves the count to each word file
  for w in word_object.keys():
    if os.path.exists('words/%s.txt' %(w)):
      # The word already exists
      num = int(open('words/%s.txt' %(w)).read())
      num += int(word_object[w])
      open('words/%s.txt' %(w), 'w').write(str(num))
    else:
      # It's a new word
      open('words/%s.txt' %(w), 'w').write(str(word_object[w]))