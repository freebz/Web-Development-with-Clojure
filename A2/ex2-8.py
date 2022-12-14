# Structuring the Code

l = [1, 2, 3, 4, 5]
l = [ i*i for i in l]

l = [i for i in l
     if (i % 2 == 0)]

print l
