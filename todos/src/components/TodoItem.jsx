import React from 'react';
import { connect } from 'react-redux';
import { markComplete } from '../actions';
import { withRouter } from 'react-router';


class TodoItem extends React.Component {
    onComplete = () => {
        this.props.dispatch(markComplete(this.props.id));
    }
    render() {
        const { completed, onDelete, text } = this.props;
        return (
            <li className={completed ? 'completed' : ''}>
                <div className="view">
                    <input onChange={this.onComplete} className="toggle" type="checkbox" checked={completed} />
                    <label>{text}</label>
                    <button onClick={onDelete} className="destroy"></button>
                </div>
            </li>
        );
    }
}

export default withRouter(connect()(TodoItem));