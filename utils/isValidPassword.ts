import hashPassword from './hashPassword'

export default async function isValidPassword(password: string, hashedPassword: string) {
    console.log("Hash: ", await hashPassword(password))
    return await hashPassword(password) === hashedPassword 
}