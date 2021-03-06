import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AppRootStateType} from './redux/store';
import {Redirect, Route, Switch} from 'react-router-dom';
import Employees from './components/Employees/Employees';
import Worklog from './components/Worklog/Worklog';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import PageNotFound from './components/404/PageNotFound';
import {setEmployeesTC} from './redux/employeesReducer';
import {setIntersectionWorklogTC} from './redux/worklogReducer';


type AppPropsType = MapStateToPropsType & MapDispatchToPropsType;

class App extends Component<AppPropsType> {
    state = {
        loading: true,
    };

    componentDidMount() {
        this.setState({
            loading: false
        });
        this.props.setEmployeesTC();
        this.props.setIntersectionWorklogTC();
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
                        <Switch>
                            <Route path={'/'} exact render={() => <Employees/>}/>
                            <Route path={'/worklog/:id?'} render={() => <Worklog/>}/>
                            <Route path={'/404'} render={() => <PageNotFound/>}/>
                            <Route path={'*'} render={() => <Redirect to={'/404'}/>}/>
                        </Switch>
                    </div>
                </Grid>
            </Grid>
        </Container>
    }
}

type MapStateToPropsType = {}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        employees: state.employees.employees,
    }
}
type MapDispatchToPropsType = {
    setEmployeesTC: () => void
    setIntersectionWorklogTC: () => void
}
export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>(null, {
    setEmployeesTC,
    setIntersectionWorklogTC
})(App);


