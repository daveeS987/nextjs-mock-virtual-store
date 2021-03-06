import { makeStyles, Typography, ButtonGroup, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { changeCategories } from '../../store/categorySlice.js';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2rem',
    marginBottom: '2rem',
  },
});

function SelectCategory({ categories }) {
  const dispatch = useDispatch();

  let categoryButtons = categories.map((category) => {
    return (
      <Button
        key={category.id}
        id={category.id}
        onClick={() => dispatch(changeCategories(category.id))}
      >
        {category.name}
      </Button>
    );
  });

  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Typography align="center" variant="h5">
          Browse Our Categories
        </Typography>
        <ButtonGroup
          variant="text"
          color="primary"
          aria-label="text primary button group"
          align="center"
        >
          {categoryButtons}
        </ButtonGroup>
      </div>
    </>
  );
}

export default SelectCategory;
