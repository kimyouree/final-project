import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Button, Icon, Modal } from 'react-materialize';
import { Link } from 'react-router-dom';




class Form extends Component {
    constructor() {
        super()
        this.state = {
            results: "",
        }
        this.addChange = this.addChange.bind(this);
        this.addSubmit = this.addSubmit.bind(this);
    }

    addChange(e) {
        // console.log(e.nativeEvent)

        this.setState({
            results: e.target.value
        })
    }

    addSubmit(e) {
        e.preventDefault();
        let city = this.state.results.toLowerCase();
        let parks;
        let geo; 

        axios.get("http://localhost:3000/smallDogParks/" + city)
            .then((response) => {
                parks = response.data;
                // geo = response.data.
                console.log(response)
                // console.log(parks);
                this.props.submitHandler(parks);
                if (parks.length === 0) {
                    alert('Please enter another city')
                }
            })
            .catch(function (error) {
                console.log('this is the ' + error);
            })
    };

    render() {
        let copy = Array.from(this.props.resultsList)
        let parkJSX = copy.map((element, i) => {
            return (<div>
                    {element.name}</div>)
                     {/* {JSON.stringify(element.geometry)} */}
            
        });
        return (
            <div className="form-container">

                <form onSubmit={this.addSubmit} >

                    <input onChange={this.addChange} className="form-control" text-align="center" placeholder="Search a city" />
                    <button className="waves-effect waves-light btn-large" input-type="submit">Find
                    <i className="material-icons right">send</i>
                    </button>
                </form>

                {/* <Modal
                    header='Modal Header'
                    trigger={<Button waves='light'>oh hey!<Icon right>insert_chart</Icon></Button>}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
		incididunt ut labore et dolore magna aliqua.</p>
                </Modal> */}

                <p> {parkJSX}</p>





            </div>
        );
    }
}

export default Form;
