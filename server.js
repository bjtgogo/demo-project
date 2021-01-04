var webpack = require( 'webpack');
var app = new (require('express'))();
var port = 3000;
var host = '0.0.0.0';
app.get("/", function(req, res) {
res.sendFile(_dirname + '/index.html')
})
app.listen(port, host, function(error) {
    if (error) {
    console.error(error)
    } else {
    console.info("==> react伺服器已啟動在ports %s 。請打開http://%s:%s/ 觀看。",port, host,port)
    }
})