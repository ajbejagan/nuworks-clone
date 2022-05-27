import React from 'react';
import { useNavigate } from "react-router-dom";
import logoGif from '../assets/floating-logo.gif';

const FloatingCTA = () => {
    let navigate = useNavigate();

    return (
        <button className="fixed right-[30px] bottom-[30px] z-[1]">
            <img
                className="w-[80px] h-[80px]"
                src={logoGif} alt="Let's connect"
                onClick={() => navigate('/lets-connect')}
            />
        </button>
    )
}

export default FloatingCTA;