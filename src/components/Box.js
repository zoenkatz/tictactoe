import React from 'react';


class Box extends React.Component{

    handleClick(e){
        this.props.handleBoxClick(e, this.props.index);
    }

    render(){
        return(
            <div className="box" onClick={(e) => this.handleClick(e)}>{this.props.board[this.props.index]}</div>
        )
    }

}

export default Box;