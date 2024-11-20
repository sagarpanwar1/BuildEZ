import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen flex flex-col">
      {/* Logo Section */}
      <div className="p-6 flex items-center justify-center border-b border-gray-700">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-12 w-12 mb-2"
        />
        {/* <h1 className="text-2xl font-bold mt-2">Admin Panel</h1> */}
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto mt-4">
        <ul className="space-y-4 px-4">
          <li>
            <Link href="/dashboard" className="text-lg hover:text-gray-300">
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/categories"
              className="text-lg hover:text-gray-300"
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/products"
              className="text-lg hover:text-gray-300"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/admin"
              className="text-lg hover:text-gray-300"
            >
              Admin
            </Link>
          </li>
          <li>
            <Link href="/login" className="text-lg hover:text-gray-300">
              Logout
            </Link>
          </li>
        </ul>
      </nav>

      {/* Footer or Additional Section */}
      <div className="p-4 border-t border-gray-700 text-center text-gray-400">
        © 2024 BuilEz
      </div>
    </div>
  );
};

export default Sidebar;
