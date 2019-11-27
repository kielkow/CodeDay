import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { TelaLogin } from './styles';

export default function Login() {
  return (
    <>
      <TelaLogin>
        <p id="title">
          C o d e <strong> d a y </strong>
        </p>

        <p>
          Conecte <strong>desenvolvedores</strong> com escolas{' '}
          <strong> e mude a vida dos alunos</strong>{' '}
        </p>

        <form>
          {/* <label htmlFor="email">E-MAIL *</label> */}
          <input id="name" type="name" placeholder="Digite o nome" />

          <input id="email" type="email" placeholder="Digite o seu e-mail" />

          <Link to="/main">
            <button className="btn" type="submit">
              Entrar
            </button>
          </Link>
        </form>
      </TelaLogin>
    </>
  );
}
