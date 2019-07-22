// This tells the 'config' library to get it's config from the dna folder.
process.env.NODE_CONFIG_DIR = './dna'
process.env.NODE_ENV = process.env.NODE_ENV || 'development'
/*

  DNA is a wrapper of npm's `config` module
  each cell is responsible for installing this module so our DNA can wrap it accordingly
  This makes it possible to do:

  const dna = require('cell-dna')
  dna.get('some-key')

*/
module.exports = require('config')
