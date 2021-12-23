import React, { useContext } from 'react';
// import classes from './camera.module.css';
import Camera from 'react-html5-camera-photo';
import { CameraContext } from '../ModalPhoto';

/**
 * Компонент-обертка над скачанным модулем react-html5-camera-photo
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const CameraOn = () => {
	const { takePhoto } = useContext(CameraContext);
	return (
		<div style={{ marginTop: '-36px', marginBottom: '-45px', width: '634px' }}>
			<Camera
				onCameraError={() => {
					return 'Проблемы с камерой';
				}}
				onTakePhotoAnimationDone={takePhoto}
			/>
		</div>
	);
};
