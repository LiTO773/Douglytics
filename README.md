# Douglytics

Douglytics is a small project I've made to check how many times [Doug Demuro](https://www.youtube.com/channel/UCsqjHFMB_JYTaEnf_vmTNqg) said a certain word in all his videos.

## How can I use it?

Simple! You type the word you want to find out and, after a bit of digging, the website will show you how many times that certain word was said in the videos. Amazing, right?!

## How does it work?

Since Youtube generates and provides subtitles for basically every video on the platform, all the words from Doug's channel can easily be collected using a Python script. A file is later generated with all the words and how many times Doug they were said. This file is later used as a database for the page to get the number of times the word has been said.

The frontend is written with Preact and was generated with the preact-create-app. Here are the default instructions to set it up locally:
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and preact-render-spy 
npm run test
```