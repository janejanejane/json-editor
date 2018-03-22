import React from 'react';

const Instructions = () => {
    const steps = [
        {
            order: 1,
            step: 'Prepare your JSON document. (or copy/paste from somewhere)'
        },
        {
            order: 2,
            step: 'Click \'Choose a file...\' button below.'
        },
        {
            order: 3,
            step: 'Edit the values you want changed.'
        },
        {
            order: 4,
            step: 'Click \'Save Changes\' button to download your changed JSON.'
        }
    ];

    let cols = [];

    const formattedSteps = steps.map( ( item, i ) => {
        const rows = [];

        // insert all column elements
        cols.push(
            <div class="column is-half">
                <article class="message is-info">
                    <div class="message-header">
                        <p class="has-text-weight-bold">{`Step ${item.order}`}</p>
                    </div>
                    <div class="message-body">
                        {item.step}
                    </div>
                </article>
            </div>
        );

        // create rows on odd index
        if ( i % 2 !== 0 ) {
            rows.push(
                <div class="columns">
                    {cols}
                </div>
            );

            // remove existing elements
            cols = [];
        }

        return rows;
    } );

    return formattedSteps;
};

export default Instructions;