import React from 'react'

export default function Footer() {
    return (
      <footer className="bg-orange-100 mt-5 py-3">
        <div className="max-w-6xl   px-2">
          <p className="text-orange-600 text-center flex justify-center items-center">
            © {new Date().getFullYear()} Jaimin Jikadra. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  