import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

function verifyAuthentication(req: Request, res: Response, next: NextFunction) {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
      if (error) {
        return res.status(403).json('⚠ Invalid token!');
      } else {
        res.locals.user = user;
        next();
      }
    });
  } else {
    return res.status(401).json("⚠ You aren't authenticated!");
  }
}

export function verifyAuthorization(
  req: Request,
  res: Response,
  next: NextFunction
) {
  verifyAuthentication(req, res, () => {
    if (req.params.id === res.locals.user.id || res.locals.user.isAdmin) {
      next();
    } else {
      res.status(403).json("⚠ You aren't authorized!");
    }
  });
}

export function verifyAdmin(req: Request, res: Response, next: NextFunction) {
  verifyAuthentication(req, res, () => {
    if (res.locals.user.isAdmin) {
      next();
    } else {
      res.status(403).json("⚠ You aren't an admin!");
    }
  });
}
