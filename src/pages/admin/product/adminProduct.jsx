import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../axios";
import { AdminNavbar } from "../../../components/navbar/AdminNavbar";
import { SidebarAdmin } from "../../../components/sidebars/SidebarAdmin";

const AdminProduct = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 4;

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.get("/admin/product");

        setProducts(response.data);
        console.log(response.data);
        // console.log(products.category);

        const category = await api.get("/admin/category");
        // console.log(category);

        setCategory(category.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, [refresh]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;

    try {
      const res = await api.delete(`/admin/product/${id}`);
      //   alert(res.data.message);
      setRefresh(true);
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  // pagenation logic
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.round(products.length / productPerPage);
  return (
    <>
      <AdminNavbar />
      <div className="flex">
        <SidebarAdmin />
        <div className="p-6 font-sans bg-white w-full">
          <h2 className="text-2xl mb-4 text-gray-800 font-bold text-center pt-0">
            PRODUCTS
          </h2>

          <button
            onClick={() => navigate("/admin/addProduct")}
            className="font-bold mb-4 px-2  py-2 bg-[#98b880] text-white rounded hover:bg-green-700 transition-colors"
          >
            + Add Product
          </button>

          <div className="overflow-x-auto bg-slate-100">
            <table className="w-full border-collapse b  order border-gray-200">
              <thead>
                <tr className="bg-[#98b880] text-white">
                  <th className="p-2 border">No.</th>
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Price</th>
                  <th className="p-2 border">Category</th>
                  <th className="p-2 border">Image</th>
                  <th className="p-2 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentProducts.length > 0 ? (
                  currentProducts.map((prod, index) => (
                    <tr
                      key={prod._id}
                      className="hover:bg-slate-200 transition-colors text-gray-700"
                    >
                      <td className="p-2 border text-center">{prod._id}</td>
                      <td className="p-2 border">{prod.product_name}</td>
                      <td className="p-2 border">${prod.price}</td>
                      <td className="p-2 border">{prod.category.name}</td>
                      <td className="p-2 border text-center">
                        {prod.image ? (
                          <img
                            src={`http://13.201.21.101/api${prod.image}`}
                            alt={prod.product_name}
                            className="w-16 h-16 object-cover rounded"
                          />
                        ) : (
                          "—"
                        )}
                      </td>
                      <td className="p-2 border flex gap-2 justify-center">
                        <button
                          onClick={() =>
                            navigate(`/admin/adminPutProduct/${prod._id}`)
                          }
                          className="px-2 py-1 bg-[#98b880] text-white rounded hover:bg-green-700 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(prod._id)}
                          className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-800 transition-colors"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center p-4 text-gray-500">
                      No products found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-5">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 rounded mx-2 disabled:opacity-50"
            >
              Prev
            </button>
            <span className="font-bold text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 rounded mx-2 disabled:opacity-50"
            >
              Next
            </button>
          </div>
          <div className="text-center font-bold py-6">
            <p
              className="text-lg cursor-pointer hover:underline transition-transform duration-300 hover:scale-105"
              onClick={() => {
                navigate("/admin");
              }}
            >
              Back to Dashboard
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProduct;
