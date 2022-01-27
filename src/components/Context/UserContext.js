import React from "react";

//we can also add a default value to the context
const UserContext=React.createContext('Default value')

const UserProvider=UserContext.Provider
const UserConsumer=UserContext.Consumer

export {UserProvider,UserConsumer}