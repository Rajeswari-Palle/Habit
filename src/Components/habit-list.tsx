import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { RootState } from "@reduxjs/toolkit/query";
import React from "react";
import { useSelector } from "react-redux";

const HabitList: React.FC = () => {
  const { habits } = useSelector((state: RootState) => state.habits);
  const today = new Date().toISOString().split("T")[0];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
      {habits.map((habit) => {
        return (
          <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
            <Grid container spacing={35} alignItems="center">
              <Grid>
                <Typography variant="h6">{habit.name}</Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textTransform: "capitalize" }}
                >
                  {habit.frequency}
                </Typography>
              </Grid>
              <Grid xs={12} sm={6}>
                <Box
                  sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}
                >
                  <Button
                    variant="outlined"
                    color={
                      habit.completedDates?.includes(today)
                        ? "success"
                        : "primary"
                    }
                    startIcon={<CheckCircleIcon />}
                  >
                    Mark Complete
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        );
      })}
    </Box>
  );
};

export default HabitList;
