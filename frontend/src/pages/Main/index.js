import React, { Component } from 'react';
import {
  FaUserCircle,
  FaUserAlt,
  FaSearch,
  FaSpinner,
  FaPlus,
  FaBookOpen,
} from 'react-icons/fa';
import { MdSchool, MdBusiness } from 'react-icons/md';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Header from '../../components/Header';
import Container from '../../components/Container';
import ContainerClient from '../../components/ContainerClient';
import ContainerCar from '../../components/ContainerCar';
import ContainerService from '../../components/ContainerService';
import ContainerStock from '../../components/ContainerStock';

import { Form, SubmitButton, SubmitButtonAdd, Input } from './styles';

export default class Main extends Component {
  state = {
    newSchool: '',
    newStudent: '',
    newEntherprise: '',
    newCourse: '',
    repositories: [],
    loading: false,
    error: false,
  };

  // Carregar os dados do localStorage
  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  // Salvar os dados do localStorage
  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleInputChangeEntherprise = e => {
    this.setState({ newEntherprise: e.target.value });
  };

  handleInputChangeSchool = e => {
    this.setState({ newSchool: e.target.value });
  };

  handleInputChangeStudent = e => {
    this.setState({ newStudent: e.target.value });
  };

  handleInputChangeCourse = e => {
    this.setState({ newCourse: e.target.value });
  };

  handleSubmit = async e => {
    try {
      e.preventDefault();

      this.setState({ loading: true });

      const { newRepo, repositories } = this.state;

      const checkRepoExists = repositories.find(repo => repo.name === newRepo);

      if (checkRepoExists) throw new Error('repo already exists');

      const response = await api.get(`/repos/${newRepo}`);

      if (response.status !== 200) throw new Error('repo not found');

      const data = {
        name: response.data.full_name,
      };

      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
        loading: false,
        error: false,
      });
    } catch (err) {
      console.log(err);
      this.setState({
        newRepo: '',
        loading: false,
        error: true,
      });
    }
  };

  render() {
    const {
      newCourse,
      newEntherprise,
      newSchool,
      newStudent,
      loading,
      error,
    } = this.state;

    return (
      <>
        <Header>
          <h1>CodeDay</h1>
          <div>
            Matheus
            <FaUserCircle />
          </div>
        </Header>
        <Container>
          <div id="stock_client">
            <ContainerStock>
              <h1>
                <MdBusiness />
                Entherprises
              </h1>

              <Form>
                <Input
                  type="text"
                  placeholder="Search by a entherprise..."
                  value={newEntherprise}
                  onChange={this.handleInputChangeEntherprise}
                  error={error}
                />

                <SubmitButton loading={loading}>
                  <Link to="/entherprises/search">
                    {loading ? (
                      <FaSpinner color="#FFF" size={14} />
                    ) : (
                      <FaSearch color="#FFF" size={14} />
                    )}
                  </Link>
                </SubmitButton>

                <SubmitButton>
                  <Link to="/entherprises">
                    <FaPlus color="#fff" size={14} />
                  </Link>
                </SubmitButton>
              </Form>
            </ContainerStock>
            <ContainerClient>
              <h1>
                <FaUserAlt />
                Student
              </h1>

              <Form onSubmit={this.handleSubmit}>
                <Input
                  type="text"
                  placeholder="Search by a student..."
                  value={newStudent}
                  onChange={this.handleInputChangeStudent}
                  error={error}
                />

                <SubmitButton loading={loading}>
                  <Link to="/students/search">
                    {loading ? (
                      <FaSpinner color="#FFF" size={14} />
                    ) : (
                      <FaSearch color="#FFF" size={14} />
                    )}
                  </Link>
                </SubmitButton>

                <SubmitButtonAdd>
                  <Link to="/clients">
                    <FaPlus color="#fff" size={14} />
                  </Link>
                </SubmitButtonAdd>
              </Form>
            </ContainerClient>
          </div>
          <div id="car_service">
            <ContainerCar>
              <h1>
                <MdSchool />
                Schools
              </h1>

              <Form onSubmit={this.handleSubmit}>
                <Input
                  type="text"
                  placeholder="Search by a school..."
                  value={newSchool}
                  onChange={this.handleInputChangeSchool}
                  error={error}
                />

                <SubmitButton loading={loading}>
                  <Link to="/schools/search">
                    {loading ? (
                      <FaSpinner color="#FFF" size={14} />
                    ) : (
                      <FaSearch color="#FFF" size={14} />
                    )}
                  </Link>
                </SubmitButton>

                <SubmitButton>
                  <Link to="/cars">
                    <FaPlus color="#fff" size={14} />
                  </Link>
                </SubmitButton>
              </Form>
            </ContainerCar>
            <ContainerService>
              <h1>
                <FaBookOpen />
                Courses
              </h1>

              <Form onSubmit={this.handleSubmit}>
                <Input
                  type="text"
                  placeholder="Search by a course..."
                  value={newCourse}
                  onChange={this.handleInputChangeCourse}
                  error={error}
                />

                <SubmitButton loading={loading}>
                  <Link to="/courses/search">
                    {loading ? (
                      <FaSpinner color="#FFF" size={14} />
                    ) : (
                      <FaSearch color="#FFF" size={14} />
                    )}
                  </Link>
                </SubmitButton>

                <SubmitButton>
                  <Link to="/services">
                    <FaPlus color="#fff" size={14} />
                  </Link>
                </SubmitButton>
              </Form>
            </ContainerService>
          </div>
        </Container>
      </>
    );
  }
}
