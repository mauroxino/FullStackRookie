import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavBar } from "./components/Navbar";
import { ProductList } from "./components/ProductList";
import { EditProduct } from "./components/EditProduct";
import { CreateProduct } from "./components/CreateProduct";
import { Notfound } from "./components/Notfound";



export function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/add" component={CreateProduct} />
        <Route exact path="/edit/:id" component={EditProduct} />
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
}
