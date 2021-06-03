import React from "react";
import Recipe from "../Recipe/Recipe";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 200,
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
}));

function RecipeList({ recipes }) {
  const classes = useStyles();
  return (
    <Grid container spacing={6} className={classes.root}>
      {recipes.length
        ? recipes.map((recipe) => {
            return (
              <Grid item key={recipe.id} xs={12} lg={4}>
                <Recipe recipe={recipe} />
              </Grid>
            );
          })
        : ""}
    </Grid>
  );
}

export default RecipeList;
