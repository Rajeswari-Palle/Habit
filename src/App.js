import { Provider } from "react-redux";
import "./App.css";
import store from "./store/store.ts";
import { Container, Typography } from "@mui/material";
import AddHabitForm from "./Components/add-habit-form.tsx";
import HabitList from "./Components/habit-list.tsx";
import HabitStats from "./Components/habit-stats.tsx";

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="md">
        <Typography component="h1" variant="h2" align="center">
          Habit Tracker
        </Typography>
        <AddHabitForm />
        <HabitList />
        <HabitStats />
      </Container>
    </Provider>
  );
}

export default App;
