import './styles/styles.css'

class UI{
    renderPosts(x){
        // console.log(data);
        x.forEach(data => {
            let postHook = document.querySelector('.posts'); 
            let parsedMessage = this.parseBody(data.body);
            let container = document.createElement('div');
            container.className = 'post-container'
            container.innerHTML = `
            <div class="post">
                <a class = "options">
                    <div class="dropdown">
                        <div class="trigger" tabindex="0"><i class="fas fa-chevron-down"></i></div>
                        <div class="content" data-id="${data.id}" tabindex="0">
                            <p data-id="${data.id}">Delete</p>
                            <span class="del-icon"><i class="fas fa-trash-alt" data-id="${data.id}"></i></span>
                        </div>
                    </div>
                </a>
                <div class="post-title">${data.title}</div>
                <div class="post-body">${parsedMessage}</div>
            </div>
           
            `;
            let refNode = document.querySelector('.invisible');
            postHook.insertBefore(container, refNode.nextSibling);
        });
    }
    clearPosts(){
        document.querySelector('.posts').innerHTML = '<div class="invisible"></div>';
    }
    clearInputs(){
        document.querySelector('#title').value = '';
        document.querySelector('#message').innerText = '';
    }
    parseBody(data){
        let match = /^@[a-zA-Z0-9_]{3,20}$/;
        data = data.split(' ');
        let secCheck = data.map(x => {
            x = x.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            return x;
        });
        let newData = secCheck.map(x => {
            if(match.test(x)){
                // console.log(x);
                x = `<span class="match">${x}</span>`
                return x;
                // console.log(x);
            }
            else{
                return x;
            }
        });
        data = newData.join(' ');
        // console.log(data);
        return data;
    }
}
export {UI as default};