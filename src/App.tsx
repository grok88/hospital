import React, {Component} from 'react';
import {EmployeesType, setEmployeesTC, setWorklogTC, WorklogType} from './redux/appReducer';
import {connect} from 'react-redux';
import {AppRootStateType} from './redux/store';
import {Redirect, Route} from 'react-router-dom';
import Employees from './components/Employees/Employees';
import Worklog from './components/Worklog/Worklog';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

type AppPropsType = MapStateToPropsType & MapDispatchToPropsType;

class App extends Component<AppPropsType> {
    state = {
        loading: true,
        // employees: [],
        // employees: this.props.employees,
        // worklog: []
    };

    componentDidMount() {
        this.setState({
            loading: false
        });
        this.props.setEmployeesTC();
        // this.props.setWorklogTC();
    }

    render() {

        const {loading} = this.state;

        if (loading) {
            return 'Loading...';
        }

        return <Container>
            <Grid container>
                <Grid item xs={12}>
                    <div>
                        {/*<Route path={'/'} exact render={() => <Redirect to={'/employees'}/>}/>*/}


                        <Route path={'/'} exact render={() => <Employees employees={this.props.employees}/>}/>
                        <Route path={'/worklog/:id?'}  render={() => <Worklog/>}/>
                    </div>
                </Grid>
            </Grid>
        </Container>
    }
}

type MapStateToPropsType = {
    employees: Array<EmployeesType>
    worklog: Array<WorklogType>
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        employees: state.app.employees,
        worklog:state.app.worklog
    }
}
type MapDispatchToPropsType = {
    setEmployeesTC: () => void
    setWorklogTC:(id:number) => void
}
export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>(mapStateToProps, {setEmployeesTC,setWorklogTC})(App);
