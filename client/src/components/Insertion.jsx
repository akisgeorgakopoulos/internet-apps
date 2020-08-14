import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

export default class Insertion extends Component {
	constructor(props) {
		super(props);
		this.state = {
            name1: '',
            name2: '',
            name3: '',
            name4: '',
            name5: '',
            name6: '',
            name7: '',
            name8: '',
            name9: '',
            name10: '',
			response: null
		};

		this.handleSubmit = this.handleSubmit.bind(this);

        this.handleName1 = this.handleName1.bind(this);
        this.handleName2 = this.handleName2.bind(this);
        this.handleName3 = this.handleName3.bind(this);
        this.handleName4 = this.handleName4.bind(this);
        this.handleName5 = this.handleName5.bind(this);
        this.handleName6 = this.handleName6.bind(this);
        this.handleName7 = this.handleName7.bind(this);
        this.handleName8 = this.handleName8.bind(this);
        this.handleName9 = this.handleName9.bind(this);
        this.handleName10 = this.handleName10.bind(this);

	}

	handleName1(event) {
		this.setState({
			name1: event.target.value
		});
    }
    handleName2(event) {
		this.setState({
			name2: event.target.value
		});
    }
    handleName3(event) {
		this.setState({
			name3: event.target.value
		});
    }
    handleName4(event) {
		this.setState({
			name4: event.target.value
		});
    }
    handleName5(event) {
		this.setState({
			name5: event.target.value
		});
    }
    handleName6(event) {
		this.setState({
			name6: event.target.value
		});
    }
    handleName7(event) {
		this.setState({
			name7: event.target.value
		});
    }
    handleName8(event) {
		this.setState({
			name8: event.target.value
		});
    }
    handleName9(event) {
		this.setState({
			name9: event.target.value
		});
    }
    handleName10(event) {
		this.setState({
			name10: event.target.value
		});
    }

	handleSubmit(event) {
        if (this.state.name1 === ''){
            alert('Must give name1');
        }else{
		axios.get(`/Medicine/${this.state.name1}?Name2=${this.state.name2}&Name3=${this.state.name3}&Name4=${this.state.name4}&Name5=${this.state.name5}&Name6=${this.state.name6}&Name7=${this.state.name7}&Name8=${this.state.name8}&Name9=${this.state.name9}&Name10=${this.state.name10}`)
			 .then((res) => {
                
                //console.log(res)

				this.setState({
					response: res.data
				});
			 })
			.catch((err) => {
				alert(err);
            });
        }
		event.preventDefault();
	}

	createTable(dataset) {
		return (
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Medicine</th>
						<th>No. of references</th>
						<th>First date</th>
						<th>Last Date</th>
						<th>Year with most</th>
					</tr>
				</thead>
				<tbody>{this.fillTable(dataset)}</tbody>
			</Table>
		);
	}
	fillTable(dataset) {
        //console.log(dataset)
        return  dataset.map( (details, index) => {
            return (
                <tr>
                    <td>{index + 1}</td>
                    <td>{details.name}</td>
                    <td>{details.number_of_articles}</td>
                    <td>{details.first_date}</td>
                    <td>{details.last_date}</td>
                    <td>{details.year_with_most}</td>
                </tr>
            );
        });
    }

	render() {
		return (
            <div>
                <div>
                    
                        <h1 className="large" >Insert up to 10 med names</h1>
                        <p className="lead"> Insert names you want, not 10 necessary</p>
                        <p className="lead"> You must fill the first one</p>

                        <form className="form" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input type="text" placeholder="Name 1" name="name1" value={this.state.name1} onChange={this.handleName1} required />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Name 2" name="name2" value={this.state.name2} onChange={this.handleName2} />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Name 3" name="name3" value={this.state.name3} onChange={this.handleName3} />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Name 4" name="name4" value={this.state.name4} onChange={this.handleName4} />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Name 5" name="name5" value={this.state.name5} onChange={this.handleName5} />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Name 6" name="name6" value={this.state.name6} onChange={this.handleName6} />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Name 7" name="name7" value={this.state.name7} onChange={this.handleName7} />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Name 8" name="name8"  value={this.state.name8} onChange={this.handleName8} />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Name 9" name="name9"  value={this.state.name9} onChange={this.handleName9} />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Name 10" name="name10" value={this.state.name10} onChange={this.handleName10} />
                            </div>
                            <input type="submit" value="Submit Data" onClick={this.handleSubmit} />
                        </form>

                        <div className="buttons">
                            <Link to="/" > Back </Link>
                        </div>
                        
                    
                        
                </div>
                
                <div>
                    
                    {this.state.response != null ? (
                        <div>
                            <h1 className="large">Results</h1>
                            <br />
                            {this.createTable(this.state.response)}
                            <br />
                        </div>
                    ) : null}
                </div>
            </div>
		);
	}
}


                
