import { mount } from "enzyme";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../../auth/authContext";
import { Navbar } from "../../../components/ui/NavBar";
import { types } from "../../../types/types";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

describe('Pruebas en <NavBar />', () => {
        
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Pedro'
        }
    }        

    const wrapper = mount (
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={ ['/'] }>
                <Routes>
                    <Route path="/" element={<Navbar />} />
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    afterEach( ( ) => {
        jest.clearAllMocks(); // siempre es importante limpiar los mocks de las pruenas aune en este caso no es necesario
    })

    test('debe se mostrarse correctamente ', () => {

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe('Pedro');
        
    });


    test(' debe de llamar el logout, llamar el Navigate y el dispatch con los argumentos ', () => {

        wrapper.find('button').prop('onClick')();

        expect( contextValue.dispatch ).toBeCalledWith({ 'type': types.logout });
        expect( mockNavigate ).toBeCalledWith('/login', { replace: true });

    })
    
    

})
