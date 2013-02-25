use test
db.grades.aggregate([
  {$unwind: "$scores"},
  {$match:
    {
      "scores.type": {$in: ['homework', 'exam']}
    }
  },
  {$group:
    {
      _id: {"class": "$class_id"},
      type_avg: {$avg: "$scores.score"}
    }
  },
  {$group:
    {
      _id: "$_id.class",
      class_avg: {$avg: "$type_avg"}
    }
  },
  {$sort: {"class_avg": -1}},
  {$limit: 1}
])
