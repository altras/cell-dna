module.exports = function loadSecret() {
  let secrets

  try {
    secrets = require(`../dna/secrets`)
  } catch (error) {
    secrets = {}
  }

  if (Object.keys(secrets).length === 0) {
    console.warn('[Warrning] Loading DNA without secret may cause unexpected bahaviour')
  }

  return secrets
}
