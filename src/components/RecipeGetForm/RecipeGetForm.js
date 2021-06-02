import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    margin: "50px auto",
    textAlign: "center",
  },
}));

function RecipeGetForm({ getRecipeCallback }) {
  const classes = useStyles();
  const [query, setQuery] = useState({
    text: "",
    number: 3,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getRecipe();
    setQuery({ text: "", number: 3 });
  };

  const getRecipe = async () => {
    const queryResult = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${query.text}&number=${query.number}&addRecipeInformation=true`
    );
    if (queryResult) {
      queryResult
        .json()
        .then((data) => getRecipeCallback(data.results))
        .catch((err) => console.log(err));
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <input
        type="text"
        name="text"
        value={query.text}
        onChange={(e) =>
          setQuery({ ...query, [e.target.name]: e.target.value })
        }
      />
      <input type="submit" value="Get recipes" />
    </form>
  );
}

export default RecipeGetForm;
