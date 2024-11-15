import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./comp/pages/Dashboard";
import LoginPage from "./comp/pages/LoginPage";
import SignupPage from "./comp/pages/SignupPage";
import AddCategory from "./comp/categories/Addcategories";
// import EditCategory from "./comp/categories/EditCategory";
import CategoryList from "./comp/categories/CategoryList";
import AddProduct from "./comp/products/Addproducts";
// import ProductList from "./comp/products/ProductList";
import HomePage from "./comp/Pages/HomePage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/HomePage" />} />

        {/* Authentication Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

         {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/categories" element={<CategoryList />} />
        <Route path="/dashboard/categories/add" element={<AddCategory />} />
        <Route path="/dashboard/products/add" element={<AddProduct />} />


        {/* page routes  */}
        <Route path="/HomePage" element={<HomePage />} />


        {/* Commented Routes */}
        {/* <Route path="/dashboard/categories/edit/:id" element={<EditCategory />} /> */}
        {/* <Route path="/dashboard/products" element={<ProductList />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
