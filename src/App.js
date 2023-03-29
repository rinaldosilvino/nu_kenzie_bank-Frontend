import trashButton from './assets/trashButton.svg'
import HomeGroup262 from './assets/HomeGroup262.svg'
import NuKenzieWhite from './assets/NuKenzieWhite.svg'
import NuKenzieBlack from './assets/NuKenzieBlack.svg'
import './App.css';
import React,{ useState,useEffect } from 'react';
import Form from './Components/Form';
import List from './Components/List';
import TotalMoney from './Components/TotalMoney';
import Header from './Components/Header';
import { MainPage } from './Components/MainPage';
import { Alert, MainMenu } from './Components/MainMenu';
import { EmptyCard } from './Components/Card/cards';

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [items, setItems] = useState([]);
  const [filter,setFilter] = useState("")
  const [page, setPage] = useState(true);

  const removeItems = (item) => {
    const filterItems = listTransactions.filter(
      (itemCurrent) => itemCurrent.id !== item.id
    );
    setListTransactions(filterItems);
  };
  useEffect(() => {
    if(filter){
      const data = listTransactions.filter(item => {
        return item.type === filter
      })
      setItems(data)
    }else{
      setItems([...listTransactions])
    }
  },[listTransactions,filter]);

  if (page) {
    return (
      <div className="App">
        <MainPage
          HomeGroup262={HomeGroup262}
          NuKenzieWhite={NuKenzieWhite}
          setPage={setPage}
        />
      </div>
    );
  }

return (
    <div className="App">
    <Header NuKenzieBlack={NuKenzieBlack} setPage={setPage} />
      <main>
        <section className="form-section">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />

          {listTransactions.length > 0 && (
            <TotalMoney listTransactions={listTransactions} />
          )}
        </section>
        <section className="card-section">
          <MainMenu filter={filter} setFilter={setFilter}/>
          {listTransactions.length === 0 && <Alert />}
          {listTransactions.length === 0 ? (
            <EmptyCard />
          ) : (
            <List
              listTransactions={items}
              trashButton={trashButton}
              removeItems={removeItems}
            />
          )}
        </section>
      </main>
  </div>
);

}

export default App;
