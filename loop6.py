even number 1to n
n=int(input("Enter even number"))
sum=0
for i in range(1,n):
  if(i%2==0):
    sum=sum+i
print(sum)
