import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App (){
    const [count, setCount] = React.useState(1)
    const [data, setData] = React.useState({});

    React.useEffect(()=>{
        fetch(`https://swapi.dev/api/people/${count}`)
        .then(res => res.json())
        .then(data => setData(data))

        console.log('use effect was rendered');
    }, [count])

   

    function handleClick(){
        setCount(prevCount => {
            return prevCount + 1;
        })
    }

    console.log('component was rendered');

    return ( 
        <div>
            <h1>Count:  {count}</h1>
            <button
                onClick={handleClick}
            >Get next character</button>
            <p>{JSON.stringify(data)}</p>
        </div>
      )
}

root.render(<App/>);