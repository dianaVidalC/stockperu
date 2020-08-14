import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component{

    render() {
        return (
            <div>
                <button 
                    className="square" 
                    onClick={() => this.props.clickHandler("mayor", "venta")}
                >
                    Venta mayor
                </button>
                <button
                    className="square"
                    onClick={() => this.props.clickHandler("menor", "venta")}
                >
                    Venta menor
                </button>
                <button
                    className="square"
                    onClick={() => this.props.clickHandler("mayor", "unidades")}
                >
                    Más unidades
                </button>
                <button
                    className="square"
                    onClick={() => this.props.clickHandler("menor", "unidades")}
                >
                    Más menos
                </button>
                <button
                    className="square"
                    onClick={() => this.props.clickHandler("mayor","almacen")}
                >
                    Mayor por stock
                </button>
                <button
                    className="square"
                    onClick={() => this.props.clickHandler("menor","almacen")}
                >
                    Menor por stock
                </button>
            </div>
        );
    }
    
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            order:'',
            status:''
        };
    }

    handleClick = (val, prop ) => {
        this.setState ({ order: val, status: prop });
    }

    render() {
        const ventas = [
            {
                propietario: "Juan",
                empresa:"Login EIRL",
                venta: "6500",
                unidades: "20",
                almacen: 8
            },
            {
                propietario: "Sábanas y Mantas SAC",
                empresa:"Rojo",
                venta: "650",
                unidades: "300",
                almacen: 100
            },
            {
                propietario: "Kukuli EIRL",
                empresa:"Verde",
                venta: "800",
                unidades: "100",
                almacen: 60
            }
        ];  

        let arr = ventas.slice();
        let status = this.state.status;
       
        if (this.state.order === "menor") {
            arr.sort(((a, b) => a[status] - b[status]));
        } else if (this.state.order === "mayor"){
            arr.sort(((a, b) => b[status] - a[status]));
        }
        console.log(status);
        return (
            <div>
                <div className="board">
                    <div className="board-row">
                        <p>Propietarios</p> 
                        <div className="board-row-item">
                            {arr.map((elem, i) => <div key={i}>{elem.propietario}</div>)}
                        </div>
                    </div>
                    <div className="board-row">
                        <p>Empresas</p> 
                        <div className="board-row-item">
                            {arr.map((elem, i) => <div key={i}>{elem.empresa}</div>)}
                        </div>
                    </div>
                    <div className="board-row">
                        <p>Ventas</p>
                        <div className="board-row-item">
                            {arr.map((elem, i) => <div key={i}>{elem.venta}</div>)}
                        </div>
                    </div>
                    <div className="board-row">
                        <p>Unidades</p>
                        <div className="board-row-item">
                            {arr.map((elem, i) => <div key={i}>{elem.unidades}</div>)}
                        </div>
                    </div>
                </div>
                <div className="game-info">
                    <Square clickHandler={this.handleClick} />
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
