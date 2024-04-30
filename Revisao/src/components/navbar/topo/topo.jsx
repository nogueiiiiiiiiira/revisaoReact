import './style.css';
import { useContext } from 'react';
import { NavBarContext } from '../../../App';

export default function Topo(){
    const context = useContext(NavBarContext);

    return(
        <div>
            <h1>Página seleciona: {context.rota}</h1>
        </div>
    );
}