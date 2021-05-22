import React from 'react';
import PropTypes from "prop-types";

export const CardUserStatus = ({status, style={},danger, classStatus=''}) => {

    let color = status > 0 && status <3 ? '#E0E0E0':
        status >= 3 && status <= 5 ? '#A45640' :
            status >= 6 && status <= 11? '#EEAD12' :
                status >= 12 && status <=23? '#A1234B' :
                    status >= 24 && status <=35 ? '#082567' :
                        status >= 36 ? 'diamond' : null;



    const renderCardStatus = color === 'diamond'?
        <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.4665 3.77273V2.54545C23.4665 1.13964 22.3565 0 20.9873 0H3.27897C1.90976 0 0.799805 1.13964 0.799805 2.54545V3.77273C0.799805 3.89823 0.898927 4 1.02116 4H23.2451C23.3673 4 23.4665 3.89823 23.4665 3.77273Z" fill="url(#paint0_linear)"/><path d="M0.799805 5.6818V13.4545C0.799805 14.8603 1.90976 16 3.27897 16H20.9873C22.3565 16 23.4665 14.8603 23.4665 13.4545V5.6818C23.4665 5.5563 23.3673 5.45453 23.2451 5.45453H1.02116C0.898927 5.45453 0.799805 5.5563 0.799805 5.6818Z" fill="url(#paint1_linear)"/><defs><linearGradient id="paint0_linear" x1="0.799805" y1="0" x2="4.37394" y2="10.4994" gradientUnits="userSpaceOnUse"><stop stopColor="#AEAEAE"/><stop offset="0.505208" stopColor="#E0E0E0"/><stop offset="1" stopColor="#797979"/></linearGradient><linearGradient id="paint1_linear" x1="0.799805" y1="5.45453" x2="16.1537" y2="22.5628" gradientUnits="userSpaceOnUse"><stop stopColor="#AEAEAE"/><stop offset="0.505208" stopColor="#E0E0E0"/><stop offset="1" stopColor="#797979"/></linearGradient></defs></svg>
        :
        <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.4674 3.77273V2.54545C23.4674 1.13964 22.3575 0 20.9883 0H3.27995C1.91074 0 0.800781 1.13964 0.800781 2.54545V3.77273C0.800781 3.89823 0.899904 4 1.02214 4H23.2461C23.3683 4 23.4674 3.89823 23.4674 3.77273Z" fill={`${color}`}/><path d="M0.800781 5.6818V13.4545C0.800781 14.8603 1.91074 16 3.27995 16H20.9883C22.3575 16 23.4674 14.8603 23.4674 13.4545V5.6818C23.4674 5.5563 23.3683 5.45453 23.2461 5.45453H1.02214C0.899904 5.45453 0.800781 5.5563 0.800781 5.6818Z" fill={`${color}`}/></svg>;
    return (
        <div style={{margin:"0 auto",...style}} className={classStatus}>

            {danger ?
                <svg id="e6X7T9wLK8e1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shapeRendering="geometricPrecision" textRendering="geometricPrecision"><g id="e6X7T9wLK8e2_ts" transform="translate(16,16) scale(0,0)"><g id="e6X7T9wLK8e2" transform="translate(-16,-16)"><circle id="e6X7T9wLK8e3" r="16" transform="matrix(1 0 0 1 16 16)" fill="rgb(214,54,73)" fillOpacity="0.12" stroke="none" strokeWidth="1"/><circle id="e6X7T9wLK8e4" r="15.500000" transform="matrix(1 0 0 1 16 16)" fill="none" stroke="rgb(229,14,15)" strokeWidth="1" strokeOpacity="0.19"/></g></g><path id="e6X7T9wLK8e5" d="M27.466700,11.772700L27.466700,10.545500C27.466700,9.139640,26.356800,8,24.987500,8L7.279220,8C5.910010,8,4.800050,9.139640,4.800050,10.545500L4.800050,11.772700C4.800050,11.898200,4.899170,12,5.021400,12L27.245400,12C27.367600,12,27.466700,11.898200,27.466700,11.772700Z" fill="rgb(229,14,15)" stroke="none" strokeWidth="1"/><path id="e6X7T9wLK8e6" d="M4.800050,13.681900L4.800050,21.454600C4.800050,22.860400,5.910010,24,7.279220,24L24.987500,24C26.356800,24,27.466700,22.860400,27.466700,21.454600L27.466700,13.681900C27.466700,13.556400,27.367600,13.454600,27.245400,13.454600L5.021400,13.454600C4.899170,13.454600,4.800050,13.556400,4.800050,13.681900Z" fill="rgb(229,14,15)" stroke="none" strokeWidth="1"/></svg>
                : color && renderCardStatus }
        </div>
    );
};
CardUserStatus.defaultProps = {
    status: 0,
}
CardUserStatus.propType = {
    status: PropTypes.number.isRequired,
    style: PropTypes.object,
    danger: PropTypes.bool,
    classStatus: PropTypes.string
};