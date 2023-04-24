import { createContext, useState } from "react";

const UserContext = createContext({
  userLogged: false,
  userName: "test",
  logInUser: function (name) {},
  logOutUser: function () {},
  // showUserLogged: function () {},
  // logOut: function () {},
  // userInfo: null, // {type(Organisation/indiviual), applicant(or Foundation) ,name, about, projectCategory, mission, links{}, teamMembers[]},
  // showUserInfo: function() {}
});

export function UserContextProvider(props) {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userName, setUserName] = useState("Jack");

  function logInUserHandler(name) {
    setUserLoggedIn(true);
    setUserName(name);
  }
  function logOutUserHandler() {
    console.log("'log out");
    setUserLoggedIn(false);
  }

  const context = {
    userLogged: userLoggedIn,
    userName: userName,
    logInUser: logInUserHandler,
    logOutUser: logOutUserHandler,
  };

  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
