import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-blue-100 mt-5 py-3">
      <div className="max-w-6xl mx-auto px-2">
        <p className="text-blue-600 text-center">
          © {new Date().getFullYear()} Jaimin Jikadra. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
