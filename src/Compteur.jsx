import { useState, useEffect } from 'react';

function useIncrement (initial, step){
    const [count, setCount] = useState(initial)
    const increment = () => {
        setCount(c => c + step)
    }
    return [count, increment]
}

function useToggle(initialValue = true) {
    const [value, setValue] = useState(initialValue)
    const toggle = function(e){
        e.preventDefault()
        setValue(v => !v)
    }
    return [value, toggle]
}


function Compteur (){
    const [count, increment] = useIncrement(0, 2)

    useEffect(()=>{
        document.title = 'Compteur ' + count
    }, [count])
    // const handleClick = function(e){
    //     e.preventDefault()
    //     setCount(count + 10)
    // }
    return <button className='btn btn-success' onClick={increment}>Nombre: {count} </button>
}

function useAutoIncrement (initialValue=0, step=1){
    const [count, setCount] = useState(initialValue)
    useEffect(function(){
        const timer = window.setInterval(function () {
            setCount(c => c + step)
        }, 1000)
        return function(){
            clearInterval(timer)
        }
    }, [])
    return count
}

function Compteur2(){
    const count = useAutoIncrement(0,10)
    return <div>
        <button>{count}</button>
    </div>
}

function useFetch (url) {
    const [state, setState] = useState({
        items: [],
        loading: true
    })
    useEffect(function () {
        (async function () {
            const response = await fetch(url)
            const responseData = await response.json()
            if (response.ok) {
                setState({
                    items: responseData,
                    loading: false
                })
            }else{
                alert(JSON.stringify(responseData))
                setState(s => ({...s, loading:false}))
            }
        })()
    }, [])

    return [
        state.loading,
        state.items
    ]
}

function TodoList () {
    const [loading, items] = useFetch('https://jsonplaceholder.typicode.com/todos?_limit=10')

    if (loading) {
        return 'Chargement......'
        
    }
    return <ul>
        {items.map(t=><li key={t.id}>{t.title}</li>)}
      </ul>
}

function Comments () {
    const [loading, items] = useFetch('https://jsonplaceholder.typicode.com/comments?_limit=10')

    if (loading) {
        return 'Chargement......'
        
    }
    return <table>
        <thead>
            <tr>
                <th>Nom</th>
                <th>Email</th>
                <th>Contenu</th>
            </tr>
        </thead>
        <tbody>
            {items.map(item => <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.body}</td>
            </tr>)}
        </tbody>
    </table>
}


  export function Apps(){
    const [compteurVisible, toggleCompteur] = useToggle(true)
    return <div>
        afficher compteur
        <input type="checkbox" onChange={toggleCompteur} checked={compteurVisible} />
            <br />
        {compteurVisible && <Compteur />}
        <Compteur2 />

        <TodoList />

        <Comments />
    </div>
  }