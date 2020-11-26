#! /usr/bin/env node

process.stdout.write(
  process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H'
)
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
