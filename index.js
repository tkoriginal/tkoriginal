#! /usr/bin/env node

const welcome = require('cli-welcome')
const chalk = require('chalk')
const symbol = require('log-symbols')

const { version, description } = require('./package.json')
const init = require('./utils/init')

const brandColor = (color, inverse) => (inverse ? chalk.hex(color).inverse.bold : chalk.bgHex(color).bold)
const twitterColor = brandColor('#1da1f2')
const githubColor = brandColor('#6cc644', true)
const portfolioColor = brandColor('#6e5494')

const run = () => {
  // Alerts
  const success = chalk.green.inverse
  const info = chalk.blue.inverse
  const warning = chalk.keyword('orange').inverse
  const error = chalk.red.bold.inverse
  init()
  welcome({
    title: `Tauqueer Khan`,
    tagLine: `Hi, nice to meet you!`,
    version,
    description,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear: true
  })
  console.log(`Bio: ${chalk.italic(`
  Software Engineer with experience building applications using web technologies.
  Built production applications with
    🖥  Electron/React for Desktop
    🌎 HTML/CSS/JS w/ React and Redux, Express, Postgres for Web
    🧰 Testing: Jest(Unit), Cypress(Integration), Percy(Snapshot)
    📱 React Native for Mobile`)}

Currently Learning: 
🖥 Node CLI - Automating tasks with NodeJS

${githubColor(' Github ')} ${chalk.dim('https://www.github.com/tkoriginal')}
${twitterColor(' Twitter ')} ${chalk.dim('https://www.twitter.com/tkoriginale')}
${portfolioColor(' Portfolio ')} ${chalk.dim('https://www.tkhan.ca (not up yet)')}
`)
}

run()
