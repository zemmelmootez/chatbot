const express = require('express')
const app = express()
const port = 8000
const cors=require('cors')
const { Configuration, OpenAIApi } = require("openai");
app.use(express.json())
app.use(cors())
app.post('/', async(req, res) => 

{
    console.log(req.body)
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const completion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [{role: "user", content:req.body.message}],
});
res.send(completion.data.choices[0].message);}
)
app.get('/sana', (req, res) => res.send('Hello mootez!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))