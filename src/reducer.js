export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    
    // remove after developing
    token:'BQBy0kMEq4T-7U_ral_ZG4sdBZWImlcEK5T41YXra42xSOUJ7QJSUPDGAS6Wybc1H6ppgPHNKG9fysz4bzDSnk40mT0tXJ628E2nZ9LPFxrHV9a11PjRfJyP471Dq3cdWg3qNiO6e0Z55YpPcoOHtLMw_T3Ix8-NjHXDrYSVC0Drg9aA',
}

const reducer =(state, action) => {
  console.log(action);

  switch (action.type) {
      case "SET_USER":
      return {
          ...state,
          user: action.user,
      };

      case "SET_TOKEN":
        return {
            ...state,
            token: action.token,
        };
     case "SET_PLAYLISTS":
         return {
            ...state,
            playlists: action.playlists,
         };
         case "SET_DISCOVER_WEEKLY":
         return {
            ...state,
            discover_weekly: action.discover_weekly,
         }


      default:
          return state;
  }
};

export default reducer;