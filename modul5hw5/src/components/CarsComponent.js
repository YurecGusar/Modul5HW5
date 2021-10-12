import React from "react";

const cars = [
    {id: 1, name:"Yurii"},
    {id: 2, name:"Sasha"},
    {id: 3, name:"Dima"},
    {id: 4, name:"Dima"},
    ]

const fillCars = [
        {id: null, name:""}
    ]

export class CarsComponent extends React.Component{
    
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       clickedText: ''
    //     }
    //   }
    
    //   handleClick = (i) => {
    //         this.setState({ clickedText: texts[i] });
    //   };
    
    //   render() {
    //     const { clickedText } = this.state;
    //     return (
    //       <div>
    //         {texts.map((text, i) => 
    //           <button key={i} onClick={() => this.handleClick(i)}>Click me {i + 1}</button>
    //         )}
    //         {clickedText && <p>I clicked on button with text: {clickedText}</p>}
    //       </div>
    //     );
    //   }
    
    constructor(props){
        super(props);

        this.state = {
            stateCars: fillCars,
            findParam: ""
        }
    }

    findOnClick = () => {
        let _cars = cars;
        this.setState({stateCars: _cars});
    }

    onChange = (e) =>{
        let value = e.target.value;
        this.setState({findParam: value});
    }

    render(){
        const { stateCars } = this.state;
        const { findParam } = this.state;
        return <>
        <div>
            <input type="text" onChange={this.onChange} value={this.state.findParam} />
            <button onClick={this.findOnClick}>Find</button>
            {findParam}
        </div>
        <div class="content">
            <CarWrapperComponent cars= {stateCars} />
        </div>
        </>;
    }
}

class CarWrapperComponent extends React.Component {
    render() {
        let array = this.props.cars;
        return array.map(x => <CarCardComponent car={x}/>);
    }
}

class CarCardComponent extends React.Component {
    render() {
        let car = this.props.car;

        return <>
        <div class="car-card">
            <div class="car-content">
                <h1>{car.name}</h1>
                <h2>{car.id}</h2>
            </div>
        </div>
        </>;
    }
}