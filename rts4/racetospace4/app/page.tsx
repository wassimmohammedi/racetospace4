import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div style={styles.page}>
      <Navbar />
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    width: "100%",

    backgroundImage: "url('/images/slide1.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
};