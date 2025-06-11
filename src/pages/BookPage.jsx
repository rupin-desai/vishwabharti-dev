import React from "react";
import BookHero from "../components/Book/BookHero";
import BookPrograms from "../components/Book/BookPrograms";
import BookForm from "../components/Book/BookForm";
import BookSidebar from "../components/Book/BookSidebar";
import BookCTA from "../components/Book/BookCTA";

const BookPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <BookHero />

      {/* Programs Overview Section */}
      <BookPrograms />

      {/* Booking Form Section */}
      <section className="py-16 px-4 bg-white" id="booking-form">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-theme-dark mb-4">
              Ready to Start Your Journey?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-theme-primary to-theme-success mx-auto mb-6"></div>
            <p className="text-xl text-theme-neutral max-w-2xl mx-auto">
              Fill out the booking form below and take the first step towards
              your professional driving career.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <BookForm />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BookSidebar />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <BookCTA />
    </div>
  );
};

export default BookPage;
