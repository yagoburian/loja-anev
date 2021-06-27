import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Button, Container, Typography} from "@material-ui/core";
import './style.css';


const Header = () => {
  const [nome, setNome] = useState(null);

  useEffect(() => {
    const nomeUsuario = localStorage.getItem('nome');
    if (nomeUsuario) {
      setNome(nomeUsuario)
    } else {
      setNome(null)
    }
  }, [])

  return (
    <Container className="header">
      <Typography variant="h4">
        {nome ? `Bem vindo, ${nome}` : 'Bem vindo a nossa loja !'}
      </Typography>
      {nome ? (
        <Link to="cadastrar" style={{textDecoration: 'none'}}>
          <Button variant="contained" className="corlogin espaco">
            Cadastrar produto
          </Button>
        </Link>
      ) : ''}
      <Link to={nome ? 'sair' : 'login'} style={{textDecoration: 'none'}}>
        <Button variant="contained" className="corlogin espaco">
          {nome ? 'Sair' : 'Login'}
        </Button>
      </Link>
    </Container>
  )
}

export default Header;