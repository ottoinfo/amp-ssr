const fetch = require('isomorphic-fetch')

const domain = process.env.SITE_URL || 'https://www.saatchiart.com'

async function parseJSON (response, api, defaultResponse = { success: false }) {
  try {
    const json = await response.json()
    return json
  } catch (err) {
    console.log(`ParseJSON Error ${api}:`, err)
    return defaultResponse
  }
}

async function getArtDetails ({ artistId, artworkId }) {
  const response = await fetch(`${domain}/easel_api/artwork/${artistId}/${artworkId}`)
  const json = await parseJSON(response, 'AMP:getArtDetails')
  return json
}

module.exports = {
  getArtDetails,
  parseJSON,
}
