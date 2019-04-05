import React from 'react';

export default () => (
    <div className="Card " data-type="print">
        <div className="Card__heroBlock" />
        <div className="Card-content">
            <div className="Card__header">
                <h3 className="Card__title">Print</h3>
                <img
                    className="card-img-top ezimage-field"
                    src="https://www.com/var/the/storage/images/media/images/compressed-product-images/december-2017-product-images/print-december-2017/5566971-5-eng-GB/Print-December-2017.png"
                    alt=""
                />
            </div>
            <div className="Card__block">
                <p className="card-text card-text--highlight" />
                <p className="card-text">
                    <span className="ezstring-field">Weekly print edition</span>
                </p>

                <p className="card-text"> Free  notebook</p>
            </div>
            <div className="Card__footer">
                <span className="Offer__label--intro">Introductory offer</span>
                <p className="Offer__briefProp">
                    <span>12&nbsp;weeks for&nbsp;only £12</span>
                </p>

                <a
                    className="Btn--primary is-BlockLevel"
                    href="https://test.com/hatch/option/p/503/o/201626/oi/201627/j/216968"
                    data-snowplow-type="product"
                    data-snowplow-id="501"
                    data-snowplow-name="regular|print"
                    data-snowplow-object="{
                       'id':501,
                       'name':'regular|print',
                       'description': 'print test of content',
                       'category': 'test',
                       'variants': [{
                           'product_id':501,
                           'type': 'duration',
                           'name': '12W',
                           'value': {
                               'display_gross': '12.00'
                           }
                       },{
                           'product_id':501,
                           'type': 'pay_frequency',
                           'name': '12W'
                       }],
                       'attributes': {
                           'selection': '',
                           'class': 'individual',
                           'type': 'regular',
                           'source': 'edotcom'
                       },
                       'value': {
                           'display_gross': '12.00'
                       }
                    }"
                >
                    Subscribe now
                </a>
                <hr />
                <div className="card-option">
                    <h2>Student and gift options available</h2>
                </div>
            </div>
        </div>
    </div>
);
