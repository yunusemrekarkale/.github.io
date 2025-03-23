// app.js
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const port = 3000;

// Kullanıcı veritabanı (örnek)
const users = [
    { username: 'user1', password: 'password1', content: { photos: ['photo1.jpg'], videos: ['video1.mp4'], writings: ['Yazı 1'], audios: ['audio1.mp3'] }},
    { username: 'user2', password: 'password2', content: { photos: ['photo2.jpg'], videos: ['video2.mp4'], writings: ['Yazı 2'], audios: ['audio2.mp3'] }}
];

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));

// Giriş sayfası
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Giriş işlemi
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        req.session.user = user;
        res.redirect('/dashboard');
    } else {
        res.send('Geçersiz kullanıcı adı veya parola');
    }
});

// Kontrol paneli
app.get('/dashboard', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/');
    }
    res.send(`
        <h1>Merhaba, ${req.session.user.username}</h1>
        <button onclick="showContent('photos')">Fotoğraflar</button>
        <button onclick="showContent('videos')">Videolar</button>
        <button onclick="showContent('writings')">Yazılar</button>
        <button onclick="showContent('audios')">Sesler</button>

        <div id="content"></div>

        <script>
            function showContent(type) {
                const content = ${JSON.stringify(req.session.user.content)};
                let contentHtml = '';
                if (type === 'photos') {
                    contentHtml = content.photos.map(photo => `<img src="${photo}" alt="Fotoğraf">`).join('');
                } else if (type === 'videos') {
                    contentHtml = content.videos.map(video => `<video src="${video}" controls></video>`).join('');
                } else if (type === 'writings') {
                    contentHtml = content.writings.map(writing => `<p>${writing}</p>`).join('');
                } else if (type === 'audios') {
                    contentHtml = content.audios.map(audio => `<audio src="${audio}" controls></audio>`).join('');
                }
                document.getElementById('content').innerHTML = contentHtml;
            }
        </script>
    `);
});

app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});
