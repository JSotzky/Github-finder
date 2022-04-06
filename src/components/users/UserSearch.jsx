import {useState, useContext} from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'

function UserSearch(){

const [text, setText] = useState('')

const {users, searchUsers, clearUsers} = useContext(GithubContext)
const {setAlert} = useContext(AlertContext)

function handleChange(event){
    setText(event.target.value)
}

function handleSubmit(event){
    event.preventDefault()
    if(text === ''){
        setAlert('Please enter something', 'error')
    }else{
        //Todo search users
        searchUsers(text)
        setText('')
    }
}

    return <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="relative">
                        <input type="text" className="w-full pr-40 bg-grey-200 input input-lg text" 
                                placeholder="Search"
                                value={text}
                                onChange={handleChange}
                        />
                        <button type="Submit" className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">Search</button>
                    </div>
                </div>
            </form>
        </div>
        {users.length > 0 && (<div>
            <button className="btn btn-lg" onClick={clearUsers}>Clear</button>
        </div>)}
        
    </div>
}

export default UserSearch