import "./App.css";
import Header from "./component/Header";
import MainBoard from "./component/MainBoard";
import unsplash from "./Api/unsplash";
import { useEffect, useState } from "react";

function App() {
  const [pins, setNewPins] = useState([]);

  const getImage = term => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
    });
  };

  const onSearchSubmit = term => {
    getImage(term).then(res => {
      let results = res.data.results;

      let newPin = [...results, ...pins];

      newPin.sort((a, b) => {
        return 0.5 - Math.random();
      });
      setNewPins(newPin);
    });
  };

  const getNewPins = () => {
    let promises = [];
    let pinData = [];

    let pins = ["coding", "hacking", "Tokoyo", "Dogs", "cats", "Bali", "cars"];
    pins.forEach(pinTerm => {
      promises.push(
        getImage(pinTerm).then(res => {
          let results = res.data.results;
          pinData = pinData.concat(results);
          pinData.sort((a, b) => {
            return 0.5 - Math.random();
          });
        })
      );
      Promise.all(promises).then(() => {
        setNewPins(pinData);
      });
    });
  };
  useEffect(() => {
    getNewPins();
  }, []);

  return (
    <div className='app'>
      <Header onSubmit={onSearchSubmit} />
      <MainBoard pins={pins} />
    </div>
  );
}

export default App;
