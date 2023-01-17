
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';


function App() {
return(
  <div>
<Navbar title="My Nav" text="Home"/>
<div className="container my-3">  
{/* container is boostrap class  */}
<TextForm heading="text to Analize"/>
</div>

{/* <Navbar  text="About Aircampus"/>   */}

{/* in second navbar default title will be show which we have declare in NAvbar.js below in Navbar.defaultProps  */}

{/* this title is props. jeware aa navabar ne use karu hase we can only change this title and we can re use it  */}

  </div>
)
}

export default App;
