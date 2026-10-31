file = open('D:\\Shishir\\playwright with python\\tests\\file.txt', 'r')
word = file.readlines()
file.close()
file = open('D:\\Shishir\\playwright with python\\tests\\file.txt', 'w')
for line in reversed(word):
    file.write(line.strip() + "\n")
file.close()