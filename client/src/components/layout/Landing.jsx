import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Landing extends Component {
	render() {
		return (
			<div>                
                <div className="landing-inner">
                    <h1 className="x-large">Internet and Apps Project</h1>
                    <p className="lead">
                        Insert up to 10 names of medicine and our app will find the number of
                        references of each of them in 197.412 science articles. 
                    </p>
                    <p className="lead">
                        We also find the time period of the references (first and last date) and the year with most of them.
                        It takes about 8 secs for every med.
                    </p>
                    <div className="buttons">
                        <Link to="/insertion"> Insert Data </Link>
                    </div>
                </div>    
                
            </div>
		);
	}
}

