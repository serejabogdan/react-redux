import React from 'react'

export default class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };

    }

    submitHandler = (event) => {
        event.preventDefault();
        const {title} = this.state;

        const newPost = {
            title,
            id: Date.now().toString()
        };
        this.setState({title: ''});
    }

    changeInputHandler = (event) => {
        event.persist();
        const newState = {[event.target.name]: event.target.value};
        this.setState(prevState => ({...prevState, ...newState}));
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="title">Заголовок поста</label>
                    <input name="title" value={this.state.title} onChange={this.changeInputHandler} type="text" id="title" className="form-control" />
                </div>
                <button className="btn btn-success" type="submit">Создать</button>
            </form>
        );
    }
}