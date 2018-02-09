import tkinter as tk
import urllib.request
import json
from tkinter import *



class Window(Frame):


    def __init__(self, master=None):
        Frame.__init__(self, master)                 
        self.master = master
        self.init_window()


    def review_popup(self, review):
        #window = tk.Toplevel()
        #window.rev_title("Title")
        print("WHATS AAAAAPPPPP")


    #Creation of init_window
    def init_window(self):

        # changing the title of our master widget      
        self.master.title("ReviUUer")

        # allowing the widget to take the full space of the root window
        self.pack(side=LEFT,    fill=BOTH, expand=1)

       
       #Get Mock data
        get_data = open('./database/mock_reviews.json')
        mock_data = json.load(get_data)

        #Initiate variables
        review = ""
        column_num = 0
        row_num = 0
        index = 0
        forloop = 1




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
            
            if((forloop%9) == 0 ):
                column_num = 0
                row_num = row_num + 1
                print("horkuk")
                

            
            


            Buttonz = Button(self, text="Review:" + str(index), command=lambda: self.review_popup("asdf"))
            Buttonz.grid(column = column_num, row = row_num)
            column_num = column_num + 1
            forloop = forloop + 1
            index = index + 1


        # creating a button instance
        # placing the button on my window
        #revButton.place(x=0, y=0)
        #revButton2.place(x=1, y=1)
        #revButton.grid(column=0, row=0)
        #revButton2.grid(column=1, row=0)

    
   


root = Tk()

#size of the window
root.geometry("800x400")

app = Window(root)
root.mainloop() 