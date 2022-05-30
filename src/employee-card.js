const template = document.createElement('template');
template.innerHTML = `
<style>
    .employee-card {
        font-family: sans-serif;
        background: #f4f6f7;
        width: 250px;
        display: grid;
        grid-template-columns: 1fr;
        margin-botton: 10px;
    }
</style>

<div class='emplyee-card'>
    <img/>
    <div>
        <h3></h3>
        <div class='details'>
            <p><slot name='id'/></p>
            <p><slot name='job title'/></p>
            <p><slot name='email' /></p>
            <p><slot name='phone'/></p>
        </div>
    </div>
</div>
`
class EmployeeCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        this.querySelector('img').src = this.getAttribute('avatar');
    }
}