const initialState = {
    posts: [
        {id: "1", title: "The dealthy Hollows", content: "The Three brothers"},
        {id: "2", title: "The Half-blood prince", content: "Snape is a mudblood"},
        {id: "3", title: "The philosopher's stone", content: "The alchemist reminded"}
    ]

}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_POST':
        console.log("created project", action.post);
        return state;
        case 'CREATE_POST_ERROR':
        console.log("created error", action.error);
        return state;
        default: 
        return state;
    }
  }

export default postReducer
