import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";
import AllMobile from "./AllMobile";
import Foot from "./Foot";
import Accountsetting from "./Accountsetting";
import Profile from "./Profile";
import Changepassword from "./Changepassword";
import AddressBook from "./AddressBook";
import Wishlist from "./Wishlist";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" bg-gray-200 flex flex-col items-center justify-center">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/product-detail/:slug" element={<ProductCard />} />
        <Route path="/AllMobile" element={<AllMobile />} />
        {/* <Route path="/Setting" element={<Accountsetting/>}/> */}
        <Route
          path="/setting"
          element={
            <Accountsetting>
              <Profile />
            </Accountsetting>
          }
        />
        <Route
          path="/setting/change-password"
          element={
            <Accountsetting>
              <Changepassword />
            </Accountsetting>
          }
        />
        <Route
          path="/setting/address-book"
          element={
            <Accountsetting>
              <AddressBook/>
            </Accountsetting>
          }
        />
        <Route
          path="/setting/wish-list"
          element={
            <Accountsetting>
              <Wishlist/>
            </Accountsetting>
          }
        />
      </Routes>
      <Foot />
    </div>
  );
}

export default App;
