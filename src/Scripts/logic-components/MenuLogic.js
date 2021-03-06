import { db } from "../Firebase/firebase-config.js";

//Components
import MenuPage from "../../Pages/MenuPage.jsx";

import { React, useEffect, useState } from "react";

export default function MenuLogic(props) {
  const [items, setItems] = useState([]);

  const getLinks = () => {
    db.collection(props.dbName).onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItems(docs);
      console.log(docs);
    });
  };

  useEffect(() => {
    getLinks();
  }, []);

  return <MenuPage items={items} />;
}
