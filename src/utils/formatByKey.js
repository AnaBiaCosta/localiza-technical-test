export const formatByKey = (value, key) => {
    if ( key === 'success_rate_pct' ) {
        return `${value}%`;
    }

    if ( key === 'cost_per_launch') {
        const monetaryFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        }).format(value);

        return monetaryFormat;
    }

    return value;
};
