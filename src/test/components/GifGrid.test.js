import React from 'react'
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => {

    const category = 'Haikyuu';

    test('debe de mostrar el componente correctamente', () => {

        // Cuando se llame useFetchGifs dentro del componente retorna el valor
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} />);
        
        expect(wrapper).toMatchSnapshot();

    })

    test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {

        const  gifs = [{
                id: 'ABC',
                url: 'https://localhost/cualquiera/cosa.jpg',
                title: 'Cualquier cosa'
            },
            {
                id: '123',
                url: 'https://localhost/cualquiera/cosa.jpg',
                title: 'Cualquier cosa'
            }
        ];

        // Se manda los valores con mock
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />);

        // expect(wrapper).toMatchSnapshot();

        expect(wrapper.find('p').exists()).toBe(false);

        // Selecciona el elemento del componente
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
        
    })
    
    
    
})
