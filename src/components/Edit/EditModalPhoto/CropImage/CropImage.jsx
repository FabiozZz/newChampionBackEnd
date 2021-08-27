import React, {useState} from "react";
import AvatarEditor from "react-avatar-editor";
import classes from './crop.module.css';
import {Slider} from "antd";
import {Button} from "../../../../utils/Buttons/Button";

export const CropImage = ({img,reboot,abort,setImage,toggle})=> {
    const [imgURI, setIMG] = useState(img);
    // const editor = useRef(null);
    const [editor, setEditor] = useState(null);
    const [scale, setScale] = useState(1);
    const onWheel = (e) => {
        let delta = e.deltaY || e.detail || e.wheelDelta;
        if (delta > 0) {
            if (scale <= 1) {
                setScale(1);
            } else {
                setScale((prevState) => prevState - 0.1);
            }
        } else {
            if (scale > 3) {
                setScale(3);
            } else {
                setScale((prevState) => prevState + 0.1);
            }
        }
    };
    const onClickSave = () => {
        if (editor) {
            const canvasScaled = editor.getImageScaledToCanvas();
            console.log(canvasScaled);

            setIMG(canvasScaled.toDataURL('jpeg'));
            setImage(canvasScaled.toDataURL('jpeg'))
            toggle()
        }
    };

    const handleAbortBtn = () => {
        reboot()
        abort()
    };

    const setEditorRef = (editor) => setEditor(editor);

    return (
        <div className={classes.wrapper}>
            <AvatarEditor
                onWheel={onWheel}
                ref={(editor) => setEditorRef(editor)}
                image={imgURI}
                width={174}
                height={224}
                border={[100,50]}
                scale={scale}
            />
            <div className={classes.slider}>
                <Slider value={scale} onChange={setScale} min={1} max={3} step={0.01}/>
            </div>
            <div className={classes.btn_group}>
                <Button text={'обрезать'} factor={'success'} click={onClickSave}/>
                <Button text={'Отменить'} factor={'danger'} click={handleAbortBtn}/>
            </div>
        </div>
    );
}
