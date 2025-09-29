import { Header } from "../components/Header";
export function NotFoundPage() {
  return (
    <>
      <Header />
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </>
  );
}
