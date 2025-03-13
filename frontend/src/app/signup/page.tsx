import Image from "next/image"
import Link from "next/link"
import logoImg from '../../../public/logo.svg'
import styles from '../page.module.scss'


export default function Signup(){
    return(
        <>
        <div className={styles.containerCenter}>
        <Image
          src={logoImg}
          alt="logo da pizzaria"
        />
      
      <section className={styles.login}>
        <form>
          <input
            type="text"
            required
            name="name"
            placeholder="Digite seu nome...."
            className={styles.input}
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Digite seu e-mail...."
            className={styles.input}
          />
          <input
            type="password"
            required
            name="password"
            placeholder="**************"
            className={styles.input}
          />

          <button type="submit" className={styles.button}>
            Cadastrar
          </button>

        </form>

        <Link href="/" className={styles.text}>
        Já possui uma conta? Faça o login
        </Link>

      </section>
      </div>
        
        </>
    )
}