import rsa

(pubkey, privkey) = rsa.newkeys(512)
message = 'Go left at the blue tree'.encode()
signature = rsa.sign(message, privkey, 'SHA-1')

print(rsa.verify(message, signature, pubkey))