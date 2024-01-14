import { SignJWT, jwtVerify } from "jose";

//Create Token
export async function CreateToken(id, firstName, email, type) {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    let token = await new SignJWT({
        id: id,
        firstName: firstName,
        email: email,
        type: type,
    })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setIssuer(process.env.JWT_ISSUER)
        .setExpirationTime(process.env.JWT_EXPIRATION)
        .sign(secret);
    return token;
}

// Verify JWT Token

export async function VerifyToken(token) {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const decode = await jwtVerify(token, secret);
    return decode["payload"];
}
