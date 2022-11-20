const styles = {
  layout: {
    color: "#1C2B42",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    width: "1200px",
  },
};

export default function Layout({ children }) {
  return (
    <div style={styles.layout}>
      <div style={styles.container}>{children}</div>
    </div>
  );
}
