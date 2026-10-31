from tests.classes2 import calculator

class childcalculator(calculator):
    def __init__(self):
        super().__init__()
        self.var2 = int(input("Enter the value of var2: "))
    def getdata(self):
        print("The sum of all three is ", self.var2 + self.sum())
obj = childcalculator()
obj.getdata()

