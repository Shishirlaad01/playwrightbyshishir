class calculator:
    def __init__(self, a, b):
        self.first = a
        self.second = b

    def sum(self):
        return self.first + self.second
    def sub(self):
        return self.first - self.second
    def mul(self):
        return self.first * self.second
    def div(self):
        return self.first / self.second

obj = calculator(10, 10)
print("The addition is", obj.sum())