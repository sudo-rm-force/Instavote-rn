import React, { Component } from 'react'
//import '../../styles/main.scss'
import Camera from 'react-html5-camera-photo';
//import 'react-html5-camera-photo/build/css/index.css';

class RegistrationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            camera: true,
            url: ''
        }

        this.onTakePhoto = this.onTakePhoto.bind(this)
        this.reset = this.reset.bind(this)
    }

    onTakePhoto(dataUri) {
        const date = new Date().valueOf();
        let text = '';
        const possibleText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            text += possibleText.charAt(Math.floor(Math.random() * possibleText.length));
        }
        const imageName = date + '.' + text + '.jpeg';
        let imageBlob;
        const byteString = window.atob(dataUri);
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const int8Array = new Uint8Array(arrayBuffer);
        for (let i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([int8Array], { type: 'image/jpeg' });
        console.log(blob);
        imageBlob = blob;
        const imageFile = new File([imageBlob], imageName, { type: 'image/jpeg' });
        this.generatedImage = window.URL.createObjectURL(imageFile);
        this.setState({ url: this.generatedImage })
        this.setState({ camera: false })
        this.props.handleSnap(dataUri, imageName);
    }

    reset() {
        document.location.reload()
    }

    render() {

        return (
            <div className='registrationbar'>
                <div className="registrationbar--photo">
                    {this.state.camera ? (<Camera
                        idealResolution={{ width: 285, height: 285 }}
                        onTakePhoto={(dataUri) => { this.onTakePhoto(dataUri.replace(/^data:image\/(png|jpg);base64,/, '')); }}
                    />) : <img src={this.state.url} />}
                </div>
                <button className='registrationbar--button' onClick={this.reset}>Take Another Photo</button>
            </div>
        )
    }
}

export default RegistrationBar
