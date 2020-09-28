import {http} from './scripts/http';
import UI from './scripts/ui'
import Dropdown from './scripts/dropdown'
const ui = new UI();
let title = document.getElementById('title');
let message = document.getElementById('message');
document.addEventListener('DOMContentLoaded', fetchPosts);
document.querySelector('.btn').addEventListener('click', addPost);



// function removeDelete(e){
//     console.log(e);
//     if(e.target.nextElementSibling.classList.contains('active')){
//         console.log('test');
//     }
//     else{
//         const containers = document.querySelectorAll('.content');

//         containers.forEach(container => {
//             container.className = 'content';
//         });
//     }
// }

function addButton(){
    const containers = document.querySelectorAll('.dropdown');
    // console.log(containers);
    containers.forEach(container => {
        const instance = new Dropdown(container);
        instance.init();
        container.querySelector('.content').addEventListener('click', (e) => {
            let del = e.target.getAttribute('data-id');
            
            http.delete(`http://localhost:3000/posts/${del}`)
                .then(() => {
                    fetchPosts();
                })
                .catch(err => console.log(err.message));
            
            container.querySelector('.content').className = 'content';
        });
    });
}


function addPost(){
    if(title.value !== '' && message.innerText !== ''){
        if(title.value.length < 25 && message.innerText.length < 280){
            let messageData = {
                'title': title.value,
                'body': message.innerText
            }
            http.post('http://localhost:3000/posts', messageData)
                .then(() => {
                   ui.clearInputs();
                   fetchPosts();
                   addButton();
                   
                })
                .catch(err => console.log(err));
        }
    }
}

function fetchPosts(){
    ui.clearPosts();
    http.get('http://localhost:3000/posts')
        .then(data => {
           ui.renderPosts(data);
        })
        .then(() => {
            addButton();
        })
        .catch(err => console.log(err));
        

}