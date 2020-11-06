const superagent = require('superagent');
const config = require('./config.json');
//
const fetch_pic = async () => {
    const Url_brows = `${config.url}mars&number=3`;
    try {
        const deckResponse = await superagent.get(Url_brows);
        return deckResponse.body;
    } catch (error) {
        return error;
    }
};

const search_pic = async (searck_key) => {
    const url_search = `${config.url}${searck_key}&number=3`;

    try {
        const drawResponse = await superagent.get(url_search);
        return drawResponse.body;
    } catch (error) {
        return error;
    }
};

// export these functions so they can be used
module.exports = {
    search_pic,
    fetch_pic
}
