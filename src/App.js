import { useState } from 'react';
import './App.css';
import {dict} from './data';


function App() {
   const [emojiMeaning , setEmojiMeaning] = useState(""); 
   const emojiList = Object.keys(dict);

   function onChangeHandler(event){

      let meaning = dict[event.target.value];

      if(meaning === undefined){
         meaning = "Unrecognized emoji. :("
      }

      setEmojiMeaning(meaning);
   }

   function onClickHandler(emoji){
      setEmojiMeaning(dict[emoji]);
   }

  return (
    <div className="App">
       <h1>Food Emoji Interpreter</h1>
       <input className="searchBar" placeholder="Search emoji..." onChange={onChangeHandler}/> 
       <h1>{emojiMeaning}</h1>
       <h1> Available emojis</h1>
       <ul>
         {
            emojiList.map(function(emoji,index){
               return (<li key={index} onClick={()=> onClickHandler(emoji)}>{emoji}</li>)
            })
         }
       </ul>
    </div>
  );
}

export default App;
