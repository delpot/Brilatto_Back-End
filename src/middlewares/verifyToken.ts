import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

function verifyToken(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization.split(' ')[1];
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
      if (error) {
        return res.status(403).json('⚠  Invalid token!');
      } else {
        res.locals.user = user;
        next();
      }
    });
  } else {
    return res.status(401).json("⚠ You aren't authenticated!");
  }
}

export function verifyTokenAndAuthorization(
  req: Request,
  res: Response,
  next: NextFunction
) {
  verifyToken(req, res, () => {
    if (req.params.id === res.locals.user.id || res.locals.user.isAdmin) {
      next();
    } else {
      res.status(403).json("⚠ You aren't authorized!");
    }
  });
}
