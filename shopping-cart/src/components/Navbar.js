import Carro from "./Carro";

const styles = {
  navbar: {
    height: "70px",
    marginBottom: "30px",
    // backgroundColor: "#971E8B",
    color: "#000",
    boxShadow: "0 2px 3px rgba(0, 0, 0, 0.10)",
    display: "flex",
    position: "relative",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 80px",
  },
};

export default function Navbar({ item, car }) {
  return (
    <nav style={styles.navbar}>
      <h3>Tienda</h3>
      <Carro item={item} car={car}/>
    </nav>
  );
}
