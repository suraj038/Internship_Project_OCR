import React, { Component } from 'react'

export default class Image extends Component {

    fileHandler = (e) => {
        console.log(e.target.files[0])

        const data = new FormData();
        data.append('file', e.target.files[0]);
        data.append('filename', "1.jpg");
        fetch('http://127.0.0.1:5000/upload',{
            method : "POST",
            body : data
        }).then(res => {
            res.json().then(result => {
                console.log(result)
            })
        })
    }

    render() {
        return (
            <div>
                <input type="file" onChange={this.fileHandler} />
            </div>
        )
    }
}
