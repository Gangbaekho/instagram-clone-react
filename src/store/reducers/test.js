const initialState = {
  persons: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SETUP":
      state.persons.push({ name: "jinsoo", hello: ["hello1"] });
      return {
        ...state,
      };
    case "INCREASE":
      const myPerson = state.persons.find((person) => person.name === "jinsoo");
      myPerson.hello.push(Math.random());
      return {
        ...state,
      };
    case "DECREASE":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};
