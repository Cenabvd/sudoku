let app = document.getElementById('app');
const N = 81;

for(let i = 0; i < N ; i++){
    let input = document.createElement('input');
    input.type = 'text';
    input.id = i;
    app.appendChild(input)
}