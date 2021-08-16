import React, {useContext, useEffect} from 'react';
import {ContextModal} from "../Add";

const ModalPhoto = () => {

    const {startUp, video, canvas, photo,takepicture} = useContext(ContextModal);
    useEffect(() => {
        startUp();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return (
        <div>
            <div className="camera">
                <video ref={video} autoPlay id="video">Video stream not available.</video>
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