import React, { Component } from 'react';
import './App.css';
import './index.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="page-footer">
                    <div className="footer-container">
                        <div className="footer-row">
                            <div className="col l6 s12">
                                <h5 className="white-text">Pen Pawls</h5>
                                <p className="grey-text text-lighten-4 ">Thank you for enjoying Pen Pawls</p>
                            </div>
                            <div className="col l4 offset-l2 s12">
                                <h5 className="white-text">FAQ</h5>
                                <ul>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            © 2017 Copyright Pen Pawls
            <a className="grey-text text-lighten-4 right" href="#!">Email</a>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
export default Footer; 