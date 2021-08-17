import React, {useEffect, useRef, useState} from 'react';
import {Button} from "../../../utils/Buttons/Button";
// import classes from './photo.module.css';
import AvatarEditor from "react-avatar-editor";
import Camera from 'react-html5-camera-photo';

const ModalPhoto = ({modal,setImage,image}) => {
    function handleTakePhoto (dataUri) {
        // Do stuff with the photo...
        console.log('takePhoto');
    }
    // const [state,setState] = useState({
    //     width:320,
    //     height:0,
    //     image:null,
    //     stream:null,
    //     streaming:false,
    //     preview:null
    // })
    // const video = useRef(null),
    //     canvas = useRef(null),
    //     // photo = useRef(null),
    //     editor = useRef(null);
    //
    // const setEditorRef = () => {
    //     if (editor.current) {
    //         setState(prevState=>({...prevState, preview: editor.current.getImageScaledToCanvas().toDataURL('image/jpeg')}));
    //         setImage(state.preview)
    //         console.log(state.preview)
    //     }
    // }
    //
    // function clearphoto() {
    //     let context = canvas.current.getContext('2d');
    //     context.fillStyle = "#AAA";
    //     context.fillRect(0, 0, canvas.current.width, canvas.current.height);
    //
    //     let data = canvas.current.toDataURL('image/jpeg');
    //     setState(prevState=>({...prevState,image:data}))
    //     console.log(data)
    //     // photo.current.setAttribute('src', data);
    //     setState(prevState=>({...prevState,image:data}));
    // }
    //
    // function takepicture() {
    //     let context = canvas.current.getContext('2d');
    //     if (state.width && state.height) {
    //         canvas.current.width = state.width;
    //         canvas.current.height = state.height;
    //         context.drawImage(video.current, 0, 0, state.width, state.height);
    //
    //         let data = canvas.current.toDataURL('image/jpeg');
    //         // photo.current.setAttribute('src', data);
    //         setState(prevState=>({...prevState,image:data}));
    //         // setImage(data);
    //     } else {
    //         clearphoto();
    //     }
    // }
    //
    // const canplay = () => {
    //     setState(prevState=>({...prevState, height: video.current.videoHeight / ( video.current.videoWidth / state.width )}))
    //
    //     setState(prevState=>({...prevState,streaming:true}))
    // };
    //
    // useEffect(() => {
    //     console.log(image.navigator);
    //         image.navigator.getUserMedia({ video: true, audio: false })
    //             .then(function(stream) {
    //                 video.current.srcObject = stream;
    //                 // setState(prevState => ({...prevState, stream: stream}));
    //                 // video.current.play();
    //             })
    //             .catch(function(err) {
    //                 console.log("An error occurred: " + err);
    //             });
    //         clearphoto();
    // },[]);

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
            <Camera
                onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
            />
            {/*<div className="camera">*/}
            {/*    <video style={{width:state.width,height:state.height}} onCanPlayCapture={modal?canplay:null} autoPlay={true} ref={video} id="video">Video stream not available.</video>*/}
            {/*    <button onClick={takepicture} id="startbutton">Take photo</button>*/}
            {/*</div>*/}
            {/*<canvas ref={canvas} id="canvas" hidden={true}/>*/}
            {/*<div className="output">*/}
            {/*    <AvatarEditor image={state.image}*/}
            {/*                  width={174}*/}
            {/*                  ref={editor}*/}
            {/*                  height={224}*/}
            {/*                  border={50}*/}
            {/*                  color={[255, 255, 255, 0.6]}*/}
            {/*                  rotate={0}/>*/}
            {/*    /!*<img ref={photo} id="photo" alt="The screen capture will appear in this box."/>*!/*/}
            {/*</div>*/}
            {/*<Button click={setEditorRef} text={'сохранить'}/>*/}
            {/*{state.preview&&*/}
            {/*    <img src={state.preview} alt=""/>*/}

            {/*}*/}
            {/*<Button text={'загрузить'}/>*/}
        </div>
    );
};

export default ModalPhoto;