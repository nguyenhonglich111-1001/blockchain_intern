import math
import secrets

def generateTarget():
    # generate 32byte -> 256 bit hash using secret
    target = secrets.token_hex(32)
    target = (int(str(target).strip(),16))

    return target

target = generateTarget()

print(math.log10(target))