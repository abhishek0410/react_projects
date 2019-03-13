export const increment_the_counter_action = (counter = null) => {
  console.log("Following counter was clicked ", counter.id);

  return {
    type: "Incremement_the_counter",
    payLoad: counter
  };
};

export const delete_the_counter_action = (counter = null) => {
  return {
    type: "Delete_the_Counter",
    payLoad: counter
  };
};

// export default {
//   increment_the_counter_action: increment_the_counter_action,
//   delete_the_counter_action: delete_the_counter_action
// };
