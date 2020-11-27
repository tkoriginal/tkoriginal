#! /usr/bin/env node

const { name, version, description } = require('./package.json')
const welcome = require('cli-welcome')

welcome({
  title: name,
  tagLine: `Hi, nice to meet you!`,
  version,
  description,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true
})
console.log(`
Tauqueer Khan - Software Engineer

📚 Github: https://www.github.com/tkoriginal
🐦 Twitter: https://www.twitter.com/tkoriginale
🌎 Portfolio: https://www.tkhan.ca (not up yet)

Bio: 
  Software Engineer with experience building applications using web technologies.
  Built production applications with
    🖥 Electron/React for Desktop
    🌎 HTML/CSS/JS w/ React and Redux, Express, Postgres for Web
    📱 React Native for Mobile

  Currently Learning: 
    🖥 Node CLI - Automating tasks with NodeJS
`)
