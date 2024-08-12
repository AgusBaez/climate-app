import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, resetCodition: props.resetCodition }; // Estado inicial del estado
  }

  static getDerivedStateFromError(error) {
    // Metodo que encuentra errores, si algun hijo muere, retorna el error
    console.log(error);

    return { hasError: true };
  }

  static getDerivedStateFromProps(props, state) {
    // Identifica si cambia una prop y renderizala si no da errores
    if (props.resetCodition !== state.resetCodition) {
      return { hasError: true, resetCodition: props.resetCodition };
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback; // Va a retornar la UI con error
    }

    return this.props.children; // Va a devolver el hijo sanito
  }
}

