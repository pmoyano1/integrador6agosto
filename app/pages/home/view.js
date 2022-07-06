const React = require('react');
const PropTypes = require('prop-types');
const Head = require('nordic/head');
const MeliGA = require('nordic/analytics/meli-ga');
const MelidataTrack = require('nordic/melidata/melidata-track');
const Script = require('nordic/script');
const serialize = require('serialize-javascript');
const { injectI18n } = require('nordic/i18n');

function View(props) {
const { i18n, title, products } = props;
const preloadedState = {
    i18n,
    title,
    products
};

return (
    <div className="demo">
        <MeliGA
            section="universal"
            page="test"
        />

        <MelidataTrack path="/demo" event_data={{ demo: 'data' }} />

        <Head>
            <title>
            {i18n.gettext('Home Page')}
            </title>
        </Head>

        <Script>
            {`
            window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })};
            console.log('Demo page is loaded!');
            `}
        </Script>
        <Script src="vendor.js" />
        <Script src="home.js" />

        <h2>{title}</h2>
        <ul>
            {
                products.map(p => <li key={p.id}>{p.title}</li>)
            }
        </ul>

    </div>
);
}

View.propTypes = {
i18n: PropTypes.shape({
    gettext: PropTypes.func.isRequired,
}).isRequired
};

module.exports = injectI18n(View);
