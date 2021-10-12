import React from "react";
import {Link} from "react-router-dom";

const topBarCategories = ["Registration", "Game", "Cars", "Test"];

export class HomeComponent extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return <div class="Top-bar">
                {
                    topBarCategories.map(x => <Link to={`${x}`}>{`${x}`}</Link>)
                }
            </div>
    }
}