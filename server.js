var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();

var articleTwo ={
    title: 'article-two',
    heading: 'Article-two',
    date: '27 Aug 2017',
    content: ` <p>
                Welcome to next tutorial of version control. Today we Will have a look at how to commit code.
                We have Different versioning tool availble in Market.The most used tool is GIT.
            </p>
            <p>
                <b>GIT</b><br>
                Let's have a look at GIT version contrl tool.This tool helps develpers to maintain code repository when large number of perople are
                working on developing the application.
            </p>
            <p>
                Welcome to next tutorial of version control. TOday we Will have a look at how to commit code.
            </p> `
};

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date= data.date;
    var content = data.content;
    var htmlTemplate= `
                    <html>
            <head>
                <title>
                    ${title}
                </title>
                 
                  <link href="/ui/one-html.css" rel="stylesheet" />
                  <meta name="viewport" content="width-device-width, initial-scale=1">
            </head>
            
            <body>
                <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr>
                <div>
                    <h3>
                    ${heading}
                    </h3>
                </div>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
                </div>
            </body>
            
        </html> `;
        return htmlTemplate;
}
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/article-one.html', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/ui/article-two.html', function (req, res) {
   res.send(createTemplate(articleTwo));
});

app.get('/ui/article-three.html', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/one-html.css', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'one-html.css'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
