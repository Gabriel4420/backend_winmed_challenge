const jwt = require('jsonwebtoken')
const config = require('../config/auth')
const { promisify } = require('util')

module.exports = async (req, res, next) => {
  const auth = req.headers.authorization

  !auth &&
    res.status(401).json({
      error: true,
      message: 'Token Doesnt Exist',
    })

  const [, token] = auth.split(' ')

  try {
    const decode = await promisify(jwt.verify)(token, config.secret)

    !decode
      ? res.status(401).json({
          error: true,
          message: 'Token Expired',
        })
      : (req.user_id = decode.id)
    next()
  } catch {
    return res.status(401).json({
      error: true,
      message: 'Invalid token',
    })
  }
}