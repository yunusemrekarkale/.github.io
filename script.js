document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Kullanıcı doğrulama işlemi (örneğin, sunucuya istek gönderme)
    if (username === 'test' && password === '1234') { // Bu kısmı sunucu doğrulaması ile değiştirin
        document.querySelector('.login-container').style.display = 'none';
        document.querySelector('.content-container').style.display = 'block';
        loadUserContents(username);
    } else {
        alert('Geçersiz kullanıcı adı veya parola!');
    }
});

document.getElementById('annualTextButton').addEventListener('click', function() {
    toggleContent('annualTextContent');
});

document.getElementById('photosButton').addEventListener('click', function() {
    toggleContent('photosContent');
});

document.getElementById('videosButton').addEventListener('click', function() {
    toggleContent('videosContent');
});

document.getElementById('soundsButton').addEventListener('click', function() {
    toggleContent('soundsContent');
});

function toggleContent(contentId) {
    var contents = document.querySelectorAll('.content-container > div');
    contents.forEach(function(content) {
        if (content.id === contentId) {
            content.classList.toggle('hidden');
        } else {
            content.classList.add('hidden');
        }
    });
}

function loadUserContents(username) {
    // Kullanıcıya ait içerikleri yükleme işlemi (örneğin, sunucudan veri çekme)
    // Örnek içerikler:
    var contents = {
        annualTexts: ['Yıllık Yazı 1', 'Yıllık Yazı 2'],
        photos: ['Fotoğraf 1', 'Fotoğraf 2'],
        videos: ['Video 1', 'Video 2'],
        sounds: ['Ses 1', 'Ses 2']
    };
    
    document.getElementById('annualTextContent').innerText = contents.annualTexts.join('\n');
    document.getElementById('photosContent').innerText = contents.photos.join('\n');
    document.getElementById('videosContent').innerText = contents.videos.join('\n');
    document.getElementById('soundsContent').innerText = contents.sounds.join('\n');
}
