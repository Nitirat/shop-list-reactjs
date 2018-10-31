import React, { Component } from "react";

class Calculator extends Component {
    render() {
        return (
            <div>
                <h4 className="text-right">400</h4>
                <hr />
                <ul className="list-unstyled">
                    <li className="text-right text-success">
                        ac:s x 1 = 200
                        <button className="btn btn-light btn-sm">x</button>
                    </li>
                    <li className="text-right text-success">
                        ac:a x 1 = 200
                        <button className="btn btn-light btn-sm">x</button>
                    </li>
                </ul>
                <hr />
                <button className="btn btn-block btn-danger">Submit</button>
                <button className="btn btn-block btn-secondary">Cnacel</button>
            </div>
        )
    }
}

export default Calculator;