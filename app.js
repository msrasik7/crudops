function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '123')
        window.location.href = 'crud.html';
      else
        document.getElementById('error-message').innerText = 'Invalid username or password.';
}

