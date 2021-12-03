import React, { useContext } from 'react';
// import classes from './camera.module.css';
import Camera from 'react-html5-camera-photo';
import { CameraContext } from '../ModalPhoto';

export const CameraOn = () => {
	const { takePhoto } = useContext(CameraContext);
	return (
		<div style={{ marginTop: '-36px', marginBottom: '-45px', width: '634px' }}>
			<Camera
				onCameraError={() => 'Проблемы с камерой'}
				onTakePhotoAnimationDone={takePhoto}
			/>
		</div>
	);
};
