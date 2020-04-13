const settings = {
    db: {
        url: '//' + window.location.hostname + (window.location.hostname == 'localhost'? ':8000': ''),
        endpoint: {
            basket:'api/basket',
        },
    },
};

export default settings;