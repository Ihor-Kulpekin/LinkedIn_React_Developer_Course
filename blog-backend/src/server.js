import express from 'express'
import bodyParser from 'body-parser';
import {MongoClient} from 'mongodb'
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '/build')))
app.use(bodyParser.json())

const withDB = async (operations, res) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true})
        const db = client.db('my-blog');

        await operations(db)

        await client.close();
    } catch (e) {
        await res.status(500).json({message: 'Error', e})
    }
}

app.get('/api/articles/:name', async (request, res) => {
    await withDB(async (db) => {
        const articleName = request.params.name;

        const articleInfo = await db.collection('articles').findOne({name: articleName})

        await res.status(200).json(articleInfo);
    }, res)
})

app.post('/api/articles/:name/upvote', async (req, res) => {
    await withDB(async (db) => {
        const articleName = req.params.name;
        const articlesInfo = await db.collection('articles').findOne({name: articleName});
        await db.collection('articles').updateOne({name: articleName}, {
            '$set': {
                upvotes: articlesInfo.upvotes + 1
            }
        }, res);

        const updatedArticleInfo = await db.collection('articles').findOne({name: articleName});

        await res.status(200).json(updatedArticleInfo);
    }, res)
})

app.post('/api/articles/:name/add-comment', async (req, res) => {
    const {username, text} = req.body;
    const articleName = req.params.name;
    await withDB(async (db) => {

        const articleInfo = await db.collection('articles').findOne({name: articleName})

        await db.collection('articles').updateOne({name: articleName}, {
            '$set': {
                comments: articleInfo.comments.concat({username, text})
            }
        })

        const updatedArticleInfo = await db.collection('articles').findOne({name: articleName});

        await res.status(200).json(updatedArticleInfo)
    }, res)
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'))
})

app.listen(8000, () => {
    console.log('Listening on port 8000')
})
