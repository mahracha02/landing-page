import React, { useEffect, useState } from "react";

const FakeCounter = ({ variant}) => {
  const [stock, setStock] = useState(94); // Stock initial
  const [timeLeft, setTimeLeft] = useState(3040); // Temps initial en secondes (5 minutes)

  useEffect(() => {
    // Diminuer le stock aléatoirement toutes les 5-10 secondes
    const stockInterval = setInterval(() => {
      setStock((prevStock) => Math.max(prevStock - Math.floor(Math.random() * 3), 7)); // Ne descend pas en dessous de 1
    }, Math.random() * 5000 + 5000);

    // Compte à rebours
    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(stockInterval);
      clearInterval(timerInterval);
    };
  }, []);

  // Convertir le temps restant en format mm:ss
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

 // Rendu basé sur la variante
  if (variant === "header") {
    return (
      <div className="bg-primary text-white py-3 px-4 d-flex justify-content-between align-items-center shadow">
        <div className="d-flex align-items-center">
          <span className="fs-4 fw-bold me-2">🚚</span>
          <span className="fs-5 fw-medium">Livraison gratuite pour les commandes aujourd'hui !</span>
        </div>
        <div className="bg-danger text-white rounded-pill py-2 px-4 d-inline-block">
          <span className="fw-bold fs-6">Restant :</span>{" "}
          <span className="fw-bold fs-5">{stock}</span> montres 🕒{" "}
          <span className="fw-bold">{formatTime(timeLeft)}</span>
        </div>
      </div>
    );
  }

  if (variant === "form") {
    return (
      <div className="bg-danger text-white rounded-pill py-3 px-5 d-inline-block shadow-lg">
        <p className="mb-1 fs-5 fw-bold">
          🌟 Dépêchez-vous ! <span className="text-warning">{stock}</span> montres restantes ! 🔥
        </p>
        <p className="mb-0">
          Offre valable encore <strong className="text-warning">{formatTime(timeLeft)}</strong> ⏳
        </p>
      </div>
    );
  }

return null;
};

export default FakeCounter;
