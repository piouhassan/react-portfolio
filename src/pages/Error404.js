import React from "react";


const Error404 = () => {
    return(
        <>
            <div className="contentError">
                <div className="titleError">404</div>
                <h4>Oops sorry, page not be found.</h4>
                <p>Sorry but the page you are looking for does not exist, have been
                    removed, name changed or is temporarily unavailable.</p>
                <br/>
                    <br />
                        <a href="/">Return Home</a>
            </div>
        </>
    )
}

export default Error404