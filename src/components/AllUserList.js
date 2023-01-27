import React, { useState}from "react";
import Test from "./Test";
import UserDetails from "./UserDetails";
  //<h1> the name is {state.name}</h1>
    
// class AllUserList extends React.Component 
const AllUserList = () => {
    let [state, setState] = useState({ 
        name: "Priyanshu Saxena",});

    // state = {
    //     name: "Priyanshu",
    // };
    let allUsers = [
        {
            name: " alex", email:"alex@mail.com",
            phone: "686746359829",
        },
        {
            name: " alex", email:"alex@mail.com",
            phone: "6867463529",
        },
        { 
            name: " alex", email:"alex@mail.com",
            phone: "686746359829",
        },
    ];
    //  let array = [
    //         <UserDetails user={allUsers[0]} />,
    //         <UserDetails user={allUsers[1]} />,
    //         <UserDetails user={allUsers[2]} />  ,  
    //  ];
     //return <div>{array}</div>
    
        // setTimeout(() => {
        //     this.setState({ name: "Abhay"});
        // }, 15000); 
    let setStateName = (name) => {
        setState({...state, name});
    };
     return (
        <div>
            {/* <h1>The name is {state.name}</h1> */}
            <Test name ={state.name} setName={setStateName} />
            {allUsers.map((user,index) => (
                <UserDetails key={index} user={user} />
            ))}
        </div>
     );
    
    };
    /*return(
        <div>
            <UserDetails user={allUsers[0]} />
            <UserDetails user={allUsers[1]} />
            <UserDetails user={allUsers[2]} />    
        </div>
    );*/
export default AllUserList;