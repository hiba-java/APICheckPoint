
import './App.css';
import ListCategorie from './components/ListCategorie';
import ArticleForm from './components/ArticleForm';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import UpdateArticle from './components/UpdateArticle';
import Search from './components/Search';

function App() {
  const [text, setText] = useState("");

  return (
   <>
   <div className ="App">
   <Search handleText = {setText}/>
   </div>
    <Routes>
    <Route path = {"/"} element={<ListCategorie text={text}/>} />
      <Route path = {"listArticles"} element={<ListCategorie text={text}/>} />
      <Route path = {"NewArticle"} element={<ArticleForm/>} />
      <Route path = {"UpdateArticle"} element={<UpdateArticle />} />
    </Routes>
  
  
   </>
  );
}

export default App;
