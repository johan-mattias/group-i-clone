import urllib.request
import json
from tkinter import *

 
req = urllib.request.urlopen('http://localhost:3001/api/reviews')
data = json.loads(req.read().decode())

'''
Settings for text window
'''
root = Tk()

S = Scrollbar()
T = Text(root, height =150, width =150)
S.pack(side=RIGHT, fill=Y)
T.pack(side=LEFT, fill=Y)
S.config(command=T.yview)
T.config(yscrollcommand=S.set)

review = ""

'''
Loop through every JSON object and populate the strings to the text window
'''
for i in range(len(data)):
    quality = str(data[i]['quality'])
    course_id = str(data[i]['course_id'])
    teacher_review = str(data[i]['teacher_review'])
    books_req = str(data[i]['books_req'])
    course_review = str(data[i]['course_review'])
    can_recommend = str(data[i]['can_recommend'])
    percentage_mand = str(data[i]['percentage_mand'])
    worth_credits = str(data[i]['worth_credits'])
    difficulty = str(data[i]['difficulty'])
    teacher_id = str(data[i]['teacher_id'])
    exam = str(data[i]['exam'])
    asdf_id = str(data[i]['id'])
    review += "Quality: " + quality + "\nCourse ID: " + course_id + "\nTeacher review: " + teacher_review + "\nBooks required: " + books_req + "\nCourse review: " + course_review + "\nRecommendation: " + can_recommend + "\nPercentage mandatory: " + percentage_mand + "\nworth_credits" + worth_credits + "\nDifficulty: " +difficulty + "\nExam: " +exam + "\n\n\n"

'''
Populate the text window
'''
T.insert(END, review)

root.mainloop()



