file = open('D:\\Shishir\\playwright with python\\tests\\file.txt')
#print(file.read())
#print(file.read(1))
#print(file.readline())
#print(file.readline())
# word = file.readline()
# while word != "" and word.strip() != "horse":
#     print(word)
#     word = file.readline()
word = file.readlines()
for line in word:
    if line.strip() == "horse":
        break
    print(line)
file.close()