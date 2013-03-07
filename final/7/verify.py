import pymongo

conn = pymongo.MongoClient()
db = conn.test

albums = db.albums
images = db.images

albums.ensure_index([("images", pymongo.ASCENDING)])

print "Before: {}".format(images.find().count())
for image in images.find():
    query = albums.find({'images': image["_id"]})
    if not query.count():
        #delete image
        images.remove({'_id': image["_id"]})

print "After: {}".format(images.find().count())

#find and print all images with tag 'kittens'
images.ensure_index([('tag', pymongo.ASCENDING)])
print images.find({'tags': 'kittens'}).count()

