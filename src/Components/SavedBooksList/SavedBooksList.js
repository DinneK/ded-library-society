import React, { useState, useEffect } from "react";
// import { Route, Switch } from "react-router-dom";
import "./SavedBooksList.css";
import BookContainer from "../BooksContainer/BooksContainer";
import SingleBookView from "../SingleBookView/SingleBookView";
import Header from "../Header/Header";
import { fetchTrending } from "../../apiCalls";
import saveBookSlice from "../../features/saveBook/saveBookSlice";

console.log(saveBookSlice);

const SavedBooksList = () => {
  // console.log(savedBooks);
};

export default SavedBooksList;
