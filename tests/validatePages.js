const ampValidator = require('amphtml-validator')
const { Error, Main, PrintDetail } = require('../dist/pages')
const { errorResponse, mainResponse, printDetailResponse } = require('./stubData')

const validatePages = [
  { app: Error(errorResponse), name: 'Error' },
  { app: Main(mainResponse), name: 'Main' },
  { app: PrintDetail(printDetailResponse), name: 'PrintDetail' },
]

const validationLogger = ({ validator, app, name }) => {
  const result = validator.validateString(app)
  const logger = result.status === 'PASS' ? console.log : console.error
  logger(`${name} - ${result.status}`)
  result.errors.map((error) => {
    let msg = `line ${error.line}, col ${error.col}: ${error.message}`
    if (error.specUrl !== null) {
      msg += ` (see ${error.specUrl})`
    }
    return logger(msg)
  })
  logger('--')
}

const runValidation = async () => {
  const validator = await ampValidator.getInstance()
  console.log('Validation Start')
  console.log('--')
  validatePages.map(page => validationLogger({ validator, app: page.app, name: page.name }))
  console.log('Validation Complete')
}

module.exports = runValidation()
