import React, { Component } from 'react';
import { FaUserCircle, FaSpinner } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';

import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Header from '../../components/Header';
import ContainerCreateClient from '../../components/ContainerCreateClient';

import { Form, Input, SubmitButton, SubmitButtonBack } from './styles';

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
        <ContainerCreateClient>
          <h1>
            <MdSchool />
            Register a school
          </h1>
          <Form>
            <Input type="text" placeholder="Name..." />
            <Input type="text" placeholder="Email..." />
            <Input type="text" placeholder="Address..." />
            <Input type="text" placeholder="Tel Number..." />

            <div>
              <SubmitButtonBack loading={loading}>
                <Link to="/main" textDecoration={null}>
                  {loading ? (
                    <FaSpinner color="#FFF" size={14} />
                  ) : (
                    <IoMdArrowRoundBack color="#FFF" size={14} />
                  )}
                </Link>
              </SubmitButtonBack>
              <SubmitButton loading={loading}>
                {loading ? <FaSpinner color="#FFF" size={14} /> : 'Save'}
              </SubmitButton>
            </div>
          </Form>
        </ContainerCreateClient>
      </>
    );
  }
}
