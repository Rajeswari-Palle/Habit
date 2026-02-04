import React, { useEffect } from "react";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchHabits } from "../store/habitSlice.ts";
import { LinearProgress, Paper, Typography } from "@mui/material";

const HabitStats: React.FC = () => {
  const { habits, isLoading, error } = useSelector(
    (state: RootState) => state.habits,
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchHabits());
  }, []);

  if (isLoading) {
    return <LinearProgress />;
  }
  const getCompletedToday = () => {
    const today = new Date().toISOString().split("T")[0];
    return habits.filter((habit) => habit.completedDates.includes(today))
      .length;
  };

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Paper elevation={2} sx={{ p: 2, mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Habit Statistics
      </Typography>
      <Typography variant="body1">Total Habits:{habits.length}/</Typography>
      <Typography variant="body1">
        Completed Today:{getCompletedToday()}
      </Typography>
      <Typography variant="body1">Longest Streak:</Typography>
    </Paper>
  );
};

export default HabitStats;
