import rsa
(pubkey, privkey) = rsa.newkeys(256)

for i in pubkey:
    print(i)
message = 'hello Bob!'.encode('utf8')
crypto = rsa.encrypt(message, pubkey)
message = rsa.decrypt(crypto, privkey)
print(message.decode('utf8'))

# try:
#     message = 'hello Bob!'.encode('utf8')
#     crypto = rsa.encrypt(message, privkey)
#     message = rsa.decrypt(crypto, pubkey)
#     print(message.decode('utf8'))
# except:
#     print('Error')