export const actionCreator = (increment = 1) => ({ // deixando o 1 como default caso o campo esteja vazio
    type: "INCREMENT_COUNTER",
    payLoad: increment,
});