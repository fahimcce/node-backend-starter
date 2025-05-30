import jwt, { JwtPayload, Secret } from "jsonwebtoken";

const tokenGenerator = (payload: any, secret: Secret, expiresIn: string) => {
  const token = jwt.sign(payload, secret, {
    algorithm: "HS256",
  });

  return token;
};

const verifyToken = (token: string, secret: Secret) => {
  return jwt.verify(token, secret) as JwtPayload;
};

export const jwtHelpers = {
  tokenGenerator,
  verifyToken,
};
