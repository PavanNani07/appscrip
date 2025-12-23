// app/layout.js
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

export const metadata = {
  title: 'Product Store',
  description: 'A simple product store with sidebar and footer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <Header />
          <div className="content">
            <Sidebar />
            <main>{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
