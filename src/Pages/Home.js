import React from 'react';
import '../App.css';
import BasicAppBar from '../Components/BasicAppBar'

const Home = () => {

	return (
		// <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Welcome to the Local Softball Association Homepage
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       More information to come, also Kayden, you are still a little bitch.
    //     </a>
    //   </header>
    // </div>
    //<ResponsiveAppBar></ResponsiveAppBar>
    <>
    <BasicAppBar></BasicAppBar>

    <div>Stuff Goes Here</div>
    <div> and more stuff here</div>
</>
	);
};

export default Home;