import styles from "./Register.module.css";

import { useState } from "react";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [cpf, setCpf] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Cadastre-se</h1>
      <form>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuário"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
          />
        </label>
        <label>
          <span>CPF:</span>
          <input
            type="text"
            name="cpf"
            required
            placeholder="CPF"
            onChange={(e) => setCpf(e.target.value)}
            value={cpf}
          />
        </label>
        <label>
          <span>Telefone:</span>
          <input
            type="tel"
            name="telefone"
            required
            placeholder="Telefone"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button>Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;
