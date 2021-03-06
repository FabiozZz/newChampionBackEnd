import React, { useContext } from 'react';
// import classes from './camera.module.css';
import Camera from 'react-html5-camera-photo';
import { EditCameraContext } from '../EditModalPhoto';

/**
 * Компонент-обертка над скачанным модулем react-html5-camera-photo
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const CameraOn = () => {
	const { takePhoto } = useContext(EditCameraContext);
	return (
		<div
			style={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				marginTop: '-36px',
				marginBottom: '-36px',
			}}>
			<Camera onTakePhotoAnimationDone={takePhoto} />
		</div>
	);
};
