import { Link } from "react-router-dom";

export default function Header() {
  return (
<<<<<<< HEAD
    <header className="w-full h-[70px] flex items-center justify-between px-8 bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg">
      <div className="flex space-x-6">
        <Link to="/" className="text-white text-lg font-semibold hover:text-gray-200 transition">Home</Link>
        <Link to="/items" className="text-white text-lg font-semibold hover:text-gray-200 transition">Products</Link>
        <Link to="/gallery" className="text-white text-lg font-semibold hover:text-gray-200 transition">Gallery</Link>
        <Link to="/contact" className="text-white text-lg font-semibold hover:text-gray-200 transition">Contact</Link>
      </div>
      <Link to="/login" className="text-white text-lg font-semibold bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-700 transition">Login</Link>
=======
    <header className="w-full  h-[100px] shadow-xl flex justify-center items-center relative bg-accent text-white">
      <img src="/logo.png" alt="logo" className="w-[100px] h-[100px] object-cover border-[3px] absolute left-1 rounded-full" />
      <Link to="/" className="text-[25px] font-bold m-1">
        Home
      </Link>
      <Link to="/contact" className="text-[25px] font-bold m-1">
        contact
      </Link>
      <Link to="/gallery" className="text-[25px] font-bold m-1">
        gallery
      </Link>
      {/* items */}
      <Link
        to="/items"
        className="text-[25px] font-bold m-1"
      >Items</Link>
>>>>>>> 9b761eac4d619eebb728cd38223af4994ed43643
    </header>
  );
}
