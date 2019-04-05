import React from 'react';
import PropTypes from 'prop-types';

const ViewToggle = ({ children, hidden }) => (
    <div className={`viewtoggle${hidden ? ' viewtoggle-hidden' : ''}`}>
        {children}
    </div>
);

ViewToggle.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    hidden: PropTypes.bool.isRequired,
};

export default ViewToggle;
