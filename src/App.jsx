import "./App.css";
import { useState } from "react";

const GenderForm = () => {
  const [gender, setGender] = useState("");

  const onChangeHandler = (event) => {
    setGender(event.target.value);
  };

  return (
    <div>
      <form onChange={onChangeHandler}>
        <label>Select Gender: </label>
        <br />
        <input type="radio" value="Female" name="gender" />
        Female
        <input type="radio" value="Male" name="gender" />
        Male
        <input type="radio" value="Others" name="gender" />
        Other
      </form>
      <p>Selected Gender: {gender}</p>
    </div>
  );
};

const MealPreference = () => {
  const [meal, setMeal] = useState("");

  const mealPreferenceHandler = (event) => {
    setMeal(event.target.value);
  };

  return (
    <div>
      <form onChange={mealPreferenceHandler}>
        <label>Choose your meal preference</label>
        <br />
        <input type="radio" name="meal" value="Vegetarian" />
        Vegetarian
        <br />
        <input type="radio" name="meal" value="Non-Vegetarian" />
        Non-Vegetarian
        <p>Selected Preference: {meal}</p>
      </form>
    </div>
  );
};

export default function App() {
  return (
    <main>
      <GenderForm />
      <MealPreference />
    </main>
  );
}