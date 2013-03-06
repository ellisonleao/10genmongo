use test
db.enron.aggregate([
  {$unwind: "$headers.To"},
  {$match: 
    {
      "headers.From": "andrew.fastow@enron.com", 
      "headers.To": "jeff.skilling@enron.com", 
    }
  },
  {$group: 
    {
      _id: "$headers.From",
      sum: {$sum: 1}
    }
  }
])
