import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      clearInterval(countdownInterval);
      navigate("/");
    }, 3000);

    return () => {
      clearInterval(countdownInterval);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div
      style={{
        position: "relative",
        zIndex: 10,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        color: "white",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Página no encontrada</h1>
      <p>Redireccionando al inicio en {countdown} segundos...</p>
    </div>
  );
};

export default ErrorPage;
