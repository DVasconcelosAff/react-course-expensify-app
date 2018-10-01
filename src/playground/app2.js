
console.log('App.js working');

const template =( 
    <div>
        <h1>Indecision App</h1> 
        <p>The p</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);
const user={
    name: 'Diogo',
    age: 24,
    location: 'Amadora'
}
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hand of a computer',
    options:['One','Two']
};
const template3 = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
)
const template2 =( 
    <div>
        <h1>{user.name}</h1> 
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template3, appRoot);
