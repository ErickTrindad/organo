import "./CampoTexto.css";

interface CampoTextoProps {
  label: string;
  valor: string;
  obrigatorio?: boolean;
  placeholder: string;
  aoAlterado: (valor: string) => void;
  tipo?: "text" | "password" | "date" | "email" | "number";
}

const CampoTexto = ({
  aoAlterado,
  label,
  obrigatorio = false,
  placeholder,
  valor,
  tipo = "text",
}: CampoTextoProps) => {
  const placeholderModificada = `${placeholder}...`;

  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholderModificada}
        type={tipo}
      />
    </div>
  );
};

export default CampoTexto;
