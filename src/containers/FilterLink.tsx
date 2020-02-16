import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../redux/actions/index';

const Link = ({ active, children, onClick }: any) => (
    <button
        onClick={onClick}
        disabled={active}
        style={{
            marginLeft: '4px',
        }}
    >
        {children}
    </button>
)

const mapStateToProps = (state: any, ownProps: any) => ({
    active: ownProps.filter === state.setFilter
})

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    console.log(ownProps);
    return {
        onClick: () => dispatch(setFilter(ownProps.filter))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)
