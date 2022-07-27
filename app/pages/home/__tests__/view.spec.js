const React = require('react');
const HomeView = require('../view');
const { render, screen } = require('@testing-library/react');
const mockProducts = require('../../../../tests/utils/products.json');

describe('Ejercicio 4 - La View de Home', () => {
    let component;
    const i18n = { gettext: text => text };
    
    beforeEach(() => {
        component = render(<HomeView i18n={i18n} message='Hello World' products={[]}/>);
    });

    it('1) Renderiza', () => {
        const { asFragment } = component;
        expect(asFragment()).toMatchSnapshot();        
    });

    it('2) Muestra en pantalla un <h2> con el string que le pasemos a la prop `message`', () => {
        const message = screen.getByRole('heading', { level: 2 });
        expect(message).toBeInTheDocument();
        expect(message.innerHTML).toBe('Hello World');
    });
});

xdescribe('Ejercitación Integradora - La View de Home', () => {
    let component;
    const i18n = { gettext: text => text };

    beforeEach(() => {
        component = render(<HomeView i18n={i18n} message='Hello World' products={mockProducts}/>);
    });

    it('1) Renderiza', () => {
        const { asFragment } = component;
        expect(asFragment()).toMatchSnapshot();        
    });

    it('2) Renderiza una lista de productos', () => {
        const products = screen.getAllByRole('listitem');
        expect(products[0]).toHaveTextContent(/motorola/i);
        expect(products.length).toBe(10);
    });
});
