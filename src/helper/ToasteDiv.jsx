import React from "react";

const ToasteDiv = ({ image, message, tesxtmessage, buttonText, onButtonClick }) => {


    return (
        <div className="productToastBx">
            <div className="imgBx">
                {image && (
                    <img src={image} alt="toast icon" />
                )}
            </div>
            <div className="textBx">
                {message && <h5 style={{ margin: 0, fontWeight: 500 }}>{message}</h5>}
                {tesxtmessage && <p style={{ margin: 0, fontWeight: 500 }}>{tesxtmessage}</p>}
                {buttonText && (
                    <button onClick={onButtonClick}>
                        {buttonText}
                    </button>
                )}
            </div>
        </div>
    );
};

export default ToasteDiv;
