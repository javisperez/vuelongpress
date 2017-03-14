## VueLongpress

A VueJS (2.x) button component that requires you to keep pressing to confirm a given action.

## DEMO

[Live demo on jsFiddle](https://jsfiddle.net/qr9ykxpp/)

### What is this?

A component that will generate a button that requires you to keep pressing for a given time to execute a given action.

### Why would i need that?

Think of a sensitive scenario, something like deleting a user's data, you might need to confirm for 5 seconds that you actually want to delete it, to prevent unintentional clicks

## Install

Install from npm:
```js
npm install vue-longpress --save
```

## Example

```js
import {Longpress} from 'vue-longpress';

var vm = new Vue({
	el: '#app',
	
	components: {Longpress},

    methods: {
        deleteUser() {
            // Delete the user login here
            console.log('user deleted');
        }
    },
	
	template: `<div>
	    <longpress duration="5" pressing-text="Keep pressing for {$rcounter} seconds to delete" action-text="Deleting, please wait...">Click and hold to delete this user</longpress>
	</div>`
});
```

### Options / Props

This component support five (5) props:

1. *on-confirm*: a callback function that will be called when the time has ellapsed (i.e. when the counter is 0)
2. *value*: a value that is passed as an argument to the confirmation function
3. *duration*: how long (_in seconds_) the user will need to keep pressing
4. *pressing-text*: the text to display while the user needs to "hold" the click (e.g. Keep pressing to confirm)
5. *action-text*: the text to display when the action is executing (e.g. Please wait...)

Also there's a `reset` method in case you need to reset your button status. To use it you'll need to add a `ref` to your button and call it from there.

e.g.:

In your template:

```js
<longpress ref="deleteButton"></longpress>
```

In your method:

```js
doDelete() {
    // delete logic here
    ...
    // and now reset the button if needed
    this.$refs.deleteButton.reset();
}
```

### Labels templates

You can use these placeholders to display dynamic texts:

1. {$counter} - how much time (in seconds) has ellapsed (i.e. from 0 to {$duration})
2. {$rcounter} - how much time (in seconds) is remaining (i.e. from {$duration} to 0)
3. {$duration} - how much should the user press the button in total (in seconds)
