# weight-lifting-app

## What is this?
An app to record my workout each session.

It needs to replicate https://wger.de/ and/or Jefit.
Specifically 

* have a component that counts down between sets.

* have a component that allows me to choose between the following units
    * distance covered (as in walking lunges)
        * feet
    * weight
        * pounds
        * kg
    * etc.
* add specific exercises to my leg/back/arms/etc. day/routine
* add a leg day/routine

* store my data where?

* display my data how?

Created using the `expo init weight-lifting-app` command from [Setting up the development environment](https://reactnative.dev/docs/environment-setup) documentation.

To run this locally, 

1. in Terminal navigate to `~/Documents/DevFiles/personal_projects/weight-lifting-app`
2. run `yarn start`
3. in the browser navigate to `http://localhost:19002/`


## Next Steps

* ~~Create `basicStructure` branch~~

* ~~set up basic outline of each component - what is needed and where~~

* ~~each time the addButton is selected, a new component needs to be added~~

* ~~it's respective removeButton needs to remove just that one component.~~ This is done but...

* Would **REALLY** like to have the button in the `ExerciseDay` component to remove that component. Where the function is passed from a parent component. See "[How can I update the parent's state in React?](https://stackoverflow.com/questions/35537229/how-can-i-update-the-parents-state-in-react) 19 answers." from this [State](https://github.com/JamieBort/LearningDirectory/blob/master/JavaScript/Libraries/React/ReactSpecificConcepts/State.md#state) section.

    **SEE:** around 3:50m here: https://youtu.be/DlfeJn-F3Ts?t=229; specifically  the `handleRemoveStory` function.

* then the state needs to be preserved so that when the app is closed, those added components are kept....

* maybe have the removeButton and addButton both be replaced with a single button?

## Status

**Check the branch:**

`https://github.com/JamieBort/weight-lifting-app/tree/<branch>`

* Created three ways to add a component to the Edit Screen in the `./src/components/EditScreen.js` file:

    ```
    return (
        <View style={styles.editScreen}>
            .
            .
            .
            <AddExerciseDay title="addChildren" fnctn={this.addChildren} />
            {children}

            {this.state.hijos.map((item, i) => <div key={item.child}>{item.component}</div>)}

            <AddExerciseDay title="addHijos" fnctn={this.addHijos} />
            {this.state.hijos}
        </View>
    );
    ```

## Associated Links

* https://trello.com/c/1DKwg7RU/1226-weight-lifting-app
