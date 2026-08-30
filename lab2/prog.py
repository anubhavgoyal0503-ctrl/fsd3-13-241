low,high=1,100
count=0
while(low<high):
    guess=(low+high)//2
    count+=1
    answer=input("Is your number {guess} ? (h/1/c)")
    if answer=="c":
        print(f"Yay! I guessed your number in {count} attemps.")
        break
        .