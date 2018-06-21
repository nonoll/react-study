import React, { Component } from 'react';

class Canvas extends Component {
    componentDidMount() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');
        const img = this.refs.image;

        img.onload = () => {
            ctx.drawImage(img, 0, 0);
            ctx.font = '40px Courier';
            ctx.fillText(this.props.text, 210, 75);
        };
    }

    render() {
        return(
            <div>
                <canvas ref="canvas" width={640} height={425} />
                <img ref="image" src="http://7gigzxopz0uiqxo1-zippykid.netdna-ssl.com/wp-content/uploads/2015/08/cheese.jpg" className="hidden" />
            </div>
        );
    }
}

export default Canvas;