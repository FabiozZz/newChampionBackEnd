import React, { createContext, useRef, useState } from 'react';
import 'react-html5-camera-photo/build/css/index.css';
import { CropImage } from './CropImage/CropImage';
import classes from './photo.module.css';
import { CameraOn } from './CameraOn/CameraOn';
import { Button } from 'utils/Buttons/Button';

export const CameraContext = createContext();

const ModalPhoto = ({ modal, setImage, image, toggleModal }) => {
	const [dataUri, setDataUri] = useState(null);
	const [cameraOn, setCameraMode] = useState('off');

	const changePhotoModOn = () => {
		setCameraMode('on');
	};
	const changePhotoModOff = () => {
		setCameraMode('off');
	};

	const inputForDesctop = useRef(null);
	const inputForDevices = useRef(null);

	function handleTakePhotoAnimationDone(dataUri) {
		setDataUri(dataUri);
	}
	function handleTakePhoto(e) {
		if (e.target.files && e.target.files[0]) {
			setDataUri(URL.createObjectURL(e.target.files[0]));
		}
	}

	console.log(navigator.userAgent);

	if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile/i.test(navigator.userAgent)) {
		return (
			<>
				{dataUri ? (
					<>
						<CropImage
							toggle={toggleModal}
							setImage={setImage}
							img={dataUri}
							reboot={() => setDataUri(null)}
							abort={changePhotoModOff}
						/>
					</>
				) : (
					<>
						<div className={classes.btn_wrappewr}>
							<Button
								text={'Загрузить фото с устройства'}
								click={() => inputForDevices.current.click()}
								size={'auto'}
							/>
							<input
								ref={inputForDevices}
								type="file"
								hidden={true}
								onChange={handleTakePhoto}
								accept="image/*;capture=camera"
							/>
						</div>
					</>
				)}
			</>
		);
	} else {
		return (
			<>
				{dataUri ? (
					<>
						{/*<div onClick={} style={{position:'absolute',top:'50%'}}>rebot</div>*/}
						{/*<img src={dataUri}/>*/}
						<CropImage
							toggle={toggleModal}
							setImage={setImage}
							img={dataUri}
							reboot={() => setDataUri(null)}
							abort={changePhotoModOff}
						/>
					</>
				) : (
					<CameraContext.Provider
						value={{ dataUri, takePhoto: handleTakePhotoAnimationDone }}>
						{cameraOn === 'off' ? (
							<>
								<h3 className={classes.label_header}>добавить фото</h3>
								<div className={classes.btn_wrappewr}>
									<Button
										text={'Загрузить фото с устройства'}
										click={() => inputForDesctop.current.click()}
										size={'auto'}
									/>
									<input
										ref={inputForDesctop}
										onChange={e => setDataUri(e.target.files[0])}
										accept={'image/*'}
										type="file"
										hidden={true}
									/>
									<Button
										text={'Сделать фото'}
										click={changePhotoModOn}
										factor={'success'}
										size={'auto'}
									/>
								</div>
							</>
						) : cameraOn === 'on' ? (
							<CameraOn />
						) : null}
					</CameraContext.Provider>
				)}
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
				{/*<img src={state.preview} alt=""/>*/}

				{/*}*/}
				{/*<Button text={'загрузить'}/>*/}
			</>
		);
	}
};

export default ModalPhoto;
