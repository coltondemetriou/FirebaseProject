import React from "react";
import firebase from './firebase.js';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ContractOutup from './ContractOutput.js';
import Flexbox from 'flexbox-react';



export default class ContractForm extends React.Component{
    state = {
        name : '',
        company : '',
        contractDetails : '',
        data : []
    }

    handleChange = event => {
        this.setState({
           [event.target.name] : event.target.value,
        })
        console.log(this.state.company);
    }
    handleClick = event => {
        const usersRef = firebase.database().ref("users") // .ref manipulates/reads and writes/accesses the data 
        // and matches to key value pair if not already there
        const user = {
            name : this.state.name,
            company : this.state.company,
            contractDetails : this.state.contractDetails,
        };
        usersRef.push(user);
    }
    componentDidMount(){
        const userRef = firebase.database().ref("users");
        userRef.on('value', (snapshot) => {
            let users = snapshot.val();
            let newState = [];
            for(let user in users){
                newState.push({
                    dname : users[user].name,
                    dcomp : users[user].company,
                    ddetails: users[user].contractDetails,
                })
            }
            this.setState({
                data: newState
            });
            
        })
    }
    render(){
        return(
            <div> 
            <div>
                <form>
                <Flexbox justifyContent="space-evenly">
                    
                    <TextField
                    type = "text"
                    placeholder = 'Name'
                    name = "name"
                    outlined = 'true'
                    variant = 'outlined'
                    margin="normal"
                    value = {this.state.name}
                    onChange = {this.handleChange}
                    />
                    <br></br>
                    
                    <TextField
                    type = "text"
                    name = "company"
                    placeholder = 'Company'
                    variant = 'outlined'
                    margin="normal"
                    value = {this.state.company}
                    onChange = {this.handleChange}
                    />
                    <br></br>
                    
                    <TextField
                    type = "text"
                    placeholder = 'Contract Details'
                    name = "contractDetails"
                    variant = 'outlined'
                    margin="normal"
                    value = {this.state.contractDetails}
                    onChange = {this.handleChange}
                    />
                    <br></br>
               </Flexbox>
                </form>
                <Button 
                size = 'medium'
                color = 'secondary'
                onClick = {this.handleClick} 
                variant = 'outlined'
                containedPrimary = 'secondary'
                >New Contract</Button>
            </div>
            <h3>Existing Contracts</h3>
            <ContractOutup data={this.state.data}/>
            </div>
        )
    }
}