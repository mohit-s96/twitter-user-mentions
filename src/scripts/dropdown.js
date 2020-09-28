// import './styles/dropdown.css'
import {http} from './http';
// import UI from './ui';

class Dropdown{
    constructor(element){
        this.element = element;
        this.trigger = element.querySelector('.trigger');
        this.content = element.querySelector('.content');
    }
    init(){
        this.trigger.addEventListener('click', () => {
            this.trigger.classList.toggle('active');
            this.content.classList.toggle('active');
        });
        // this.content.addEventListener('click', (e) => {
        //     let del = e.target.getAttribute('data-id');
        //     // console.log(del);
            
        //     http.delete(`http://localhost:3000/posts/${del}`);
            
        //     this.content.className = 'content';
        // });
        this.trigger.addEventListener('blur', (e) => {
            if(e.relatedTarget){
                if(e.relatedTarget.classList.contains('active')){
                    // console.log('active class');
                }
                else{
                    this.content.className = 'content';
                    // console.log(e);
                }
            }
            else{
                this.content.className = 'content';
            }
        });
    }
}
export {Dropdown as default};