import React from 'react'


class AddUser extends React.Component{

  userAdd = {}

    constructor(props) {
        super(props)
        this.state = {
            first_name: "",
            last_name: "",
            //bio: "",
            email: "",
            //age: 1,
            avatar: "",
            //isHappy: true
        }
    }

  render() {
    return(
      <form ref={(el) => this.myForm = el}>
          
          <input placeholder='Имя' onChange={(e) => this.setState({ first_name: e.target.value })} />
          <input placeholder='Фамилия' onChange={(e) => this.setState({ last_name: e.target.value })} />
          {/* <textarea placeholder='Биография' onChange={(e) => this.setState({ bio: e.target.value })}></textarea> */}
          <input placeholder='Email' onChange={(e) => this.setState({ email: e.target.value })} />
          {/* <input placeholder='Возраст' onChange={(e) => this.setState({ age: e.target.value })}/> */}
          <input placeholder='Аватар' onChange={(e) => this.setState({ avatar: e.target.value })} />
          {/* <label htmlFor='isHappy'>Happy?</label> */}
          {/* <input type="checkbox" id="isHappy" onChange={(e) => this.setState({ isHappy: e.target.checked })}/> */}
          <button type='button' onClick={() => {
            this.myForm.reset()
            this.userAdd = {
              first_name: this.state.first_name,
              last_name: this.state.last_name,
              //bio: this.state.bio,
              email: this.state.email,
              avatar: this.state.avatar,
              //age: this.state.age,
              //isHappy: this.state.isHappy,
          }
          
          if (this.props.user)
            this.userAdd.id = this.props.user.id
          this.props.onAdd(this.userAdd)}

          }>Добавить</button>
      </form>
    )
  }

}

export default AddUser