def normalizeString(string):
    marks = '''!()-[]{};?@#$%:'"\,./^«»&amp;—*_'''
    noPunct = ''
    for char in string:
        if char not in marks:
            noPunct += char
    str = noPunct.replace(' ','').replace('\n', '')
    return str.upper()


alphabet = ['А','Б','В','Г','Д','Е', 'Ё', 'Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я']
alphabetWeight = [0] * len(alphabet)
changeStringStat = dict(zip(alphabet,alphabetWeight))
keyWord = ['Д','О','Б','Р','О']
keyWordWeight = [0] * len(keyWord)

for i in range(len(alphabet)):
    alphabetWeight[i] = i

for i in range(len(keyWordWeight)):
    for j in range(len(alphabet)):
        if keyWord[i] == alphabet[j]:
            keyWordWeight[i] = j


A = dict(zip(alphabet,alphabetWeight))
B = dict(zip(alphabetWeight,alphabet))


f = open('D:\lab\example.txt', 'r', encoding="utf-8")
str = f.read()
print(str)
string = normalizeString(str)
newString = list(string)
changeString = []
j = 0
print(string)
for i in newString:
        changeString.append(B[(A[i] + keyWordWeight[j]) % len(alphabet)])

print(changeString)


count = 0

for i in changeStringStat:
    for j in changeString:
        if i == j:
            count += 1
    changeStringStat[i] = count
    count = 0
print(changeStringStat)
IC = 0
for i in changeStringStat:
    IC += changeStringStat[i]*(changeStringStat[i]-1)/(len(changeString)*(len(changeString)-1))
    print(i, ' - ', IC)

print(IC)
print(len(changeString))

print(''.join(changeString))

