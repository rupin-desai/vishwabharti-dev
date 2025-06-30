import React from "react";
import BookHero from "../components/Book/BookHero";
import BookForm from "../components/Book/BookForm";
import BookingProcess from "../components/Book/BookingProcess";
import ProgramFee from "../components/Book/ProgramFee";
import Bonuses from "../components/Book/Bonuses";

const BookPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <BookHero />
      <BookingProcess />
      <ProgramFee />
      <Bonuses />
      <BookForm />
    </div>
  );
};

export default BookPage;
