use blog
//authors
//Milan Mcgavock - 472
//Gwyneth Garling - 477
//Elizabet Kleine - 503
//Dusti Lemmond 
//Leonida Lafond
//Corliss Zuk
db.posts.aggregate([
    {$unwind:'$comments'},
    {$group:
      {
        _id: "$comments.author",
        sum: {$sum: 1}
      }
    },
    {$group:
      {
        _id: 1,
        max: {$max: "$sum"}
      }
    },
])
