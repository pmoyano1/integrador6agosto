const React = require('react');
const HomeView = require('../view');
const { render, screen } = require('@testing-library/react');
const mockProducts = require('../../../../utils/mockProductsEI');

describe('Ejercicio 4 - La View de Home', () => {
    let component;
    const i18n = { gettext: text => text };
    beforeEach(() => {
        component = render(<HomeView i18n={i18n} title='Productos' products={[]}/>);
    });

    it('1) Renderiza', () => {
        const { asFragment } = component;
        expect(asFragment()).toMatchSnapshot();        
    });

    it('2) Muestra en pantalla un <h2> con el string que le pasemos la prop `title`', () => {
        const title = screen.getByRole('heading', { level: 2 });
        expect(title).toBeInTheDocument();
    });
});

xdescribe('Ejericitación Integradora - La View de Home', () => {
    let component;
    const i18n = { gettext: text => text };
    beforeEach(() => {
        component = render(<HomeView i18n={i18n} title='Productos' products={mockProducts}/>);
    });

    it('1) Renderiza', () => {
        const { asFragment } = component;
        expect(asFragment()).toMatchSnapshot();        
    });

    it('2) Renderiza una lista de productos', () => {
        const products = screen.getAllByRole('listitem');
        expect(products.length).toBe(10);
    });
});
