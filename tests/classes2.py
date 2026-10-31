class calculator:
    def __init__(self):
        self.first = int(input("Enter number "))
        self.second = int(input("Enter another number "))

    def sum(self):
        return self.first + self.second
    def sub(self):
        return self.first - self.second
    def mul(self):
        return self.first * self.second
    def div(self):
        return self.first / self.second
if __name__ == "__main__":
    obj = calculator()
    choice = input("choose one (sum, sub, mul, div)").strip().lower()
    if choice == "sum":
        print("The addition is", obj.sum())
    elif choice == "sub":
        print("The subtraction is", obj.sub())
    elif choice == "mul":
        print("The multiplication is", obj.mul())
    elif choice == "div":
        print("The division is", obj.div())
    else:
        print("You have entered an invalid option")