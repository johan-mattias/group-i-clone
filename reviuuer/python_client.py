import urllib.request
import json
from tkinter import *


req = urllib.request.urlopen('https://jsonplaceholder.typicode.com/users')
data = json.loads(req.read().decode())
''' 
print(data[0]['address']['city'])
to_print = str(data[0]['address'])
print("\n")
print("\n")
for i in range(len(data)):
    print(data[i])
 '''


get_data = open('./database/mock_reviews.json')
mock_data = json.load(get_data)
print(mock_data[0])

root = Tk()


S = Scrollbar()
T = Text(root, height =150, width =150)
S.pack(side=RIGHT, fill=Y)
T.pack(side=LEFT, fill=Y)
S.config(command=T.yview)
T.config(yscrollcommand=S.set)


review = ""


for i in range(len(mock_data)):
    quality = str(mock_data[i]['quality'])
    course_id = str(mock_data[i]['course_id'])
    teacher_review = str(mock_data[i]['teacher_review'])
    books_req = str(mock_data[i]['books_req'])
    course_review = str(mock_data[i]['course_review'])
    can_recommend = str(mock_data[i]['can_recommend'])
    percentage_mand = str(mock_data[i]['percentage_mand'])
    worth_credits = str(mock_data[i]['worth_credits'])
    difficulty = str(mock_data[i]['difficulty'])
    teacher_id = str(mock_data[i]['teacher_id'])
    exam = str(mock_data[i]['exam'])
    asdf_id = str(mock_data[i]['id'])
    review += "Quality: " + quality + "\nCourse ID: " + course_id + "\nTeacher review: " + teacher_review + "\nBooks required: " + books_req + "\nCourse review: " + course_review + "\nRecommendation: " + can_recommend + "\nPercentage mandatory: " + percentage_mand + "\nworth_credits" + worth_credits + "\nDifficulty: " +difficulty + "\nExam: " +exam + "\n\n\n"
T.insert(END, review)



    
''' 
    theLabel = Label(root, text= "Quality: "+ quality + "\n")
    theLabel.pack() '''


''' 
for i in range(len(data)):
    to_print = str(data[i])
    theLabel = Label(root, text="" + to_print)
    theLabel.pack()
 '''

root.mainloop()



