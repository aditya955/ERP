import React from 'react';
// import { useState } from 'react';
import './DataContainer.scss';

const DataContainer = ({ title, children }) => {
    //   const [isMinimized, setIsMinimized] = useState(false);
    //   const [isMaximized, setIsMaximized] = useState(false);

    //   const toggleMinimize = () => {
    //     setIsMinimized(!isMinimized);
    //     setIsMaximized(false);
    //   }

    //   const toggleMaximize = () => {
    //     setIsMaximized(!isMaximized);
    //     setIsMinimized(false);
    //   }

    const handleClose = () => {
        // Add functionality to close the container (e.g., remove from DOM)
    }

    return (
        // <div className={`data-container ${isMinimized ? 'minimized' : ''} ${isMaximized ? 'maximized' : ''}`}>
        <div className="data-container">
            <div className="header">
                <div className="title"> {title} </div>
                {/* <div className="options">
                    <button onClick={toggleMinimize}>{isMinimized ? 'Maximize' : 'Minimize'}</button>
                    <button onClick={toggleMaximize}>{isMaximized ? 'Restore' : 'Maximize'}</button>
                    <button onClick={handleClose}>Close</button>
                </div> */}
            </div>
            {/* {!isMinimized && ( */}
            <div className="dc-content">
                {children}
            </div>
            {/* )} */}
        </div>
    );
}

export default DataContainer;
