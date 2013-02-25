import pymongo
# establish a connection to the database
connection = pymongo.Connection("mongodb://localhost", safe=True)

# get a handle to the reddit database
db=connection.students
grades = db.grades


def find():

    print "find, reporting for duty"

    iter = grades.find({'type': 'homework'}).sort([
                       ('student_id', pymongo.DESCENDING),
                       ('score' , pymongo.ASCENDING)
                       ])
    id = -1
    for grade in iter:
        if grade['student_id'] != id:
            id = grade['student_id']
            grades.remove(grade)
find()
