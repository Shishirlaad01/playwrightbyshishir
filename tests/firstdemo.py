# self declared datatypes
import numbers

a = 5
b = 'test'
print("The value is", f"{a} {b}")
print(type(a))
print(type(b))

#Lists
values = [1, 2, 1.2, 1.5, "shishir"]
print (values)
print (values[0])
print (values[-1])
print (values[1:3])
print (values[:2])
print (values[2:])
values.insert (4, "Last")
print (values)
values.append("most last")
print (values)
values.sort(key=str)
print(values)    # [1, 1.2, 1.5, 2, 'Last', 'most last', 'shishir']
values[0] = 1.1
print(values)
del values[0]
print(values)
values.remove('most last')
print(values)

#Tuple
value=(1, 2, "shishir", 4.5)
print("the tuple list is ", value)
print(value[1])
#value[1] = "rahul" ==> Not possible
#print(value)

#Dictionary
dic = {"Name": "Shishir", "Age": 5, 9827383838: "Phone"}
print(dic)
print(dic["Name"])
dic["Age"] = 14
print(dic)

#If/Else
x = int (input("Insert the number "))
y = int(input("Insert the number "))
z = x - y
if z == 0:
    print(z, "The number is 0")
elif z % 2 == 0:
    print(z, "The number is even")
else:
    print(z, "The number is odd")


print("**** for loop example *****")

a = 10
for i in range(0, a):
    if i == 0:
        print(z, "The number is 0")
    elif i % 2 == 0:
        print(i, "The number is even")
    else:
        print(i, "The number is odd")

print("**** While loop example *****")

obj = [1, 2, 3, 4, 5]
i = 0
while i < len(obj):
    print("The number is ", obj[i])
    i += 1



