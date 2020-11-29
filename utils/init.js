const sym = require('log-symbols')
const chalk = require('chalk')

/**
 * @param {String} requiredNodeVersion
 * @param {Object} options
 */
const checkVersion = (requiredNodeVersion, options) => {
  const defaultOptions = { fail: true }
  const finalOptions = { ...defaultOptions, ...options }

  const currentNodeVersion = process.versions.node
  const semver = currentNodeVersion.split('.')
  const major = semver[0]

  const fail = `
${sym.error} ${chalk.red(`Node version issue!`)}
You are running Node version: ${chalk.red(currentNodeVersion)}
Required version of Node is: ${chalk.green(requiredNodeVersion)} or higher.
${sym.info} Please update your version of Node.js to run this program.
${sym.info} https://nodejs.org/en/download \n`

  if (major < Math.abs(requiredNodeVersion)) {
    console.error(fail)
    finalOptions.fail && process.exit(1)
    return fail
  }
}

module.exports = () => {
  process.on('unhandledrejection', (err) => {
    console.log(err)
  })

  checkVersion(10)
}
