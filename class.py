class Elf :
    def __init__ (self,name,weapon):
        self.name = name
        self.weapon = weapon
    
    def attack(self):
        print('attack using ' + str(self.weapon))


elf1 = Elf('name ', 'fire')

(elf1.attack())