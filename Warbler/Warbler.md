# One Way Hashing

Converting data into a fixed length hash string. You can only recreate the hash if you know the original data. Applicable for saving passwords on yoru server.

"password" -> bcrypt -> generated hash "$234lkdf;2l3k9023;" -> saved in DB. 

## Signing In

User enters "password" -> bcrypt. Hash from DB is compared with hash out of bcrypt

## JWT (JSON Web Token)

A web standard for storing signed data. Use as proof that you've logged in before

JWT Format (Header, Payload Signature)

https://jwt.io/

## Send JWT

Use in `Authorization: Bearer JWT` in a HTTP Header