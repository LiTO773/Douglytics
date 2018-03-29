# Scripts
This folder is dedicated to external scripts that help the page function properly. So far it only has 1 Python script, which is used to get all the words.

## words.py
This script is used to get all the words from Doug's videos and stores them in files with the respective count. This files are saved in a folder called `words`, which is currently located in: `<root>/docs/words`

To use this script please follow these instructions:
``` bash
# create the necessary directories
mkdir subtitles
mkdir words

# populate the directory subtitles with all of the subtitles from Doug's channel
cd subtitles
youtube-dl --write-auto-sub --sub-format ttml -o "%(autonumber)s.%(ext)s" --skip-download "https://www.youtube.com/channel/UCsqjHFMB_JYTaEnf_vmTNqg"

# run the script
cd ..
python3 words.py
```
The subtitles folder is ignored due to it's size when populated and because it really isn't necessary to keep in the repo. However, if you still want to the download all the subtitles yourself where is the link to [youtube-dl](https://rg3.github.io/youtube-dl/download.html).