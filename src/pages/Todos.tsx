import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { TodoContext } from '../context/TodoCotext';
import { actions } from '../reducer/TodoReducer';
import { genRandomId } from '../helper';

export const Todos = () => {
    const context = useContext(TodoContext)
    const { state, dispatch } = context
    return <div>{state.todos.map(todo => <div>{todo.id}{todo.todo}</div>)}
        <form onSubmit={e => {
            e.preventDefault()
            try {
                // @ts-ignore
                const todo = e.target.todo.value as string
                const id = genRandomId()
                dispatch(actions.saveTodo({ id, todo }))
            } catch (e) {
                console.error(e)
                alert('入力の保存に失敗しました。')
            }
        }}>
            <input name='todo'></input>
            <button>submit</button>
        </form></div>
}