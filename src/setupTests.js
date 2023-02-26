// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom';

// Importa enzyme
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// Importa enzyme to json
import {createSerializer} from 'enzyme-to-json';

// Configura enzyme
Enzyme.configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));