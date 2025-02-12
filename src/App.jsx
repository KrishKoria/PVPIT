import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/auth";
import Navbar from "./components/Navbar.jsx";
import Slider from "./components/Slider.jsx";
import data from "./data/data.json";
import Footer from "./components/Footer.jsx";
import { Form } from "./components/Form.jsx";
import Offers from "./components/Offers.jsx";
import Heading from "./components/Heading.jsx";
import LogIn from "./components/LogIn.jsx";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const { displayName, email, photoURL } = currentUser;
        setUser({ displayName, email, photoURL });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        setUser({ displayName, email, photoURL });
      })
      .catch((error) => console.log(error));
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch((error) => console.log(error));
  };

  return (
    <BrowserRouter>
      <Navbar user={user} handleLogin={handleLogin} handleLogout={handleLogout} />
      <main>
        {user && <p style={{ textAlign: "center", fontSize: "18px" }}>Welcome, {user.displayName}!</p>}
        <Routes>
          <Route path="/PVPIT/form" element={<Form />} />
          <Route path="/PVPIT/signup" element={<LogIn />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      {window.location.pathname !== "/PVPIT/form" && <Slider start={data.banner.start} />}
      <Heading text={"Our Investors"} />
      <Offers offer={data.offer} />
      <Footer footer={data.footer} />
    </BrowserRouter>
  );
}

const Home = () => <div>Welcome to the homepage</div>;

export default App;

