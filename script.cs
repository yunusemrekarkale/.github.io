function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === 'h126725' && password === 'YunusEmreKARKALE') {
        document.getElementById('login').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
}

function showContent(id) {
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.style.display = 'none';
    });

    var selectedContent = document.getElementById(id);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
}
