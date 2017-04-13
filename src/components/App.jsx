import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from './Navbar.jsx';
// import { Grid, Row, Col } from 'react-flexbox-grid';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.setMood = this.setMood.bind(this);
    this.setActivity = this.setActivity.bind(this);
  }

  setMood(e) {
    this.props.handleMood(e.target.value);
  }

  setActivity(e) {
    this.props.handleActivity(e.target.value);
  }

	findPlaylist() {
		var count;
		axios.get('/playlist')
		.then((result) => {
			count = result.data.length;
			axios.post('/create', {number: count});
		});
	}


	render() {
	  return (
	  	<div>
		  	<div>
		  		<div>
		  			<NavBar />
		  		</div>
		  	</div>
		  	<Container fluid={true}>
	        <Row className>
		        <Col className="layout-column column-left" xs="0" md="1">md-4</Col>
		        <Col className="layout-column column-mid" xs="11" md="8">
		          <div className="main-container">
				  			<div className="main-middle-column">
						  	  <h1>Welcome To So Me</h1>
						  	  {this.props.children}
								  <Link to='/playlists'>Use My Playlist</Link>
						  	  <Link id='newPlaylist' to='/new-playlist' onClick={this.findPlaylist}>Get Suggested Playlist</Link>
						  	  <div>Mood</div>
					  	  	<select id="mood" onChange={this.setMood}>
						  	    <option value="Choose One">Choose One</option>
						  	    <option value="Happy">Happy</option>
						  	    <option value="Calm">Calm</option>
						  	    <option value="Sad">Sad</option>
						  	    <option value="Focused">Focused</option>
						  	    <option value="Excited">Excited</option>
						  	  </select>
						  	  <div>Activity</div>
						  	  <select id="activity" onChange={this.setActivity}>
						  	    <option value="Choose One">Choose One</option>
						  	    <option value="Exercising">Exercising</option>
						  	    <option value="Studying">Studying</option>
						  	    <option value="Partying">Partying</option>
						  	    <option value="Chilling">Chilling</option>
						  	    <option value="Driving">Driving</option>
						  	  </select>
				  	  	</div>
				  		</div>
				  	</Col>
		        <Col className="layout-column column-right" xs="5" md="3">md-4</Col>
	        </Row>
	      </Container>
		  </div>	
	  );
	}
}

export default App;
