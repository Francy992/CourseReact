import Hero from "./components/heroe";
import { useState, useEffect } from "react";
import heroService from "./services/heroService";


const App = () => {
  const [hero, setHero] = useState([]);

  useEffect(() => {
    console.log("effect");
    heroService.getAll()
      .then(data => {
        setHero(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const addHero = (e) => {
    e.preventDefault();
    const heroObj = {
      name: newHero, date: Date.UTC, important: Math.random > 0.5, id: hero.length + 1
    }
    console.log(heroObj);
    heroService.create(heroObj)
      .then(data => {
        setHero(hero.concat(data));
        setNewHero("");
      })
      .catch(error => {
        console.log(error);
      });
  }

  const [newHero, setNewHero] = useState("");
  const handleHeroChange = e => {
    console.log(e.target.value);
    setNewHero(e.target.value);
  }

  const [showAll, setShowAll] = useState(true);
  const heroesToShow = showAll ? hero : hero.filter(x => x.important);
  const rows = heroesToShow.map(heroe =>
    <Hero key={heroe.id} hero={heroe} toggleImportant={() => toggleImportance(heroe.id)} deleteHero = {() => deleteHero(heroe.id)}></Hero>
  )

  const toggleImportance = id => {
    const heroToChange = hero.find(x => x.id === id);
    heroToChange.important = !heroToChange.important;
    heroService.update(heroToChange)
      .then(() => {
        setHero(hero.map(h => h.id !== id ? h : heroToChange));
      })
      .catch(error => {
        console.log(error);
      });
  }

  const deleteHero = id => {
    heroService.delete(id).then(() => {
      const newHero = hero.filter(h => h.id !== id)
      setHero(newHero);
    })
    .catch(error => {
      console.log(error);
    });
  }


  return (
    <div className="App">
      <h1>Heroes</h1>
      <button onClick={() => setShowAll(!showAll)}> Show {showAll ? 'important' : 'All'}</button>
      <ul>
        {rows}
      </ul>
      <form onSubmit={addHero}>
        <input type="text" placeholder="Hero name" value={newHero} onChange={handleHeroChange}></input>
        <button type="submit">Add new Hero</button>
      </form>
    </div>
  );
}


// https://www.sung.codes/blog/2018/setting-react-hooks-states-in-a-sync-like-manner
// function useAsyncState(initialValue) {
//   const [value, setValue] = useState(initialValue);
//   const setter = x =>
//     new Promise(resolve => {
//       setValue(x);
//       resolve(x);
//     });
//   return [value, setter];
// }


// function App() {
//   const [count, setCount] = useAsyncState(0);
//   const [message, setMessage] = useAsyncState("");

//   async function increment() {
//     const res = await setCount(count + 1);
//     console.log("res", res);
//     setMessage(`count is ${res}`);
//   }

//   function decrement() {
//     setCount(count - 1);
//     setMessage(`count is ${count}`);
//   }

//   return (
//     <div className="App">
//       <h1>Update Count!</h1>
//       <p>Count: {count}</p>
//       <p>{message}</p>
//       <button type="button" onClick={increment}>
//         +
//       </button>
//       <button type="button" onClick={decrement}>
//         -
//       </button>
//     </div>
//   );
// }

export default App;
