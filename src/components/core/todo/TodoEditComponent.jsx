import React, {Component} from 'react';
import TodoService from '../../../api/todo/TodoService.js'
import moment from 'moment'
import {Formik,Form, Field} from 'formik'

class TodoEditComponent extends Component {

    constructor(props) {
        super(props);
        var user = TodoService.findbyId(this.props.match.params.id);
        this.state = {
            id: this.props.match.params.id,
            description: 'fdfddfd',
            targetData: moment(new Date()).format('yyyy-MM-DD')
        };
        console.log(this.state);

    }

    render() {
        
        return (
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik>
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate"/>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                
                </div>                
            </div>
        );
        
    }
}

export default TodoEditComponent