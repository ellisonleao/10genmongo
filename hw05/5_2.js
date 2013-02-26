use test
db.zips.aggregate([
    {$match:
      { 
        pop: {$gte: 25000 },
        state: {$in: ['NY', 'CA'] } 
      }
    },
    {$group:
      {
        _id: "$state",
        avg: {$avg: "$pop"}
      }
    },
    {$group:
      {
        _id:1,
        sum: {$sum: "$avg"}
      }
    }
])
