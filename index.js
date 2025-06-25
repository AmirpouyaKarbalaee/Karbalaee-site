import Head from 'next/head';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <Head>
        <title>Karbalaee - Luxury Watches</title>
      </Head>

      <header className="p-6 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-2xl text-gold font-serif tracking-widest">Karbalaee</h1>
        <nav className="space-x-4 text-sm uppercase">
          <a href="#shop" className="hover:text-gold">Shop</a>
          <a href="#about" className="hover:text-gold">About</a>
          <a href="#contact" className="hover:text-gold">Contact</a>
          <a href="#signin" className="hover:text-gold">Sign In</a>
        </nav>
      </header>

      <section className="p-12 text-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1518546305927-5a555bb702b4?auto=format&fit=crop&w=1350&q=80)' }}>
        <h2 className="text-4xl md:text-5xl font-serif text-gold drop-shadow-lg">Timeless Luxury</h2>
        <p className="mt-4 text-lg">Discover our handcrafted collection of exquisite watches</p>
      </section>

      <section id="shop" className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((id) => (
          <div key={id} className="bg-gray-900 p-4 rounded-xl shadow-lg">
            <img src={`https://source.unsplash.com/400x300/?luxury,watch,${id}`} alt="Luxury Watch" className="rounded-lg mb-4" />
            <h3 className="text-lg text-gold font-serif">Luxury Watch {id}</h3>
            <p className="text-sm text-gray-400">Elegant, handcrafted design with precision movement.</p>
            <p className="mt-2 text-gold font-bold">$14,990</p>
            <button className="mt-4 w-full border border-gold text-gold py-1 rounded hover:bg-gold hover:text-black transition">Add to Cart</button>
          </div>
        ))}
      </section>

      <section id="about" className="p-10 bg-black border-t border-gray-800 text-center">
        <h2 className="text-2xl font-serif text-gold">About Karbalaee</h2>
        <p className="mt-4 max-w-xl mx-auto text-gray-400">
          Karbalaee is a signature brand crafted for the exceptional few. Every piece represents timeless elegance and unmatched craftsmanship.
        </p>
      </section>

      <section id="contact" className="p-10 bg-black border-t border-gray-800 text-center">
        <h2 className="text-2xl font-serif text-gold">Contact Us</h2>
        <p className="mt-4 text-gray-400">Reach out via email at karbalaee.amirpouya2020@gmail.com</p>
      </section>

      <footer className="p-6 text-center border-t border-gray-800 text-sm text-gray-500 italic">
        <span className="text-gold font-script text-lg block">“A Signature Brand by Karbalaee”</span>
        &copy; 2025 Karbalaee. All rights reserved.
      </footer>
    </main>
  );
}
