export default function Main(props) {
  const { isLogged } = props
  return (
    <>
      <Header isLogged={isLogged} />
      <main>
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Footer />
      </main>
    </>
  )
}
