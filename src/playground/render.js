const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const onFormReset = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');
const render = () => {
    const template = (
        <div>
            <p>{app.options.length}</p>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
            <ol>
                {
                    app.options.map((option) =>{
                    return <li key={option}>{option}</li>;    
                    })
                }
            </ol>
            <button onClick={onFormReset}>Reset Options</button>
            <button onClick={onMakeDecision} disabled={app.options.length === 0}>What Should I do?</button>
        </div>
    );
    ReactDOM.render(template, appRoot);
};
render();