import styles from "./SobreMim.module.css";
import PostModelo from "../../components/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpeg";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
      <h3 className={styles.subtitulo}>Olá, eu sou a Ingrid!</h3>

      <img
        src={fotoSobreMim}
        alt="Foto Ingrid"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Oi, tudo bem? Fico muito feliz em te ver por aqui! Seja bem-vindo(a) ao
        meu espaço 😊
      </p>

      <p className={styles.paragrafo}>
        Sou uma profissional em transição de carreira, apaixonada por tecnologia
        e pelo constante aprendizado que essa área proporciona. Ao explorar o
        universo da tecnologia, descobri uma nova paixão.
      </p>

      <p className={styles.paragrafo}>
        Atualmente, sou estudante de Análise e Desenvolvimento de Sistemas e me
        dedico intensamente ao aprendizado de desenvolvimento front-end e
        ferramentas DevOps. Estou participando de formações em plataformas como
        Oracle ONE, Alura, Hackone Cloud, entre outras, e já concluí diversos
        cursos que fortaleceram minha base técnica, como JavaScript, ReactJS,
        HTML, CSS, lógica de programação e metodologias ágeis.
      </p>

      <p className={styles.paragrafo}>
        Além disso, tenho participado de desafios e competições, como as
        Olimpíadas Azure, onde desenvolvi habilidades práticas em infraestrutura
        na nuvem e soluções escaláveis. Essa jornada tem sido enriquecida pela
        minha curiosidade, raciocínio lógico e capacidade criativa, que são meus
        principais pontos fortes.
      </p>

      <p className={styles.paragrafo}>
        Acredito que a tecnologia é uma ferramenta transformadora, e meu
        objetivo é continuar aprendendo, me adaptando às novas demandas do
        mercado e contribuindo com soluções inovadoras. No futuro, vislumbro uma
        carreira sólida em desenvolvimento front-end e cloud computing,
        combinando minhas habilidades técnicas com minha paixão por resolver
        problemas e aprender continuamente.
      </p>

      <p className={styles.paragrafo}>
        Obrigada por dedicar um tempinho para conhecer mais sobre mim. Se quiser
        trocar ideias ou saber mais, fique à vontade para entrar em contato.
        Vamos juntos nessa jornada de aprendizado e transformação! ✨
      </p>
    </PostModelo>
  );
}
