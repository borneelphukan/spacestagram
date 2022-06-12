import React, { Component } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Like extends Component {
    state = { liked: false };
    toggle = () => {
        let localLiked = this.state.liked;

        localLiked = !localLiked;
        this.setState({ liked: localLiked });
    };
    render() {
        return (
            <div className="container">
                <center>
                    <div
                        className="container"
                        style={{ border: "1px solid black", width: "50%" }}
                        onClick={() => this.toggle()}
                    >
                        {this.state.liked === false ? (
                            <button type="button" class="btn btn-light"><FontAwesomeIcon icon={faHeart} /></button>
                        ) : (
                            <button type="button" class="btn btn-light"><FontAwesomeIcon icon={faHeart} style={{ color: "red" }} /></button>
                        )}
                    </div>
                </center>
            </div>
        );
    }
}

export default Like;
