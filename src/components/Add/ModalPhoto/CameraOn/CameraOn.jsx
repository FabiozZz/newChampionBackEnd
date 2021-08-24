import React, {useContext} from 'react';
import classes from './camera.module.css';
import Camera from "react-html5-camera-photo";
import {CameraContext} from "../ModalPhoto";

export const CameraOn = () => {
    const {takePhoto} = useContext(CameraContext);
    return (
        <div style={{width: '100%',display:'flex', justifyContent:'center',alignItems:'center',marginTop:'-36px',marginBottom:'-36px'}}>
            <Camera
                onTakePhotoAnimationDone = {takePhoto} />
        </div>
    );
};