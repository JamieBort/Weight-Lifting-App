# PROGRESS.md

NOTE - my workout app (not necessarily this one - maybe this one. I need to refresh my memory with it though.) needs to have at least two databases (or two tables). One for all of the exercises that can be added to a gym day/routine. And one for the routine itself, keeping track of the weight, reps, etc.

## Next Steps

* Review the `old/` directory to make sure there isn't anything in there that I need.

* If so, address that.

* Delete the  `old/` directory.

* Study Reusable Components to see how to use them here
    See https://github.com/JamieBort/LearningDirectory/blob/master/JavaScript/Libraries/React/ReactSpecificConcepts/ReusableComponents.md

* Create a `removeButton` branch.
    * this branch will be used to create a `removeButton` component.
    * this component will be added to each exercise day (leg day for example) such that when the remove button is selected the exercise day is removed.
        * Would **REALLY** like to have the button in the `ExerciseDay` component to remove that component. Where the function is passed from a parent component. See "[How can I update the parent's state in React?](https://stackoverflow.com/questions/35537229/how-can-i-update-the-parents-state-in-react) 19 answers." from this [State](https://github.com/JamieBort/LearningDirectory/blob/master/JavaScript/Libraries/React/ReactSpecificConcepts/State.md#state) section.
            * **SEE:** around 3:50m here: https://youtu.be/DlfeJn-F3Ts?t=229; specifically  the `handleRemoveStory` function.

    
* Merge the `removeButton` branch into `main`.
* Delete the `removeButton` branch. (see: https://trello.com/c/XZXUcEjo/757-read-up-on-deleting-old-github-branches)


* Create a `countdownTimer` branch.
    * this branch will be used to create a `countdownTimer` component.
    * this component will be added to each exercise such that there is a count down between sets.
    * this component will have a global default set when first used.
    * this component will have a global default set that can be changed (for that exercise type - rather than something more granular (such as that specific exercise on that specific workout day...)).
    
* Merge the `countdownTimer` branch into `main`.
* Delete the `countdownTimer` branch. (see: https://trello.com/c/XZXUcEjo/757-read-up-on-deleting-old-github-branches)
    

* Create a `units` branch.
    * this branch will be used to create a `units` component.
    * this component will be added to each exercise type such that 
        * if it is a running exercise then distance will be used.
        * if it is a weight lifting exercise then pounds or kg can be selected.
    * (initially) this component will use a variable defined in the component itself, rather than pull the data in from a database or higher up in the app.

* Merge the `units` branch into `main`.
* Delete the `units` branch. (see: https://trello.com/c/XZXUcEjo/757-read-up-on-deleting-old-github-branches)
<branch name>

* Create a `ExerciseType` branch.
    * Create a `ExerciseType` component to switch between one of several types of exercises. Those being
        * cardio exercises (running, swimming, etc.)
        * weight exercises (squats, bench press, etc.)
        * flexibility exercises (downward dog, headstand, etc.)
        * Or ...
    * this component will be when when adding exercises to "Leg day", or to "cardio day" or to "back day", etc.

* Merge the `ExerciseType` branch into `main`.
* Delete the `ExerciseType` branch. (see: https://trello.com/c/XZXUcEjo/757-read-up-on-deleting-old-github-branches)


* then the state needs to be preserved so that when the app is closed, those added components are kept....

* maybe have the removeButton and addButton both be replaced with a single button?

## Status
**\*\*\* NOTE:** First check the branch: `https://github.com/JamieBort/weight-lifting-app/tree/<branch>` **\*\*\***

* Created the `dev` branch.

* Deleted the `basicStructure` branch.

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