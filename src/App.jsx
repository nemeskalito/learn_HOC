import { useCallback, useState } from "react";

import "./App.css";
import SearchInput from "./SearchInput";
import CounterButton from "./CounterButton";
import ItemList from "./ItemList";
import WithRenderTracker from "../WithRenderTracker";

const WithCounter = WithRenderTracker(CounterButton);
const WithSearch = WithRenderTracker(SearchInput);
const WithList = WithRenderTracker(ItemList);

const listRu = [
  "яблоко",
  "апельсин",
  "банан",
  "вишня",
  "груша",
  "дыня",
  "ежевика",
  "земляника",
  "изюм",
  "клюква",
  "лимон",
  "малина",
  "мандарин",
  "нектарин",
  "облепиха",
  "персик",
  "рябина",
  "слива",
  "смородина",
  "финик",
  "черешня",
  "черника",
  "арбуз",
  "абрикос",
  "айва",
  "ананас",
  "авокадо",
  "гранат",
  "грейпфрут",
  "голубика",
  "виноград",
  "калина",
  "киви",
  "клубника",
  "крыжовник",
  "лайм",
  "личи",
  "манго",
  "мушмула",
  "орех",
  "папайя",
  "питахайя",
  "помело",
  "рамбутан",
  "фейхоа",
  "хурма",
  "цитрон",
  "шелковица",
  "эвкалипт",
  "ююба",
  "стол",
  "стул",
  "диван",
  "кресло",
  "шкаф",
  "комод",
  "кровать",
  "тумбочка",
  "полка",
  "зеркало",
  "лампа",
  "картина",
  "ковёр",
  "штора",
  "часы",
  "ваза",
  "статуэтка",
  "подушка",
  "одеяло",
  "покрывало",
  "плед",
  "скатерть",
  "салфетка",
  "ложка",
  "вилка",
  "нож",
  "тарелка",
  "кружка",
  "чашка",
  "кастрюля",
  "сковорода",
  "миска",
  "чайник",
  "кофеварка",
  "тостер",
  "микроволновка",
  "духовка",
  "холодильник",
  "стиральная машина",
  "утюг",
  "пылесос",
  "телевизор",
  "компьютер",
  "ноутбук",
  "телефон",
  "планшет",
  "наушники",
  "колонка",
  "мышь",
  "клавиатура",
  "флешка",
  "кабель",
  "зарядное устройство",
  "камера",
  "книга",
  "блокнот",
  "ручка",
  "карандаш",
  "ластик",
  "линейка",
  "циркуль",
  "калькулятор",
  "календарь",
  "дневник",
];

function App() {
  const [list, setList] = useState(listRu);
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const callbackCount = useCallback(setCount, []);
  const callbackText = useCallback(setText, []);

  return (
    <>
      <WithCounter
        name={"CounterButton"}
        count={count}
        setCount={callbackCount}
      />
      <WithSearch name={"SearchInput"} setText={callbackText} />
      <WithList name={"ItemList"} list={list} text={text} />
    </>
  );
}

export default App;
