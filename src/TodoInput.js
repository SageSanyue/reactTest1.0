import React, { Component } from 'react';

export default class TodoInput extends Component {
    render(){
        return <input type="text" defaultValue={this.props.content} onKeyPress={this.submit.bind(this)}/>
    }
    submit(e){
        if(e.key === 'Enter'){
            //console.log('用户点击了回车')
            this.props.onSubmit(e)
        }
    }
}