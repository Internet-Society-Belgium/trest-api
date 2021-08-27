import { Request, Response } from 'express'

import HttpException from '../types/error'

function errorMiddleware(
  error: HttpException,
  request: Request,
  response: Response
): void {
  const status = error.status || 500
  const message = error.message || 'Something went wrong'
  response.status(status)
  if (process.env.NODE_ENV !== 'production') {
    response.send({
      status,
      message,
    })
  } else {
    response.send({ status })
  }
}

export default errorMiddleware
