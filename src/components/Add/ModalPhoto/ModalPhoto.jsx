import React, {useEffect, useRef, useState} from 'react';
import {Button} from "../../../utils/Buttons/Button";
import classes from './photo.module.css';
import {set} from "ink-docstrap/fixtures/documents/probe";

const ModalPhoto = ({modal}) => {
    const [state,setState] = useState({
        width:320,
        height:0,
        image: null,
        streaming:false
    })

    const video = useRef(null),
        canvas = useRef(null),
        photo = useRef(null)


    function clearphoto() {
        let context = canvas.current.getContext('2d');
        context.fillStyle = "#AAA";
        context.fillRect(0, 0, canvas.current.width, canvas.current.height);

        let data = canvas.current.toDataURL('image/jpeg');
        setState(prevState=>({...prevState,image:data}))
        console.log(data)
        photo.current.setAttribute('src', data);
    }

    function takepicture() {
        let context = canvas.current.getContext('2d');
        if (state.width && state.height) {
            canvas.current.width = state.width;
            canvas.current.height = state.height;
            context.drawImage(video.current, 0, 0, state.width, state.height);

            let data = canvas.current.toDataURL('image/jpeg');
            photo.current.setAttribute('src', data);
        } else {
            clearphoto();
        }
    }

    const canplay = () => {
            setState(prevState=>({...prevState, height: video.current.videoHeight / ( video.current.videoWidth / state.width )}))

            video.current.setAttribute('height', state.height);
            video.current.setAttribute('width', state.width);
            canvas.current.setAttribute('width', state.width);
            canvas.current.setAttribute('height', state.height);

            // streaming = true;
            setState(prevState=>({...prevState,streaming:true}))
    };

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then(function(stream) {
                video.current.srcObject = stream;
                // video.current.play();
            })
            .catch(function(err) {
                console.log("An error occurred: " + err);
            });
        clearphoto();
        console.log(state.image)
        return () => {
            navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then(function (stream){
                stream.getTracks().forEach(track=>track.stop());
            })
        };
    },[]);

    // useEffect(() => {
    //     return () =>{
    //         MediaStreamTrack.stop();
    //         // state.stream.getTracks().forEach(track => track.stop());
    //         // setState(prevState =>({...prevState,streaming:false}))
    //         //
    //         // navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    //         //     .then(function(stream) {
    //         //         stream.getTracks().forEach(track => track.stop());
    //         //     })
    //         //     .catch(function(err) {
    //         //         console.log("An error occurred: " + err);
    //         //     });
    //     }
    //
    // },[]);

    return (
        <div>
            <div className="camera">
                <video  onCanPlayCapture={canplay} ref={video} autoPlay id="video">Video stream not available.</video>
                <button onClick={takepicture} id="startbutton">Take photo</button>
            </div>
            <canvas ref={canvas} id="canvas" hidden={true}/>
            <div className="output">
                <img ref={photo} id="photo" alt="The screen capture will appear in this box."/>
            </div>
            {/*<Button text={'сделать фото'}/>*/}
            {/*<Button text={'загрузить'}/>*/}
        </div>
    );
};

export default ModalPhoto;