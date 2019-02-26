// Redux

// 1 - in Reducer, ADD iniatialState
//add new state

// 2 - ADD on render Your button or Your Control
// import new comoonent in render

// 3 - ADD new Function on mapDispatchToProps
//onAddCounter ()=> dispatch({type:'INCREMENT', value: 10})

// 4 - Bind the new function in mapDispatchToProps on your Button

// 5 - return in Reducer
// add new case'Increment':return{counter:state.counter+1}

//l'etat de notre application reduc va le gerer
//tout l'intelligence ce fait dans le state de redux
// Action va permettre d'inferferer dans le state dans le component reducer
// REDUCER  est L'INTELLIGENCE le stokage initial des state

//DONC à chque action va passer par le reducer pour ensuite CREE un NEW STATE
// en function du state tu me rend une vue
// redux c'est un reducer (state,action) => New State
// REDUCER (PREVIOUS STATE, ACTION ) =>NewState

// LES REGLES DE REDUX:
// - state a un seul endroit
// - le state de ne pas etre modifier sans une action !
// - les changement doit etre une function pure que du scryn

function createStore(reducer) {
	// cree un store qui prend en argument le reducer

	//redux gere le state
	const getState = () => state;

    //le store doit permettre d'ecouter  l'evolution du state
    // function subscribe recoit listener en arg et met ce listener dans un array
	const subscribers = listener => {
		subscribers.push(listener);
    };
    //function dispatch envoyer une action ans redux 
    // il utilise le reducer en arg pour crée le new state reducer => (state , action )= new state
    // il ecrase l'ancien
    // et on previen tout le monde qui l'a changé
    const dispatch = action => {
        state = reducer (state,action){
            sucribers.forEach(subscriber => subscriber())
        }
    }
}
    return { subscribe , subscribe ,getState };

                               //COMBINEREDUCER
// lors d'une grosse application
// on ne met pas tout la logique dans un seul switch
// combineREducer il permet de faire des petit reducer 

                             // APPLYMIDDLEWARE
// Tout action qui passe je fait faire la meme chose

                            // CONNECT
// d'injecter les composant sous form de props
//            mapStateToProps mapDispatchToProps

                       // ASYNCHRONE THUNK & PROMISE
// meta action function qui va pouvoir lancé d'autre function

// YOU MiGHT NOT NEED REDUX

// quand le meme click j'affiche 3
// crée une action qui va lancé une function
// crée un switch dans le reducer 
// crée un nom pour l'action
// pour que le state 

//rgrx for angular 

// vuex 




    

