use test
db.zips.aggregate([
    {$project:
      {
        first_char:{$substr: ["$city",0,1]}, 
        pop: "$pop"
      }
    },
    {$match:
      {
        first_char: {$regex: '^[0-9]' }
      }
    },
    {$group:
      {
        _id: "$first_char",
        sum: {$sum: "$pop"},
      } 
    },
    {$group:
      {
      _id:1,
      total: {$sum: "$sum"}
      }
    }
])
