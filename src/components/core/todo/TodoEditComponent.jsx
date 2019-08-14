import React, {Component} from 'react';
import moment from 'moment'
import {Formik,Form, Field, ErrorMessage} from 'formik'
import TodoService from '../../../api/todo/TodoService.js'
import AuthenticationService from '../authentication/AuthenticationService.js'

class TodoEditComponent extends Component {

    constructor(props) {
        super(props);
       
        this.state = {
            isEdit:false,
            todo: {id:null, description: '', targetData: moment(new Date()).format('YYYY-MM-DD')}
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.validateErrors = this.validateErrors.bind(this);

    }

    componentDidMount() {
        if (!this.props.match.params.id) {
            return;
        }

       TodoService.findbyId(this.props.match.params.id)
                  .then( response => this.setState({todo: response.data, isEdit: true}) );
    }

    onSubmit(values) {
        if (!this.state.isEdit) {
            TodoService.save(AuthenticationService.getLoggedUsername(), values)
                       .then(response =>  this.props.history.push(`/todoApp/todos`));
        } else {
            TodoService.update(this.props.match.params.id, values).then(
                response => { this.props.history.push(`/todoApp/todos`);}
            );
        }
    }

    validateErrors(values) {
        let errors = {};

        if (!values.description) {
            errors.description = "Description is Required";
        } else if(values.description.length < 5) {
            errors.description = "Enter at least 5 caracteres in Description"
        }

        if (!moment(values.targetData).isValid()) {
            errors.targetData = "Data is not valid."
        }

        return errors;
    }

    render() {
        return (
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik initialValues={this.state.todo}
                            onSubmit={this.onSubmit}
                            validate={this.validateErrors}
                            validateOnChange={false}
                            enableReinitialize={true}>
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning"></ErrorMessage>
                                    <ErrorMessage name="targetData" component="div" className="alert alert-warning"></ErrorMessage>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetData"/>
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