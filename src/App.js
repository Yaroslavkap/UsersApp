import React from 'react';
//import * as ReactDOMClient from 'react-dom/client';

import Header from './Components/Header'
import Users from './Components/Users';
import AddUser from './Components/AddUser';
import axios from 'axios';

const baseUrl = "https://reqres.in/api/users?page=1"

class App extends React.Component {

  constructor(props) {
    super(props)

    axios.get(baseUrl).then((res) =>{
      this.setState({users: res.data.data})
    })

    this.state = {
      users: []
        // users: [
        //     {
        //         id: 1,
        //         firstname: "Bob",
        //         lastname: "Marley",
        //         bio: "bio",
        //         age: 40,
        //         isHappy: true
        //     },
        //     {
        //         id: 2,
        //         firstname: "John",
        //         lastname: "Doe",
        //         bio: "bio",
        //         age: 20,
        //         isHappy: false
        //     }
        // ]
    }
    this.addUser = this.addUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.editUser = this.editUser.bind(this)
}

  render(){
    return(<div>
      < Header title = "Список пользователей" />
      <main>
        <Users users ={this.state.users} onEdit = {this.editUser} onDelete ={this.deleteUser} />
      </main>

      {/* <aside>
        <AddUser onAdd={this.addUser}/>
      </aside> */}
      <div className='panel'>
        <AddUser onAdd={this.addUser}/>
      </div>
      
    </div>)
  }

  deleteUser(id) {
    this.setState({
      users: this.state.users.filter((el) => el.id !== id)
    })
  }

  editUser(user) {
    let allUsers = this.state.users
    allUsers[user.id - 1] = user

    this.setState({users: []}, () => {
      this.setState({users: [...allUsers]})
    })
  }

  addUser(user) {
    //console.log(user)
    const id = this.state.users.length + 1
    this.setState({users: [...this.state.users, {id, ...user}] })
  }
  
}

export default App