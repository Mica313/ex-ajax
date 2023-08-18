document.addEventListener('DOMContentLoaded', function(){
    const nameEl = document.querySelector('#name');
    const usernameEl = document.querySelector('#username');
    const avatarEl = document.querySelector('#avatar');
    const repEl = document.querySelector('#reps');
    const followersEl = document.querySelector('#followers');
    const followingEl = document.querySelector('#following');
    const link = document.querySelector('#link');

    fetch('https://api.github.com/users/Mica313')
        .then(function(res){
            return res.json();
        })
        .then(function(json){
            nameEl.innerText = json.name;
            usernameEl.innerText = json.login;
            avatarEl.src = json.avatar_url;
            repEl.innerText = json.public_repos;
            followersEl.innerHTML = json.followers;
            followingEl.innerHTML = json.following;
            link.href = json.html_url;
        })
})