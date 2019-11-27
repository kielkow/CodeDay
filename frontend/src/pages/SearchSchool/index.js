import React, { Component } from 'react';
import { FaUserCircle, FaSpinner } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Header from '../../components/Header';
import { List, SubmitButtonBack } from './styles';

export default class Car extends Component {
  state = {
    loading: false,
  };

  // Carregar os dados do localStorage
  componentDidMount() {}

  // Salvar os dados do localStorage
  componentDidUpdate() {}

  handleInputChange = e => {
    e.preventDeafult();
  };

  handleSubmit = async e => {
    e.preventDeafult();
  };

  render() {
    const { loading } = this.state;
    return (
      <>
        <Header>
          <h1>CodeDay</h1>
          <div>
            Matheus
            <FaUserCircle />
          </div>
        </Header>

        <List>
          <li>Escola Estadual Fernão Dias Paes</li>
          <li>EE Carlos Maximiliano Pereira Dos Santo</li>
          <li>Escola Estadual Rodrigues Alves</li>
          <li>Escola de Educação Básica Alfredo Dalfovo</li>
          <li>EEB Pref. Alfredo Joao Krieck</li>
        </List>

        <SubmitButtonBack loading={loading}>
          <Link to="/main" textDecoration={null}>
            {loading ? (
              <FaSpinner color="#FFF" size={14} />
            ) : (
              <IoMdArrowRoundBack color="#FFF" size={14} />
            )}
          </Link>
        </SubmitButtonBack>
      </>
    );
  }
}
