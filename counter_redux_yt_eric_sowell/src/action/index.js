const handleIncrement = () => {
  console.log("Increment button clicked :");
  return {
    type: "HandleIncrement",
    payLoad: ""
  };
};

export default handleIncrement;
