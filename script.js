const users = [
    { username: 'YunusEmreKARKALE', password: 'YunusEmre42.' },
    { username: 'KadirDİNÇ', password: 'Kadir42.' },
    { username: 'TarıkSARICI', password: 'Tarık42.'},
    { username: 'NurullahÇELİK', password: 'Nurullah42.'},
    // Diğer kullanıcılar...
];

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
}
