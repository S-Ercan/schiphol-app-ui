import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import PubSub from 'pubsub-js';

import 'react-datepicker/dist/react-datepicker.css';

class DatePickerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            date: date
        });
        console.log(date);
        PubSub.publish('dateTopic', date);
    }

    render() {
        return <DatePicker
            selected={this.state.date}
            onChange={this.handleChange}
            dateFormat={this.dateFormat}
        />;
    }
}

export default DatePickerComponent;
