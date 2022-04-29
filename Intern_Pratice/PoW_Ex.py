import hashlib
import random
from re import sub
import time
import secrets
import math
# sentence = "12312"  
# sentence2 = "123"
# target = hashlib.sha256(sentence.encode())
# target = target.digest()
# nonce = hashlib.sha256(sentence2.encode())
#  = result2.digest()
# print(result2 < target)

# target = random.getrandbits(256)

# nonce = random. 
# count = 0

def generateTarget():
    # generate 32byte -> 256 bit hash using secret
    target = secrets.token_hex(32)
    target = (int(str(target).strip(),16)) - 10**(75)

    return target


def generateNonce(i):
    nonce = hashlib.sha256(str(random.randint(1,100)).encode()).hexdigest() 
    nonce = (int(str(nonce).strip(),16)) + 10**77

    subtract = int(i*10**(random.uniform(1, 74))) 
    if nonce > subtract:
        nonce -= subtract

    return nonce
    
count = 0
start = time.time()
target = generateTarget()
nonce = generateNonce(0)
isOutOfTime = False


while(nonce >= target):
    count += 1
    # print(f'{count}th times' + str(math.log10(nonce-target)))
    nonce = generateNonce(count)
    print(f'{count}th time')

    if time.time() - start >= 10:
        isOutOfTime = True
        print('Out of time')
        break
        
        
if(not isOutOfTime):
    print(f'{nonce} is valid')







