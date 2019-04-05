import AccordionItem, { SimpleAccordionItem } from './accordion-item';

import PropTypes from 'prop-types';
import React from 'react';

export class AccordionGroup extends React.Component {
    constructor(props) {
        super(props);
        const { showFirst } = props;

        this.state = {
            currentIndex: showFirst ? 0 : null,
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle(i) {
        const { currentIndex } = this.state;
        this.setState({
            currentIndex: currentIndex === i ? null : i,
        });
    }

    render() {
        const { items, showFirst, ...rest } = this.props;
        const { currentIndex } = this.state;

        return (
            <section {...rest}>
                {items.map((item, i) => (
                    <AccordionItem
                        {...item}
                        key={parseFloat(i.toString())}
                        isOpen={i === currentIndex}
                        toggle={() => this.toggle(i)}
                    />
                ))}
            </section>
        );
    }
}

AccordionGroup.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(SimpleAccordionItem.propTypes))
        .isRequired,
    showFirst: PropTypes.bool,
};

AccordionGroup.defaultProps = {
    showFirst: false,
};

export default AccordionGroup;
