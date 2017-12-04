app.get('/getNews', function (req, res) {
    var news = [];
    var index = req.query.pageIndex;
    var length =3;
    var start = index*length;
    var final = start + length;
    for(i= start+1; i<= final; i++ ){
        news.push("ÄÚÈÝ"+ i);
    }
    res.send(news);
})
