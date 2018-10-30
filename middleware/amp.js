const express = require('express')

const { Main, Error, PrintDetail } = require('../dist/pages')
const { getArtDetails } = require('../apis')

const canonicalUrl = req => ({
  url: `${process.env.SITE_URL}${req.originalUrl.replace('amp/', '')}`,
})

const handleError = ({ req, res, err }) => {
  console.log('Server Side Error', { err })
  res.status(404)
  res.send(Error(canonicalUrl(req)))
}

const ampRoutes = () => {
  const router = express.Router()

  router.get('/amp/:type(art|print)/:artistId/:artworkId', async (req, res) => {
    try {
      const { artistId, artworkId } = req.params
      const artDetails = await getArtDetails({ artistId, artworkId })
      res.status(200)
      res.send(PrintDetail({ ...artDetails, ...canonicalUrl(req) }))
    } catch (err) {
      handleError({ req, res, err })
    }
  })

  router.get('/amp/main', async (req, res) => {
    try {
      const artDetails = await getArtDetails({ userId: 1, artworkId: 1 })
      res.status(200)
      res.send(Main({ ...artDetails, ...canonicalUrl(req) }))
    } catch (err) {
      handleError({ req, res, err })
    }
  })

  router.get('/amp/*', async (req, res) => {
    handleError({ req, res, err: 'Unknown Route' })
  })

  router.get('/*', async (req, res) => {
    res.status(200)
    res.send(`<p>Look under /amp directory to test</p>`)
  })

  return router
}

module.exports = ampRoutes
