use test
db.zips.aggregate([
    {$match:
      { 
        pop: {$gt: 25000 },
        state: {$in: ['NJ', 'CT'] } 
      }
    },
    {$group:
      {
        _id: "$state",
        avg: {$avg: "$pop"}
      }
    }
])
