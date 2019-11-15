'use strict';

let index = new XMLHttpRequest();

index.open('GET', 'http://localhost:3000/posts', true);

let main = document.querySelector('article');

index.onload = function() {
    let response = JSON.parse(index.responseText);
    for (let i = 0; i < response.posts.length; i++) {
        let posts = document.createElement('div');

        let votes = document.createElement('div');
        let upvote = document.createElement('button');
        let score = document.createElement('p');
        let downvote = document.createElement('button');

        let content = document.createElement('div');
        let title = document.createElement('h1');
        let link = document.createElement('a');
        let options = document.createElement('div');
        let modify = document.createElement('a');
        let remove = document.createElement('a');

        posts.classList.add('posts');

        votes.classList.add('votes');
        votes.setAttribute('id', response.posts[i].id);
        upvote.classList.add('upvote');
        upvote.setAttribute('action', 'up');
        score.innerText = response.posts[i].score;
        downvote.classList.add('downvote');
        downvote.setAttribute('action', 'down');

        content.classList.add('content');
        title.innerText = response.posts[i].title;
        link.innerText = response.posts[i].url;
        link.setAttribute('href', response.posts[i].url);
        options.classList.add('options');
        modify.innerText = 'Modify';
        remove.innerText = 'Remove';

        main.appendChild(posts);
        posts.appendChild(votes);
        posts.appendChild(content);
        votes.appendChild(upvote);
        votes.appendChild(score);
        votes.appendChild(downvote);
        content.appendChild(title);
        content.appendChild(link);
        content.appendChild(options);
        options.appendChild(modify);
        options.appendChild(remove);
    };
}

index.send();

let aside = document.querySelector('aside');
let span = document.querySelector('span');
let descList = document.querySelector('ul');
let link = aside.querySelector('button');
let desc = ['Astrophysics', 'Cosmology', 'Space Exploration', 'Planetary Science', 'Astrobiology'];

link.setAttribute('onclick', 'window.location.href = "http://localhost:3000/add"');
span.innerText = 'r/space';

for (let i = 0; i < desc.length; i++) {
    let li = document.createElement('li');
    li.innerText = desc[i];
    descList.appendChild(li);
}