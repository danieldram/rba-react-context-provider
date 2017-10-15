# RBA Context React Component

![alttext](https://github.com/danieldram/rba-react-context-provider/blob/master/diagrams/front-end%20flow%20diagram.jpg?raw=true)

### Giving liferay application context to react components
The goal of this component is to allow front-end react components to know less about specific front-end business logic such as ```API Requests (Hawksearch)```, ``WINDOW interactions``` or any ```STATE``` that is not specific for that specific UI component. 

If components need to share state, it is done through an abstraction layer provided by Context Component via ```Page Actions``` and state is passed down to front-end UI components. The ```Context Component``` holds shared state it's updated via ```react-redux``` through exposing the ```Page Actions``` through the ```Window```. 

As the Context Component is mounted, it passes down a reference to the ```Page Actions``` to the child UI components for use.

#### The Problem: Use React in a scalable way within the Liferay CMS:

Liferay is a CMS where each page is renders a view through it's engine. This means react components need to know the context of which page they are on, any possible taxonamy, categorical references, etc.

#### The Solution: Pass down the context to the UI:
 By passing down the context to the UI, we leave all of that front-end business logic abstracted to other files. The UI just has a reference to that functionality and it exists in one place, so things are not duplicated or confusing. Actions exist on the window and are pased down to the UI on run time. State is updated to the Context, and passed down to the UI. The UI renders it's view based on what the Context Component provides. 
