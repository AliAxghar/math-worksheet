import React, { useEffect } from "react";
import "./SplashScreen.css";

const SplashScreen = ({ onHide }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onHide();
        }, 2000);
        return () => clearTimeout(timer);
    }, [onHide]);

    return (
        <div className="splash-screen">
            <div className="splash-content">
                <h1>Welcome to the Quiz</h1>
            </div>
        </div>
    );
};

export default SplashScreen;
