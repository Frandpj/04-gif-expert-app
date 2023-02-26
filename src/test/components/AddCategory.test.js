import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory/>', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    // Ciclo de vida, reinicializa cada vez que se ejecuta un test
    beforeEach( () => {

        // Limpia los Mocks
        jest.clearAllMocks();
        // Reinicializa la variable
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    });

    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        // Simula un cambio en el input
        // {} tiene el valor de e (elemento)
        // El target viene en el elemento y dentro de ese target viene el value
        input.simulate('change', {target: {value}});

        expect(wrapper.find('p').text().trim()).toBe(value);
        
    })

    test('no debe de postear la información con submit', () => {
        
        // preventDefault(){} función en forma corta
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        // se ejecuta bien cuando no se ha hecho ninguna llamada
        expect(setCategories).not.toHaveBeenCalled();

    })
    
    test('debe de llamar el setCategories y limpiar la caja de texto', () => {

        const value = 'Hola Mundo';


        // 1. Simular el inputChange
        const input = wrapper.find('input');

        // Simula un cambio en el input
        // {} tiene el valor de e (elemento)
        // El target viene en el elemento y dentro de ese target viene el value
        input.simulate('change', {target: {value}});

        // 2. Similar el submit
        // preventDefault(){} función en forma corta
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        // 3. setCategories se debe de haber llamado
        // se ejecuta bien cuando se ha hecho una llamada
        expect(setCategories).toHaveBeenCalled();
        // Indica cuantas llamadas se deben de hacer
        // expect(setCategories).toHaveBeenCalledTimes(2);
        
        // 4. El valor del input debe de estar 'vacio'
        expect(wrapper.find('input').prop('value')).toBe('');

    })
    
    
    
})
