import React from 'react';


class ChoosePlayer extends React.Component {

    handleSubmit(e){
        e.preventDefault();
        this.props.player(e.target.player.value);

    }

    render(){

        return(
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label>
                    Player X
                    <input type="radio" value="x" name="player" />
                </label>
                <label>
                    Player O
                    <input type="radio" value="o" name="player" />
                </label>
                <input type="submit" value="start" />
            </form>
        )
    }

}

export default ChoosePlayer;